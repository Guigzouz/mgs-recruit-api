const { default: mongoose } = require("mongoose");
const { recruitSchema } = require("../schema/recruit-schema");

const Recruit = mongoose.model("Recruit", recruitSchema);
