// src/components/RiskFormModal.js
import React, { useState, useEffect } from 'react';
import { Modal, Box, TextField, MenuItem, Button, Typography } from '@mui/material';
import { IRisks } from 'interfaces';
import { useDataContext } from 'contexts/DataContext';
import { v4 as uuidv4 } from 'uuid';

interface IRiskFormModalProps {
  open: boolean;
  data: IRisks | null;
  onClose: () => void;
}

const RiskFormModal = ({ open, onClose, data }: IRiskFormModalProps) => {
  const { probability, impact, addRisk, editRisk } = useDataContext();
  const [riskIDData, setRiskIDData] = useState<number>(0);
  const [riskData, setRiskData] = useState<string>('');
  const [probData, setProbData] = useState<number>(0);
  const [impData, setImpData] = useState<number>(0);
  const [edit, setEdit] = useState<boolean>(false);

  useEffect(() => {
    if (data) {
      setRiskIDData(data.code);
      setRiskData(data.name);
      setProbData(data.prob);
      setImpData(data.imp);
      setEdit(true);
    }
  }, [data]);

  const handleSave = () => {
    const newRisk = { 
        id: data ? data.id || uuidv4() : uuidv4(),
        code: riskIDData,
        name: riskData,
        prob: probData,
        imp: impData
    };
    if (edit) {
      editRisk(newRisk);
    } else {
      addRisk(newRisk);
    }
    console.log(newRisk);
    onClose(); // Close the modal after saving
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2">
          {data ? 'Editar Risco' : 'Novo Risco'}
        </Typography>
        <Box
          component="form"
          sx={{ mt: 2 }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Risco - ID"
            type="number"
            fullWidth
            variant="outlined"
            margin="normal"
            value={riskIDData}
            onChange={(e) => setRiskIDData(Number(e.target.value))}
          />
          <TextField
            label="Risco - Nome"
            fullWidth
            variant="outlined"
            margin="normal"
            value={riskData}
            onChange={(e) => setRiskData(e.target.value)}
          />
          <TextField
            select
            label="Risco - Impacto"
            fullWidth
            variant="outlined"
            margin="normal"
            value={impData}
            onChange={(e) => setImpData(Number(e.target.value))}
          >
            {probability.map((option, i) => (
              <MenuItem key={i} value={option.id}>
                {`${option.id} - ${option.name}`}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Risco - Probabilidade"
            fullWidth
            variant="outlined"
            margin="normal"
            value={probData}
            onChange={(e) => setProbData(Number(e.target.value))}
          >
            {probability.map((option, i) => (
              <MenuItem key={i} value={option.id}>
                {`${option.id} - ${option.name}`}
              </MenuItem>
            ))}
          </TextField>
          <Box sx={{ mt: 2 }}>
            <Button
              sx={{ mr: 1 }}
              variant="contained"
              color="primary"
              onClick={handleSave}
            >
              Salvar
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => onClose()}
            >
              Fechar
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default RiskFormModal;
