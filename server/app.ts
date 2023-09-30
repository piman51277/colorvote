//creates and initializes the express app
import "./util/env";

import express from "express";

export const app = express();

//set CORS & CSP headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://colors.piman.dev");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Content-Security-Policy", "default-src 'self'");
  next();
});

//static assets
const oneWeek = 1000 * 60 * 60 * 24 * 7;

const cacheTime = process.env.ENVIROMENT === "dev" ? 0 : oneWeek;

app.use(
  "/asset",
  express.static("./web/assets", { maxAge: cacheTime, immutable: true })
);

//body parser
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//HTTP(S) servers
import https from "https";
import { certConfig, getCertConfig } from "./util/getCertConfig";

const httpsPort = process.env.HTTPS_PORT || 443;
let httpsCerts: certConfig = null!;
try {
  httpsCerts = getCertConfig();
  https.createServer(httpsCerts, app).listen(httpsPort);
} catch (e: any) {
  console.warn("Could not start HTTPS, running in HTTP-only mode");
  console.warn("Error: " + e.message);
}

import http from "http";

const httpPort = process.env.HTTP_PORT || 80;

try {
  http.createServer(app).listen(httpPort);
} catch (e) {
  console.error("Could not start HTTP server");
  throw e;
}
