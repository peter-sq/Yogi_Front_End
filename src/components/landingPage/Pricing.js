import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FaSort, FaSortUp, FaSortDown, FaSearch, FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Pricing = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [marketData, setMarketData] = useState([]);
  const [error, setError] = useState(null);

const navigate = useNavigate();

//fetch data from API
useEffect(() => {
        const fetchMarketData = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
                setMarketData(response.data)
                console.log(response.data);
        } catch (error) {
            console.log(error, 'error fetching this data')
            setError('Failed to Load Data')
            setLoading(false)
            
        }
        finally {
            setLoading(false);
        }
    };
    fetchMarketData();
    }, []);

      // Slice the data to show only the first 20 items
const displayedData = marketData.slice(0, 20);
  
        //handle sort table
const handleSort = (key) => {
          let direction = "ascending";
          if (sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
          }
          setSortConfig({ key, direction });
        };

  //sort the table 
const sortedMarketData = React.useMemo(() => {
    let sortableMarketData = [...marketData];
    if (sortConfig.key !== null){
      sortableMarketData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });

    }
    return sortableMarketData;
  }, [marketData, sortConfig]);

const filteredMarketData = React.useMemo(() => {
    if (!searchTerm) return sortedMarketData;
    
    return sortedMarketData.filter((marketData) =>
      marketData.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      marketData.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      marketData.market_cap_rank.toString().includes(searchTerm)
    );
  }, [sortedMarketData, searchTerm]);
  
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
                {displayedData.map((market, index) => (
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
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        onClick={() => alert(`View profile of ${market.name}`)}
                        aria-label={`View profile of ${market.name}`}
                      >
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
  
            {/* View All Button */}
            <div className="mt-6 flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition-colors"
                onClick={() => navigate('/all-crypto', { state: { marketData } })}
              >
                View All
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