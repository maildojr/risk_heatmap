import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useDataContext } from 'contexts/DataContext';


export default function RisksTable() {
  const { risks, probability, impact } = useDataContext();

  const getProdDesc = (id: number) => {
    return probability.find((p) => p.id === id)?.name
  };

  const getImpDesc = (id: number) => {
    return impact.find((i) => i.id === id)?.name
  }

  return (
    <React.Fragment>
      <Title>Riscos</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Probabilidade</TableCell>
            <TableCell>Impacto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {risks.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{`R${row.code}`}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.prob} - {getProdDesc(row.prob)}</TableCell>
              <TableCell>{row.imp} - {getImpDesc(row.imp)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}