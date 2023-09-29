import { getColors } from "./api/getColors";

//create a proper event object for both left and right buttons
import EventEmitter from "events";
import { ready } from "./util/ready";
import { reportResult } from "./api/reportResult";

const clickEvent = new EventEmitter();

ready(() => {
  document.getElementById("left-color")!.addEventListener("click", () => {
    clickEvent.emit("left");
  });

  document.getElementById("right-color")!.addEventListener("click", () => {
    clickEvent.emit("right");
  });
});

export async function trial(): Promise<void> {
  const colors = await getColors();

  document.getElementById("left-color")!.style.background =
    "#" + colors.leftColor;
  document.getElementById("right-color")!.style.background =
    "#" + colors.rightColor;

  const winner = await new Promise<string>((resolve) => {
    clickEvent.once("left", () => {
      resolve("left");
    });

    clickEvent.once("right", () => {
      resolve("right");
    });
  });

  reportResult(colors.leftColor, colors.rightColor, winner);

  return;
}
