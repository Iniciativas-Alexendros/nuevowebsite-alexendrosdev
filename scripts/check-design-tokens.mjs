#!/usr/bin/env node
/**
 * Gate DESIGN §13 / ADR-0030: cero hex/rgb/hsl ni valores Tailwind arbitrarios
 * de color o px en componentes y páginas de producción.
 */
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const TARGETS = [path.join(ROOT, "src/components"), path.join(ROOT, "src/app")];
const EXTENSIONS = new Set([".ts", ".tsx", ".css"]);

const PATTERNS = [
  { name: "hex", re: /#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/ },
  { name: "rgb/hsl", re: /\b(?:rgb|rgba|hsl|hsla)\s*\(/i },
  {
    name: "tailwind-color-arbitrario",
    re: /(?:bg|text|border|from|to|via|fill|stroke|ring|outline|decoration|shadow)-\[#/,
  },
  {
    name: "tailwind-oklch-arbitrario",
    re: /(?:bg|text|border|from|to|via|fill|stroke|ring|outline|decoration|shadow)-\[oklch\(/i,
  },
  { name: "tailwind-px-arbitrario", re: /(?:^|[^\w-])[\w:-]*-\[\d+(?:\.\d+)?px\]/ },
];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (EXTENSIONS.has(path.extname(entry.name))) {
      files.push(full);
    }
  }
  return files;
}

function stripComments(source, ext) {
  if (ext === ".css") {
    return source.replace(/\/\*[\s\S]*?\*\//g, "");
  }
  return source.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:])\/\/.*$/gm, "$1");
}

const findings = [];
for (const target of TARGETS) {
  const files = await walk(target);
  for (const file of files) {
    const raw = await readFile(file, "utf8");
    const source = stripComments(raw, path.extname(file));
    const lines = source.split("\n");
    for (const [index, line] of lines.entries()) {
      for (const { name, re } of PATTERNS) {
        if (re.test(line)) {
          findings.push(`${path.relative(ROOT, file)}:${index + 1}: ${name}: ${line.trim()}`);
        }
      }
    }
  }
}

if (findings.length > 0) {
  console.error("check-design-tokens: valores arbitrarios (DESIGN §13 / ADR-0030):");
  for (const finding of findings) {
    console.error(`  ${finding}`);
  }
  process.exit(1);
}

console.log("check-design-tokens: ok");
