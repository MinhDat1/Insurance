import React from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import './RadarChart.css'

function RadarCharts() {
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
    <ResponsiveContainer className={"chart"} height="100%" >
      <RadarChart
        width={350}
        height={190}
        data={data}
        outerRadius={90}
        margin={{ top: 50, right: 5, bottom: 5, left: 5 }}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis angle={35} domain={[0, 10000]} />
        <Radar
          name="uv"
          dataKey="uv"
          stroke="#ED6C02"
          fill="#ED6C02"
          fillOpacity={0.6}
        />
        <Radar
          name="pv"
          dataKey="pv"
          stroke="#29C282"
          fill="#29C282"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default RadarCharts;
