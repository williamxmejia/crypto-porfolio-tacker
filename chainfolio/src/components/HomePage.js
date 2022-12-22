// import {Link} from "react-router-dom";
import image from "./9a5aca31a34e84223dfa6323464fef54cd957f3a.png";
import Navbar from "./Navbar";
// import * as dotenv from 'dotenv'
import axios from "axios";
import { useEffect, useState } from "react";

// dotenv.config()

const HomePage = () => {
  const[data, setData] = useState({
    name:"",
    symbol: "",
    cmc_rank: "",
    circulating_supply: "",
    total_supply: "",
    max_supply: "",
    self_reported_market_cap:"" 
  })


  useEffect(() => {
    async function fetchData() {
      await axios("http://localhost:5000/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify()
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
      <div className="mt-5">
        <div className="d-flex">
          <div className="mx-5 mt-5 col-7 text-white">
            <h2 className="text-center">Welcome to ChainFolio</h2>
            <h1>{data.symbol}</h1>
            <h2>{data.name}</h2>
            <ul>
                <li>{data.cmc_rank}</li>
                <li>{data.self_reported_market_cap}</li>
                <li>{data.circulating_supply} {data.symbol}</li>
                <li>{data.total_supply} {data.symbol}</li>
                <li>{data.max_supply} {data.symbol}</li>
            </ul>
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
          <img src={image} style={{ height: "600px" }} className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
