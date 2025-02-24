import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FaSort, FaSortUp, FaSortDown, FaSearch, FaSpinner } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

const Pricing = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [marketData, setMarketData] = useState([]);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  // Fetch data from API
  useEffect(() => {
    const fetchMarketData = async () => {
      setLoading(true);
      setError(null); // Reset error before fetching
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
        setMarketData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to Load Data");
      } finally {
        setLoading(false);
      }
    };
    fetchMarketData();
  }, []);

  // Sorting logic
  const sortedMarketData = React.useMemo(() => {
    let sortableData = [...marketData];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        const valueA = typeof a[sortConfig.key] === "number" ? a[sortConfig.key] : a[sortConfig.key]?.toString().toLowerCase();
        const valueB = typeof b[sortConfig.key] === "number" ? b[sortConfig.key] : b[sortConfig.key]?.toString().toLowerCase();
        
        if (valueA < valueB) return sortConfig.direction === "ascending" ? -1 : 1;
        if (valueA > valueB) return sortConfig.direction === "ascending" ? 1 : -1;
        return 0;
      });
    }
    return sortableData;
  }, [marketData, sortConfig]);

  // Filtered data based on search
  const filteredMarketData = React.useMemo(() => {
    if (!searchTerm) return sortedMarketData;
    return sortedMarketData.filter((market) =>
      market.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      market.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      market.market_cap_rank.toString().includes(searchTerm)
    );
  }, [sortedMarketData, searchTerm]);

  // Handle sorting
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Sort Icon
  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? <FaSortUp /> : <FaSortDown />;
    }
    return <FaSort />;
  };

  return (
    <div className="min-h-screen bg-background text-white p-8">
      <div className="max-w-7xl mx-auto bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6 font-sans text-center text-blue-400">Crypto Market Place</h1>

          {/* Search Input */}
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Search Cryptocurrencies..."
              className="w-full bg-gray-700 text-white placeholder-gray-400 border-0 rounded-md p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search Cryptocurrencies"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}

          {/* Loading Spinner */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <FaSpinner className="animate-spin text-4xl text-blue-500" />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-700">
                    {[
                      { label: "Rank", key: "market_cap_rank" },
                      { label: "Coin", key: "name" },
                      { label: "Price", key: "current_price" },
                      { label: "24H Change", key: "price_change_percentage_24h" },
                      { label: "Market Cap", key: "market_cap" },
                      { label: "Action", key: "Action" }
                    ].map(({ label, key }) => (
                      <th
                        key={key}
                        className="p-4 text-left font-semibold text-gray-300 cursor-pointer hover:bg-gray-600 transition-colors"
                        onClick={() => handleSort(key)}
                      >
                        <div className="flex items-center">
                          {label}
                          <span className="ml-1">{getSortIcon(key)}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {filteredMarketData.slice(0, 10).map((market, index) => (
                    <tr
                      key={market.id}
                      className={`${index % 2 === 0 ? "bg-gray-800" : "bg-gray-750"} hover:bg-gray-600 transition-colors`}
                    >
                      <td className="p-3 text-center">{market.market_cap_rank}</td>
                      <td className="p-3 flex items-center text-center">
                        <img
                          className="w-6 h-6 mr-2"
                          src={market.image || "fallback-image-url"}
                          alt={`Logo of ${market.name}`}
                          loading="lazy"
                        />
                        {market.name}
                      </td>
                      <td className="p-3 text-center">${market.current_price.toLocaleString()}</td>
                      <td
                        className={`p-3 text-center ${
                          market.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {Math.floor(market.price_change_percentage_24h * 100) / 100}%
                      </td>
                      <td className="p-3 text-center">${market.market_cap.toLocaleString()}</td>
                      <td className="p-3 text-center">
                        <Link to = {`/coin/${market.id}`}
                          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                          aria-label={`View profile of ${market.name}`}
                        >
                          View Chat
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
                
              </table>

             {/* View All Button */}
             <div className="mt-6 flex justify-center ">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-6 text-xl px-6 rounded transition-colors"
                onClick={() => navigate('/all-crypto', { state: { marketData } })}
              >
                View All Crypto
              </button>
            </div>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default Pricing;
