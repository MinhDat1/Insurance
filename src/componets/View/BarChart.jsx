import { Card } from "@mui/material";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function BarCharts() {
  const data = [
    { name: "A", uv: 4000, pv: 2400 },
    { name: "B", uv: 3000, pv: 1398 },
    { name: "C", uv: 2000, pv: 9800 },
    { name: "D", uv: 2780, pv: 3908 },
    { name: "E", uv: 1890, pv: 4800 },
    { name: "F", uv: 2390, pv: 3800 },
    { name: "G", uv: 3490, pv: 4300 },
  ];
  return (
    <Card>
      <ResponsiveContainer className={"chart"} height={240}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar type="monotone" dataKey="pv" fill="#ED6C02" />
          <Bar type="monotone" dataKey="uv" fill="#29C282" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default BarCharts;
