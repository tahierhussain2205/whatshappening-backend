const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// Body Parser
app.use(bodyParser.json());
app.use(cors());

// Route
app.use("/api/news", require("./route/news"));

const port = process.env.PORT || 5000;
const serveHost = process.env.YOUR_HOST || "0.0.0.0";

app.listen(port, serveHost, () => {
  console.log(`Server running on ${port}`);
});
