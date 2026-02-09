-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateTable
CREATE TABLE "SaleCase" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'SETUP',
    "fixedFeeCents" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE INDEX "SaleCase_userId_idx" ON "SaleCase"("userId");

-- CreateTable
CREATE TABLE "Property" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "saleCaseId" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "propertyType" TEXT NOT NULL,
    "buildYear" INTEGER NOT NULL,
    "epcLabel" TEXT NOT NULL,
    "renovationDuty" BOOLEAN NOT NULL DEFAULT false,
    "livingAreaSqm" INTEGER NOT NULL,
    "plotAreaSqm" INTEGER,
    "bedrooms" INTEGER NOT NULL,
    "conditionScore" INTEGER NOT NULL,
    "hasGarden" BOOLEAN NOT NULL DEFAULT false,
    "hasParking" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    FOREIGN KEY ("saleCaseId") REFERENCES "SaleCase" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE UNIQUE INDEX "Property_saleCaseId_key" ON "Property"("saleCaseId");
CREATE INDEX "Property_saleCaseId_idx" ON "Property"("saleCaseId");

-- CreateTable
CREATE TABLE "ExternalValuation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "saleCaseId" TEXT NOT NULL,
    "estimatedEuro" INTEGER NOT NULL,
    "referenceId" TEXT,
    "valuationDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("saleCaseId") REFERENCES "SaleCase" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE INDEX "ExternalValuation_saleCaseId_idx" ON "ExternalValuation"("saleCaseId");

-- CreateTable
CREATE TABLE "InternalValuation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "saleCaseId" TEXT NOT NULL,
    "anchorEuro" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("saleCaseId") REFERENCES "SaleCase" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE INDEX "InternalValuation_saleCaseId_idx" ON "InternalValuation"("saleCaseId");

-- CreateTable
CREATE TABLE "ValuationScenario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "internalValuationId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "priceEuro" INTEGER NOT NULL,
    "estimatedDays" INTEGER NOT NULL,
    "riskLevel" INTEGER NOT NULL,
    "positives" TEXT NOT NULL,
    "negatives" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("internalValuationId") REFERENCES "InternalValuation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE INDEX "ValuationScenario_internalValuationId_idx" ON "ValuationScenario"("internalValuationId");

-- CreateTable
CREATE TABLE "TaskTemplate" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "category" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "costMinEuro" INTEGER NOT NULL,
    "costMaxEuro" INTEGER NOT NULL,
    "durationDays" INTEGER NOT NULL,
    "impactWeight" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "CaseTask" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "saleCaseId" TEXT NOT NULL,
    "templateId" TEXT,
    "title" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'TODO',
    "dueDate" DATETIME,
    "costEstimate" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    FOREIGN KEY ("saleCaseId") REFERENCES "SaleCase" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY ("templateId") REFERENCES "TaskTemplate" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE INDEX "CaseTask_saleCaseId_idx" ON "CaseTask"("saleCaseId");

-- CreateTable
CREATE TABLE "DocumentType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "required" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX "DocumentType_name_key" ON "DocumentType"("name");

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "saleCaseId" TEXT NOT NULL,
    "documentTypeId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'MISSING',
    "fileUrl" TEXT,
    "uploadedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("saleCaseId") REFERENCES "SaleCase" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY ("documentTypeId") REFERENCES "DocumentType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE INDEX "Document_saleCaseId_idx" ON "Document"("saleCaseId");

-- CreateTable
CREATE TABLE "ViewingSlot" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "saleCaseId" TEXT NOT NULL,
    "startTime" DATETIME NOT NULL,
    "endTime" DATETIME NOT NULL,
    "capacity" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("saleCaseId") REFERENCES "SaleCase" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE INDEX "ViewingSlot_saleCaseId_idx" ON "ViewingSlot"("saleCaseId");

-- CreateTable
CREATE TABLE "PublicBooking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "viewingSlotId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("viewingSlotId") REFERENCES "ViewingSlot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE INDEX "PublicBooking_viewingSlotId_idx" ON "PublicBooking"("viewingSlotId");

-- CreateTable
CREATE TABLE "Offer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "saleCaseId" TEXT NOT NULL,
    "priceEuro" INTEGER NOT NULL,
    "financingCondition" BOOLEAN NOT NULL,
    "inspectionCondition" BOOLEAN NOT NULL,
    "compromiseDays" INTEGER NOT NULL,
    "deedDays" INTEGER NOT NULL,
    "depositEuro" INTEGER NOT NULL,
    "includedItems" TEXT,
    "clauses" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("saleCaseId") REFERENCES "SaleCase" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE INDEX "Offer_saleCaseId_idx" ON "Offer"("saleCaseId");

-- CreateTable
CREATE TABLE "OfferAnalysis" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "offerId" TEXT NOT NULL,
    "netScore" INTEGER NOT NULL,
    "riskScore" INTEGER NOT NULL,
    "timingScore" INTEGER NOT NULL,
    "complexityScore" INTEGER NOT NULL,
    "totalScore" INTEGER NOT NULL,
    "explanation" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("offerId") REFERENCES "Offer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE UNIQUE INDEX "OfferAnalysis_offerId_key" ON "OfferAnalysis"("offerId");

-- CreateTable
CREATE TABLE "ExpertRequest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "saleCaseId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "priceMinEuro" INTEGER NOT NULL,
    "priceMaxEuro" INTEGER NOT NULL,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("saleCaseId") REFERENCES "SaleCase" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE INDEX "ExpertRequest_saleCaseId_idx" ON "ExpertRequest"("saleCaseId");

-- CreateTable
CREATE TABLE "ExpertNote" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "expertRequestId" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("expertRequestId") REFERENCES "ExpertRequest" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE INDEX "ExpertNote_expertRequestId_idx" ON "ExpertNote"("expertRequestId");

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "priceEuro" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "PaymentIntent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "saleCaseId" TEXT,
    "productId" TEXT,
    "amountEuro" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("saleCaseId") REFERENCES "SaleCase" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE INDEX "PaymentIntent_saleCaseId_idx" ON "PaymentIntent"("saleCaseId");
