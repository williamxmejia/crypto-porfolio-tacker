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
    <div className="">
      <Navbar />
      <div className="container-fluid mt-5">
        <div>
          <div className="text-white">
            <div>
              <h1 className="text-center display-1 line">{data.symbol}</h1>
            </div>
            <h2 className="text-center mb-5">#{data.cmc_rank}</h2>
            <div className="d-flex row">
              <div className="">
                <div className="display-3 mb-5">${Number(data.priceUSD).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                <div className=" display-5 mb-5">
                  <div className="">
                    <u>Market Cap</u>
                  </div>
                  <div>
                    ${(Number(data.priceUSD) * Number(data.total_supply)).toLocaleString('en-US', {maximumFractionDigits:2})}
                  </div>

                </div>
                <div className="display-5 mb-5">
                  <div>
                    <u>Circulating Supply</u>
                  </div>
                  <div>
                    {(data.circulating_supply).toLocaleString()} {data.symbol}
                  </div>
                </div>

                <div className=" display-5">
                  <div>
                    <u>Max Supply</u>
                  </div>
                  <div>
                    {(data.max_supply).toLocaleString()} {data.symbol}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
