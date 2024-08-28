import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
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

    useEffect(() => {
        const risksLocal = localStorage.getItem('risks');
        if (risksLocal) {
            setRisks(JSON.parse(risksLocal));
        } else {
            localStorage.setItem('risks', JSON.stringify(initialRisks));
        }
        const probabilityLocal = localStorage.getItem('probability');
        if (probabilityLocal) {
            setProbability(JSON.parse(probabilityLocal));
        } else {
            localStorage.setItem('probability', JSON.stringify(txtProb));
        }
        const impactLocal = localStorage.getItem('impact');
        if (impactLocal) {
            setImpact(JSON.parse(impactLocal));
        } else {
            localStorage.setItem('impact', JSON.stringify(txtImp));
        }
    }, []);

    // Risks
    const addRisk = (newItem: IRisks) => {
        const newRisks = [...risks, newItem];
        setRisks(newRisks);
        localStorage.setItem('risks', JSON.stringify(newRisks));
    };
    const editRisk = (item: IRisks) => {
        const newRisks = risks.map(risk => risk.id === item.id ? item : risk);
        setRisks(newRisks);
        localStorage.setItem('risks', JSON.stringify(newRisks));
    };
    const deleteRisk = (id: string) => {
        const newRisks = risks.filter(risk => risk.id !== id);
        setRisks(newRisks);
        localStorage.setItem('risks', JSON.stringify(newRisks));
    };

    // Legend Heatmap
    const editLegendHeatmap = (item: ILegendHeatmap) => {
        setLegendHeatmap(prev => prev.map(legend => legend.id === item.id ? item : legend));
    };

    // Probability
    const editProbability = (item: ILegends) => {
        const newProbability = probability.map(prob => prob.id === item.id ? item : prob);
        setProbability(newProbability);
        localStorage.setItem('probability', JSON.stringify(newProbability));
    };
    // Impact
    const editImpact = (item: ILegends) => {
        const newImpact = impact.map(imp => imp.id === item.id ? item : imp);
        setImpact(newImpact);
        localStorage.setItem('impact', JSON.stringify(newImpact));
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