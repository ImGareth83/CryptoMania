// Write your answer here
//1. read csv
//2. sort transaction by timestamp ascending
//3. create hashmap based on token and amount
//4. sum the total amount by deposit and withdrawal
//5. async get the latest token price
//6. print out the token per value
import readCSV from "./CSVStream";
import getCryptoPrice from "./CryptoPrice";

const resolve = readCSV();

const transactionType = {
  deposit: "DEPOSIT",
  withdrawal: "WITHDRAWAL",
};

//3. create hashmap based on token and amount
const map = new Map();

resolve.then((response) => {
  response.forEach((record) => {
    const [timestamp, transaction_type, token, amount] = record;
    var floatAmount = parseFloat(amount);

    //assume new token will begin with positive amount
    if (!map.has(token)) {
      map.set(token, floatAmount);
    } else {
      //4. sum the total amount by deposit and withdrawal
      if (transactionType.deposit === transaction_type) {
        map.set(token, map.get(token) + floatAmount);
      } else {
        map.set(token, map.get(token) - floatAmount);
      }
    }
  });

  //6. print out the token per value (USD)
  map.forEach((amount, token) => {
    getCryptoPrice(token)
      .then((price) => {
        console.log(
          `${token} USD${new Intl.NumberFormat("en-US").format(
            amount * price.USD
          )}`
        );
      })
      .catch((err) => {
        console.error(err);
      });
  });

  // the total amount of the tokens
  console.log(map);
});
