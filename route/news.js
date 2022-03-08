const express = require("express");
const router = express.Router();
const newsController = require("../controller/news");

router.get("/get", newsController.get);

module.exports = router;
