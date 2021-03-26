const {Router} = require("express");
const router = Router();

const {account} =  require("../controllers/banks.controller");

router.post("/banks", account.banks);

module.exports = router;