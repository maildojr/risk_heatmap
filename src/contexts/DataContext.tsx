import React, { createContext, useContext, useState, ReactNode } from 'react';
import { initialRisks, txtLegendHeatmap, txtProb, txtImp, txtLevelRisks } from 'data';
import { IRisks, ILegendHeatmap, ILegends, ILevelRisks } from 'interfaces';

interface IDataContext {
    risks: IRisks[];
    addRisk: (newItem: IRisks) => void;
    editRisk: (newItem: IRisks) => void;
    deleteRisk: (id: string) => void;
    legendHeatmap: ILegendHeatmap[];
    editLegendHeatmap: (item: ILegendHeatmap) => void;
    probability: ILegends[];
    editProbability: (item: ILegends) => void;
    impact: ILegends[];
    editImpact: (item: ILegends) => void;
    levelRisks: ILevelRisks[];
    editLevelRisks: (item: ILevelRisks) => void;
}

const DataContext = createContext<IDataContext | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [risks, setRisks] = useState<IRisks[]>(initialRisks);
    const [legendHeatmap, setLegendHeatmap] = useState(txtLegendHeatmap);
    const [probability, setProbability] = useState<ILegends[]>(txtProb);
    const [impact, setImpact] = useState<ILegends[]>(txtImp);
    const [levelRisks, setLevelRisks] = useState<ILevelRisks[]>(txtLevelRisks);

    // Risks
    const addRisk = (newItem: IRisks) => {
        setRisks(prev => [...prev, newItem]);
    };
    const editRisk = (item: IRisks) => {
        setRisks(prev => prev.map(risk => risk.id === item.id ? item : risk));
    };
    const deleteRisk = (id: string) => {
        setRisks(prev => prev.filter(risk => risk.id !== id));
    };

    // Legend Heatmap
    const editLegendHeatmap = (item: ILegendHeatmap) => {
        setLegendHeatmap(prev => prev.map(legend => legend.id === item.id ? item : legend));
    };

    // Probability
    const editProbability = (item: ILegends) => {
        setProbability(prev => prev.map(prob => prob.id === item.id ? item : prob));
    };
    // Impact
    const editImpact = (item: ILegends) => {
        setImpact(prev => prev.map(imp => imp.id === item.id ? item : imp));
    };
    
    // Level Risks
    const editLevelRisks = (item: ILevelRisks) => {
        setLevelRisks(prevData => prevData.map(level => level.id === item.id ? item : level));
    };


    const dataContextValue = {
        risks,
        addRisk,
        editRisk,
        deleteRisk,
        legendHeatmap,
        editLegendHeatmap,
        probability,
        editProbability,
        impact,
        editImpact,
        levelRisks,
        editLevelRisks
    };

    return (
        <DataContext.Provider value={dataContextValue}>
            {children}
        </DataContext.Provider>
    )
};

export const useDataContext = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useDataContext must be used within a DataProvider');
    }
    return context;
}