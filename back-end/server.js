import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";

dotenv.config();

const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/site-e-commerce",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use("/api/users", userRouter);

app.use("/api/products", productRouter);

app.use('/api/orders', orderRouter);

app.get('/api/config/paypal', (req,res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

app.get("/", (req, res) => {
  res.send("Server is ready !");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./front-end/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./front-end/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Serve is running at http://localhost:${port}`);
});
