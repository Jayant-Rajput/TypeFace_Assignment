const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require('./config/db');
const queryRoutes = require('./routes/query.route');
const authRoutes = require('./routes/auth.route');


const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json()); 

app.use("/api/query", queryRoutes);
app.use("/api/auth", authRoutes)

connectDB();

app.get('/', (req, res) => {
  res.send('Hello, Node.js project!');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});