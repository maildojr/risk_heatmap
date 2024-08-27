// src/components/RiskFormModal.js
import React, { useState, useEffect } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import { ILegends } from 'interfaces';

interface ILegendFormModalProps {
  title: string;
  open: boolean;
  data: ILegends | null;
  onClose: () => void;
  handleEdit: (data: ILegends) => void;
}

const LegendFormModal = ({ title, open, onClose, data, handleEdit }: ILegendFormModalProps) => {
  const [legendName, setLegendName] = useState<string>('');

  useEffect(() => {
    if (data) {
      setLegendName(data.name);
    }
  }, [data]);

  const handleSave = () => {
    if (data) {
        const newLegend = { 
            id: data.id,
            name: legendName,
            color: ''
        };
        handleEdit(newLegend);
        onClose(); // Close the modal after saving
    }
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
          Editar {title}
        </Typography>
        <Box
          component="form"
          sx={{ mt: 2 }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label={`${title} - Nome`}
            fullWidth
            variant="outlined"
            margin="normal"
            value={legendName}
            onChange={(e) => setLegendName(e.target.value)}
          />
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

export default LegendFormModal;
