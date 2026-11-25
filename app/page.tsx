
"use client";

import { useEffect, useMemo, useState } from "react";
import { words, type Word } from "../data/words";

const collections = [
  {
    id: "mind",
    number: "01",
    name: "The Obscure Mind",
    description: "Philosophy, existentialism and metaphysics",
    tags: ["Philosophy"],
    color: "bg-[#EEE8F2]",
  },
  {
    id: "existential",
    number: "02",
    name: "Existential Discomforts",
    description: "The strange business of being human",
    tags: ["Psychology", "Philosophy"],
    color: "bg-[#F3E8E5]",
  },
  {
    id: "insufferable",
    number: "03",
    name: "The Art of Being Insufferable",
    description: "Rhetoric, intellectual vanity and human behaviour",
    tags: ["Literature", "Psychology"],
    color: "bg-[#E9EEE6]",
  },
  {
    id: "antiquities",
    number: "04",
    name: "Literary Antiquities",
    description: "Rare literary terms and classical devices",
    tags: ["Literature"],
    color: "bg-[#F2EBDD]",
  },
  {
    id: "social",
    number: "05",
    name: "Social Peculiarities",
    description: "Culture, class and the rituals of society",
    tags: ["Sociology"],
    color: "bg-[#E8EBF2]",
  },
  {
    id: "untranslatable",
    number: "06",
    name: "Words Without English Equivalents",
    description: "Untranslatable expressions and linguistic curiosities",
    tags: ["Linguistic curiosities"],
    color: "bg-[#F3E8ED]",
  },
  {
    id: "deadends",
    number: "07",
    name: "Philosophical Dead Ends",
    description: "Paradoxes, contradictions and intellectual impasses",
    tags: ["Philosophy"],
    color: "bg-[#EAE8F0]",
  },
];

