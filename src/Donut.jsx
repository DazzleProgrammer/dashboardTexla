import React from "react";
import { Chart } from "react-google-charts";
import "./Donut.css"


export const data = [
  ["Regions", "Clients"],
  ["West", 25],
  ["South", 25],
  ["East", 10],
  ["North", 40],
];

export const options = {
  pieHole: 0.5,
  is3D: false,
};

export function Donut() {
  return (
    <div className="main__section">
      <p className="para">Regional Metrics</p>
      <div className="donut">
     
      <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />

    </div>
    </div>
  );
}
