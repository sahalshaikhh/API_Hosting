require("dotenv").config();
const express = require('express')
const connectDB = require("./db/connect")
const app = express();
const PORT = process.env.PORT || 5000;
const products_routes = require('./routes/products')

app.get('/', (req, res) => {
    res.send("Hey i am live")
})

app.use("/api/products", products_routes)

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        app.listen(PORT)
        console.log("connected");
    }
    catch (err) {
        console.log(`Error starting server: ${err}`)
    }
}

start();