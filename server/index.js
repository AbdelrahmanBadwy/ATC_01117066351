const express = require("express");
// const cors = require("cors");
require("dotenv").config();
const { connectDB } = require("./config/db-config");
const mongoose = require("mongoose");
//routers
const userRouter = require("./routes/users-routes");
const app = express();

connectDB();
app.use(express.json());
app.use("/api/users", userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
