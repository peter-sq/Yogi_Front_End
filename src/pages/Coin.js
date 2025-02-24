import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaSpinner } from "react-icons/fa";
import axios from 'axios';
import LineChart from '../components/LineCharts/LineChart';
import Header from '../components/landingPage/Header';
import Footer from '../components/landingPage/Footer';

function Coin() {
    const { coinId } = useParams();
    const [coinData, setCoinData] = useState(null);
    const [historicalCoinData, setHistoricalCoinData] = useState(null);

    useEffect(() => {
        const fetchCoinData = async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`);
                console.log(response.data)
                setCoinData(response.data);
            } catch (error) {
                console.error("Error fetching coin data:", error);
            }
        };

        const fetchHistoricalData = async () => {
          try {
            const response = await axios.get(
              `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=10`
            );
        
            console.log("Raw API response:", response.data);
        
            // Check if response.data.prices exists
            if (!response.data || !response.data.prices) {
              console.error("Invalid historical data format:", response.data);
              return;
            }
        
            // Format data 
            const formattedData = [["Date", "Prices"]];
            response.data.prices.forEach(([timestamp, price]) => {
              formattedData.push([new Date(timestamp), price]); 
            });
        
            console.log("Formatted Data before setting state:", formattedData);
            setHistoricalCoinData(formattedData);
          } catch (error) {
            console.error("Error fetching historical data:", error);
          }
        };
        
        
        
      

        fetchCoinData();
        fetchHistoricalData();
    }, [coinId]); 

    return (
        <div className="relative bg-background">
            <Header />
            {!coinData || !historicalCoinData ? ( 
                <div className="flex justify-center items-center h-64">
                    <FaSpinner className="animate-spin text-4xl text-blue-500" />
                </div>
            ) : (
                <div>
                    <div className="flex flex-col items-center pt-[8rem] pb-[1rem] ">
                        <img src={coinData.image.large} alt={coinData.name} className="w-20 h-20" />
                        <p className="text-lg font-bold mt-2">{coinData.name}</p>
                    </div>
                    <div>
                    {historicalCoinData && historicalCoinData.length > 1 ? (
                     <LineChart historicalCoinData={historicalCoinData} />
          ) : (
              <p>Loading historical data...</p>
          )}

                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-[58rem] mx-auto">
                      <h2 className="text-2xl font-bold text-center text-primary">Market Data</h2>
      
                        <div className="mt-4 space-y-2 text-gray-700">
                            <p className="flex justify-between border-b pb-2 text-xl">
                            <span className="font-medium">Symbol:</span> 
                            <span className="uppercase">{coinData.symbol}</span>
                            </p>
                            <p className="flex justify-between border-b pb-2 text-xl">
                            <span className="font-medium">Current Price:</span> 
                            <span>${coinData.market_data.current_price.usd.toLocaleString()}</span>
                            </p>
                            <p className="flex justify-between border-b pb-2 text-xl">                  
                            <span className="font-medium">Market Cap:</span> 
                            <span>${coinData.market_data.market_cap.usd.toLocaleString()}</span>
                            </p>
                            <p className="flex justify-between border-b pb-2 text-xl">
                            <span className="font-medium">24h High:</span> 
                            <span>${coinData.market_data.high_24h.usd.toLocaleString()}</span>
                            </p>
                            <p className="flex justify-between border-b pb-2 text-xl">
                            <span className="font-medium">24h Low:</span> 
                            <span>${coinData.market_data.low_24h.usd.toLocaleString()}</span>
                            </p>
                            <p className="flex justify-between text-xl">
                            <span className="font-medium">Market Rank:</span> 
                            <span>#{coinData.market_cap_rank}</span>
                            </p>
                        </div>
            </div>
                </div>
            )}
            <div className='pt-10'>
             <Footer />
             </div>
        </div>
    );
}

export default Coin;
