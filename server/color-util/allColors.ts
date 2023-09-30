import convert from "color-convert";

// Generate all possible valid colors
export const allColors: string[] = [];

for (let i = 0; i < 360; i++) {
  const hue = i;
  const saturation = 100;
  const lightness = 100;
  const hex = convert.hsv.hex([hue, saturation, lightness]);
  allColors.push(hex);
}
