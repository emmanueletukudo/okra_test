const express = require("express");
const router = express.Router();

const {account} =  require("../controllers/account.controller");

router.get("/account", account.get);

module.exports = router;