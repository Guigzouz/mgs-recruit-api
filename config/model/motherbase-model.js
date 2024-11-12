const { default: mongoose } = require("mongoose");
const { motherbaseSchema } = require("../schema/motherbase-schema");

const Motherbase = mongoose.model("Recruit", motherbaseSchema);
