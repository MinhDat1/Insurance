import React from "react";
import SideBar from "./SideBar";
import Header from "../Header";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import EnhancedTable from "./Table";
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
          <PieChart />
        </Grid>
        <Grid item xs={6} md={12}>
          <EnhancedTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
