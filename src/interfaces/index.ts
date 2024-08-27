export interface IRisks {
    id: string;
    code: number;
    name: string;
    prob: number;
    imp: number;
};

export interface ILegendHeatmap {
    id: number;
    name: string;
};

export interface ILevelRisks {
    id: number;
    max: number;
    label: string;
    color: string;
}

export interface IProbability {
    id: number;
    name: string;
    color: string;
};

export interface IImpact {
    id: number;
    name: string;
    color: string;
}

export interface ILegends {
    id: number;
    name: string;
    color: string;
}