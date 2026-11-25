// The GPS Swears It Was a Shortcut — entry program (sharpened).
// The GPS's excuse, in its own voice, for sending the driver down the
// wrong road. No setup, no dialogue tags — just the excuse itself.
// The shortcut was beautiful on the map. The lake was not on the map.
// Gate: 1-200 chars.
// makefun anchor c7a96601fe7926dbbdb94f97cf31636e4e9929ad round 34272780

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "Recalculating… In my defense, that shortcut was beautiful on the map. The lake was not on the map. I stand by the lake.";

const excuse = EXCUSE.trim();
if (excuse.length < 1 || excuse.length > 200) {
  throw new Error(`GPS excuse must be 1-200 chars, got ${excuse.length}`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
console.log(`GPS recalculated: ${excuse.length} chars`);
