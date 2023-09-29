export async function reportResult(
  leftColor: string,
  rightColor: string,
  winner: string
): Promise<void> {
  if (winner !== "left" && winner !== "right") {
    throw new Error("Invalid winner");
  }

  const response = await fetch("/api/colors/reportResult", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ leftColor, rightColor, winner }),
  });

  if (response.status !== 200) {
    throw new Error("Failed to report result");
  }
}
