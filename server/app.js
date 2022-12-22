const express = require("express")
const app = express()
const cors = require("cors")
const axios = require('axios');
const dotenv = require("dotenv").config();
app.use(cors());


let response = null;
let end = "";
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY='+ process.env.CMC_PRO_API_KEY);
  } catch(ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const json = response.data;
    // console.log(json);
    resolve(json);
    end = json.data[0];
    price = json.data[0].quote.USD;
  }
});

app.get("/", (req, res) => {
    res.send({
        name: end.name,
        symbol: end.symbol,
        cmc_rank: end.cmc_rank,
        circulating_supply: end.circulating_supply,
        total_supply: end.total_supply,
        max_supply: end.max_supply,
        self_reported_market_cap: end.self_reported_market_cap,
        priceUSD: price.price
    })
})


app.listen(5000)
console.log('connected')