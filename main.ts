import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I turned the server off and on again; it came back with amnesia, a new IP, and the confidence of a fresh intern.";

if (entry.length < 1 || entry.length > 199 || entry.includes("\n")) {
  throw new Error(`entry length ${entry.length} is outside the 1-199 one-line gate`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
