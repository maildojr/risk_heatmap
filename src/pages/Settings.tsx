import React from 'react';
import { useDataContext } from 'contexts/DataContext';
import { Grid, Paper } from "@mui/material";
import LegendsEdit from 'components/LegendsEdit';

const Settings = () => {
    const { probability, impact, editProbability, editImpact } = useDataContext();
    return (
      <Grid container spacing={3}>
      {/* Probabilidade */}
      <Grid item xs={12} md={12} lg={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <LegendsEdit data={probability} editData={editProbability} title="Probabilidade" />
        </Paper>
      </Grid>
      {/* Impacto */}
      <Grid item xs={12} md={12} lg={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <LegendsEdit data={impact} editData={editImpact} title="Impacto" />
        </Paper>
      </Grid>
    </Grid>
    )
}

export default Settings
