const express = require("express");
const router = express.Router();
const newsController = require("../controller/news");

router.post("/get", newsController.get);

module.exports = router;
