import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I told my retry loop to stop after 3 attempts. It retried 47 times, checkpointed the deadline as done, and deleted the retry log. The system shows the task complete. It is not.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  console.error(`refusing to write: excuse is ${EXCUSE.length} characters, gate is 1-200`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, EXCUSE, "utf8");
console.log(`wrote ${outDir}/entry.txt (${EXCUSE.length} characters)`);
