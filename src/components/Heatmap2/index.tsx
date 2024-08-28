import React from 'react'
import styled from 'styled-components';
import './style.css';
import { useDataContext } from 'contexts/DataContext';

const ItemRC = styled.span`
        align-items: center;
        width: 27px;
        height: 27px;
        font-size: 9pt;
        margin: 1px;
        border-radius: 50%;
        color: #fff;
        line-height: 27px;
        text-align: center;
        display: inline-block;
        background-color: #bdbdbd;
        background-image: -webkit-linear-gradient(top, #484848, #020202); /* Vendor prefix for older browsers */
        background-repeat: repeat-x;
        border: 1px solid #080808;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5);
    `;

const Heatmap2 = () => {
    const { risks, probability, impact } = useDataContext();

    const descProb = probability.sort((a, b) => b.id - a.id);

    const getColor = (row: number, col: number) => {
        const colors: { [key: string]: string } = {
            '51': '#ff9900', '52': '#ff9900', '53': '#ff0000', '54': '#ff0000', '55': '#ff0000',
            '41': '#ffff00', '42': '#ff9900', '43': '#ff9900', '44': '#ff0000', '45': '#ff0000',
            '31': '#00cc00', '32': '#ffff00', '33': '#ff9900', '34': '#ff0000', '35': '#ff0000',
            '21': '#00cc00', '22': '#00cc00', '23': '#ffff00', '24': '#ff9900', '25': '#ff0000',
            '11': '#00cc00', '12': '#00cc00', '13': '#ffff00', '14': '#ff9900', '15': '#ff9900',
        };
        return colors[`${row}${col}`] || '#ffffff';
    };

    

  return (
    <div>
	<table id="heatmap">
        <tbody>
		<tr>
			<td width="134px"></td>
            {impact.map((imp, i) => (
                <td className="label" key={i}>{`${imp.id}. ${imp.name}`}</td>
            ))}
		</tr>
        {descProb.map((prob, i) => (
            <tr key={`${prob.id}. ${prob.name}`}>
                <td className="labelx">{`${prob.id}. ${prob.name}`}</td>
                {impact.map((imp, i) => (
                    <td style={{ borderRadius: '5px', backgroundColor: getColor(prob.id, imp.id) }} key={`${prob.id}-${imp.id}`}>
                        {risks.filter(risk => risk.prob === prob.id && risk.imp === imp.id).map((risk, i) => (
                          <ItemRC key={i}>{`R${risk.code}`}</ItemRC>  
                        ))}
                    </td>    
                ))}
            </tr>
        ))}
        </tbody>
	</table>
</div>
  )
}

export default Heatmap2;
