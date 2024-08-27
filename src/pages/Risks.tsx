import React from "react";
import { useDataContext } from "contexts/DataContext";
import { Grid, Paper } from "@mui/material";
import RisksEdit from "components/RisksEdit";

const Risks = () => {
  const { probability, impact } = useDataContext();
  return (
    <Grid container spacing={3}>
      {/* Heatmap 2 */}
      <Grid item xs={12} md={12} lg={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <RisksEdit />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Risks;
