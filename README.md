Based on the requirements, i planned and broken down the challenge into smaller tasks:

1. read csv
2. sort transaction by timestamp ascending
3. create hashmap based on token and amount
4. sum the total amount by deposit and withdrawal
5. async get the latest token price
6. print out the token per value

For maintenance sake, the code should follow KISS principle - keep it simple stupid. Another priciple is cohesive. This means each file should focus only a specific purpose.

Index.js is the main app.

CryptoPrice.js is responsible of retrieving real-time prices.

CSVStreaM is responsible for read csv file and converting into object array.
