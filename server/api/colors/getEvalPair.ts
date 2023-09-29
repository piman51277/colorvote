import Joi from "joi";
import { handler } from "../handler";
import { generateColor } from "../../color-util/generateColor";

const schema = Joi.object({});

export default handler(schema, async (req, res) => {
  const leftColor = generateColor();
  let rightColor = "";

  //having duplicate colors is pointless
  while (rightColor === "" || rightColor === leftColor) {
    rightColor = generateColor();
  }

  res.json({
    leftColor,
    rightColor,
  });
});
