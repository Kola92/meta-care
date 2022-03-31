import React, {useState} from "react";

import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";
import { chartData } from "../constants/Data";

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: "top",
      align: "center",
      labels: {
        color: "#060213",
        boxHeight: 10,
        boxWidth: 10,
        textAlign: "right",
        boxColor: "#3E68FF",
        font: {
          size: 14,
          weight: "bolder",
          family: "Gelion",
        },
      },
    },
    title: {
      display: true,
      text: "Replies per resolution",
      color: "#060213",
      align: "start",
      
    },
  },
  scales: {
    y: {
      display: true,
      min: 10,
      max: 50,
      ticks: {
        // forces step size to be 50 units
        stepSize: 10
      }
    },
  },
  layout: {
    padding: 30,
  },
};

const LineChartBox2 = () => {

  const [chartDatasets, setChartDatasets] = useState({
    labels: chartData.map((data) => data.month),
    datasets: [
      {
        label: "High Priority",
        data: chartData.map((data) => data.responseTime),
        // borderWidth:'2px',
        borderColor: "#3E68FF",
        pointBackgroundColor:'#fff',
        pointBorderWidth:1,
        pointRadius:4,
        backgroundColor:"#3E68FF"
      },
    ],
  });
  
  return <Line data={chartDatasets} options={options} />;
};

export default LineChartBox2;
