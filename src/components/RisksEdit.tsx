import { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Title from './Title';
import { useDataContext } from 'contexts/DataContext';
import RiskFormModal from './RiskFormModal';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IRisks } from 'interfaces';


export default function RisksEdit() {
  const { risks, probability, impact, deleteRisk } = useDataContext();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<IRisks | null>(null)

  const getProdDesc = (id: number) => probability.find((p) => p.id === id)?.name || '';

  const getImpDesc = (id: number) => impact.find((i) => i.id === id)?.name || '';

  const handleClose = () => setOpen(false);

  const handleEdit = (data: IRisks) => {
    setData(data);
    setOpen(true);
  }

  const handleAdd = () => {
    setData(null);
    setOpen(true);
  }

  const handleDelete = (id: string) => deleteRisk(id);

  return (
    <>
      <Title>Edição dos Riscos</Title>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
        <Button variant="contained" color="primary" onClick={handleAdd}>+ Risco</Button>
      </div>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Probabilidade</TableCell>
            <TableCell>Impacto</TableCell>
            <TableCell>Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {risks.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{`R${row.code}`}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.prob} - {getProdDesc(row.prob)}</TableCell>
              <TableCell>{row.imp} - {getImpDesc(row.imp)}</TableCell>
              <TableCell>
              <Button 
                variant="contained"
                color="primary"
                onClick={() => handleEdit(row)}
                style={{ marginRight: '8px' }}
                >
                    <EditIcon />
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleDelete(row.id)}
                >
                    <DeleteIcon />
              </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <RiskFormModal open={open} onClose={handleClose} data={data}/>
    </>
  );
}