import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";
import cors from "cors";
import path from 'path';

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/site-e-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() =>
    console.log("Database Connected Successfully !")
  )
  .catch((err) => console.log(err));

app.use("/api/users", userRouter);

app.use("/api/products", productRouter);

app.use("/api/orders", orderRouter);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

// app.get("/", (req, res) => {
//   res.send("Server is ready !");
// });

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/front-end/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/front-end/build/index.html'))
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("front-end/build"));
}

app.listen(port, () => {
  console.log(`Serve is running at http://localhost:${port}`);
});
