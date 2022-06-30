import { parse } from "csv-parse";
import fs from "fs";

function readCSV() {
  return new Promise((resolve, reject) => {
    const data = [];
    // 1.read transactions from csv
    fs.createReadStream("data/transactions.csv")
      .pipe(parse({ delimiter: ",", from_line: 2 }))
      .on("data", (r) => {
        data.push(r);
      })
      .on("end", () => {
        // 2.sort by timestamp ascending
        data.sort((a, b) => {
          return a[0] - b[0];
        });
        resolve(data);
      });
  });
}

export default readCSV;
