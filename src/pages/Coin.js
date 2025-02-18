import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaSpinner } from "react-icons/fa";
import axios from 'axios';
import LineChart from '../components/LineCharts/LineChart';
import Header from '../components/landingPage/Header';

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
                    <div className="flex flex-col items-center p-32">
                        <img src={coinData.image.large} alt={coinData.name} className="w-32 h-32" />
                        <p className="text-lg font-bold mt-2">{coinData.name}</p>
                    </div>
                    <div>
                    {historicalCoinData && historicalCoinData.length > 1 ? (
                     <LineChart historicalCoinData={historicalCoinData} />
          ) : (
              <p>Loading historical data...</p>
          )}

                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-2xl font-bold'>Market Data</p>
                        <div className='flex flex-col items-center'>
                            <p>Symbol: {coinData.symbol}</p>
                            <p>Current Price: {coinData.current_price}</p>
                            <p>Market Cap: {coinData.market_cap}</p>
                            <p>24 Hours High: {coinData.market_data.high_24h}</p>
                            <p>24 Hours Low: {coinData.low_24h}</p>
                            <p>Market Market Rank: {coinData.market_cap_rank}</p>
                            <p>Current Price: {coinData.current_price} </p>
                            <p>Market Cap: {coinData.market_cap} </p>
                            <p>24 Hours High: {}</p>
                            <p>24 Hours Low: </p>

                        </div>
                </div>
                </div>
            )}
            <div className='flex justify-center items-center h-32'>
                foot
            </div>
        </div>
    );
}

export default Coin;
