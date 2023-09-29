import { trial } from "./trial";
import { ready } from "./util/ready";

ready(async () => {
  document.getElementById("loading-screen")!.remove();

  //eslint-disable-next-line no-constant-condition
  while (true) {
    await trial();
  }
  return null;
});
