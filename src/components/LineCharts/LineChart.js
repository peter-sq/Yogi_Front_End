import React, { useEffect } from "react";
import Chart from "react-google-charts";

function LineChart({ historicalCoinData }) {
  useEffect(() => {
    console.log("Formatted Data for Chart:", historicalCoinData);
    if (!historicalCoinData || historicalCoinData.length < 2) {
      console.warn("Invalid or empty historicalData:", historicalCoinData);
    }
  }, [historicalCoinData]);

  const options = {
    title: "Price - Last 24 Hours",
    curveType: "function",
    legend: { position: "bottom" },
    colors: ["#007BFF"], // Primary color (blue)
    backgroundColor: "#F8F9FA", // Light background
    hAxis: {
      textStyle: { color: "#333" }, // Dark text
    },
    vAxis: {
      textStyle: { color: "#333" },
    },
  };

  return (
    <div className="flex justify-center items-right p-10">
      {historicalCoinData && historicalCoinData.length > 1 ? (
        <Chart
          chartType="LineChart"
          width="100%"
          height="500px"
          data={historicalCoinData}
          options={options}
        />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
}

export default LineChart;
