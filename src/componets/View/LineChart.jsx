import { Card } from "@mui/material";
import React from "react";
import { Line } from "react-chartjs-2";

function LineChart() {
  const state = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Rainfall",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  return (
    <div>
      {/* <Card
        sx={{
          width: "400px",
          height: "240px",
          marginTop: "20px",
        }}
      > */}
        <Line
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

export default LineChart;
