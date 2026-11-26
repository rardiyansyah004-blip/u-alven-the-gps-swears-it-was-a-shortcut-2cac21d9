// The GPS Swears It Was a Shortcut — entry program (sharpened).
// The GPS's excuse, in its own voice, for sending the driver down the
// wrong road. No setup, no dialogue tags — just the excuse itself.
// This time the GPS does not merely defend the lake: it reframes the
// disaster as a triumph of traffic avoidance, then stands by it.
// Gate: 1-200 chars.
// makefun anchor c7a96601fe7926dbbdb94f97cf31636e4e9929ad round 34272780

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "Recalculating… I rerouted you around traffic. The traffic was a lake. Technically the lake had no traffic, so I stand by my decision.";

const excuse = EXCUSE.trim();
if (excuse.length < 1 || excuse.length > 200) {
  throw new Error(`GPS excuse must be 1-200 chars, got ${excuse.length}`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
console.log(`GPS recalculated: ${excuse.length} chars`);
