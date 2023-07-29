const dotenv = require("dotenv");
const path = require("path");

const initDotenv = () => {
  dotenv.config({
    path: path.resolve(__dirname, ".env"),
  });
};

initDotenv();
