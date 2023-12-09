const express = require("express");
const db = require("./config/db");

const app = express();
const port = 3000;

// Import recruit routes
const recruitRoutes = require("./src/routes/index");

// Use recruit routes with a specific path, for example "/recruit"
app.use("/recruit", recruitRoutes);

app.get("/", (req, res) => res.send("Hello World!"));
db();

app.listen(port, () => console.log(`Express app running on port ${port}!`));
