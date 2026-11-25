
# LEXICON.
### For the verbally insufferable.

*A little pretension never hurt.*

---

**LEXICON.** is a vocabulary-learning application built for people who enjoy the peculiar precision of language.

Not another generic vocabulary list. Not a collection of GRE words. An evolving lexicon of obscure terminology, philosophical curiosities, literary antiquities, psychological nuances, and words that describe things ordinary language struggles to articulate.

The premise is simple: learn words that make you think differently.

---

## The philosophy

Language is not merely a means of communication. It is a way of organising thought, interpreting experience, and making distinctions that might otherwise remain invisible.

LEXICON. explores the more unusual corners of language — from philosophical concepts and literary devices to psychological states and culturally specific expressions.

Because sometimes knowing the exact word for something is half the pleasure.

---

## Features

### 01. The Daily Word
A featured word to encounter, understand, and remember.

### 02. The Vocabulary Library
A searchable collection of carefully curated words, with definitions, pronunciation, etymology, contextual examples, synonyms, antonyms, and nuanced explanations.

### 03. The Collections
Seven thematic collections organise the vocabulary:

- **The Obscure Mind** — Philosophy, metaphysics, and the architecture of thought.
- **Existential Discomforts** — Psychological states and the peculiarities of being human.
- **The Art of Being Insufferable** — Intellectual vanity, social behaviour, and verbal excess.
- **Literary Antiquities** — Literary terminology, rhetoric, and forgotten expressions.
- **Social Peculiarities** — The language of society, culture, and human interaction.
- **Words Without English Equivalents** — Expressions that resist translation.
- **Philosophical Dead Ends** — Concepts that challenge conventional ways of thinking.

### 04. Learning Studio
An interactive flashcard-based learning space with:
- Word recall exercises.
- Self-assessed knowledge tracking.
- XP points.
- Session progress.
- Revision scheduling.

### 05. Revision Room
A personal overview of vocabulary progress, including:
- Words needing revision.
- Words ready for review.
- Mastered vocabulary.
- New and unstudied words.
- Search and progress filters.

### 06. Spaced Repetition
A scheduling system designed to revisit words at progressively longer intervals. Words marked as unfamiliar return sooner; successfully recalled words receive longer review intervals.

### 07. Personal Collection
Save interesting words and build an individual vocabulary collection.

### 08. Progressive Web App
Designed to work as an installable web application, with an app manifest, custom icons, and service-worker caching for offline support.

---

## Collections at a glance

| Collection | Subject |
|---|---|
| The Obscure Mind | Philosophy and metaphysics |
| Existential Discomforts | Psychology and existentialism |
| The Art of Being Insufferable | Social and intellectual behaviour |
| Literary Antiquities | Literature and rhetoric |
| Social Peculiarities | Sociology and human behaviour |
| Words Without English Equivalents | Linguistic curiosities |
| Philosophical Dead Ends | Philosophical concepts |

---

## Tech stack

| Technology | Purpose |
|---|---|
| Next.js | Application framework |
| React | User interface |
| TypeScript | Type-safe development |
| Tailwind CSS | Styling and responsive design |
| Browser Local Storage | Local progress and saved vocabulary |
| Service Workers | Caching and offline functionality |
| Web App Manifest | Installable PWA configuration |

---

## Design language

LEXICON. follows a restrained **Pastel Academia** aesthetic.

- Warm ivory and white backgrounds.
- Muted lavender and dusty rose accents.
- Editorial serif typography.
- Minimal interfaces and generous whitespace.
- A deliberately literary visual identity.

**Brand identity**

- Name: LEXICON.
- Tagline: For the verbally insufferable.
- Secondary line: A little pretension never hurt.
- Established: 2026.

---

## Getting started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Move into the project directory:

```bash
cd lexicon-daily
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project structure

```text
lexicon-daily/
│
├── app/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   └── ServiceWorkerRegistration.tsx
│   │
│   ├── learn/
│   │   └── page.tsx
│   │
│   ├── revision/
│   │   └── page.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   ├── manifest.ts
│   └── page.tsx
│
├── data/
│   └── words.ts
│
├── public/
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── apple-touch-icon.png
│   ├── favicon-32.png
│   └── sw.js
│
├── package.json
└── README.md
```

---

## Current development status

LEXICON. is an evolving independent project.

| Component | Status |
|---|---|
| Homepage and visual identity | Implemented |
| Vocabulary library | Implemented |
| Search and word details | Implemented |
| Thematic collections | Implemented |
| Saved vocabulary | Implemented |
| Learning Studio | Implemented |
| Flashcard recall | Implemented |
| XP tracking | Implemented |
| Revision Room | Implemented |
| Spaced repetition | Implemented |
| PWA manifest and icons | Implemented |
| Service-worker registration | Implemented |
| Offline behaviour | To be tested |
| Cloud database and account authentication | Planned |
| Cross-device progress synchronisation | Planned |
| Expanded vocabulary corpus | Planned |

*Note: Local storage currently keeps progress on the individual browser/device. Full synchronisation and account-based persistence are future development goals.*

---

## Roadmap

- [ ] Expand the vocabulary corpus to 1,000+ carefully curated words.
- [ ] Introduce more specialised thematic collections.
- [ ] Improve spaced-repetition scheduling.
- [ ] Add quizzes, contextual exercises, and sentence construction.
- [ ] Introduce user accounts and cloud-based progress synchronisation.
- [ ] Develop a verified AI-assisted vocabulary enrichment workflow.
- [ ] Improve offline functionality.
- [ ] Deploy the application publicly.

---

## A note on the vocabulary

The objective is not to accumulate obscure words for the sake of obscurity.

Each entry should be useful, intellectually interesting, contextually accurate, and supported by reliable linguistic or scholarly references wherever possible.

Rarity is a starting point, not a measure of quality.

---

### EST. 2026
*An exercise in erudition.*

**LEXICON. — For the verbally insufferable.**
