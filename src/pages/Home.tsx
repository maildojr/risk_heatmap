import React from 'react'
// import Layout from '../Layout'
import { Grid, Paper } from '@mui/material';
import Chart from 'components/Chart';
import Deposits from 'components/Deposits';
import Orders from 'components/Orders';
// import Heatmap from 'components/Heatmap';
import Heatmap2 from 'components/Heatmap2';
import RisksTable from 'components/RisksTable';

const risks = [
  { imp: 1, prob: 1 },
  { imp: 2, prob: 2 },
  { imp: 3, prob: 3 },
]

const Home = () => {
  return (
    <Grid container spacing={3}>
      {/* Heatmap 2 */}
      <Grid item xs={12} md={12} lg={12}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Heatmap2 />
        </Paper>
      </Grid>
      {/* Risks */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <RisksTable />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Home
