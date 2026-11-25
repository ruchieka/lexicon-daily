(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/words.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const collections = [
    {
        id: "mind",
        number: "01",
        name: "The Obscure Mind",
        description: "Philosophy, existentialism and metaphysics",
        tags: [
            "Philosophy"
        ],
        color: "bg-[#EEE8F2]"
    },
    {
        id: "existential",
        number: "02",
        name: "Existential Discomforts",
        description: "The strange business of being human",
        tags: [
            "Psychology",
            "Philosophy"
        ],
        color: "bg-[#F3E8E5]"
    },
    {
        id: "insufferable",
        number: "03",
        name: "The Art of Being Insufferable",
        description: "Rhetoric, intellectual vanity and human behaviour",
        tags: [
            "Literature",
            "Psychology"
        ],
        color: "bg-[#E9EEE6]"
    },
    {
        id: "antiquities",
        number: "04",
        name: "Literary Antiquities",
        description: "Rare literary terms and classical devices",
        tags: [
            "Literature"
        ],
        color: "bg-[#F2EBDD]"
    },
    {
        id: "social",
        number: "05",
        name: "Social Peculiarities",
        description: "Culture, class and the rituals of society",
        tags: [
            "Sociology"
        ],
        color: "bg-[#E8EBF2]"
    },
    {
        id: "untranslatable",
        number: "06",
        name: "Words Without English Equivalents",
        description: "Untranslatable expressions and linguistic curiosities",
        tags: [
            "Linguistic curiosities"
        ],
        color: "bg-[#F3E8ED]"
    },
    {
        id: "deadends",
        number: "07",
        name: "Philosophical Dead Ends",
        description: "Paradoxes, contradictions and intellectual impasses",
        tags: [
            "Philosophy"
        ],
        color: "bg-[#EAE8F0]"
    }
];
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(85);
    if ($[0] !== "25aef7f1a2b4729373ca7422fc93359925be8df50a05170dc4c2436949a2f438") {
        for(let $i = 0; $i < 85; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "25aef7f1a2b4729373ca7422fc93359925be8df50a05170dc4c2436949a2f438";
    }
    const [activeCollection, setActiveCollection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedWord, setSelectedWord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [savedIds, setSavedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [showSaved, setShowSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Home[useEffect()]": ()=>{
                const stored = localStorage.getItem("lexicon-saved");
                if (stored) {
                    try {
                        setSavedIds(JSON.parse(stored));
                    } catch  {
                        setSavedIds([]);
                    }
                }
            }
        })["Home[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] !== savedIds) {
        t3 = ({
            "Home[useEffect()]": ()=>{
                localStorage.setItem("lexicon-saved", JSON.stringify(savedIds));
            }
        })["Home[useEffect()]"];
        t4 = [
            savedIds
        ];
        $[4] = savedIds;
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["words"].find(_HomeWordsFind) ?? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["words"][0];
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const dailyWord = t5;
    let t6;
    if ($[8] !== activeCollection) {
        t6 = collections.find({
            "Home[collections.find()]": (collection)=>collection.id === activeCollection
        }["Home[collections.find()]"]);
        $[8] = activeCollection;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const activeCollectionData = t6;
    let result;
    if ($[10] !== activeCollectionData || $[11] !== savedIds || $[12] !== search || $[13] !== showSaved) {
        result = [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["words"]
        ];
        if (showSaved) {
            result = result.filter({
                "Home[result.filter()]": (word_0)=>savedIds.includes(word_0.id)
            }["Home[result.filter()]"]);
        } else {
            if (activeCollectionData) {
                result = result.filter({
                    "Home[result.filter()]": (word_1)=>activeCollectionData.tags.includes(word_1.category)
                }["Home[result.filter()]"]);
            }
        }
        if (search.trim()) {
            const query = search.toLowerCase().trim();
            result = result.filter({
                "Home[result.filter()]": (word_2)=>{
                    const searchable = [
                        word_2.term,
                        word_2.meaning,
                        word_2.nuance,
                        word_2.etymology,
                        word_2.category,
                        word_2.example,
                        ...word_2.synonyms,
                        ...word_2.antonyms
                    ].join(" ").toLowerCase();
                    return searchable.includes(query);
                }
            }["Home[result.filter()]"]);
        }
        $[10] = activeCollectionData;
        $[11] = savedIds;
        $[12] = search;
        $[13] = showSaved;
        $[14] = result;
    } else {
        result = $[14];
    }
    const filteredWords = result;
    let t7;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = function toggleSaved(id) {
            setSavedIds({
                "Home[toggleSaved > setSavedIds()]": (previous)=>previous.includes(id) ? previous.filter({
                        "Home[toggleSaved > setSavedIds() > previous.filter()]": (savedId)=>savedId !== id
                    }["Home[toggleSaved > setSavedIds() > previous.filter()]"]) : [
                        ...previous,
                        id
                    ]
            }["Home[toggleSaved > setSavedIds()]"]);
        };
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    const toggleSaved = t7;
    let t8;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = function chooseCollection(id_0) {
            setActiveCollection(id_0);
            setShowSaved(false);
            setSelectedWord(null);
            document.getElementById("library")?.scrollIntoView({
                behavior: "smooth"
            });
        };
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    const chooseCollection = t8;
    let t9;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-serif text-3xl tracking-[0.12em]",
                    children: [
                        "LEXICON",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#A58CB1]",
                            children: "."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 198,
                            columnNumber: 77
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 198,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-1 text-[9px] uppercase tracking-[0.24em] text-[#95839E]",
                    children: "Est. 2026 · An exercise in erudition"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 198,
                    columnNumber: 124
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 198,
            columnNumber: 10
        }, this);
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    let t11;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "hidden items-center gap-8 text-xs tracking-wider text-[#756B7C] md:flex",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#collections",
                    className: "hover:text-[#A58CB1]",
                    children: "Collections"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 206,
                    columnNumber: 100
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#library",
                    className: "hover:text-[#A58CB1]",
                    children: "The library"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 206,
                    columnNumber: 171
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "Home[<button>.onClick]": ()=>{
                            setShowSaved(true);
                            setActiveCollection("all");
                            document.getElementById("library")?.scrollIntoView({
                                behavior: "smooth"
                            });
                        }
                    }["Home[<button>.onClick]"],
                    className: "hover:text-[#A58CB1]",
                    children: "My collection"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 206,
                    columnNumber: 238
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        t11 = ({
            "Home[<button>.onClick]": ()=>{
                setShowSaved(true);
                setActiveCollection("all");
                document.getElementById("library")?.scrollIntoView({
                    behavior: "smooth"
                });
            }
        })["Home[<button>.onClick]"];
        $[18] = t10;
        $[19] = t11;
    } else {
        t10 = $[18];
        t11 = $[19];
    }
    let t12;
    if ($[20] !== savedIds.length) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "border-b border-[#E8E1D9]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-6",
                children: [
                    t9,
                    t10,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: t11,
                        className: "rounded-full border border-[#DDD2E2] px-4 py-2 text-xs text-[#75647E] hover:bg-[#EEE8F2]",
                        children: [
                            "Saved · ",
                            savedIds.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 232,
                        columnNumber: 145
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 232,
                columnNumber: 57
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[20] = savedIds.length;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-6 text-[10px] uppercase tracking-[0.32em] text-[#A58CB1]",
            children: "A vocabulary for the incurably curious"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    let t15;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "max-w-3xl font-serif text-5xl leading-[1.08] tracking-tight md:text-7xl",
            children: [
                "A little pretension",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 248,
                    columnNumber: 118
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "italic text-[#A58CB1]",
                    children: "never hurt."
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 248,
                    columnNumber: 124
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-7 max-w-lg text-sm leading-7 text-[#817789]",
            children: "Uncommon words. Curious etymologies. The occasional intellectual indulgence. An ever-expanding collection of things worth knowing."
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[23] = t14;
        $[24] = t15;
    } else {
        t14 = $[23];
        t15 = $[24];
    }
    let t16;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t13,
                t14,
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#collections",
                    className: "mt-9 inline-flex items-center gap-3 border-b border-[#A58CB1] pb-2 text-xs uppercase tracking-[0.18em] text-[#65566E]",
                    children: [
                        "Explore the collections",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "↗"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 258,
                            columnNumber: 207
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 258,
                    columnNumber: 31
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 258,
            columnNumber: 11
        }, this);
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute right-7 top-7 text-xs text-[#A58CB1]",
            children: "WORD NO. 001"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 265,
            columnNumber: 11
        }, this);
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mx-auto max-w-7xl px-6 pb-16 pt-20 md:pb-24 md:pt-28",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-12 md:grid-cols-[1.3fr_0.7fr] md:items-center",
                children: [
                    t16,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative rounded-sm bg-[#EEE8F2] p-8 md:p-10",
                        children: [
                            t17,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] uppercase tracking-[0.25em] text-[#95839E]",
                                        children: "Today's word"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 252
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-4 font-serif text-4xl italic text-[#574A60]",
                                        children: dailyWord.term
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 337
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-xs text-[#95839E]",
                                        children: dailyWord.pronunciation
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 421
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "my-7 h-px bg-[#DCD1E2]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 493
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm leading-7 text-[#655B6D]",
                                        children: dailyWord.meaning
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 535
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "Home[<button>.onClick]": ()=>setSelectedWord(dailyWord)
                                        }["Home[<button>.onClick]"],
                                        className: "mt-7 text-xs uppercase tracking-[0.16em] text-[#75647E] hover:text-[#A58CB1]",
                                        children: "Discover its nuances ↗"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 606
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 272,
                                columnNumber: 229
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 text-right font-serif text-5xl italic text-[#D5C7DD]",
                                children: "01"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 274,
                                columnNumber: 168
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 272,
                        columnNumber: 162
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 272,
                columnNumber: 85
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[27] = t18;
    } else {
        t18 = $[27];
    }
    let t19;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] uppercase tracking-[0.28em] text-[#A58CB1]",
            children: "The catalogue"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[28] = t19;
    } else {
        t19 = $[28];
    }
    let t20;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-12 flex flex-wrap items-end justify-between gap-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t19,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-3 font-serif text-4xl",
                            children: [
                                "Collections ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "italic",
                                    children: "of curiosity."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 288,
                                    columnNumber: 144
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 288,
                            columnNumber: 91
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 288,
                    columnNumber: 81
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "max-w-xs text-xs leading-6 text-[#958A98]",
                    children: "Seven little corners of the intellectual universe. Choose your rabbit hole."
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 288,
                    columnNumber: 200
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 288,
            columnNumber: 11
        }, this);
        $[29] = t20;
    } else {
        t20 = $[29];
    }
    let t21;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "collections",
            className: "border-y border-[#E8E1D9] bg-[#F4F0E9] py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-6",
                children: [
                    t20,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                        children: collections.map({
                            "Home[collections.map()]": (collection_0)=>{
                                const count = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["words"].filter({
                                    "Home[collections.map() > words.filter()]": (word_3)=>collection_0.tags.includes(word_3.category)
                                }["Home[collections.map() > words.filter()]"]).length;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "Home[collections.map() > <button>.onClick]": ()=>chooseCollection(collection_0.id)
                                    }["Home[collections.map() > <button>.onClick]"],
                                    className: `group min-h-48 rounded-sm p-7 text-left transition duration-200 hover:-translate-y-1 hover:shadow-md ${collection_0.color}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-serif text-2xl text-[#A58CB1]",
                                                    children: collection_0.number
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 252
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg text-[#9B8AA3] transition group-hover:translate-x-1 group-hover:-translate-y-1",
                                                    children: "↗"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 333
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 302,
                                            columnNumber: 201
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-7 font-serif text-xl text-[#4D4354]",
                                            children: collection_0.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 302,
                                            columnNumber: 452
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-xs leading-5 text-[#817789]",
                                            children: collection_0.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 302,
                                            columnNumber: 531
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-5 text-[9px] uppercase tracking-[0.18em] text-[#95839E]",
                                            children: [
                                                count,
                                                " entries · Explore"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 302,
                                            columnNumber: 614
                                        }, this)
                                    ]
                                }, collection_0.id, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 300,
                                    columnNumber: 22
                                }, this);
                            }
                        }["Home[collections.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 295,
                        columnNumber: 139
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 295,
                columnNumber: 94
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 295,
            columnNumber: 11
        }, this);
        $[30] = t21;
    } else {
        t21 = $[30];
    }
    let t22;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] uppercase tracking-[0.28em] text-[#A58CB1]",
            children: "The growing archive"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 311,
            columnNumber: 11
        }, this);
        $[31] = t22;
    } else {
        t22 = $[31];
    }
    const t23 = showSaved ? "Your private collection." : activeCollectionData ? activeCollectionData.name + "." : "Explore the lexicon.";
    let t24;
    if ($[32] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "mt-3 font-serif text-4xl",
            children: t23
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[32] = t23;
        $[33] = t24;
    } else {
        t24 = $[33];
    }
    const t25 = filteredWords.length === 1 ? "word" : "words";
    let t26;
    if ($[34] !== filteredWords.length || $[35] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-3 text-sm text-[#958A98]",
            children: [
                filteredWords.length,
                " ",
                t25,
                " ",
                "currently in this selection."
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 328,
            columnNumber: 11
        }, this);
        $[34] = filteredWords.length;
        $[35] = t25;
        $[36] = t26;
    } else {
        t26 = $[36];
    }
    let t27;
    if ($[37] !== t24 || $[38] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-10",
            children: [
                t22,
                t24,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 337,
            columnNumber: 11
        }, this);
        $[37] = t24;
        $[38] = t26;
        $[39] = t27;
    } else {
        t27 = $[39];
    }
    let t28;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[#A58CB1]",
            children: "⌕"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 346,
            columnNumber: 11
        }, this);
        $[40] = t28;
    } else {
        t28 = $[40];
    }
    let t29;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = ({
            "Home[<input>.onChange]": (event)=>setSearch(event.target.value)
        })["Home[<input>.onChange]"];
        $[41] = t29;
    } else {
        t29 = $[41];
    }
    let t30;
    let t31;
    if ($[42] !== search) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: search,
            onChange: t29,
            placeholder: "Search a word, meaning, synonym or idea...",
            className: "w-full bg-transparent text-sm outline-none placeholder:text-[#B3A9B7]"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 363,
            columnNumber: 11
        }, this);
        t31 = search && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "Home[<button>.onClick]": ()=>setSearch("")
            }["Home[<button>.onClick]"],
            className: "text-xs text-[#95839E]",
            children: "Clear"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 364,
            columnNumber: 21
        }, this);
        $[42] = search;
        $[43] = t30;
        $[44] = t31;
    } else {
        t30 = $[43];
        t31 = $[44];
    }
    let t32;
    if ($[45] !== t30 || $[46] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-1 items-center gap-3 rounded-sm border border-[#E4DBE5] bg-white/60 px-5 py-4",
            children: [
                t28,
                t30,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 376,
            columnNumber: 11
        }, this);
        $[45] = t30;
        $[46] = t31;
        $[47] = t32;
    } else {
        t32 = $[47];
    }
    let t33;
    if ($[48] !== showSaved) {
        t33 = ({
            "Home[<button>.onClick]": ()=>{
                setShowSaved(!showSaved);
                setActiveCollection("all");
                setSelectedWord(null);
            }
        })["Home[<button>.onClick]"];
        $[48] = showSaved;
        $[49] = t33;
    } else {
        t33 = $[49];
    }
    const t34 = `rounded-sm border px-6 py-3 text-xs tracking-wider ${showSaved ? "border-[#A58CB1] bg-[#EEE8F2] text-[#65566E]" : "border-[#E4DBE5] text-[#817789] hover:bg-[#EEE8F2]"}`;
    const t35 = showSaved ? "Showing saved" : "My saved words";
    let t36;
    if ($[50] !== t33 || $[51] !== t34 || $[52] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t33,
            className: t34,
            children: [
                "♡ ",
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 401,
            columnNumber: 11
        }, this);
        $[50] = t33;
        $[51] = t34;
        $[52] = t35;
        $[53] = t36;
    } else {
        t36 = $[53];
    }
    let t37;
    if ($[54] !== t32 || $[55] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8 flex flex-col gap-4 sm:flex-row",
            children: [
                t32,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 411,
            columnNumber: 11
        }, this);
        $[54] = t32;
        $[55] = t36;
        $[56] = t37;
    } else {
        t37 = $[56];
    }
    let t38;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = ({
            "Home[<button>.onClick]": ()=>{
                setActiveCollection("all");
                setShowSaved(false);
            }
        })["Home[<button>.onClick]"];
        $[57] = t38;
    } else {
        t38 = $[57];
    }
    const t39 = `rounded-full px-4 py-2 text-[10px] tracking-wider ${activeCollection === "all" && !showSaved ? "bg-[#574A60] text-white" : "border border-[#E4DBE5] text-[#817789] hover:bg-[#EEE8F2]"}`;
    let t40;
    if ($[58] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t38,
            className: t39,
            children: "All words"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 433,
            columnNumber: 11
        }, this);
        $[58] = t39;
        $[59] = t40;
    } else {
        t40 = $[59];
    }
    let t41;
    if ($[60] !== activeCollection || $[61] !== showSaved) {
        t41 = collections.map({
            "Home[collections.map()]": (collection_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "Home[collections.map() > <button>.onClick]": ()=>{
                            setActiveCollection(collection_1.id);
                            setShowSaved(false);
                        }
                    }["Home[collections.map() > <button>.onClick]"],
                    className: `rounded-full px-4 py-2 text-[10px] tracking-wider ${activeCollection === collection_1.id && !showSaved ? "bg-[#574A60] text-white" : "border border-[#E4DBE5] text-[#817789] hover:bg-[#EEE8F2]"}`,
                    children: collection_1.name
                }, collection_1.id, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 442,
                    columnNumber: 50
                }, this)
        }["Home[collections.map()]"]);
        $[60] = activeCollection;
        $[61] = showSaved;
        $[62] = t41;
    } else {
        t41 = $[62];
    }
    let t42;
    if ($[63] !== t40 || $[64] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8 flex flex-wrap gap-2",
            children: [
                t40,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 457,
            columnNumber: 11
        }, this);
        $[63] = t40;
        $[64] = t41;
        $[65] = t42;
    } else {
        t42 = $[65];
    }
    let t43;
    if ($[66] !== filteredWords || $[67] !== savedIds) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-4 md:grid-cols-2",
            children: filteredWords.map({
                "Home[filteredWords.map()]": (word_4)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "rounded-sm border border-[#E8E1D9] bg-white/50 p-6 transition hover:border-[#CFC0D6] hover:shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "Home[filteredWords.map() > <button>.onClick]": ()=>setSelectedWord(word_4)
                                        }["Home[filteredWords.map() > <button>.onClick]"],
                                        className: "text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9px] uppercase tracking-[0.2em] text-[#A58CB1]",
                                                children: [
                                                    word_4.category,
                                                    " · ",
                                                    word_4.difficulty
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 469,
                                                columnNumber: 86
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mt-3 font-serif text-2xl text-[#574A60]",
                                                children: word_4.term
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 469,
                                                columnNumber: 197
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs text-[#A399A8]",
                                                children: [
                                                    word_4.pronunciation,
                                                    " · ",
                                                    word_4.partOfSpeech
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 469,
                                                columnNumber: 271
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 467,
                                        columnNumber: 242
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "Home[filteredWords.map() > <button>.onClick]": ()=>toggleSaved(word_4.id)
                                        }["Home[filteredWords.map() > <button>.onClick]"],
                                        "aria-label": savedIds.includes(word_4.id) ? "Remove saved word" : "Save word",
                                        className: `text-xl ${savedIds.includes(word_4.id) ? "text-[#A58CB1]" : "text-[#C8BDC9] hover:text-[#A58CB1]"}`,
                                        children: savedIds.includes(word_4.id) ? "\u2665" : "\u2661"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 469,
                                        columnNumber: 373
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 467,
                                columnNumber: 186
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-5 text-sm leading-6 text-[#766C7B]",
                                children: word_4.meaning
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 471,
                                columnNumber: 322
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "Home[filteredWords.map() > <button>.onClick]": ()=>setSelectedWord(word_4)
                                }["Home[filteredWords.map() > <button>.onClick]"],
                                className: "mt-5 border-b border-[#D8C9DE] pb-1 text-[10px] uppercase tracking-[0.15em] text-[#75647E]",
                                children: "Read the entry ↗"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 471,
                                columnNumber: 395
                            }, this)
                        ]
                    }, word_4.id, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 467,
                        columnNumber: 48
                    }, this)
            }["Home[filteredWords.map()]"])
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 466,
            columnNumber: 11
        }, this);
        $[66] = filteredWords;
        $[67] = savedIds;
        $[68] = t43;
    } else {
        t43 = $[68];
    }
    let t44;
    if ($[69] !== filteredWords.length) {
        t44 = filteredWords.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-sm border border-dashed border-[#D8C9DE] py-16 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-serif text-2xl italic text-[#75647E]",
                    children: "Nothing in the archives."
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 483,
                    columnNumber: 125
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-xs text-[#958A98]",
                    children: "Try another search, collection or saved-word selection."
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 483,
                    columnNumber: 210
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "Home[<button>.onClick]": ()=>{
                            setSearch("");
                            setActiveCollection("all");
                            setShowSaved(false);
                        }
                    }["Home[<button>.onClick]"],
                    className: "mt-6 text-xs text-[#A58CB1] underline",
                    children: "Reset the library"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 483,
                    columnNumber: 312
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 483,
            columnNumber: 41
        }, this);
        $[69] = filteredWords.length;
        $[70] = t44;
    } else {
        t44 = $[70];
    }
    let t45;
    if ($[71] !== t27 || $[72] !== t37 || $[73] !== t42 || $[74] !== t43 || $[75] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "library",
            className: "mx-auto max-w-7xl px-6 py-20",
            children: [
                t27,
                t37,
                t42,
                t43,
                t44
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 497,
            columnNumber: 11
        }, this);
        $[71] = t27;
        $[72] = t37;
        $[73] = t42;
        $[74] = t43;
        $[75] = t44;
        $[76] = t45;
    } else {
        t45 = $[76];
    }
    let t46;
    if ($[77] !== savedIds || $[78] !== selectedWord) {
        t46 = selectedWord && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-[#30283A]/50 p-4",
            onClick: {
                "Home[<div>.onClick]": ()=>setSelectedWord(null)
            }["Home[<div>.onClick]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-sm bg-[#F8F5EF] p-7 shadow-2xl md:p-10",
                onClick: _HomeDivOnClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9px] uppercase tracking-[0.22em] text-[#A58CB1]",
                                children: [
                                    "The lexicon · Entry ",
                                    String(selectedWord.id).padStart(3, "0")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 511,
                                columnNumber: 218
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "Home[<button>.onClick]": ()=>setSelectedWord(null)
                                }["Home[<button>.onClick]"],
                                className: "text-xl text-[#95839E]",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 511,
                                columnNumber: 353
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 511,
                        columnNumber: 167
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-8 font-serif text-4xl italic text-[#574A60] md:text-5xl",
                        children: selectedWord.term
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 513,
                        columnNumber: 91
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-xs text-[#95839E]",
                        children: [
                            selectedWord.pronunciation,
                            " · ",
                            selectedWord.partOfSpeech
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 513,
                        columnNumber: 190
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "my-7 h-px bg-[#E4DBE5]"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 513,
                        columnNumber: 295
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] uppercase tracking-[0.2em] text-[#A58CB1]",
                                        children: "Definition"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 513,
                                        columnNumber: 369
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm leading-7 text-[#574F5D]",
                                        children: selectedWord.meaning
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 513,
                                        columnNumber: 451
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 513,
                                columnNumber: 364
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] uppercase tracking-[0.2em] text-[#A58CB1]",
                                        children: "The nuance"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 513,
                                        columnNumber: 541
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm leading-7 text-[#756B7C]",
                                        children: selectedWord.nuance
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 513,
                                        columnNumber: 623
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 513,
                                columnNumber: 536
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] uppercase tracking-[0.2em] text-[#A58CB1]",
                                        children: "Etymology"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 513,
                                        columnNumber: 712
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm leading-7 text-[#756B7C]",
                                        children: selectedWord.etymology
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 513,
                                        columnNumber: 793
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 513,
                                columnNumber: 707
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-sm bg-[#EEE8F2] p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] uppercase tracking-[0.2em] text-[#95839E]",
                                        children: "In a sentence"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 513,
                                        columnNumber: 925
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 font-serif text-lg italic leading-7 text-[#574A60]",
                                        children: [
                                            "“",
                                            selectedWord.example,
                                            "”"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 513,
                                        columnNumber: 1010
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 513,
                                columnNumber: 880
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-5 sm:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9px] uppercase tracking-[0.2em] text-[#A58CB1]",
                                                children: "Synonyms"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 513,
                                                columnNumber: 1163
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-xs leading-6 text-[#756B7C]",
                                                children: selectedWord.synonyms.join(" \xB7 ")
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 513,
                                                columnNumber: 1243
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 513,
                                        columnNumber: 1158
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9px] uppercase tracking-[0.2em] text-[#A58CB1]",
                                                children: "Antonyms"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 513,
                                                columnNumber: 1349
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-xs leading-6 text-[#756B7C]",
                                                children: selectedWord.antonyms.join(" \xB7 ")
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 513,
                                                columnNumber: 1429
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 513,
                                        columnNumber: 1344
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 513,
                                columnNumber: 1115
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-t border-[#E4DBE5] pt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] uppercase tracking-[0.15em] text-[#95839E]",
                                        children: [
                                            selectedWord.category,
                                            " · ",
                                            selectedWord.difficulty
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 513,
                                        columnNumber: 1618
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "Home[<button>.onClick]": ()=>toggleSaved(selectedWord.id)
                                        }["Home[<button>.onClick]"],
                                        className: "rounded-full border border-[#CFC0D6] px-5 py-3 text-xs text-[#75647E] hover:bg-[#EEE8F2]",
                                        children: savedIds.includes(selectedWord.id) ? "\u2665 Saved to collection" : "\u2661 Save this word"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 513,
                                        columnNumber: 1742
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 513,
                                columnNumber: 1536
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 513,
                        columnNumber: 337
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 511,
                columnNumber: 31
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 509,
            columnNumber: 27
        }, this);
        $[77] = savedIds;
        $[78] = selectedWord;
        $[79] = t46;
    } else {
        t46 = $[79];
    }
    let t47;
    if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "border-t border-[#E8E1D9] px-6 py-10 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-serif text-2xl tracking-[0.15em]",
                    children: [
                        "LEXICON",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#A58CB1]",
                            children: "."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 524,
                            columnNumber: 140
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 524,
                    columnNumber: 80
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-[9px] uppercase tracking-[0.25em] text-[#A399A8]",
                    children: "For the verbally insufferable."
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 524,
                    columnNumber: 185
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-5 text-[10px] text-[#B0A5B2]",
                    children: "A little pretension never hurt."
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 524,
                    columnNumber: 293
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 524,
            columnNumber: 11
        }, this);
        $[80] = t47;
    } else {
        t47 = $[80];
    }
    let t48;
    if ($[81] !== t12 || $[82] !== t45 || $[83] !== t46) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-[#F8F5EF] text-[#373247]",
            children: [
                t12,
                t18,
                t21,
                t45,
                t46,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 531,
            columnNumber: 11
        }, this);
        $[81] = t12;
        $[82] = t45;
        $[83] = t46;
        $[84] = t48;
    } else {
        t48 = $[84];
    }
    return t48;
}
_s(Home, "LtX24uUAOfm8g/dtnBVBb6VrwT8=");
_c = Home;
function _HomeDivOnClick(event_0) {
    return event_0.stopPropagation();
}
function _HomeWordsFind(word) {
    return word.term === "Clinamen";
}
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/words.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "words",
    ()=>words
]);
const words = [
    {
        id: 1,
        term: "Clinamen",
        pronunciation: "/ˈklaɪnəmən/",
        partOfSpeech: "Noun",
        meaning: "An unpredictable swerve in the motion of atoms, in ancient Epicurean philosophy.",
        nuance: "Later adopted as a metaphor for deviation, creative disruption, or the unexpected departure from an established order.",
        etymology: "Latin clinamen, from clinare, meaning to bend or incline.",
        example: "Her entire artistic practice seemed organised around the clinamen: the deliberate refusal to follow an expected trajectory.",
        synonyms: [
            "Deviation",
            "Swerve",
            "Deflection"
        ],
        antonyms: [
            "Conformity",
            "Regularity",
            "Determinism"
        ],
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
        synonyms: [
            "Paralipsis",
            "Preterition"
        ],
        antonyms: [
            "Direct assertion",
            "Explicit statement"
        ],
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
        synonyms: [
            "Listlessness",
            "Apathy",
            "Despondency"
        ],
        antonyms: [
            "Zeal",
            "Fervour",
            "Engagement"
        ],
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
        synonyms: [
            "Thisness",
            "Individuality",
            "Particularity"
        ],
        antonyms: [
            "Generality",
            "Universality"
        ],
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
        synonyms: [
            "Normlessness",
            "Social disorientation"
        ],
        antonyms: [
            "Social cohesion",
            "Normative stability"
        ],
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
        synonyms: [
            "Impaired volition",
            "Indecisiveness"
        ],
        antonyms: [
            "Volition",
            "Resolve",
            "Initiative"
        ],
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
        synonyms: [
            "Emotional unawareness",
            "Difficulty identifying feelings"
        ],
        antonyms: [
            "Emotional awareness",
            "Emotional articulation"
        ],
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
        synonyms: [
            "Infatuation",
            "Romantic fixation",
            "Obsession"
        ],
        antonyms: [
            "Indifference",
            "Detachment"
        ],
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
        synonyms: [
            "Relational projection",
            "Perceptual distortion"
        ],
        antonyms: [
            "Unbiased perception",
            "Accurate appraisal"
        ],
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
        synonyms: [
            "Self-idealisation",
            "Escapist fantasy"
        ],
        antonyms: [
            "Self-acceptance",
            "Realism"
        ],
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
        synonyms: [
            "Obstinate error",
            "Dogmatism",
            "Stubbornness"
        ],
        antonyms: [
            "Receptiveness",
            "Open-mindedness"
        ],
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
        synonyms: [
            "Essence",
            "Essential nature",
            "Whatness"
        ],
        antonyms: [
            "Accident",
            "Appearance"
        ],
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
        synonyms: [
            "Rustling",
            "Whispering",
            "Murmuring"
        ],
        antonyms: [
            "Silence",
            "Stillness"
        ],
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
        synonyms: [
            "Drift",
            "Aimless wandering",
            "Urban exploration"
        ],
        antonyms: [
            "Direct route",
            "Planned itinerary"
        ],
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
        synonyms: [
            "Wanderer",
            "Urban observer",
            "Stroller"
        ],
        antonyms: [
            "Commuter",
            "Purposeful traveller"
        ],
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
        synonyms: [
            "Rhetorical construction",
            "Coordinated expression"
        ],
        antonyms: [
            "Simple modifier construction"
        ],
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
        synonyms: [
            "Rhetorical pause",
            "Interrupted statement"
        ],
        antonyms: [
            "Explicit completion",
            "Full declaration"
        ],
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
        synonyms: [
            "Recognition",
            "Revelation",
            "Discovery"
        ],
        antonyms: [
            "Ignorance",
            "Misrecognition"
        ],
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
        synonyms: [
            "Self-emptying",
            "Self-abnegation",
            "Renunciation"
        ],
        antonyms: [
            "Self-aggrandisement",
            "Self-assertion"
        ],
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
        synonyms: [
            "Other space",
            "Alternative space"
        ],
        antonyms: [
            "Homogeneous space",
            "Ordinary space"
        ],
        category: "Sociology",
        difficulty: "Expert"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1h0tbgpq6sq8r._.js.map