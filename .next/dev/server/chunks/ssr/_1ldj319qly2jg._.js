module.exports = [
"[project]/app/revision/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RevisionPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$words$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/words.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const STORAGE_KEY = "lexicon-progress";
const emptyProgress = {
    xp: 0,
    mastered: [],
    revision: [],
    schedule: {}
};
function getStatus(word, progress, now) {
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
function getDueLabel(schedule) {
    if (!schedule) return "Not studied yet";
    if (schedule.dueAt <= Date.now()) {
        return "Ready now";
    }
    return `Due ${new Date(schedule.dueAt).toLocaleString([], {
        day: "numeric",
        month: "short",
        hour: "numeric",
        minute: "2-digit"
    })}`;
}
function RevisionPage() {
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(emptyProgress);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                setProgress({
                    xp: parsed.xp ?? 0,
                    mastered: parsed.mastered ?? [],
                    revision: parsed.revision ?? [],
                    schedule: parsed.schedule ?? {}
                });
            }
        } catch  {
            console.error("Could not load revision progress.");
        }
        setLoaded(true);
    }, []);
    const now = Date.now();
    const counts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const statuses = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$words$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["words"].map((word)=>getStatus(word, progress, now));
        return {
            total: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$words$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["words"].length,
            revision: statuses.filter((status)=>status === "Needs revision").length,
            due: statuses.filter((status)=>status === "Ready to review").length,
            mastered: statuses.filter((status)=>status === "Mastered").length,
            newWords: statuses.filter((status)=>status === "New").length
        };
    }, [
        progress,
        now
    ]);
    const filteredWords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$words$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["words"].filter((word)=>{
            const status = getStatus(word, progress, now);
            const matchesFilter = filter === "All" || filter === "New" && status === "New" || status === filter;
            const query = search.toLowerCase().trim();
            const matchesSearch = !query || word.term.toLowerCase().includes(query) || word.meaning.toLowerCase().includes(query) || word.category.toLowerCase().includes(query);
            return matchesFilter && matchesSearch;
        });
    }, [
        progress,
        search,
        filter,
        now
    ]);
    function statusStyle(status) {
        switch(status){
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-white px-6 py-10 text-[#373247] md:px-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-4xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/",
                    className: "text-xs tracking-[0.2em] text-[#95839E] transition hover:text-[#62546E]",
                    children: "← LEXICON."
                }, void 0, false, {
                    fileName: "[project]/app/revision/page.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-12 mt-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] uppercase tracking-[0.35em] text-[#A495A9]",
                            children: "EST. 2026 · YOUR PERSONAL DICTIONARY"
                        }, void 0, false, {
                            fileName: "[project]/app/revision/page.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-serif mt-5 text-5xl tracking-tight md:text-6xl",
                            children: "The Revision Room."
                        }, void 0, false, {
                            fileName: "[project]/app/revision/page.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 max-w-lg text-sm leading-7 text-[#95839E]",
                            children: "A record of what you've learnt, what you've forgotten, and what deserves another look."
                        }, void 0, false, {
                            fileName: "[project]/app/revision/page.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/revision/page.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12 grid grid-cols-2 border-y border-[#EEE9EF] py-6 text-center md:grid-cols-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-serif text-3xl",
                                    children: counts.total
                                }, void 0, false, {
                                    fileName: "[project]/app/revision/page.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[10px] uppercase tracking-[0.15em] text-[#A495A9]",
                                    children: "Total words"
                                }, void 0, false, {
                                    fileName: "[project]/app/revision/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/revision/page.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-l border-[#EEE9EF] py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-serif text-3xl",
                                    children: counts.revision
                                }, void 0, false, {
                                    fileName: "[project]/app/revision/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[10px] uppercase tracking-[0.15em] text-[#A495A9]",
                                    children: "To revise"
                                }, void 0, false, {
                                    fileName: "[project]/app/revision/page.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/revision/page.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-l border-[#EEE9EF] py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-serif text-3xl",
                                    children: counts.due
                                }, void 0, false, {
                                    fileName: "[project]/app/revision/page.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[10px] uppercase tracking-[0.15em] text-[#A495A9]",
                                    children: "Due now"
                                }, void 0, false, {
                                    fileName: "[project]/app/revision/page.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/revision/page.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-l border-[#EEE9EF] py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-serif text-3xl",
                                    children: counts.mastered
                                }, void 0, false, {
                                    fileName: "[project]/app/revision/page.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[10px] uppercase tracking-[0.15em] text-[#A495A9]",
                                    children: "Mastered"
                                }, void 0, false, {
                                    fileName: "[project]/app/revision/page.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/revision/page.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/revision/page.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-7",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "word-search",
                            className: "mb-3 block text-[10px] uppercase tracking-[0.2em] text-[#A495A9]",
                            children: "Search your vocabulary"
                        }, void 0, false, {
                            fileName: "[project]/app/revision/page.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "word-search",
                            value: search,
                            onChange: (event)=>setSearch(event.target.value),
                            placeholder: "Search words, meanings or categories...",
                            className: "w-full border border-[#EEE9EF] bg-white px-5 py-4 text-sm text-[#373247] outline-none transition placeholder:text-[#B3A8B7] focus:border-[#B8A3C7]"
                        }, void 0, false, {
                            fileName: "[project]/app/revision/page.tsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/revision/page.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 flex flex-wrap gap-2",
                    children: [
                        "All",
                        "Needs revision",
                        "Ready to review",
                        "Mastered",
                        "New"
                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setFilter(item),
                            className: `border px-4 py-2 text-[10px] uppercase tracking-[0.1em] transition ${filter === item ? "border-[#B8A3C7] bg-[#F8F5FA] text-[#62546E]" : "border-[#EEE9EF] text-[#95839E] hover:border-[#D9CCDF]"}`,
                            children: item
                        }, item, false, {
                            fileName: "[project]/app/revision/page.tsx",
                            lineNumber: 245,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/revision/page.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex items-center justify-between border-b border-[#EEE9EF] pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] uppercase tracking-[0.2em] text-[#A495A9]",
                            children: "Your collection"
                        }, void 0, false, {
                            fileName: "[project]/app/revision/page.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-[#95839E]",
                            children: [
                                filteredWords.length,
                                " words"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/revision/page.tsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/revision/page.tsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: filteredWords.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-16 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-serif text-2xl",
                                children: "Nothing found."
                            }, void 0, false, {
                                fileName: "[project]/app/revision/page.tsx",
                                lineNumber: 272,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-sm text-[#95839E]",
                                children: "Try another search or category."
                            }, void 0, false, {
                                fileName: "[project]/app/revision/page.tsx",
                                lineNumber: 276,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/revision/page.tsx",
                        lineNumber: 271,
                        columnNumber: 13
                    }, this) : filteredWords.map((word)=>{
                        const status = getStatus(word, progress, now);
                        const schedule = progress.schedule[word.id];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "border-b border-[#EEE9EF] py-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col justify-between gap-4 sm:flex-row sm:items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-serif text-2xl",
                                                children: word.term
                                            }, void 0, false, {
                                                fileName: "[project]/app/revision/page.tsx",
                                                lineNumber: 292,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs text-[#A495A9]",
                                                children: [
                                                    word.pronunciation,
                                                    " · ",
                                                    word.partOfSpeech
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/revision/page.tsx",
                                                lineNumber: 296,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-sm leading-6 text-[#75677D]",
                                                children: word.meaning
                                            }, void 0, false, {
                                                fileName: "[project]/app/revision/page.tsx",
                                                lineNumber: 300,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-[10px] uppercase tracking-[0.15em] text-[#B3A8B7]",
                                                children: word.category
                                            }, void 0, false, {
                                                fileName: "[project]/app/revision/page.tsx",
                                                lineNumber: 304,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/revision/page.tsx",
                                        lineNumber: 291,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex shrink-0 flex-col items-start gap-2 sm:items-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `border px-3 py-1.5 text-[10px] uppercase tracking-[0.1em] ${statusStyle(status)}`,
                                                children: status
                                            }, void 0, false, {
                                                fileName: "[project]/app/revision/page.tsx",
                                                lineNumber: 310,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] text-[#A495A9]",
                                                children: getDueLabel(schedule)
                                            }, void 0, false, {
                                                fileName: "[project]/app/revision/page.tsx",
                                                lineNumber: 316,
                                                columnNumber: 23
                                            }, this),
                                            schedule && schedule.repetitions > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-[#B3A8B7]",
                                                children: [
                                                    schedule.repetitions,
                                                    " successful reviews"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/revision/page.tsx",
                                                lineNumber: 321,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/revision/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/revision/page.tsx",
                                lineNumber: 290,
                                columnNumber: 19
                            }, this)
                        }, word.id, false, {
                            fileName: "[project]/app/revision/page.tsx",
                            lineNumber: 286,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/revision/page.tsx",
                    lineNumber: 269,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "mt-12 border-t border-[#EEE9EF] pt-8 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] uppercase tracking-[0.25em] text-[#B3A8B7]",
                        children: "A little pretension never hurt."
                    }, void 0, false, {
                        fileName: "[project]/app/revision/page.tsx",
                        lineNumber: 334,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/revision/page.tsx",
                    lineNumber: 333,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/revision/page.tsx",
            lineNumber: 164,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/revision/page.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
}),
"[project]/data/words.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_1ldj319qly2jg._.js.map