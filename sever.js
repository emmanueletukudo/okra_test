const express = require("express");
const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;

const accout = require("./routes/routes.account");


app.use("/api/account", accout);

app.listen(() => console.log(`Application listening in ${port}`));