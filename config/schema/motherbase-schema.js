const { default: mongoose } = require("mongoose");

const motherbaseSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  gmp_count: { type: Number, required: true },

  //   each of those fields can be represented by
  //   dynamically counting the recruits points of each category

  combat_unit_overall_points: { type: Number },
  research_and_development_overall_points: { type: Number },
  mess_hall_overall_points: { type: Number },
  medical_overall_points: { type: Number },
  intelligence_overall_points: { type: Number },
});

module.exports = {
  motherbaseSchema,
};
