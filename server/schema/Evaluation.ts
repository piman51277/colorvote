import mongoose from "mongoose";

const EvaluationSchema = new mongoose.Schema({
  timestamp: Number,
  leftColor: String,
  rightColor: String,
  rightWins: Boolean,
});

export const EvaluationEntry = mongoose.model(
  "Evaluation",
  EvaluationSchema,
  "evaluations"
);
