const {Router} = require("express");
const router = Router();

const {account} =  require("../controllers/account.controller");

router.get("/verify", account.get);

module.exports = router;