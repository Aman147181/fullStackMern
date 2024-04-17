import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./connectDB.js";
const app = express();
import furnitureRoute from "./routes/furniture.route.js";
app.use(cors());

app.use(express.json());
app.use("/api/furniture", furnitureRoute);
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });

app.get("/", (req, res) => {
  console.log("hello from server");
});

export default app;
