export type CaseSummary = {
  id: string;
  title: string;
  status: string;
  valuation: string;
  nextStep: string;
  dossierFee: string;
  lastUpdate: string;
};

export const cases: CaseSummary[] = [
  {
    id: "case-v-001",
    title: "Gezinswoning in Gent",
    status: "Actief",
    valuation: "€ 435.000",
    nextStep: "Takenpakket afronden",
    dossierFee: "€ 1.250",
    lastUpdate: "12 juli 2024",
  },
  {
    id: "case-v-002",
    title: "Rijwoning in Mechelen",
    status: "Setup",
    valuation: "€ 312.000",
    nextStep: "Externe schatting invoeren",
    dossierFee: "€ 990",
    lastUpdate: "8 juli 2024",
  },
  {
    id: "case-v-003",
    title: "Appartement in Leuven",
    status: "Biedingen",
    valuation: "€ 389.000",
    nextStep: "Biedingen vergelijken",
    dossierFee: "€ 1.150",
    lastUpdate: "10 juli 2024",
  },
];
