import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./connectDB.js";
const app = express();
import furnitureRoute from "./routes/furniture.route.js";
import userRoute from "./routes/user.routes.js";


app.use(express.json());
app.use("/api/furniture", furnitureRoute);
app.use("/api/user", userRoute);
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
