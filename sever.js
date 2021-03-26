const express = require("express");
const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;

router.get("/", (req, res) => {
    res.send("Hellow World");
});

app.listen(() => console.log(`Application listening in ${port}`));