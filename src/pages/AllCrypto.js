import React from "react";
import { useLocation } from "react-router-dom";


const AllCrypto = () => {
  const location = useLocation();
  const marketData = location.state?.marketData || [];

  return (
    <div className="min-h-screen bg-background text-white p-8">
      <div className="max-w-7xl mx-auto bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6 font-sans">All Cryptocurrencies</h1>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-700">
                  {["Rank", "Coin", "Price", "24H Change", "Market Cap"].map((header) => (
                    <th key={header} className="p-3 text-left font-semibold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {marketData.map((marketData, index) => (
                  <tr
                    key={marketData.id}
                    className={`${index % 2 === 0 ? "bg-gray-800" : "bg-gray-750"} hover:bg-gray-700 transition-colors`}
                  >
                    <td className="p-3">{marketData.market_cap_rank}</td>
                    <td className="p-3 flex items-center">
                      <img
                        className="w-6 h-6 mr-2"
                        src={marketData.image || "fallback-image-url"}
                        alt={`Logo of ${marketData.name}`}
                        loading="lazy"
                      />
                      {marketData.name}
                    </td>
                    <td className="p-3">${marketData.current_price.toLocaleString()}</td>
                    <td
                      className={`p-3 ${
                        marketData.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {Math.floor(marketData.price_change_percentage_24h * 100) / 100}
                    </td>
                    <td className="p-3">${marketData.market_cap.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCrypto;
