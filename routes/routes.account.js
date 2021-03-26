const {Router} = require("express");
const router = Router();

const {account} =  require("../controllers/account.controller");

router.post("/verify", account.get);

module.exports = router;