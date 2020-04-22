var express = require("express");
var router = express.Router();

var login = (req, resp) => {
  return { _id: "73388910199229", name: "hemendra", role: "admin" };
};

var registration = (req, resp) => {
  return { _id: "73388910199229", name: "hemendra", role: "admin" };
};

module.exports = { login, registration };
