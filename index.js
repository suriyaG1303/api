import ('ode-fetch');
const express = require("express");
const app = express();
const mongoose =require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./route/user");
const authRoute = require("./route/auth");
const productRoute = require("./route/product");
const cartRoute = require("./route/cart");
const orderRoute = require("./route/order");
const stripeRoute = require("./route/stripe");
const cors = require("cors");

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(()=> console.log("DBConnected") )
.catch((err) =>{
    console.log(err);
});
app.use(express.json());
app.use("/api/user",authRoute);
app.use("/api/user",userRoute);
app.use("/api/product",productRoute);
app.use("/api/cart",cartRoute);
app.use("/api/order",orderRoute);
app.use("/api/checkout",stripeRoute);

app.listen(process.env.PORT || 5000,() =>{
    console.log("backend server is running!!")
});

