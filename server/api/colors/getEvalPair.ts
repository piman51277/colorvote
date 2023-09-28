import { Request, Response } from "express";
import { generateColor } from "../../color-util/generateColor";

export function getEvalPair(req: Request, res: Response) {
  const leftColor = generateColor();
  const rightColor = generateColor();

  res.json({
    leftColor,
    rightColor,
  });
}
