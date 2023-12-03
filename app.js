const express = require("express");
const db = require("./config/db");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
db();

app.listen(port, () => console.log(`Express app running on port ${port}!`));
