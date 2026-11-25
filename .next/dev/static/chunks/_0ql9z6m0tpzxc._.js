(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/learn/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LearnPage
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
const STORAGE_KEY = "lexicon-progress";
function LearnPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(57);
    if ($[0] !== "529dcf32e159271256e22211673c7226ae9436698ca4898917b8bd60f8046116") {
        for(let $i = 0; $i < 57; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "529dcf32e159271256e22211673c7226ae9436698ca4898917b8bd60f8046116";
    }
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [revealed, setRevealed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [finished, setFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [known, setKnown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [review, setReview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            xp: 0,
            mastered: [],
            revision: []
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "LearnPage[useEffect()]": ()=>{
                const saved = localStorage.getItem(STORAGE_KEY);
                if (saved) {
                    try {
                        setProgress(JSON.parse(saved));
                    } catch  {
                        console.error("Could not load learning progress.");
                    }
                }
                setLoaded(true);
            }
        })["LearnPage[useEffect()]"];
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
    if ($[4] !== loaded || $[5] !== progress) {
        t3 = ({
            "LearnPage[useEffect()]": ()=>{
                if (loaded) {
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
                }
            }
        })["LearnPage[useEffect()]"];
        t4 = [
            progress,
            loaded
        ];
        $[4] = loaded;
        $[5] = progress;
        $[6] = t3;
        $[7] = t4;
    } else {
        t3 = $[6];
        t4 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    const word = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["words"][index];
    let t5;
    if ($[8] !== index || $[9] !== word.id) {
        t5 = function answer(didKnow) {
            const wordId = word.id;
            if (didKnow) {
                setKnown(_LearnPageAnswerSetKnown);
                setProgress({
                    "LearnPage[answer > setProgress()]": (previous)=>({
                            xp: previous.xp + 10,
                            mastered: previous.mastered.includes(wordId) ? previous.mastered : [
                                ...previous.mastered,
                                wordId
                            ],
                            revision: previous.revision.filter({
                                "LearnPage[answer > setProgress() > previous.revision.filter()]": (id)=>id !== wordId
                            }["LearnPage[answer > setProgress() > previous.revision.filter()]"])
                        })
                }["LearnPage[answer > setProgress()]"]);
            } else {
                setReview(_LearnPageAnswerSetReview);
                setProgress({
                    "LearnPage[answer > setProgress()]": (previous_0)=>({
                            ...previous_0,
                            revision: previous_0.revision.includes(wordId) ? previous_0.revision : [
                                ...previous_0.revision,
                                wordId
                            ],
                            mastered: previous_0.mastered.filter({
                                "LearnPage[answer > setProgress() > previous_0.mastered.filter()]": (id_0)=>id_0 !== wordId
                            }["LearnPage[answer > setProgress() > previous_0.mastered.filter()]"])
                        })
                }["LearnPage[answer > setProgress()]"]);
            }
            if (index === __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["words"].length - 1) {
                setFinished(true);
            } else {
                setIndex(_LearnPageAnswerSetIndex);
                setRevealed(false);
            }
        };
        $[8] = index;
        $[9] = word.id;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const answer = t5;
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = function restart() {
            setIndex(0);
            setKnown(0);
            setReview(0);
            setRevealed(false);
            setFinished(false);
        };
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    const restart = t6;
    if (!loaded) {
        return null;
    }
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/",
            className: "text-sm tracking-widest text-[#95839E]",
            children: "← LEXICON."
        }, void 0, false, {
            fileName: "[project]/app/learn/page.tsx",
            lineNumber: 143,
            columnNumber: 10
        }, this);
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "mb-10 mt-12 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs uppercase tracking-[0.3em] text-[#95839E]",
                    children: "The learning studio"
                }, void 0, false, {
                    fileName: "[project]/app/learn/page.tsx",
                    lineNumber: 150,
                    columnNumber: 54
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "font-serif mt-3 text-5xl text-[#373247]",
                    children: "The Art of Recall."
                }, void 0, false, {
                    fileName: "[project]/app/learn/page.tsx",
                    lineNumber: 150,
                    columnNumber: 142
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-sm text-[#95839E]",
                    children: "Knowing a word is easy. Remembering it is another matter."
                }, void 0, false, {
                    fileName: "[project]/app/learn/page.tsx",
                    lineNumber: 150,
                    columnNumber: 221
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/learn/page.tsx",
            lineNumber: 150,
            columnNumber: 10
        }, this);
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== progress.xp) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-serif text-2xl",
            children: progress.xp
        }, void 0, false, {
            fileName: "[project]/app/learn/page.tsx",
            lineNumber: 157,
            columnNumber: 10
        }, this);
        $[14] = progress.xp;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-xs text-[#95839E]",
            children: "Total XP"
        }, void 0, false, {
            fileName: "[project]/app/learn/page.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl bg-white/70 p-4",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/app/learn/page.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[17] = t9;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== progress.mastered.length) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-serif text-2xl",
            children: progress.mastered.length
        }, void 0, false, {
            fileName: "[project]/app/learn/page.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[19] = progress.mastered.length;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-xs text-[#52634F]",
            children: "Remembered"
        }, void 0, false, {
            fileName: "[project]/app/learn/page.tsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl bg-[#EAF0E8] p-4",
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/app/learn/page.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[22] = t12;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] !== progress.revision.length) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-serif text-2xl",
            children: progress.revision.length
        }, void 0, false, {
            fileName: "[project]/app/learn/page.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[24] = progress.revision.length;
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    let t16;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-xs text-[#765B59]",
            children: "To revise"
        }, void 0, false, {
            fileName: "[project]/app/learn/page.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    let t17;
    if ($[27] !== t15) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl bg-[#F6EDE9] p-4",
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/app/learn/page.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[27] = t15;
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    let t18;
    if ($[29] !== t11 || $[30] !== t14 || $[31] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 grid grid-cols-3 gap-3 text-center",
            children: [
                t11,
                t14,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/app/learn/page.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[29] = t11;
        $[30] = t14;
        $[31] = t17;
        $[32] = t18;
    } else {
        t18 = $[32];
    }
    let t19;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "✦ Learning session"
        }, void 0, false, {
            fileName: "[project]/app/learn/page.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[33] = t19;
    } else {
        t19 = $[33];
    }
    const t20 = finished ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["words"].length : index + 1;
    let t21;
    if ($[34] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 flex justify-between text-sm text-[#75677D]",
            children: [
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        t20,
                        " / ",
                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["words"].length
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/learn/page.tsx",
                    lineNumber: 244,
                    columnNumber: 82
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/learn/page.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[34] = t20;
        $[35] = t21;
    } else {
        t21 = $[35];
    }
    const t22 = `${finished ? 100 : (index + 1) / __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["words"].length * 100}%`;
    let t23;
    if ($[36] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8 h-2 overflow-hidden rounded-full bg-[#EAE2EC]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full rounded-full bg-[#B8A3C7] transition-all",
                style: {
                    width: t22
                }
            }, void 0, false, {
                fileName: "[project]/app/learn/page.tsx",
                lineNumber: 253,
                columnNumber: 79
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/learn/page.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, this);
        $[36] = t22;
        $[37] = t23;
    } else {
        t23 = $[37];
    }
    let t24;
    if ($[38] !== answer || $[39] !== finished || $[40] !== known || $[41] !== revealed || $[42] !== review || $[43] !== word.category || $[44] !== word.difficulty || $[45] !== word.example || $[46] !== word.meaning || $[47] !== word.nuance || $[48] !== word.pronunciation || $[49] !== word.term) {
        t24 = finished ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "rounded-3xl border border-[#E8DFE9] bg-white/70 p-10 text-center shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs uppercase tracking-[0.25em] text-[#95839E]",
                    children: "Session complete"
                }, void 0, false, {
                    fileName: "[project]/app/learn/page.tsx",
                    lineNumber: 263,
                    columnNumber: 118
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-serif mt-5 text-4xl text-[#373247]",
                    children: "Quite the vocabulary."
                }, void 0, false, {
                    fileName: "[project]/app/learn/page.tsx",
                    lineNumber: 263,
                    columnNumber: 204
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "my-8 grid grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl bg-[#F0EAF3] p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-serif text-4xl",
                                    children: known
                                }, void 0, false, {
                                    fileName: "[project]/app/learn/page.tsx",
                                    lineNumber: 263,
                                    columnNumber: 377
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-xs text-[#75677D]",
                                    children: "Remembered today"
                                }, void 0, false, {
                                    fileName: "[project]/app/learn/page.tsx",
                                    lineNumber: 263,
                                    columnNumber: 423
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/learn/page.tsx",
                            lineNumber: 263,
                            columnNumber: 331
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl bg-[#F6EDE9] p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-serif text-4xl",
                                    children: review
                                }, void 0, false, {
                                    fileName: "[project]/app/learn/page.tsx",
                                    lineNumber: 263,
                                    columnNumber: 538
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-xs text-[#75677D]",
                                    children: "Needs revision"
                                }, void 0, false, {
                                    fileName: "[project]/app/learn/page.tsx",
                                    lineNumber: 263,
                                    columnNumber: 585
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/learn/page.tsx",
                            lineNumber: 263,
                            columnNumber: 492
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/learn/page.tsx",
                    lineNumber: 263,
                    columnNumber: 286
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-7 text-sm text-[#75677D]",
                    children: [
                        "You earned ",
                        known * 10,
                        " XP this session."
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/learn/page.tsx",
                    lineNumber: 263,
                    columnNumber: 658
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: restart,
                    className: "rounded-full bg-[#373247] px-8 py-3 text-sm text-white transition hover:bg-[#62546E]",
                    children: "Practise again →"
                }, void 0, false, {
                    fileName: "[project]/app/learn/page.tsx",
                    lineNumber: 263,
                    columnNumber: 745
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/learn/page.tsx",
            lineNumber: 263,
            columnNumber: 22
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "rounded-3xl border border-[#E8DFE9] bg-white/70 p-7 shadow-sm md:p-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rounded-full bg-[#F0EAF3] px-4 py-2 text-xs text-[#75677D]",
                            children: word.category
                        }, void 0, false, {
                            fileName: "[project]/app/learn/page.tsx",
                            lineNumber: 263,
                            columnNumber: 1053
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-[#95839E]",
                            children: word.difficulty
                        }, void 0, false, {
                            fileName: "[project]/app/learn/page.tsx",
                            lineNumber: 263,
                            columnNumber: 1152
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/learn/page.tsx",
                    lineNumber: 263,
                    columnNumber: 997
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-h-64 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs uppercase tracking-[0.25em] text-[#95839E]",
                            children: revealed ? "The meaning" : "Can you recall this word?"
                        }, void 0, false, {
                            fileName: "[project]/app/learn/page.tsx",
                            lineNumber: 263,
                            columnNumber: 1261
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-serif mt-8 break-words text-4xl text-[#373247] md:text-5xl",
                            children: word.term
                        }, void 0, false, {
                            fileName: "[project]/app/learn/page.tsx",
                            lineNumber: 263,
                            columnNumber: 1387
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-sm text-[#95839E]",
                            children: word.pronunciation
                        }, void 0, false, {
                            fileName: "[project]/app/learn/page.tsx",
                            lineNumber: 263,
                            columnNumber: 1483
                        }, this),
                        !revealed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "LearnPage[<button>.onClick]": ()=>setRevealed(true)
                            }["LearnPage[<button>.onClick]"],
                            className: "mt-12 rounded-full border border-[#C9B8D1] px-8 py-3 text-sm text-[#62546E] transition hover:bg-[#F0EAF3]",
                            children: "Reveal meaning"
                        }, void 0, false, {
                            fileName: "[project]/app/learn/page.tsx",
                            lineNumber: 263,
                            columnNumber: 1563
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base leading-8 text-[#373247]",
                                    children: word.meaning
                                }, void 0, false, {
                                    fileName: "[project]/app/learn/page.tsx",
                                    lineNumber: 265,
                                    columnNumber: 219
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 rounded-2xl bg-[#F8F5EF] p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-widest text-[#95839E]",
                                            children: "The nuance"
                                        }, void 0, false, {
                                            fileName: "[project]/app/learn/page.tsx",
                                            lineNumber: 265,
                                            columnNumber: 338
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm leading-7 text-[#62546E]",
                                            children: word.nuance
                                        }, void 0, false, {
                                            fileName: "[project]/app/learn/page.tsx",
                                            lineNumber: 265,
                                            columnNumber: 416
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/learn/page.tsx",
                                    lineNumber: 265,
                                    columnNumber: 287
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-6 text-xs uppercase tracking-widest text-[#95839E]",
                                    children: "In a sentence"
                                }, void 0, false, {
                                    fileName: "[project]/app/learn/page.tsx",
                                    lineNumber: 265,
                                    columnNumber: 492
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 font-serif text-lg italic leading-7 text-[#62546E]",
                                    children: [
                                        "“",
                                        word.example,
                                        "”"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/learn/page.tsx",
                                    lineNumber: 265,
                                    columnNumber: 578
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/learn/page.tsx",
                            lineNumber: 265,
                            columnNumber: 187
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/learn/page.tsx",
                    lineNumber: 263,
                    columnNumber: 1223
                }, this),
                revealed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 grid grid-cols-2 gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "LearnPage[<button>.onClick]": ()=>answer(false)
                            }["LearnPage[<button>.onClick]"],
                            className: "rounded-full border border-[#D9B9B3] bg-[#F6EDE9] px-4 py-4 text-sm text-[#765B59] transition hover:bg-[#F0DFDA]",
                            children: "✕ Didn't know"
                        }, void 0, false, {
                            fileName: "[project]/app/learn/page.tsx",
                            lineNumber: 265,
                            columnNumber: 741
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "LearnPage[<button>.onClick]": ()=>answer(true)
                            }["LearnPage[<button>.onClick]"],
                            className: "rounded-full bg-[#EAF0E8] px-4 py-4 text-sm text-[#52634F] transition hover:bg-[#DCE8D9]",
                            children: "✓ I knew it"
                        }, void 0, false, {
                            fileName: "[project]/app/learn/page.tsx",
                            lineNumber: 267,
                            columnNumber: 190
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/learn/page.tsx",
                    lineNumber: 265,
                    columnNumber: 695
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/learn/page.tsx",
            lineNumber: 263,
            columnNumber: 906
        }, this);
        $[38] = answer;
        $[39] = finished;
        $[40] = known;
        $[41] = revealed;
        $[42] = review;
        $[43] = word.category;
        $[44] = word.difficulty;
        $[45] = word.example;
        $[46] = word.meaning;
        $[47] = word.nuance;
        $[48] = word.pronunciation;
        $[49] = word.term;
        $[50] = t24;
    } else {
        t24 = $[50];
    }
    let t25;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-8 text-center text-xs tracking-wide text-[#A495A9]",
            children: "A little pretension never hurt."
        }, void 0, false, {
            fileName: "[project]/app/learn/page.tsx",
            lineNumber: 288,
            columnNumber: 11
        }, this);
        $[51] = t25;
    } else {
        t25 = $[51];
    }
    let t26;
    if ($[52] !== t18 || $[53] !== t21 || $[54] !== t23 || $[55] !== t24) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen px-6 py-10 md:px-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-3xl",
                children: [
                    t7,
                    t8,
                    t18,
                    t21,
                    t23,
                    t24,
                    t25
                ]
            }, void 0, true, {
                fileName: "[project]/app/learn/page.tsx",
                lineNumber: 295,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/learn/page.tsx",
            lineNumber: 295,
            columnNumber: 11
        }, this);
        $[52] = t18;
        $[53] = t21;
        $[54] = t23;
        $[55] = t24;
        $[56] = t26;
    } else {
        t26 = $[56];
    }
    return t26;
}
_s(LearnPage, "cJSeJpXG+9MT94o9Y3WeHzkfcGA=");
_c = LearnPage;
function _LearnPageAnswerSetIndex(value_1) {
    return value_1 + 1;
}
function _LearnPageAnswerSetReview(value_0) {
    return value_0 + 1;
}
function _LearnPageAnswerSetKnown(value) {
    return value + 1;
}
var _c;
__turbopack_context__.k.register(_c, "LearnPage");
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
"[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_0ql9z6m0tpzxc._.js.map