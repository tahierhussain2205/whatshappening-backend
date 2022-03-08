require("dotenv").config({ path: "../.env" });
const axios = require("axios");

exports.get = (req, res) => {
  const apiKey = "apiKey=" + process.env.NEWS_API_KEY;
  const url =
    "https://newsapi.org/v2/everything?q=Russia Ukraine&searchIn=title,description,content&pageSize=100&" +
    apiKey;

  const requestOptions = {
    method: "GET",
    url,
  };

  axios(requestOptions).then((results) => {
    res.status(200).json({ data: results.data });
  });
};
