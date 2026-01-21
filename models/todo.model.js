import fs from "fs";

const readDB = () => {
  return JSON.parse(fs.readFileSync("db.json"));
};

const writeDB = (data) => {
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
};

export { readDB, writeDB };
