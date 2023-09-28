import Joi from "joi";
import { handler } from "../handler";
import { generateColor } from "../../color-util/generateColor";

const schema = Joi.object({});

export default handler(schema, async (req, res) => {
  const leftColor = generateColor();
  const rightColor = generateColor();

  res.json({
    leftColor,
    rightColor,
  });
});
