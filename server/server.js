const express = require("express");
require("dotenv").config();
const morgan = require("morgan")
const app = express();

//middlewares

app.use(express.json())

app.use(morgan('short'))


app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(process.env.SERVER_PORT);

console.log("server running on port " + process.env.SERVER_PORT);
