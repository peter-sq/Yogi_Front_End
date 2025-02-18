import React, { useEffect } from "react";
import Chart from "react-google-charts";

function LineChart({ historicalCoinData }) {
  useEffect(() => {
    console.log("Formatted Data for Chart:", historicalCoinData);
    if (!historicalCoinData || historicalCoinData.length < 2) {
      console.warn("Invalid or empty historicalData:", historicalCoinData);
    }
  }, [historicalCoinData]);

  return (
    <div>
      {historicalCoinData && historicalCoinData.length > 1 ? (
        <Chart
          chartType="LineChart"
          width="100%"
          height="30rem"
          data={historicalCoinData}
        />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
}

export default LineChart;
