
"use client";

import { useEffect, useMemo, useState } from "react";
import { words, type Word } from "../../data/words";

type ScheduleItem = {
  dueAt: number;
  intervalDays: number;
  repetitions: number;
};

type Progress = {
  xp: number;
  mastered: number[];
  revision: number[];
  schedule: Record<number, ScheduleItem>;
};

type Filter =
  | "All"
  | "Needs revision"
  | "Ready to review"
  | "Mastered"
  | "New";

const STORAGE_KEY = "lexicon-progress";

const emptyProgress: Progress = {
  xp: 0,
  mastered: [],
  revision: [],
  schedule: {},
};

function getStatus(word: Word, progress: Progress, now: number) {
  const schedule = progress.schedule[word.id];

  if (progress.revision.includes(word.id)) {
    return "Needs revision";
  }

  if (schedule && schedule.dueAt <= now) {
    return "Ready to review";
  }

  if (progress.mastered.includes(word.id)) {
    return "Mastered";
  }

  if (schedule) {
    return "Scheduled";
  }

  return "New";
}

function getDueLabel(schedule?: ScheduleItem) {
  if (!schedule) return "Not studied yet";

  if (schedule.dueAt <= Date.now()) {
    return "Ready now";
  }

  return `Due ${new Date(schedule.dueAt).toLocaleString([], {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "2-digit",
  })}`;
}

export default function RevisionPage() {
  const [progress, setProgress] = useState<Progress>(emptyProgress);
  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        const parsed = JSON.parse(saved);

        setProgress({
          xp: parsed.xp ?? 0,
          mastered: parsed.mastered ?? [],
          revision: parsed.revision ?? [],
          schedule: parsed.schedule ?? {},
        });
      }
    } catch {
      console.error("Could not load revision progress.");
    }

    setLoaded(true);
  }, []);

  const now = Date.now();

  const counts = useMemo(() => {
    const statuses = words.map((word) =>
      getStatus(word, progress, now)
    );

    return {
      total: words.length,
      revision: statuses.filter(
        (status) => status === "Needs revision"
      ).length,
      due: statuses.filter(
        (status) => status === "Ready to review"
      ).length,
      mastered: statuses.filter(
        (status) => status === "Mastered"
      ).length,
      newWords: statuses.filter(
        (status) => status === "New"
      ).length,
    };
  }, [progress, now]);

  const filteredWords = useMemo(() => {
    return words.filter((word) => {
      const status = getStatus(word, progress, now);

      const matchesFilter =
        filter === "All" ||
        (filter === "New" && status === "New") ||
        status === filter;

      const query = search.toLowerCase().trim();

      const matchesSearch =
        !query ||
        word.term.toLowerCase().includes(query) ||
        word.meaning.toLowerCase().includes(query) ||
        word.category.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [progress, search, filter, now]);

  function statusStyle(status: string) {
    switch (status) {
      case "Needs revision":
        return "border-[#E6D8D5] text-[#8C6D68]";
      case "Ready to review":
        return "border-[#D9CCDF] text-[#75617F]";
      case "Mastered":
        return "border-[#DCE5D9] text-[#657A61]";
      case "Scheduled":
        return "border-[#E7E1EB] text-[#95839E]";
      default:
        return "border-[#EEE9EF] text-[#A495A9]";
    }
  }

  if (!loaded) return null;

  return (
    <main className="min-h-screen bg-white px-6 py-10 text-[#373247] md:px-12">
      <div className="mx-auto max-w-4xl">

        <a
          href="/"
          className="text-xs tracking-[0.2em] text-[#95839E] transition hover:text-[#62546E]"
        >
          ← LEXICON.
        </a>

        <header className="mb-12 mt-14">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#A495A9]">
            EST. 2026 · YOUR PERSONAL DICTIONARY
          </p>

          <h1 className="font-serif mt-5 text-5xl tracking-tight md:text-6xl">
            The Revision Room.
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-7 text-[#95839E]">
            A record of what you've learnt, what you've forgotten,
            and what deserves another look.
          </p>
        </header>

        <div className="mb-12 grid grid-cols-2 border-y border-[#EEE9EF] py-6 text-center md:grid-cols-4">
          <div className="py-2">
            <p className="font-serif text-3xl">{counts.total}</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-[#A495A9]">
              Total words
            </p>
          </div>

          <div className="border-l border-[#EEE9EF] py-2">
            <p className="font-serif text-3xl">{counts.revision}</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-[#A495A9]">
              To revise
            </p>
          </div>

          <div className="border-l border-[#EEE9EF] py-2">
            <p className="font-serif text-3xl">{counts.due}</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-[#A495A9]">
              Due now
            </p>
          </div>

          <div className="border-l border-[#EEE9EF] py-2">
            <p className="font-serif text-3xl">{counts.mastered}</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-[#A495A9]">
              Mastered
            </p>
          </div>
        </div>

        <div className="mb-7">
          <label
            htmlFor="word-search"
            className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-[#A495A9]"
          >
            Search your vocabulary
          </label>

          <input
            id="word-search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search words, meanings or categories..."
            className="w-full border border-[#EEE9EF] bg-white px-5 py-4 text-sm text-[#373247] outline-none transition placeholder:text-[#B3A8B7] focus:border-[#B8A3C7]"
          />
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {(
            [
              "All",
              "Needs revision",
              "Ready to review",
              "Mastered",
              "New",
            ] as Filter[]
          ).map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`border px-4 py-2 text-[10px] uppercase tracking-[0.1em] transition ${
                filter === item
                  ? "border-[#B8A3C7] bg-[#F8F5FA] text-[#62546E]"
                  : "border-[#EEE9EF] text-[#95839E] hover:border-[#D9CCDF]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mb-4 flex items-center justify-between border-b border-[#EEE9EF] pb-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#A495A9]">
            Your collection
          </p>

          <p className="text-xs text-[#95839E]">
            {filteredWords.length} words
          </p>
        </div>

        <div>
          {filteredWords.length === 0 ? (
            <div className="py-16 text-center">
              <p className="font-serif text-2xl">
                Nothing found.
              </p>

              <p className="mt-3 text-sm text-[#95839E]">
                Try another search or category.
              </p>
            </div>
          ) : (
            filteredWords.map((word) => {
              const status = getStatus(word, progress, now);
              const schedule = progress.schedule[word.id];

              return (
                <article
                  key={word.id}
                  className="border-b border-[#EEE9EF] py-6"
                >
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div className="min-w-0">
                      <h2 className="font-serif text-2xl">
                        {word.term}
                      </h2>

                      <p className="mt-1 text-xs text-[#A495A9]">
                        {word.pronunciation} · {word.partOfSpeech}
                      </p>

                      <p className="mt-3 text-sm leading-6 text-[#75677D]">
                        {word.meaning}
                      </p>

                      <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-[#B3A8B7]">
                        {word.category}
                      </p>
                    </div>

                    <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
                      <span
                        className={`border px-3 py-1.5 text-[10px] uppercase tracking-[0.1em] ${statusStyle(status)}`}
                      >
                        {status}
                      </span>

                      <span className="text-[11px] text-[#A495A9]">
                        {getDueLabel(schedule)}
                      </span>

                      {schedule && schedule.repetitions > 0 && (
                        <span className="text-[10px] text-[#B3A8B7]">
                          {schedule.repetitions} successful reviews
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>

        <footer className="mt-12 border-t border-[#EEE9EF] pt-8 text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#B3A8B7]">
            A little pretension never hurt.
          </p>
        </footer>

      </div>
    </main>
  );
}
