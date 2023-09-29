import "./env";
import { readFileSync } from "fs";
import { resolve } from "path";

type certTypes = "key" | "cert" | "ca";
export type certConfig = {
  [key in certTypes]: string;
};

// The default letsencrypt names
const realNames: certConfig = {
  key: "privkey",
  cert: "cert",
  ca: "chain",
};

/**
 * Reads the certificate files from the file system
 * @returns {certConfig} The certificate configuration
 */
export function getCertConfig(): certConfig {
  const folder = process.env.KEY_PATH || "";
  const config: certConfig = {
    key: "",
    cert: "",
    ca: "",
  };

  for (const name in config) {
    try {
      const cert = readFileSync(
        resolve(folder, `${realNames[name as certTypes]}.pem`),
        "utf-8"
      );

      config[name as certTypes] = cert;
    } catch (err: any) {
      console.error(`Failed to read ${name}.pem`);
      throw err;
    }
  }

  return config;
}
