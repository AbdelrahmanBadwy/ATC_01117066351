const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { connectDB } = require("./config/db-config");
const mongoose = require("mongoose");
//routers
const userRouter = require("./routes/users-routes");
const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "OPTIONS, GET, POST, PUT, PATCH, DELETE"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   if (req.method === "OPTIONS") {
//     return res.sendStatus(200);
//   }
//   next();
// });
connectDB();
app.use(express.json());
app.use(cookieParser());
app.use("/api/users", userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
