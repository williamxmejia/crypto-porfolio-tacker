const express = require("express")

const app = express()

const cors = require("cors")

app.use(cors());

const axios = require('axios');

let response = null;
let end = "";
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
      },
    });
  } catch(ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const json = response.data;
    console.log(json);
    resolve(json);
    end = json.data[0];
  }
});

app.get("/", (req, res) => {
    res.send({
        name: end.name,
        symbol: end.symbol,
        cmc_rank: end.rank,
        circulating_supply: end.circulating_supply,
        total_supply: end.total_supply,
        max_supply: end.max_supply,
        self_reported_market_cap: end.self_reported_market_cap
    })
})


app.listen(5000)
console.log('connected')