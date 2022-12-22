// import {Link} from "react-router-dom";
import Navbar from "./Navbar";
// import * as dotenv from 'dotenv'
import axios from "axios";
import { useEffect, useState } from "react";

// dotenv.config()

const HomePage = () => {
  const [data, setData] = useState({
    name: "",
    symbol: "",
    cmc_rank: "",
    circulating_supply: "",
    total_supply: "",
    max_supply: "",
    self_reported_market_cap: "",
    priceUSD:"",
  });

  useEffect(() => {
    async function fetchData() {
      await axios("http://localhost:5000/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      })
        .then((res) => {
          console.log(res);
          setData(res.data);
        })
        .catch((error) => {
          window.alert(error);
          return;
        });
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="mt-5 d-flex justify-content-center">
        <div className="d-flex">
          <div className="mx-5 mt-5 col-7 text-white">
            <h2 className="text-center">Welcome to ChainFolio</h2>
            <div>
              <h2 className="text-center">{data.name}</h2>
              <h1 className="text-center">{data.symbol}</h1>
              <ul className="list-group">
                <li className="list-group-item">Rank: {data.cmc_rank}</li>
                <li className="list-group-item">Price: ${Number(data.priceUSD).toFixed(2)}</li>
                <li className="list-group-item">Market Cap: ${(Number(data.priceUSD) * Number(data.total_supply)).toFixed(2)}</li>
                <li className="list-group-item">Circulating Supply: {data.circulating_supply} {data.symbol}</li>
                <li className="list-group-item">Total Supply: {data.total_supply} {data.symbol}</li>
                <li className="list-group-item">Max Supply: {data.max_supply} {data.symbol}</li>
              </ul>
            </div>

            <p
              className="mt-5 text-center"
              style={{ fontWeight: "400", fontSize: "25px" }}
            >
              Keep track of your crypto all in one place.
            </p>
            <p
              className="text-center"
              style={{ fontWeight: "400", fontSize: "25px" }}
            >
              The most up to date and accurate crypto prices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
