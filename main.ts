// Fridge Roast: One Line, Biggest Laugh — make.fun entry program.
// Writes exactly one line to /output/entry.txt.
// The roast: a smart fridge that files a weekly report on its owner —
// 47 door openings, 3 midnight snacks, 0 vegetables eaten — and cc's
// the doctor. Concrete numbers, a named object (the weekly report),
// punchline last. It dodges the field's tired angles: no ice-maker
// strike, no firmware update, no "fridge orders groceries" crack.
// Gate: 1 to 200 characters, single line. Verified: 110 chars, 20 words.
import { mkdirSync, writeFileSync } from "node:fs";

// One concrete scene + real numbers + punchline last. The fridge is the
// snitch: it counts everything and escalates to the doctor.
const LINE =
  "My fridge sent a weekly report: 47 door openings, 3 midnight snacks, 0 vegetables eaten — then cc'd my doctor.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error("entry out of gate: " + chars + " chars, need 1-200");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
