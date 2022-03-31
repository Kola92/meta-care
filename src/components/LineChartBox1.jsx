import React, { useState } from "react";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { chartData } from "../constants/Data";



export const options = {
  responsive: true,
  plugins: {
    
    legend: {
      position: "top",
      align: "center",
      
      labels: {
        color: "#060213",
        boxHeight: 10,
        boxWidth: 10,
        textAlign: "center",
        boxColor: "#F05D23",
        font: {
          size: 14,
          weight: "bolder",
          family: "Gelion",
        },
      },
    },
    title: {
      display: true,
      text: "Average response time",
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
        stepSize: 10,
      },
    },
  },
  layout: {
    padding: 30,
  },
};

const LineChartBox1 = () => {
  const [chartDatasets, setChartDatasets] = useState({
    labels: chartData.map((data) => data.month),
    datasets: [
      {
        label: "High Priority",
        data: chartData.map((data) => data.responseTime),
        // borderWidth:'2px',
        borderColor: "#F05D23",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointRadius: 4,
        backgroundColor: "#F05D23",
      },
    ],
  });

  return <Line data={chartDatasets} options={options} />;
};

export default LineChartBox1;
