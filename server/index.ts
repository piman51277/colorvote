//starts a simple server
import { app } from "./app";

import path from "path";

app.get("/", (req, res) => {
  //serve the index.html file
  res.sendFile(path.join(__dirname, "../web/index.html"));
});
