const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;
app.use(cors());
// middle to parse json request body
app.use(express.json());

// import routes for TODO API
const todoRoutes = require("./routes/todos");

// mount the todo API routes
app.use("/api/v1", todoRoutes);

// start server
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

// connect to the database
const dbConnect = require("./config/dataBase");
dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1> This is HOMEPAGE baby </h1>`);
});
