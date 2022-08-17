const express = require("express");
require("dotenv").config();
const morgan = require("morgan")
const app = express();
const AuthRouting = require('./routing/auth.routing')



// middlewares

app.use(express.json())

app.use(morgan('short'))

// routing

app.use('/auth', AuthRouting)

// server

app.listen(process.env.SERVER_PORT);

console.log("server running on port " + process.env.SERVER_PORT);
