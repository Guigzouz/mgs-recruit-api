const express = require("express");
const cors = require("cors");

const db = require("./config/db");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

// Import  routes
const routes = require("./src/routes/index");

// Use  routes with a specific path, for example "/"

app.use(cors());

app.use(express.json());
app.use("/", routes);

// app.get("/", (req, res) => res.send("Hello World!"));
db();

// const kittySchema = new mongoose.Schema({
//   name: String,
// });

// kittySchema.methods.speak = function speak() {
//   const greeting = this.name
//     ? "Meow name is " + this.name
//     : "I don't have a name";
//   console.log(greeting);
// };

// const Kitten = mongoose.model("Kitten", kittySchema);

// const silence = new Kitten({ name: "Silence" });
// console.log(silence.name); // 'Silence'

// const fluffy = new Kitten({ name: "fluffy" });
// fluffy.speak(); // "Meow name is fluffy"

app.listen(port, () => console.log(`Express app running on port ${port}!`));
