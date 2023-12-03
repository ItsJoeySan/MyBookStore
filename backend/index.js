import "dotenv/config";
import express, { response } from "express";
import { PORT, URI } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());

//cors policy error is a kind of error that arrives when we try to
// request data from another domain so if you want to access different domains use cors

//Option 1: allow everything NOTE: this could be harmful
// app.use(cors());

//Option 2: allow custom origins
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your specific origin
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use("/books", booksRoute);

mongoose
  .connect(URI)
  .then(() => {
    console.log("MongoDB is connnected successfully");
    app.listen(PORT || 3000, () => {
      console.log(`App is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
