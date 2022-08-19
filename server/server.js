const express = require("express");
require("dotenv").config();
const morgan = require("morgan")
const app = express();
const connectDB = require('./db')
const cors = require('cors')



const AuthRouting = require('./routing/auth.routing')
const ProductRouting = require('./routing/products.routing')

// middlewares

app.use(cors())

app.use(express.json())

app.use(morgan('short'))


// routing

app.use('/auth', AuthRouting)
app.use('/products', ProductRouting)

// database

connectDB()

// server

app.listen(process.env.SERVER_PORT);

console.log("server running on port " + process.env.SERVER_PORT);
