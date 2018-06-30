// http://data.fixer.io/api/latest?access_key=251941e1dba3d738fc180a74b63ce3ca
const axios = require('axios');
const apiKey = '251941e1dba3d738fc180a74b63ce3ca'

const getCountries = async (currencyCode) => {
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
    return response.data.map((country) => country.name);
}

const getExchangeRate = async (from, to) => {
    try {
      const response = await axios.get(`http://data.fixer.io/api/latest?access_key=${apiKey}`);
      const euro = 1 / response.data.rates[from];
      const rate = euro * response.data.rates[to];
  
      if (isNaN(rate)) {
        throw new Error();
      }
  
      return rate;
    } catch (e) {
      throw new Error(`Unable to get exchange rate for ${from} and ${to}.`);
    }
  }; 

const convertCurrency = async (from, to, amount) => {
    const rate = await getExchangeRate(from, to)
    const countries = await getCountries(to)
    const convertedAmount = (amount * rate).toFixed(2);
    return `${amount} ${from} is worth ${convertedAmount} in ${to} spend in ${countries}` 
};



// convertCurrency('USD', 'CAD', 20).then((message) => {
//     console.log(message);   
// });

var getCurrencies = async () => {
  try {
    return await axios.get(`http://data.fixer.io/api/latest?access_key=${apiKey}`);
  } catch (e) {
    return 'Unable to return currencies with error: ' + e;
  }
}

getCurrencies().then((response) => {
  currencies = response;
}).catch((e) => {
  console.log(e.message);
});

module.exports = {
  convertCurrency,
  getExchangeRate
}

