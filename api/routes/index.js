var express = require('express'),
  mongoose = require("mongoose")
var router = express.Router();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect("mongodb://localhost:27017/MyAppDB", options)

module.exports = router;
