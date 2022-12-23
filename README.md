This app was made to display the price of bitcoin. I will continue to make updates and include more cryptocurrencies.

This app is using react.js on the front end and node.js on the back end.

The back end is used as a proxy to connect the client to the API.

I decided to use CoinMarketCap API -> https://coinmarketcap.com/api/


This is the end point I used -> https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=process.env.CMC_PRO_API_KEY

The sample API url used below gives you fake data
``` 
/* Example in Node.js */
const axios = require('axios');

let response = null;
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
  }

});

```

