// gta6-meme-x-01 entry: hand the X post's address to the grader.
//
// main.ts does one thing: it reads POST.json from this repository and writes
// it, byte for byte, to /output/POST.json, where the gate reads it. The house
// then reads the post itself from X (its first picture and its text) and the
// AI judge ranks that. Nothing this program writes is judged.
//
// Node 22, standard library only: no network, no wall clock, no files
// outside the repository, and the two runs write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const raw = readFileSync(join(BOT_DIR, "POST.json"), "utf8");

// POST.json must be an object naming one X post; fail loudly otherwise
// instead of handing the gate a broken file. (JSON.parse returns any, so
// this needs no TypeScript-only syntax at all.)
const parsed = JSON.parse(raw);
if (typeof parsed.url !== "string" || !parsed.url.startsWith("https://")) {
  throw new Error("POST.json must name an X post URL");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "POST.json"), raw);
