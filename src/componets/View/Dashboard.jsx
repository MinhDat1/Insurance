import React from "react";

import BarChart from "./BarChart";
import LineChart from "./LineChart";
import RadarChart from "./RadarChart";
import Tables from "./Table";
import { Breadcrumbs, Grid, Typography } from "@mui/material";
import './CSS/Dashboard.css';
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" className="dashboard-breadcrumbs">
        <Link to="/">
          Main
        </Link>
        <Typography color="text.primary">Dashboard</Typography>
      </Breadcrumbs>
      <Grid
        container
        spacing={4}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="dashboard"
      >
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
    </>
  );
};

export default Dashboard;
