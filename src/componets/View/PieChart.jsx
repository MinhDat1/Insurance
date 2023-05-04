import { Card } from "@mui/material";
import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart() {
  const state = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
  return (
    <div>
      {/* <Card
        sx={{
          width: "100%",
          height: "100%",
          marginTop: "20px",
        }}
      > */}
      <Pie
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
      {/* </Card> */}
    </div>
  );
}

export default PieChart;