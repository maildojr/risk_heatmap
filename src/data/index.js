// code is uuid
export const initialRisks = [
    { id: '9b2f3c8d-5a1b-4d2f-8d2e-5d4c6e7f8a9b', code: 1, name: "Risco 1", prob: 1, imp: 1 },
    { id: '4e2c1a3b-6d8e-4f7a-bc5f-3c9d2e1a8f6b', code: 2, name: "Risco 2", prob: 2, imp: 2 },
    { id: '7f9d2b6c-1a8e-4d5c-9b3e-7a2d4f6c8b1a', code: 3, name: "Risco 3", prob: 3, imp: 3 },
    { id: '2d8f6b1e-4a7c-9e5d-3b2f-6c8d1a4e7b9f', code: 4, name: "Risco 4", prob: 4, imp: 4 },
    { id: '3a1d5e7f-6c2b-4e9d-8a3f-1b4c7d2e6f8a', code: 5, name: "Risco 5", prob: 5, imp: 5 },
];

export const txtLegendHeatmap = [
    { id: 1, name: "Probablidade" },
    { id: 2, name: "Impacto" }
];

export const txtProb = [
    { id: 1, name: "Improvável", color: "green" },
    { id: 2, name: "Raro", color: "green" },
    { id: 3, name: "Possível", color: "green" },
    { id: 4, name: "Provável", color: "green" },
    { id: 5, name: "Quase Certo", color: "green" },
];

export const txtImp = [
    { id: 1, name: "Brando", color: "green" },
    { id: 2, name: "Relevante", color: "green" },
    { id: 3, name: "Severo", color: "green" },
    { id: 4, name: "Crítico", color: "green" },
    { id: 5, name: "Catastrófico", color: "green" }
];

export const txtLevelRisks = [
    { id: 0, max: 0, label: '-', color: "grey" },
    { id: 1, max: 2, label: 'Baixo', color: "green" },
    { id: 2, max: 6, label: 'Médio', color: "yellow" },
    { id: 3, max: 16, label: 'Alto', color: "red" },
    { id: 4, max: 32, label: 'Muito Alto', color: "purple" },
];