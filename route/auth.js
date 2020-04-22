const express = require("express");

const router = express.Router();
const authController = require("../controller/authcontroller");

router.get("/login", async (req, res) => {
  var respos = await authController.login(req, res);
  res.status(200).send(respos);
});

router.get("/register", async (req, res) => {
  var respos = await authController.registration(req, res);
  //res.statusCode = 200;
  res.send(html);
});

module.exports = router;
