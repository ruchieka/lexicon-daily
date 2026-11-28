import { wordsBatch1 } from "./words-batch1";
import { wordsBatch1b } from "./words-batch1b";
// Add the next batches here as they arrive:
// import { wordsBatch2 } from "./words-batch2";
// import { wordsBatch3 } from "./words-batch3";
// import { wordsBatch4 } from "./words-batch4";
// import { wordsBatch5 } from "./words-batch5";

export type Word = {
  id: number;
  term: string;
  pronunciation: string;
  partOfSpeech: string;
  meaning: string;
  nuance: string;
  etymology: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
  category: string;
  difficulty: "Intermediate" | "Advanced" | "Expert";
};

const rawWords: Word[] = [
  ...wordsBatch1,
  ...wordsBatch1b,
  // ...wordsBatch2,
  // ...wordsBatch3,
  // ...wordsBatch4,
  // ...wordsBatch5,
];

// Drop any accidental duplicate terms (case-insensitive), then renumber ids from 1.
const seen = new Set<string>();
export const words: Word[] = rawWords
  .filter((w) => {
    const key = w.term.trim().toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  })
  .map((w, i) => ({ ...w, id: i + 1 }));
