require("dotenv").config({ path: "../.env" });
const axios = require("axios");

exports.get = (req, res) => {
  const { url } = req.body;
  const apiKey = "apiKey=" + process.env.NEWS_API_KEY;

  const requestOptions = {
    method: "GET",
    url: url + apiKey,
  };

  axios(requestOptions)
    .then((results) => {
      res.status(200).json({ data: results.data });
    })
    .catch((err) => res.status(400).json(err));
};
