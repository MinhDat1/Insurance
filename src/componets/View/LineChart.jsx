import { Card } from "@mui/material";
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from "recharts";

function LineCharts() {
  const database = [
    { name: "A", uv: 4000, pv: 2400 },
    { name: "B", uv: 3000, pv: 1398 },
    { name: "C", uv: 2000, pv: 9800 },
    { name: "D", uv: 2780, pv: 3908 },
    { name: "E", uv: 1890, pv: 4800 },
    { name: "F", uv: 2390, pv: 3800 },
    { name: "G", uv: 3490, pv: 4300 },
  ];

  return (
    <Card sx={{ width: "350px", height: "190px", marginTop: "20px" }}>
      <ResponsiveContainer className={"chart"} height={190}>
        <LineChart
          data={database}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#ED6C02"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#29C282" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default LineCharts;
