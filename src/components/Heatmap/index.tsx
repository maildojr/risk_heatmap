import './style.css';
import { Typography, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useDataContext } from 'contexts/DataContext';

interface IHeatmapProps {
    imp: number;
    prob: number;
}

const RisksHeatmap = ({ data } : { data: IHeatmapProps[] }) => {
  const theme = useTheme();

  const { probability, impact } = useDataContext();

  const levelsProb = [
    { id: 4, label: 'Muito Alta' },
    { id: 3, label: 'Alta' },
    { id: 2, label: 'Média' },
    { id: 1, label: 'Baixa' }
  ];

  const levelsImp = [
    { id: 1, label: 'Baixo' },
    { id: 2, label: 'Médio' },
    { id: 3, label: 'Alto' },
    { id: 4, label: 'Muito Alto' }
  ];

  const levelRisk = [
    { id: 0, max: 0, label: '-', color: theme.palette.info },
    { id: 1, max: 2, label: 'Baixo', color: theme.palette.success },
    { id: 2, max: 6, label: 'Médio', color: theme.palette.warning },
    { id: 3, max: 16, label: 'Alto', color: theme.palette.error },
    { id: 4, max: 32, label: 'Muito Alto', color: theme.palette.error }
  ];

  const getLevel = (prob: number, imp: number) => {
    const calculatedRisk = prob * imp;
    for (const level of levelRisk) {
      if (calculatedRisk <= level.max) return level;
    }
    return levelRisk[0];
  };

  const descProb = probability.sort((a, b) => b.id - a.id);

  return (
    <>
      <table id="heatmap">
        <tbody>
          {descProb.map((prob, probIndex) => (
            <tr key={probIndex}>
              {probIndex === 0 && (
                <td rowSpan={7} className="rotate heatmap-titley">
                  <span className="text-dark font-weight-bold">
                    <Typography variant="h5">Probabilidade</Typography>
                  </span>
                </td>
              )}
              <td className="rotate heatmap-titley">
                <span className="rotate">
                  <Typography variant="h6">{prob.name}</Typography>
                </span>
              </td>
              {levelsImp.map((imp, impIndex) => (
                <Tooltip key={impIndex} title={getLevel(imp.id, prob.id).label} arrow>
                  <td className="heatmap-rc" style={{ borderRadius: '5px', backgroundColor: getLevel(imp.id, prob.id).color.main }}>
                    <Typography variant="h4">
                      {data.filter((item) => item.prob === imp.id && item.imp === prob.id).length > 0 &&
                        data.filter((item) => item.prob === imp.id && item.imp === prob.id).length.toString()}
                    </Typography>
                  </td>
                </Tooltip>
              ))}
            </tr>
          ))}
          <tr>
            <td className="heatmap-titley"></td>
            {impact.map((imp, impIndex) => (
              <td key={impIndex} className="heatmap-titlex">
                <Typography variant="h6">{imp.name}</Typography>
              </td>
            ))}
          </tr>
          <tr>
            <td></td>
            <td className="heatmap-titlex" colSpan={4}>
              <span className="text-dark font-weight-bold">
                <Typography variant="h5">Impacto</Typography>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default RisksHeatmap;
