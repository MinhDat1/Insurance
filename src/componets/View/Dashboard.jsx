import React from "react";

import BarChart from "./BarChart";
import LineChart from "./LineChart";
import RadarChart from "./RadarChart";
import Tables from './Table'
import { Box, Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <Box sx={{flexGrow : 1}}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}> 
          <BarChart />
        </Grid>
        <Grid item xs={6} md={4}> 
          <LineChart />
        </Grid>
        <Grid item xs={6} md={4}> 
          <RadarChart />
        </Grid>
        <Grid item xs={6} md={12}>
          <Tables />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
