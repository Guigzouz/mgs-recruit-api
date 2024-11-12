const { default: mongoose } = require("mongoose");

const rectruitSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: {
    type: String,
    enum: ["M", "F"],
    default: "M",
  },
  recruitment_date: { type: Date, default: Date.now, required: true },
  combat_unit_points: { type: Number, required: true },
  research_and_development_points: { type: Number, required: true },
  mess_hall_points: { type: Number, required: true },
  medical_points: { type: Number, required: true },
  intelligence_points: { type: Number, required: true },
  motherbase_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Motherbase",
    required: true,
  },
});

module.exports = {
  rectruitSchema,
};
