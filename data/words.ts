
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

export const words: Word[] = [
  {
    id: 1,
    term: "Clinamen",
    pronunciation: "/ˈklaɪnəmən/",
    partOfSpeech: "Noun",
    meaning: "An unpredictable swerve in the motion of atoms, in ancient Epicurean philosophy.",
    nuance: "Later adopted as a metaphor for deviation, creative disruption, or the unexpected departure from an established order.",
    etymology: "Latin clinamen, from clinare, meaning to bend or incline.",
    example: "Her entire artistic practice seemed organised around the clinamen: the deliberate refusal to follow an expected trajectory.",
    synonyms: ["Deviation", "Swerve", "Deflection"],
    antonyms: ["Conformity", "Regularity", "Determinism"],
    category: "Philosophy",
    difficulty: "Expert"
  },
  {
    id: 2,
    term: "Apophasis",
    pronunciation: "/əˈpɒfəsɪs/",
    partOfSpeech: "Noun",
    meaning: "A rhetorical device in which a speaker draws attention to something by claiming not to mention it.",
    nuance: "The classic manoeuvre of saying that one will not discuss someone's scandal, while ensuring everyone hears about it.",
    etymology: "Greek apophasis, meaning denial or negation.",
    example: "His remark, 'I won't mention her rather questionable professional history,' was a masterclass in apophasis.",
    synonyms: ["Paralipsis", "Preterition"],
    antonyms: ["Direct assertion", "Explicit statement"],
    category: "Literature",
    difficulty: "Expert"
  },
  {
    id: 3,
    term: "Acedia",
    pronunciation: "/əˈsiːdiə/",
    partOfSpeech: "Noun",
    meaning: "A state of spiritual or mental listlessness, apathy, and profound indifference.",
    nuance: "Historically associated with monastic life, it describes more than ordinary boredom: a weariness with one's duties, purpose, or existence.",
    etymology: "Late Latin acedia, from Greek akēdia, meaning lack of care.",
    example: "The monastery's chronicler described a creeping acedia that made even prayer feel insurmountable.",
    synonyms: ["Listlessness", "Apathy", "Despondency"],
    antonyms: ["Zeal", "Fervour", "Engagement"],
    category: "Philosophy",
    difficulty: "Expert"
  },
  {
    id: 4,
    term: "Haecceity",
    pronunciation: "/hɛkˈsiːɪti/",
    partOfSpeech: "Noun",
    meaning: "The particular quality or set of characteristics that makes something uniquely itself.",
    nuance: "A technical concept in medieval philosophy, especially associated with Duns Scotus; it concerns individual identity rather than general qualities.",
    etymology: "Medieval Latin haecceitas, from haec, meaning this.",
    example: "The haecceity of the old city lay in its peculiar combination of sounds, smells, and architectural irregularities.",
    synonyms: ["Thisness", "Individuality", "Particularity"],
    antonyms: ["Generality", "Universality"],
    category: "Philosophy",
    difficulty: "Expert"
  },
  {
    id: 5,
    term: "Anomie",
    pronunciation: "/ˈænəmi/",
    partOfSpeech: "Noun",
    meaning: "A condition of social instability arising from a breakdown or absence of shared norms and values.",
    nuance: "Associated with Émile Durkheim, it describes a disorienting loss of social regulation, not simply personal loneliness.",
    etymology: "French anomie, from Greek anomia, meaning lawlessness.",
    example: "The rapid collapse of traditional institutions produced a sense of anomie among the displaced population.",
    synonyms: ["Normlessness", "Social disorientation"],
    antonyms: ["Social cohesion", "Normative stability"],
    category: "Sociology",
    difficulty: "Advanced"
  },
  {
    id: 6,
    term: "Aboulia",
    pronunciation: "/əˈbuːliə/",
    partOfSpeech: "Noun",
    meaning: "A marked reduction in the ability to initiate or sustain voluntary action.",
    nuance: "A clinical term involving impaired motivation and decision-making; not simply procrastination or laziness.",
    etymology: "Greek aboulia, meaning lack of will or indecision.",
    example: "What appeared to be indifference was, in fact, closer to aboulia: an inability to translate intention into action.",
    synonyms: ["Impaired volition", "Indecisiveness"],
    antonyms: ["Volition", "Resolve", "Initiative"],
    category: "Psychology",
    difficulty: "Expert"
  },
  {
    id: 7,
    term: "Alexithymia",
    pronunciation: "/ˌeɪlɛksɪˈθaɪmiə/",
    partOfSpeech: "Noun",
    meaning: "Difficulty identifying, distinguishing, and describing one's emotions.",
    nuance: "It concerns emotional awareness and expression, not an absence of feelings.",
    etymology: "Coined from Greek roots: a-, without; lexis, words; and thymos, emotion or feeling.",
    example: "He could describe every detail of the argument but struggled to articulate what it had made him feel: a possible expression of alexithymia.",
    synonyms: ["Emotional unawareness", "Difficulty identifying feelings"],
    antonyms: ["Emotional awareness", "Emotional articulation"],
    category: "Psychology",
    difficulty: "Advanced"
  },
  {
    id: 8,
    term: "Limerence",
    pronunciation: "/ˈlɪmərəns/",
    partOfSpeech: "Noun",
    meaning: "An intense, involuntary state of romantic fixation characterised by intrusive thoughts and a longing for reciprocation.",
    nuance: "Unlike ordinary attraction, limerence often involves idealisation and emotional dependence on signs of returned affection.",
    etymology: "Coined by psychologist Dorothy Tennov in the twentieth century.",
    example: "What she had mistaken for an extraordinary connection was perhaps limerence sustained by uncertainty.",
    synonyms: ["Infatuation", "Romantic fixation", "Obsession"],
    antonyms: ["Indifference", "Detachment"],
    category: "Psychology",
    difficulty: "Advanced"
  },
  {
    id: 9,
    term: "Parataxic distortion",
    pronunciation: "/ˌpærəˈtæksɪk dɪˈstɔːrʃən/",
    partOfSpeech: "Noun",
    meaning: "A tendency to perceive another person through expectations shaped by earlier relationships.",
    nuance: "A concept associated with Harry Stack Sullivan's interpersonal theory; past relational patterns can distort how we interpret present interactions.",
    etymology: "From parataxis, meaning placement side by side, and distortion.",
    example: "She interpreted his silence as rejection, perhaps through a parataxic distortion inherited from earlier relationships.",
    synonyms: ["Relational projection", "Perceptual distortion"],
    antonyms: ["Unbiased perception", "Accurate appraisal"],
    category: "Psychology",
    difficulty: "Expert"
  },
  {
    id: 10,
    term: "Bovarism",
    pronunciation: "/ˈbəʊvərɪzəm/",
    partOfSpeech: "Noun",
    meaning: "A tendency to imagine oneself as fundamentally different from one's actual circumstances or identity.",
    nuance: "Named after Emma Bovary, the protagonist of Flaubert's novel; it describes dissatisfaction fuelled by idealised fantasies of a more glamorous existence.",
    etymology: "French bovarysme, derived from Madame Bovary by Gustave Flaubert.",
    example: "Her bovarism made the ordinary details of provincial life seem intolerably small.",
    synonyms: ["Self-idealisation", "Escapist fantasy"],
    antonyms: ["Self-acceptance", "Realism"],
    category: "Literature",
    difficulty: "Expert"
  },
  {
    id: 11,
    term: "Mumpsimus",
    pronunciation: "/ˈmʌmpsɪməs/",
    partOfSpeech: "Noun",
    meaning: "A person who stubbornly persists in an error despite being shown it is wrong; also, the error itself.",
    nuance: "Particularly satisfying when describing someone whose confidence survives every correction.",
    etymology: "Traditionally traced to a story about a clergyman who persisted in saying mumpsimus instead of the correct Latin sumpsimus.",
    example: "His insistence that the outdated interpretation was correct had become an intellectual mumpsimus.",
    synonyms: ["Obstinate error", "Dogmatism", "Stubbornness"],
    antonyms: ["Receptiveness", "Open-mindedness"],
    category: "Literature",
    difficulty: "Expert"
  },
  {
    id: 12,
    term: "Quiddity",
    pronunciation: "/ˈkwɪdɪti/",
    partOfSpeech: "Noun",
    meaning: "The inherent nature or essential quality of something.",
    nuance: "A philosophical term concerned with what makes a thing what it is, rather than merely how it appears.",
    etymology: "Medieval Latin quidditas, from Latin quid, meaning what.",
    example: "The essay was less concerned with the appearance of power than with its quiddity.",
    synonyms: ["Essence", "Essential nature", "Whatness"],
    antonyms: ["Accident", "Appearance"],
    category: "Philosophy",
    difficulty: "Expert"
  },
  {
    id: 13,
    term: "Psithurism",
    pronunciation: "/ˈsɪθjʊrɪzəm/",
    partOfSpeech: "Noun",
    meaning: "The soft rustling or whispering sound of wind moving through leaves.",
    nuance: "An unusually evocative word for a subtle natural sound, often used in literary descriptions.",
    etymology: "From Greek psithurismos, meaning whispering or murmuring.",
    example: "The only sound in the garden was the psithurism of rain-heavy leaves.",
    synonyms: ["Rustling", "Whispering", "Murmuring"],
    antonyms: ["Silence", "Stillness"],
    category: "Linguistic curiosities",
    difficulty: "Expert"
  },
  {
    id: 14,
    term: "Dérive",
    pronunciation: "/deɪˈriːv/",
    partOfSpeech: "Noun",
    meaning: "An unplanned journey through an urban environment, guided by the surroundings rather than a fixed destination.",
    nuance: "In Situationist theory, it was a way of experiencing how urban spaces shape emotion, behaviour, and perception.",
    etymology: "French dérive, meaning drift.",
    example: "They spent the afternoon in dérive, wandering through unfamiliar streets without consulting a map.",
    synonyms: ["Drift", "Aimless wandering", "Urban exploration"],
    antonyms: ["Direct route", "Planned itinerary"],
    category: "Sociology",
    difficulty: "Expert"
  },
  {
    id: 15,
    term: "Flâneur",
    pronunciation: "/flɑːˈnɜːr/",
    partOfSpeech: "Noun",
    meaning: "An urban wanderer who observes city life without an obvious practical destination.",
    nuance: "A literary and cultural figure associated with modernity, anonymity, observation, and the pleasures of wandering.",
    etymology: "French flâneur, from flâner, meaning to stroll or loiter.",
    example: "He moved through the city like a flâneur, attentive to its crowds but belonging to none of them.",
    synonyms: ["Wanderer", "Urban observer", "Stroller"],
    antonyms: ["Commuter", "Purposeful traveller"],
    category: "Literature",
    difficulty: "Advanced"
  },
  {
    id: 16,
    term: "Hendiadys",
    pronunciation: "/hɛnˈdaɪədɪs/",
    partOfSpeech: "Noun",
    meaning: "A figure of speech in which one idea is expressed through two words joined by a conjunction.",
    nuance: "Instead of using an adjective and noun, the speaker uses two coordinated nouns to create emphasis or a particular rhythm.",
    etymology: "From Greek hen dia dyoin, meaning one through two.",
    example: "The phrase 'sound and fury' is often discussed as an example of hendiadys.",
    synonyms: ["Rhetorical construction", "Coordinated expression"],
    antonyms: ["Simple modifier construction"],
    category: "Literature",
    difficulty: "Expert"
  },
  {
    id: 17,
    term: "Aposiopesis",
    pronunciation: "/ˌæpəsaɪəˈpiːsɪs/",
    partOfSpeech: "Noun",
    meaning: "A rhetorical device in which a sentence is deliberately left unfinished.",
    nuance: "The interruption may suggest anger, hesitation, overwhelming emotion, or an implication too powerful to articulate.",
    etymology: "Greek aposiōpēsis, meaning becoming silent.",
    example: "'If you ever do that again, I swear—' The threat's unfinished ending is an instance of aposiopesis.",
    synonyms: ["Rhetorical pause", "Interrupted statement"],
    antonyms: ["Explicit completion", "Full declaration"],
    category: "Literature",
    difficulty: "Expert"
  },
  {
    id: 18,
    term: "Anagnorisis",
    pronunciation: "/ˌænəɡˈnɒrɪsɪs/",
    partOfSpeech: "Noun",
    meaning: "A moment of recognition or discovery in which a character gains crucial knowledge, often about their identity or circumstances.",
    nuance: "In classical tragedy, anagnorisis can transform the meaning of everything that came before it.",
    etymology: "Ancient Greek anagnōrisis, meaning recognition.",
    example: "The final letter provides the protagonist's anagnorisis, revealing the truth about her family.",
    synonyms: ["Recognition", "Revelation", "Discovery"],
    antonyms: ["Ignorance", "Misrecognition"],
    category: "Literature",
    difficulty: "Expert"
  },
  {
    id: 19,
    term: "Kenosis",
    pronunciation: "/kɪˈnəʊsɪs/",
    partOfSpeech: "Noun",
    meaning: "The act of self-emptying or relinquishing power, especially in Christian theological thought.",
    nuance: "Can also be used more broadly to describe deliberate self-abnegation or the surrender of ego.",
    etymology: "Greek kenōsis, meaning an emptying.",
    example: "The novel presents leadership as kenosis: the willingness to relinquish personal glory for others.",
    synonyms: ["Self-emptying", "Self-abnegation", "Renunciation"],
    antonyms: ["Self-aggrandisement", "Self-assertion"],
    category: "Philosophy",
    difficulty: "Expert"
  },
  {
    id: 20,
    term: "Heterotopia",
    pronunciation: "/ˌhɛtəroʊˈtoʊpiə/",
    partOfSpeech: "Noun",
    meaning: "A space that functions as an alternative or other kind of social space, reflecting or disrupting ordinary arrangements.",
    nuance: "Associated with Michel Foucault, the concept is used to examine spaces such as cemeteries, museums, and institutions that organise social life in unusual ways.",
    etymology: "From Greek heteros, meaning other, and topos, meaning place.",
    example: "The museum functioned as a heterotopia, gathering objects and histories from otherwise disconnected worlds.",
    synonyms: ["Other space", "Alternative space"],
    antonyms: ["Homogeneous space", "Ordinary space"],
    category: "Sociology",
    difficulty: "Expert"
  }
];
