const express = require("express");
const port = process.env.PORT || 5000;
const account = require("./routes/routes.account");

const app = express();
app.use(express.json({limit: '50mb'}));

app.get("/", (req, res) => {
    res.send("Hellow world");
})

app.listen(port, () => console.log(`Application listening in ${port}`));

app.use("/api/account", account);