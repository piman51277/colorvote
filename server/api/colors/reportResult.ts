import Joi from "joi";
import { handler } from "../handler";
import { EvaluationEntry } from "../../schema/Evaluation";
import { allColors } from "../../color-util/allColors";

const schema = Joi.object({
  leftColor: Joi.string()
    .required()
    .valid(...allColors),
  rightColor: Joi.string()
    .required()
    .valid(...allColors),
  winner: Joi.string().valid("left", "right").required(),
});

export default handler(schema, async (req, res) => {
  const { leftColor, rightColor, winner } = req.body;
  const rightWins = winner === "right";
  const timestamp = Date.now();
  EvaluationEntry.create({
    leftColor,
    rightColor,
    rightWins,
    timestamp,
  });

  res.json({ message: "OK" });
});
