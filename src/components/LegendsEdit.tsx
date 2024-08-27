import { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Title from './Title';
// import { useDataContext } from 'contexts/DataContext';
import LegendFormModal from './LegendFormModal';
import EditIcon from '@mui/icons-material/Edit';
import { ILegends } from 'interfaces';

interface ILegendsEdit {
  title: string;
  data: ILegends[];
  editData: (data: ILegends) => void;
};

export default function LegendsEdit({title, data, editData} : ILegendsEdit) {
  const [open, setOpen] = useState(false);
  const [legend, setLegend] = useState<ILegends | null>(null);

  const handleClose = () => setOpen(false);

  const handleOpen = (data : ILegends) => {
    setLegend(data);
    setOpen(true);
  }

  const handleEdit = (data: ILegends) => {
    const newLegend = {
      id: data.id,
      name: data.name,
      color: ''
    };
    editData(newLegend);
    setOpen(true);
  }

  return (
    <>
      <Title>Edição Legenda - {title}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>{title}</TableCell>
            <TableCell>Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
              <Button 
                variant="contained"
                color="primary"
                onClick={() => handleOpen(row)}
                style={{ marginRight: '8px' }}
                >
                    <EditIcon />
              </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <LegendFormModal title={title} open={open} data={legend} onClose={handleClose} handleEdit={handleEdit}/>

    </>
  );
}