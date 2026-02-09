import { promises as fs } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const contentPath = path.join(rootDir, "content", "mvp-onepager.nl.md");
const outputPath = path.join(rootDir, "public", "verkoopklaar-mvp.pdf");

const pageWidth = 595.28;
const pageHeight = 841.89;
const marginX = 48;
const marginY = 50;

type Block =
  | { type: "title"; text: string }
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

const escapePdfText = (text: string) =>
  text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

const wrapText = (text: string, fontSize: number, maxWidth: number) => {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  const approximateWidth = (value: string) => value.length * fontSize * 0.52;

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (approximateWidth(next) <= maxWidth || !current) {
      current = next;
    } else {
      lines.push(current);
      current = word;
    }
  });

  if (current) {
    lines.push(current);
  }

  return lines;
};

const parseMarkdown = (markdown: string): Block[] => {
  const blocks: Block[] = [];
  const lines = markdown.split(/\r?\n/);
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) {
      index += 1;
      continue;
    }

    if (line.startsWith("# ")) {
      blocks.push({ type: "title", text: line.replace(/^#\s+/, "") });
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push({ type: "heading", text: line.replace(/^##\s+/, "") });
      index += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().replace(/^- /, ""));
        index += 1;
      }
      blocks.push({ type: "list", items });
      continue;
    }

    const paragraphLines: string[] = [];
    while (index < lines.length && lines[index].trim()) {
      if (
        lines[index].trim().startsWith("# ") ||
        lines[index].trim().startsWith("## ") ||
        lines[index].trim().startsWith("- ")
      ) {
        break;
      }
      paragraphLines.push(lines[index].trim());
      index += 1;
    }
    const paragraph = paragraphLines.join(" ").replace(/\*\*(.*?)\*\*/g, "$1");
    blocks.push({ type: "paragraph", text: paragraph });
  }

  return blocks;
};

const buildPdfContent = (blocks: Block[]) => {
  let currentY = pageHeight - marginY;
  const content: string[] = [];

  const addLine = (text: string, fontSize: number, font: "F1" | "F2") => {
    const x = marginX;
    const y = currentY;
    content.push(
      `BT /${font} ${fontSize} Tf ${x} ${y} Td (${escapePdfText(
        text,
      )}) Tj ET`,
    );
    currentY -= fontSize * 1.4;
  };

  blocks.forEach((block) => {
    if (block.type === "title") {
      wrapText(block.text, 20, pageWidth - marginX * 2).forEach((line) =>
        addLine(line, 20, "F2"),
      );
      currentY -= 6;
      return;
    }

    if (block.type === "heading") {
      wrapText(block.text.toUpperCase(), 10.5, pageWidth - marginX * 2).forEach(
        (line) => addLine(line, 10.5, "F2"),
      );
      currentY -= 2;
      return;
    }

    if (block.type === "paragraph") {
      wrapText(block.text, 11, pageWidth - marginX * 2).forEach((line) =>
        addLine(line, 11, "F1"),
      );
      currentY -= 2;
      return;
    }

    if (block.type === "list") {
      block.items.forEach((item) => {
        wrapText(`• ${item}`, 11, pageWidth - marginX * 2).forEach((line) =>
          addLine(line, 11, "F1"),
        );
      });
      currentY -= 2;
    }
  });

  return content.join("\n");
};

const buildPdfFile = (contentStream: string) => {
  const objects: string[] = [];
  objects.push("");
  objects.push("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");
  objects.push(
    `2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`,
  );
  objects.push(
    `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>\nendobj\n`,
  );
  objects.push(
    `4 0 obj\n<< /Length ${Buffer.byteLength(contentStream, "utf-8")} >>\nstream\n${contentStream}\nendstream\nendobj\n`,
  );
  objects.push(
    "5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n",
  );
  objects.push(
    "6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n",
  );

  let offset = 0;
  const offsets: number[] = [];
  const pdfParts = objects.map((object) => {
    offsets.push(offset);
    offset += Buffer.byteLength(object, "utf-8");
    return object;
  });

  const xrefStart = offset;
  const xrefEntries = offsets
    .map((objOffset, index) => {
      if (index === 0) {
        return "0000000000 65535 f ";
      }
      return `${objOffset.toString().padStart(10, "0")} 00000 n `;
    })
    .join("\n");

  const trailer = `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

  return `%PDF-1.4\n${pdfParts.join("")}xref\n0 ${objects.length}\n${xrefEntries}\n${trailer}`;
};

const run = async () => {
  const markdown = await fs.readFile(contentPath, "utf-8");
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  const blocks = parseMarkdown(markdown);
  const contentStream = buildPdfContent(blocks);
  const pdfFile = buildPdfFile(contentStream);
  await fs.writeFile(outputPath, pdfFile);
  console.log(`PDF generated at ${outputPath}`);
};

run().catch((error) => {
  console.error("Failed to generate PDF:", error);
  process.exit(1);
});