export default function Home() {
  const [activeCollection, setActiveCollection] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedWord, setSelectedWord] = useState<Word | null>(null);
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("lexicon-saved");
    if (stored) {
      try {
        setSavedIds(JSON.parse(stored));
      } catch {
        setSavedIds([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lexicon-saved", JSON.stringify(savedIds));
  }, [savedIds]);

  const dailyWord =
    words.find((word) => word.term === "Clinamen") ?? words[0];

  const activeCollectionData = collections.find(
    (collection) => collection.id === activeCollection
  );

  const filteredWords = useMemo(() => {
    let result = [...words];

    if (showSaved) {
      result = result.filter((word) => savedIds.includes(word.id));
    } else if (activeCollectionData) {
      result = result.filter((word) =>
        activeCollectionData.tags.includes(word.category)
      );
    }

    if (search.trim()) {
      const query = search.toLowerCase().trim();

      result = result.filter((word) => {
        const searchable = [
          word.term,
          word.meaning,
          word.nuance,
          word.etymology,
          word.category,
          word.example,
          ...word.synonyms,
          ...word.antonyms,
        ]
          .join(" ")
          .toLowerCase();

        return searchable.includes(query);
      });
    }

    return result;
  }, [search, activeCollectionData, showSaved, savedIds]);

  function toggleSaved(id: number) {
    setSavedIds((previous) =>
      previous.includes(id)
        ? previous.filter((savedId) => savedId !== id)
        : [...previous, id]
    );
  }

  function chooseCollection(id: string) {
    setActiveCollection(id);
    setShowSaved(false);
    setSelectedWord(null);
    document.getElementById("library")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#373247]">
      {/* HEADER */}
      <header className="border-b border-[#E8E1D9]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div>
            <div className="font-serif text-3xl tracking-[0.12em]">
              LEXICON<span className="text-[#A58CB1]">.</span>
            </div>
            <div className="mt-1 text-[9px] uppercase tracking-[0.24em] text-[#95839E]">
              Est. 2026 · An exercise in erudition
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-xs tracking-wider text-[#756B7C] md:flex">
            <a href="#collections" className="hover:text-[#A58CB1]">
              Collections
            </a>
            <a href="#library" className="hover:text-[#A58CB1]">
              The library
            </a>
            <button
              onClick={() => {
                setShowSaved(true);
                setActiveCollection("all");
                document.getElementById("library")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="hover:text-[#A58CB1]"
            >
              My collection
            </button>
          </nav>

          <button
            onClick={() => {
              setShowSaved(true);
              setActiveCollection("all");
              document.getElementById("library")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="rounded-full border border-[#DDD2E2] px-4 py-2 text-xs text-[#75647E] hover:bg-[#EEE8F2]"
          >
            Saved · {savedIds.length}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.7fr] md:items-center">
          <div>
            <p className="mb-6 text-[10px] uppercase tracking-[0.32em] text-[#A58CB1]">
              A vocabulary for the incurably curious
            </p>

            <h1 className="max-w-3xl font-serif text-5xl leading-[1.08] tracking-tight md:text-7xl">
              A little pretension
              <br />
              <span className="italic text-[#A58CB1]">never hurt.</span>
            </h1>

            <p className="mt-7 max-w-lg text-sm leading-7 text-[#817789]">
              Uncommon words. Curious etymologies. The occasional
              intellectual indulgence. An ever-expanding collection
              of things worth knowing.
            </p>

            <a
              href="#collections"
              className="mt-9 inline-flex items-center gap-3 border-b border-[#A58CB1] pb-2 text-xs uppercase tracking-[0.18em] text-[#65566E]"
            >
              Explore the collections
              <span>↗</span>
            </a>
          </div>

          <div className="relative rounded-sm bg-[#EEE8F2] p-8 md:p-10">
            <div className="absolute right-7 top-7 text-xs text-[#A58CB1]">
              WORD NO. 001
            </div>

            <div className="pt-10">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#95839E]">
                Today's word
              </p>

              <h2 className="mt-4 font-serif text-4xl italic text-[#574A60]">
                {dailyWord.term}
              </h2>

              <p className="mt-2 text-xs text-[#95839E]">
                {dailyWord.pronunciation}
              </p>

              <div className="my-7 h-px bg-[#DCD1E2]" />

              <p className="text-sm leading-7 text-[#655B6D]">
                {dailyWord.meaning}
              </p>

              <button
                onClick={() => setSelectedWord(dailyWord)}
                className="mt-7 text-xs uppercase tracking-[0.16em] text-[#75647E] hover:text-[#A58CB1]"
              >
                Discover its nuances ↗
              </button>
            </div>

            <div className="mt-8 text-right font-serif text-5xl italic text-[#D5C7DD]">
              01
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section
        id="collections"
        className="border-y border-[#E8E1D9] bg-[#F4F0E9] py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#A58CB1]">
                The catalogue
              </p>
              <h2 className="mt-3 font-serif text-4xl">
                Collections <span className="italic">of curiosity.</span>
              </h2>
            </div>

            <p className="max-w-xs text-xs leading-6 text-[#958A98]">
              Seven little corners of the intellectual universe.
              Choose your rabbit hole.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection) => {
              const count = words.filter((word) =>
                collection.tags.includes(word.category)
              ).length;

              return (
                <button
                  key={collection.id}
                  onClick={() => chooseCollection(collection.id)}
                  className={`group min-h-48 rounded-sm p-7 text-left transition duration-200 hover:-translate-y-1 hover:shadow-md ${collection.color}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl text-[#A58CB1]">
                      {collection.number}
                    </span>
                    <span className="text-lg text-[#9B8AA3] transition group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-7 font-serif text-xl text-[#4D4354]">
                    {collection.name}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#817789]">
                    {collection.description}
                  </p>

                  <div className="mt-5 text-[9px] uppercase tracking-[0.18em] text-[#95839E]">
                    {count} entries · Explore
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* LIBRARY */}
      <section id="library" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#A58CB1]">
            The growing archive
          </p>

          <h2 className="mt-3 font-serif text-4xl">
            {showSaved
              ? "Your private collection."
              : activeCollectionData
                ? activeCollectionData.name + "."
                : "Explore the lexicon."}
          </h2>

          <p className="mt-3 text-sm text-[#958A98]">
            {filteredWords.length} {filteredWords.length === 1 ? "word" : "words"}{" "}
            currently in this selection.
          </p>
        </div>

        {/* SEARCH */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <div className="flex flex-1 items-center gap-3 rounded-sm border border-[#E4DBE5] bg-white/60 px-5 py-4">
            <span className="text-[#A58CB1]">⌕</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search a word, meaning, synonym or idea..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-[#B3A9B7]"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="text-xs text-[#95839E]"
              >
                Clear
              </button>
            )}
          </div>

          <button
            onClick={() => {
              setShowSaved(!showSaved);
              setActiveCollection("all");
              setSelectedWord(null);
            }}
            className={`rounded-sm border px-6 py-3 text-xs tracking-wider ${
              showSaved
                ? "border-[#A58CB1] bg-[#EEE8F2] text-[#65566E]"
                : "border-[#E4DBE5] text-[#817789] hover:bg-[#EEE8F2]"
            }`}
          >
            ♡ {showSaved ? "Showing saved" : "My saved words"}
          </button>
        </div>

        {/* FILTERS */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => {
              setActiveCollection("all");
              setShowSaved(false);
            }}
            className={`rounded-full px-4 py-2 text-[10px] tracking-wider ${
              activeCollection === "all" && !showSaved
                ? "bg-[#574A60] text-white"
                : "border border-[#E4DBE5] text-[#817789] hover:bg-[#EEE8F2]"
            }`}
          >
            All words
          </button>

          {collections.map((collection) => (
            <button
              key={collection.id}
              onClick={() => {
                setActiveCollection(collection.id);
                setShowSaved(false);
              }}
              className={`rounded-full px-4 py-2 text-[10px] tracking-wider ${
                activeCollection === collection.id && !showSaved
                  ? "bg-[#574A60] text-white"
                  : "border border-[#E4DBE5] text-[#817789] hover:bg-[#EEE8F2]"
              }`}
            >
              {collection.name}
            </button>
          ))}
        </div>

        {/* WORD LIST */}
        <div className="grid gap-4 md:grid-cols-2">
          {filteredWords.map((word) => (
            <article
              key={word.id}
              className="rounded-sm border border-[#E8E1D9] bg-white/50 p-6 transition hover:border-[#CFC0D6] hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <button
                  onClick={() => setSelectedWord(word)}
                  className="text-left"
                >
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#A58CB1]">
                    {word.category} · {word.difficulty}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-[#574A60]">
                    {word.term}
                  </h3>
                  <p className="mt-1 text-xs text-[#A399A8]">
                    {word.pronunciation} · {word.partOfSpeech}
                  </p>
                </button>

                <button
                  onClick={() => toggleSaved(word.id)}
                  aria-label={
                    savedIds.includes(word.id)
                      ? "Remove saved word"
                      : "Save word"
                  }
                  className={`text-xl ${
                    savedIds.includes(word.id)
                      ? "text-[#A58CB1]"
                      : "text-[#C8BDC9] hover:text-[#A58CB1]"
                  }`}
                >
                  {savedIds.includes(word.id) ? "♥" : "♡"}
                </button>
              </div>

              <p className="mt-5 text-sm leading-6 text-[#766C7B]">
                {word.meaning}
              </p>

              <button
                onClick={() => setSelectedWord(word)}
                className="mt-5 border-b border-[#D8C9DE] pb-1 text-[10px] uppercase tracking-[0.15em] text-[#75647E]"
              >
                Read the entry ↗
              </button>
            </article>
          ))}
        </div>

        {filteredWords.length === 0 && (
          <div className="rounded-sm border border-dashed border-[#D8C9DE] py-16 text-center">
            <p className="font-serif text-2xl italic text-[#75647E]">
              Nothing in the archives.
            </p>
            <p className="mt-3 text-xs text-[#958A98]">
              Try another search, collection or saved-word selection.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCollection("all");
                setShowSaved(false);
              }}
              className="mt-6 text-xs text-[#A58CB1] underline"
            >
              Reset the library
            </button>
          </div>
        )}
      </section>

      {/* WORD DETAIL PANEL */}
      {selectedWord && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#30283A]/50 p-4"
          onClick={() => setSelectedWord(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-sm bg-[#F8F5EF] p-7 shadow-2xl md:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <p className="text-[9px] uppercase tracking-[0.22em] text-[#A58CB1]">
                The lexicon · Entry {String(selectedWord.id).padStart(3, "0")}
              </p>
              <button
                onClick={() => setSelectedWord(null)}
                className="text-xl text-[#95839E]"
              >
                ×
              </button>
            </div>

            <h2 className="mt-8 font-serif text-4xl italic text-[#574A60] md:text-5xl">
              {selectedWord.term}
            </h2>

            <p className="mt-3 text-xs text-[#95839E]">
              {selectedWord.pronunciation} · {selectedWord.partOfSpeech}
            </p>

            <div className="my-7 h-px bg-[#E4DBE5]" />

            <div className="space-y-7">
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#A58CB1]">
                  Definition
                </p>
                <p className="mt-2 text-sm leading-7 text-[#574F5D]">
                  {selectedWord.meaning}
                </p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#A58CB1]">
                  The nuance
                </p>
                <p className="mt-2 text-sm leading-7 text-[#756B7C]">
                  {selectedWord.nuance}
                </p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#A58CB1]">
                  Etymology
                </p>
                <p className="mt-2 text-sm leading-7 text-[#756B7C]">
                  {selectedWord.etymology}
                </p>
              </div>

              <div className="rounded-sm bg-[#EEE8F2] p-5">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#95839E]">
                  In a sentence
                </p>
                <p className="mt-3 font-serif text-lg italic leading-7 text-[#574A60]">
                  “{selectedWord.example}”
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#A58CB1]">
                    Synonyms
                  </p>
                  <p className="mt-3 text-xs leading-6 text-[#756B7C]">
                    {selectedWord.synonyms.join(" · ")}
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#A58CB1]">
                    Antonyms
                  </p>
                  <p className="mt-3 text-xs leading-6 text-[#756B7C]">
                    {selectedWord.antonyms.join(" · ")}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-[#E4DBE5] pt-6">
                <p className="text-[9px] uppercase tracking-[0.15em] text-[#95839E]">
                  {selectedWord.category} · {selectedWord.difficulty}
                </p>
                <button
                  onClick={() => toggleSaved(selectedWord.id)}
                  className="rounded-full border border-[#CFC0D6] px-5 py-3 text-xs text-[#75647E] hover:bg-[#EEE8F2]"
                >
                  {savedIds.includes(selectedWord.id)
                    ? "♥ Saved to collection"
                    : "♡ Save this word"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-[#E8E1D9] px-6 py-10 text-center">
        <p className="font-serif text-2xl tracking-[0.15em]">
          LEXICON<span className="text-[#A58CB1]">.</span>
        </p>
        <p className="mt-3 text-[9px] uppercase tracking-[0.25em] text-[#A399A8]">
          For the verbally insufferable.
        </p>
        <p className="mt-5 text-[10px] text-[#B0A5B2]">
          A little pretension never hurt.
        </p>
      </footer>
    </main>
  );
}
