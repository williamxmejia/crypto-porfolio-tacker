// import {Link} from "react-router-dom";
import image from "./9a5aca31a34e84223dfa6323464fef54cd957f3a.png";
import Navbar from "./Navbar";
// import * as dotenv from 'dotenv'
import axios from "axios";
import { useEffect, useState } from "react";


// dotenv.config()

const HomePage = () => {

    // conts[data, setData] = useState()

    useEffect(() => {
        async function fetchData() {
            await axios("http://localhost:5000/", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }).then(res => {
                  console.log(res)
              })
              .catch((error) => {
                window.alert(error);
                return;
              });
        }
        fetchData()
    }, [])

  return (
    <div className="container">
      <Navbar />
      <div className="mt-5">
        <div className="d-flex">
          <div className="mx-5 mt-5 col-7 text-white">
            <h2 className="text-center">Welcome to ChainFolio</h2>
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
