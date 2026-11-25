
"use client";

import { useEffect, useState } from "react";
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

const STORAGE_KEY = "lexicon-progress";

const DAY = 24 * 60 * 60 * 1000;
const TEN_MINUTES = 10 * 60 * 1000;

const emptyProgress: Progress = {
  xp: 0,
  mastered: [],
  revision: [],
  schedule: {},
};

function buildSessionQueue(progress: Progress): Word[] {
  const now = Date.now();

  const dueWords = words
    .filter((word) => {
      const schedule = progress.schedule[word.id];
      return schedule && schedule.dueAt <= now;
    })
    .sort(
      (a, b) =>
        progress.schedule[a.id].dueAt -
        progress.schedule[b.id].dueAt
    );

  const newWords = words.filter(
    (word) => !progress.schedule[word.id]
  );

  return [...dueWords, ...newWords];
}

function getNextInterval(repetitions: number): number {
  const intervals = [1, 3, 7, 14, 30];
  return intervals[Math.min(repetitions, intervals.length - 1)];
}

export default function LearnPage() {
  const [progress, setProgress] = useState<Progress>(emptyProgress);
  const [loaded, setLoaded] = useState(false);

  const [sessionWords, setSessionWords] = useState<Word[]>([]);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [finished, setFinished] = useState(false);

  const [known, setKnown] = useState(0);
  const [review, setReview] = useState(0);

  useEffect(() => {
    let savedProgress = emptyProgress;

    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        const parsed = JSON.parse(saved);

        savedProgress = {
          xp: parsed.xp ?? 0,
          mastered: parsed.mastered ?? [],
          revision: parsed.revision ?? [],
          schedule: parsed.schedule ?? {},
        };
      }
    } catch {
      console.error("Could not load learning progress.");
    }

    setProgress(savedProgress);
    setSessionWords(buildSessionQueue(savedProgress));
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [progress, loaded]);

  const word = sessionWords[index];

  function answer(didKnow: boolean) {
    if (!word) return;

    const wordId = word.id;
    const now = Date.now();
    const previousSchedule = progress.schedule[wordId];

    if (didKnow) {
      setKnown((previous) => previous + 1);

      const repetitions = previousSchedule?.repetitions ?? 0;
      const intervalDays = getNextInterval(repetitions);

      setProgress((previous) => ({
        ...previous,
        xp: previous.xp + 10,
        mastered: previous.mastered.includes(wordId)
          ? previous.mastered
          : [...previous.mastered, wordId],
        revision: previous.revision.filter((id) => id !== wordId),
        schedule: {
          ...previous.schedule,
          [wordId]: {
            dueAt: now + intervalDays * DAY,
            intervalDays,
            repetitions: repetitions + 1,
          },
        },
      }));
    } else {
      setReview((previous) => previous + 1);

      setProgress((previous) => ({
        ...previous,
        revision: previous.revision.includes(wordId)
          ? previous.revision
          : [...previous.revision, wordId],
        mastered: previous.mastered.filter((id) => id !== wordId),
        schedule: {
          ...previous.schedule,
          [wordId]: {
            dueAt: now + TEN_MINUTES,
            intervalDays: 0,
            repetitions: 0,
          },
        },
      }));
    }

    if (index === sessionWords.length - 1) {
      setFinished(true);
    } else {
      setIndex((previous) => previous + 1);
      setRevealed(false);
    }
  }

  function restart() {
    const nextQueue = buildSessionQueue(progress);

    setSessionWords(nextQueue);
    setIndex(0);
    setKnown(0);
    setReview(0);
    setRevealed(false);
    setFinished(false);
  }

  if (!loaded) return null;

  return (
    <main className="min-h-screen bg-white px-6 py-10 text-[#373247] md:px-12">
      <div className="mx-auto max-w-3xl">

        <a
          href="/"
          className="text-xs tracking-[0.2em] text-[#95839E] transition hover:text-[#62546E]"
        >
          ← LEXICON.
        </a>

        <header className="mb-12 mt-14 text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#A495A9]">
            EST. 2026 · THE LEARNING STUDIO
          </p>

          <h1 className="font-serif mt-5 text-5xl tracking-tight md:text-6xl">
            The Art of Recall.
          </h1>

          <p className="mt-4 text-sm text-[#95839E]">
            An exercise in remembering what you ought to know.
          </p>
        </header>

        <div className="mb-10 grid grid-cols-3 border-y border-[#EEE9EF] py-5 text-center">
          <div>
            <p className="font-serif text-3xl">{progress.xp}</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#A495A9]">
              Total XP
            </p>
          </div>

          <div className="border-x border-[#EEE9EF]">
            <p className="font-serif text-3xl">{known}</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#A495A9]">
              Remembered
            </p>
          </div>

          <div>
            <p className="font-serif text-3xl">{review}</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#A495A9]">
              To revise
            </p>
          </div>
        </div>

        {sessionWords.length > 0 && !finished && (
          <>
            <div className="mb-3 flex justify-between text-xs text-[#95839E]">
              <span>Today's practice</span>
              <span>{index + 1} / {sessionWords.length}</span>
            </div>

            <div className="mb-10 h-[3px] w-full bg-[#F0ECF1]">
              <div
                className="h-full bg-[#B8A3C7] transition-all duration-500"
                style={{
                  width: `${((index + 1) / sessionWords.length) * 100}%`,
                }}
              />
            </div>
          </>
        )}

        {sessionWords.length === 0 && !finished ? (
          <section className="border border-[#EEE9EF] px-7 py-16 text-center md:px-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#A495A9]">
              YOU ARE UP TO DATE
            </p>

            <h2 className="font-serif mt-6 text-4xl">
              Nothing due just yet.
            </h2>

            <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-[#95839E]">
              Your words are scheduled for future revision.
              Come back when your next review is due.
            </p>
          </section>
        ) : finished ? (
          <section className="border border-[#EEE9EF] px-7 py-14 text-center md:px-14">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#A495A9]">
              SESSION COMPLETE
            </p>

            <h2 className="font-serif mt-6 text-4xl">
              Quite the vocabulary.
            </h2>

            <div className="mx-auto my-10 grid max-w-sm grid-cols-2 divide-x divide-[#EEE9EF] border-y border-[#EEE9EF] py-6">
              <div>
                <p className="font-serif text-4xl">{known}</p>
                <p className="mt-2 text-xs text-[#95839E]">Remembered</p>
              </div>

              <div>
                <p className="font-serif text-4xl">{review}</p>
                <p className="mt-2 text-xs text-[#95839E]">To revise</p>
              </div>
            </div>

            <p className="mb-8 text-sm text-[#95839E]">
              You earned {known * 10} XP this session.
            </p>

            <button
              onClick={restart}
              className="border border-[#B8A3C7] px-8 py-3 text-xs uppercase tracking-[0.15em] text-[#62546E] transition hover:bg-[#F8F5FA]"
            >
              Start another session →
            </button>
          </section>
        ) : word ? (
          <section className="border border-[#EEE9EF] bg-white px-7 py-10 md:px-14 md:py-14">

            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#95839E]">
                {word.category}
              </span>

              <span className="text-[10px] uppercase tracking-[0.15em] text-[#B3A8B7]">
                {word.difficulty}
              </span>
            </div>

            <div className="min-h-[300px] py-12 text-center">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#A495A9]">
                {revealed ? "THE MEANING" : "CAN YOU RECALL THIS WORD?"}
              </p>

              <h2 className="font-serif mt-9 break-words text-4xl tracking-tight md:text-5xl">
                {word.term}
              </h2>

              <p className="mt-4 text-sm tracking-wide text-[#A495A9]">
                {word.pronunciation}
              </p>

              {!revealed ? (
                <button
                  onClick={() => setRevealed(true)}
                  className="mt-14 border-b border-[#B8A3C7] pb-2 text-xs uppercase tracking-[0.18em] text-[#62546E] transition hover:text-[#95839E]"
                >
                  Reveal meaning ↓
                </button>
              ) : (
                <div className="mx-auto mt-10 max-w-xl text-left">
                  <p className="text-sm leading-8 text-[#494252]">
                    {word.meaning}
                  </p>

                  <div className="my-8 border-l-2 border-[#D9CCDF] pl-5">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#A495A9]">
                      The nuance
                    </p>

                    <p className="mt-3 text-sm leading-7 text-[#75677D]">
                      {word.nuance}
                    </p>
                  </div>

                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#A495A9]">
                    In a sentence
                  </p>

                  <p className="font-serif mt-3 text-lg italic leading-8 text-[#62546E]">
                    “{word.example}”
                  </p>
                </div>
              )}
            </div>

            {revealed && (
              <div className="grid grid-cols-2 gap-4 border-t border-[#EEE9EF] pt-7">
                <button
                  onClick={() => answer(false)}
                  className="border border-[#E6D8D5] px-3 py-4 text-xs tracking-wide text-[#8C6D68] transition hover:bg-[#FBF7F6]"
                >
                  ✕ Didn't know
                </button>

                <button
                  onClick={() => answer(true)}
                  className="border border-[#DCE5D9] px-3 py-4 text-xs tracking-wide text-[#657A61] transition hover:bg-[#F7FAF6]"
                >
                  ✓ I knew it
                </button>
              </div>
            )}
          </section>
        ) : null}

        <footer className="mt-10 text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#B3A8B7]">
            A little pretension never hurt.
          </p>
        </footer>

      </div>
    </main>
  );
}
