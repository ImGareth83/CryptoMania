import fetch from "node-fetch";
//5. async get the latest token price
async function getCryptoPrice(token) {
  const response = await fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=${token}&tsyms=USD`,
    {
      method: "GET",
      headers: {
        authorization:
          "Apikey b02b50b4380b95df6672a3a1d52edb52b4dac3240c1b4f21f8f34ffd64ef276f",
      },
    }
  );
  const data = await response.json();
  return data;
}

export default getCryptoPrice;
