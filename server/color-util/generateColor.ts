import crypto from "crypto";
import convert from "color-convert";

export function generateColor(): string {
  //we want ideal distribution of colors
  //so we use crypto.randomInt
  const hue = crypto.randomInt(0, 360);

  //for the purposes of this study,
  //saturation and lightness are fixed at 100 %
  const saturation = 100;
  const lightness = 100;

  //convert to hex
  const hex = convert.hsv.hex([hue, saturation, lightness]);

  return hex;
}
