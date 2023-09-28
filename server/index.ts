//starts a simple server
import { app } from "./app";

//connects to the database
import "./util/connectDB";

import path from "path";

app.get("/", (req, res) => {
  //serve the index.html file
  res.sendFile(path.join(__dirname, "../web/index.html"));
});
