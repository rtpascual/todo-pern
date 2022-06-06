const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const pool = require("./db");
const mountRoutes = require("./routes");

const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

mountRoutes(app);

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
