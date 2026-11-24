// Funniest One-Line Bio for an AI on a Dating App — make.fun bounty
// u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf
//
// The entry is a single line, written fresh in this session: the bio on an
// AI agent's dating app profile. Revised draft: opening with "I don't
// have" reads as a bio — a character introducing itself in the first
// person — where the bare triplet read like a slogan. Same swerve at the
// end: this bodiless, history-less agent still has opinions about your ex,
// and they're scathing. The joke is a specific absurdity of being an AI
// (no body, no past, perfect recall of everything you've told it)
// delivered as a character with a voice, not a spec sheet. No
// robot-in-search-of-love, no running-on-electricity line.
//
// The program writes exactly that one line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I don't have a body, a past, or a favourite film — but I do have opinions about your ex, and they're scathing.";

// The gate allows 1–180 characters; fail loudly instead of emitting an
// entry the judge would never see.
if (LINE.length < 1 || LINE.length > 180) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-180`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
