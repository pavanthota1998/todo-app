const express = require("express");

const app = express();
const timeStamp = () => new Date();

app.init = () => {
    console.log("App started and running")
}
app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.query);
    res.send("Done")
});

module.exports = app;
