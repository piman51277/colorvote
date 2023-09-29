export interface ColorPair {
  leftColor: string;
  rightColor: string;
}

export async function getColors(): Promise<ColorPair> {
  const response = await fetch("/api/colors/getEvalPair", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 200) {
    throw new Error("Failed to fetch colors");
  }

  const data: ColorPair = await response.json();

  return data;
}
