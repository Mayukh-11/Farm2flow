(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/pwa/src/app/buyer/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BuyerPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$components$2f$BuyerSmartMatchModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$components$2f$InDriveMapModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/src/components/InDriveMapModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$components$2f$PanIndiaBuyerMapModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/src/data/translations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function BuyerPage() {
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('EN');
    const [produceList, setProduceList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [ordersList, setOrdersList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCropFilter, setSelectedCropFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [isSmartMatchOpen, setIsSmartMatchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMapOpen, setIsMapOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSellerMapOpen, setIsSellerMapOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedMapCrop, setSelectedMapCrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All Crops');
    const [selectedSellerForMatch, setSelectedSellerForMatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [buyerName, setBuyerName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Sourav Mukherjee');
    const [buyerLocation, setBuyerLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Salt Lake, Kolkata');
    const [buyerAddress, setBuyerAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('AD-Block, Sector 1, Salt Lake, Kolkata - 700064');
    const [buyerTab, setBuyerTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('home');
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"][language] || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$translations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translations"].EN;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuyerPage.useEffect": ()=>{
            // Auth Guard: Always require login first
            if ("TURBOPACK compile-time truthy", 1) {
                const sessionStr = localStorage.getItem('farm2flow_user_session');
                if (!sessionStr) {
                    window.location.href = '/';
                    return;
                }
                try {
                    const session = JSON.parse(sessionStr);
                    if (session.name) setBuyerName(session.name);
                    if (session.location) setBuyerLocation(session.location);
                    if (session.address) setBuyerAddress(session.address);
                } catch (e) {}
            }
            setProduceList((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredProduce"])());
            setOrdersList((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrders"])());
            // Listen for real-time produce listing events from any farmer tab or wizard
            const handleProduceUpdated = {
                "BuyerPage.useEffect.handleProduceUpdated": (e)=>{
                    if (e?.detail?.produceList) {
                        setProduceList(e.detail.produceList);
                    } else {
                        setProduceList((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredProduce"])());
                    }
                }
            }["BuyerPage.useEffect.handleProduceUpdated"];
            const handleStorageChange = {
                "BuyerPage.useEffect.handleStorageChange": (e)=>{
                    if (e.key === 'farm2flow_produce_items') {
                        setProduceList((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredProduce"])());
                    }
                }
            }["BuyerPage.useEffect.handleStorageChange"];
            window.addEventListener('farm2flow_produce_updated', handleProduceUpdated);
            window.addEventListener('storage', handleStorageChange);
            return ({
                "BuyerPage.useEffect": ()=>{
                    window.removeEventListener('farm2flow_produce_updated', handleProduceUpdated);
                    window.removeEventListener('storage', handleStorageChange);
                }
            })["BuyerPage.useEffect"];
        }
    }["BuyerPage.useEffect"], []);
    const handleOrderCreated = (newOrder)=>{
        setOrdersList((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrders"])());
        setBuyerTab('orders');
    };
    // Dynamic list of unique crops from current real-time produce listings
    const availableCrops = [
        'All',
        ...Array.from(new Set(produceList.map((p)=>p.cropName)))
    ];
    const filteredProduce = selectedCropFilter === 'All' ? produceList : produceList.filter((p)=>p.cropName.toLowerCase() === selectedCropFilter.toLowerCase());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-950 text-on-surface antialiased min-h-screen pb-28 font-sans",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[430px] mx-auto min-h-screen bg-slate-50 flex flex-col relative shadow-2xl border-x border-slate-200/80",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "bg-white/90 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-40 transition-all shadow-xs",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center w-full px-4 h-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-800 to-emerald-600 text-white flex items-center justify-center shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-[22px]",
                                            children: "storefront"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[17px] font-black text-emerald-950 leading-tight tracking-tight",
                                                        children: t.appTitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] bg-emerald-100 text-emerald-800 font-extrabold px-1.5 py-0.5 rounded-md uppercase border border-emerald-300/60",
                                                        children: "Consumer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-slate-500 font-bold",
                                                children: "Direct Farm Sourcing"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-100/90 rounded-full p-0.5 flex text-[11px] border border-slate-200 font-bold shadow-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setLanguage('EN'),
                                            className: `px-2 py-0.5 rounded-full transition-all ${language === 'EN' ? 'bg-emerald-800 text-white font-black shadow-xs' : 'text-slate-600 hover:text-slate-900'}`,
                                            children: "EN"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setLanguage('BN'),
                                            className: `px-2 py-0.5 rounded-full transition-all ${language === 'BN' ? 'bg-emerald-800 text-white font-black shadow-xs' : 'text-slate-600 hover:text-slate-900'}`,
                                            children: "বাংলা"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setLanguage('HI'),
                                            className: `px-2 py-0.5 rounded-full transition-all ${language === 'HI' ? 'bg-emerald-800 text-white font-black shadow-xs' : 'text-slate-600 hover:text-slate-900'}`,
                                            children: "हिन्दी"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "bg-white px-4 py-2 flex items-center justify-between border-b border-slate-200/80 text-[11px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsMapOpen(true),
                            className: "flex items-center gap-1.5 font-bold text-slate-800 hover:text-emerald-700 transition-colors text-left max-w-[280px] group",
                            title: "Open Interactive Map (InDrive style)",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-[18px] text-emerald-600 group-hover:scale-110 transition-transform",
                                    children: "location_on"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate underline decoration-dotted font-bold text-slate-700",
                                    children: buyerLocation
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-0.5 rounded-md uppercase font-black shrink-0",
                                    children: "Map"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200/80 font-bold text-[10px] shrink-0 flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Verified P2P"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "p-4 flex flex-col gap-4",
                    children: [
                        buyerTab === 'home' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3 shadow-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-[18px] font-extrabold text-on-surface leading-tight",
                                                            children: buyerName
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[12px] text-on-surface-variant font-medium",
                                                            children: [
                                                                "📍 ",
                                                                buyerLocation
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-full bg-secondary-fixed text-secondary font-extrabold flex items-center justify-center border border-secondary text-sm",
                                                    children: buyerName.split(' ').map((w)=>w[0]).join('').slice(0, 2).toUpperCase() || 'BY'
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 154,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-[12px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-emerald-900",
                                                    children: t.farmEconomicsTitle
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-emerald-800 mt-0.5",
                                                    children: t.farmEconomicsDesc
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 text-white p-4 rounded-2xl border border-emerald-700/50 shadow-lg flex flex-col gap-3 relative overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -right-6 -bottom-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                                    lineNumber: 175,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[11px] font-extrabold uppercase tracking-wider text-emerald-300",
                                                                    children: "National Sourcing Radar"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                                    lineNumber: 176,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] bg-emerald-500/20 text-emerald-200 px-2 py-0.5 rounded-full font-bold border border-emerald-400/30",
                                                            children: "All-India Mandis"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-[16px] font-black text-white leading-tight flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Explore Sellers Across India"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                                    lineNumber: 187,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[18px]",
                                                                    children: "🗺️"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                                    lineNumber: 188,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-emerald-200/90 mt-0.5 font-medium",
                                                            children: "Filter by crop to view verified farmers, live farm-gate prices & direct transit routes to your receiving depot."
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-[11px]",
                                                    children: [
                                                        {
                                                            name: 'Tomato',
                                                            icon: '🍅'
                                                        },
                                                        {
                                                            name: 'Potato',
                                                            icon: '🥔'
                                                        },
                                                        {
                                                            name: 'Onion',
                                                            icon: '🧅'
                                                        },
                                                        {
                                                            name: 'Rice',
                                                            icon: '🌾'
                                                        },
                                                        {
                                                            name: 'Wheat',
                                                            icon: '🌾'
                                                        },
                                                        {
                                                            name: 'Chilli',
                                                            icon: '🌶️'
                                                        },
                                                        {
                                                            name: 'Cauliflower',
                                                            icon: '🥦'
                                                        },
                                                        {
                                                            name: 'Cabbage',
                                                            icon: '🥬'
                                                        },
                                                        {
                                                            name: 'Carrot',
                                                            icon: '🥕'
                                                        },
                                                        {
                                                            name: 'Apple',
                                                            icon: '🍎'
                                                        }
                                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setSelectedMapCrop(item.name);
                                                                setIsSellerMapOpen(true);
                                                            },
                                                            className: "px-2.5 py-1 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100 font-bold border border-emerald-600/40 whitespace-nowrap active:scale-95 transition-all shadow-xs flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: item.icon
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                                    lineNumber: 217,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: item.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                                    lineNumber: 218,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, item.name, true, {
                                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setSelectedMapCrop('All Crops');
                                                        setIsSellerMapOpen(true);
                                                    },
                                                    className: "w-full py-3 bg-white hover:bg-emerald-50 text-emerald-950 rounded-xl text-[13px] font-black transition-all shadow-md flex items-center justify-center gap-2 active:scale-98",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-[20px] text-emerald-700",
                                                            children: "public"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Open Whole Country Sellers Map"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsSmartMatchOpen(true),
                                            className: "w-full py-3 bg-primary-container text-on-primary rounded-xl text-[13px] font-extrabold hover:bg-primary transition-all shadow-sm flex items-center justify-center gap-2 active:scale-95",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[19px]",
                                                    children: "handshake"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t.runSmartMatchBtn
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 235,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-[16px] font-bold text-on-surface",
                                                    children: t.availableLotsTitle
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setBuyerTab('browse'),
                                                    className: "text-primary text-[12px] font-bold hover:underline",
                                                    children: [
                                                        t.viewAllLots,
                                                        " (",
                                                        produceList.length,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 246,
                                            columnNumber: 17
                                        }, this),
                                        produceList.slice(0, 3).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant flex flex-col gap-2 shadow-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-bold text-on-surface text-[15px]",
                                                                        children: [
                                                                            item.cropName,
                                                                            " (",
                                                                            item.grade,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                                        lineNumber: 260,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[12px] text-on-surface-variant",
                                                                        children: [
                                                                            item.farmerName,
                                                                            " • ",
                                                                            item.farmerLocation
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                                        lineNumber: 261,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                                lineNumber: 259,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "bg-emerald-100 text-primary-container px-2 py-0.5 rounded-full text-[11px] font-bold",
                                                                children: [
                                                                    item.quantityKg,
                                                                    " kg"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                                lineNumber: 263,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center text-[13px] pt-2 border-t border-outline-variant",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-on-surface-variant text-[12px]",
                                                                children: item.variety
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-extrabold text-primary text-[15px]",
                                                                children: [
                                                                    "₹",
                                                                    item.expectedPricePerKg,
                                                                    " / kg"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                                lineNumber: 269,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 245,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this),
                        buyerTab === 'browse' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[16px] font-bold text-on-surface",
                                            children: t.browseTitle
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 280,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setSelectedMapCrop(selectedCropFilter === 'All' ? 'All Crops' : selectedCropFilter);
                                                        setIsSellerMapOpen(true);
                                                    },
                                                    className: "px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 hover:bg-emerald-200 flex items-center gap-1 shadow-xs",
                                                    title: "View sellers on national map",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-[14px]",
                                                            children: "map"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "View Map"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-1 overflow-x-auto no-scrollbar max-w-[200px] py-0.5",
                                                    children: availableCrops.map((crop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setSelectedCropFilter(crop),
                                                            className: `px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all ${selectedCropFilter === crop ? 'bg-primary-container text-on-primary shadow-xs' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}`,
                                                            children: crop
                                                        }, crop, false, {
                                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 281,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 279,
                                    columnNumber: 15
                                }, this),
                                filteredProduce.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant flex flex-col gap-2 shadow-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-bold text-on-surface text-[15px]",
                                                                children: [
                                                                    item.cropName,
                                                                    " (",
                                                                    item.grade,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                                lineNumber: 313,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[12px] text-on-surface-variant",
                                                                children: [
                                                                    item.farmerName,
                                                                    " • ",
                                                                    item.farmerLocation
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                                lineNumber: 314,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-emerald-100 text-primary-container px-2 py-0.5 rounded-full text-[11px] font-bold",
                                                        children: item.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 316,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                lineNumber: 311,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center text-[13px] pt-1.5 border-t border-outline-variant",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-on-surface",
                                                        children: [
                                                            item.quantityKg,
                                                            " kg available"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-extrabold text-primary text-[15px]",
                                                        children: [
                                                            "₹",
                                                            item.expectedPricePerKg,
                                                            " / kg"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsSmartMatchOpen(true),
                                                className: "w-full py-2 bg-surface-container-high hover:bg-surface-container-highest rounded-lg text-[12px] font-bold text-primary flex items-center justify-center gap-1 transition-colors mt-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t.procureViaSmartMatch
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                lineNumber: 324,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                            lineNumber: 278,
                            columnNumber: 13
                        }, this),
                        buyerTab === 'orders' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3 shadow-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[16px] font-bold text-on-surface",
                                            children: t.trackOrdersTitle
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 338,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[12px] text-on-surface-variant",
                                            children: [
                                                ordersList.length,
                                                " ",
                                                t.totalLots
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 339,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 337,
                                    columnNumber: 15
                                }, this),
                                ordersList.map((ord)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3.5 bg-surface-container-low border border-outline-variant rounded-xl flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-primary text-[14px]",
                                                        children: ord.orderNumber
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full text-[11px] font-bold",
                                                        children: ord.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                lineNumber: 343,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[12px] text-on-surface-variant",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-on-surface",
                                                                children: [
                                                                    t.quantityLabel,
                                                                    ":"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                                lineNumber: 348,
                                                                columnNumber: 24
                                                            }, this),
                                                            " ",
                                                            ord.totalQuantityKg,
                                                            " kg"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-on-surface",
                                                                children: [
                                                                    t.destinationLabel,
                                                                    ":"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                                lineNumber: 349,
                                                                columnNumber: 24
                                                            }, this),
                                                            " ",
                                                            ord.destination
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-on-surface",
                                                                children: [
                                                                    t.deliveryLabel,
                                                                    ":"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                                lineNumber: 350,
                                                                columnNumber: 24
                                                            }, this),
                                                            " ",
                                                            ord.expectedDelivery
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 21
                                                    }, this),
                                                    ord.paymentMethod && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "flex items-center gap-1.5 mt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-on-surface",
                                                                children: "Payment:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                                lineNumber: 353,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-emerald-700 bg-emerald-100/70 px-1.5 py-0.2 rounded text-[10px]",
                                                                children: ord.paymentMethod
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                                lineNumber: 354,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `font-extrabold px-1.5 py-0.2 rounded text-[10px] ${ord.paymentStatus === 'Paid' ? 'bg-emerald-600 text-white' : 'bg-amber-500 text-white'}`,
                                                                children: ord.paymentStatus || 'Paid'
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                lineNumber: 347,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center text-[13px] font-bold text-on-surface pt-2 border-t border-outline-variant",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t.totalProcurementCost
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-primary text-[16px]",
                                                        children: [
                                                            "₹",
                                                            ord.totalAmount.toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                lineNumber: 365,
                                                columnNumber: 19
                                            }, this),
                                            ord.savingsRealized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] text-emerald-800 font-bold bg-emerald-50 p-1.5 rounded-md text-center",
                                                children: [
                                                    "💰 ",
                                                    t.middlemenSavings,
                                                    ": ₹",
                                                    ord.savingsRealized.toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                lineNumber: 370,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, ord.id, true, {
                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                        lineNumber: 342,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                            lineNumber: 336,
                            columnNumber: 13
                        }, this),
                        buyerTab === 'profile' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3 text-[13px] shadow-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-[16px] font-bold text-on-surface",
                                    children: t.buyerProfileTitle
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 381,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                t.entityLabel,
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 382,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        buyerName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 382,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                t.mobile,
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 383,
                                            columnNumber: 18
                                        }, this),
                                        " +91 98300 12345"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 383,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                t.location,
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 384,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        buyerLocation
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 384,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Address:"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 385,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        buyerAddress
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 385,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                t.verification,
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 386,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        t.buyerStatusValue
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 386,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-2 border-t border-outline-variant",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            if ("TURBOPACK compile-time truthy", 1) {
                                                localStorage.removeItem('farm2flow_user_session');
                                                window.location.href = '/login';
                                            }
                                        },
                                        className: "text-secondary font-bold hover:underline block py-1 text-left w-full cursor-pointer",
                                        children: t.signOut
                                    }, void 0, false, {
                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                        lineNumber: 388,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 387,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                            lineNumber: 380,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-surface-container-lowest/95 backdrop-blur-md border-t border-outline-variant grid grid-cols-4 text-[11px] font-bold text-center py-2 z-40 shadow-lg px-2",
                    children: [
                        {
                            id: 'home',
                            icon: 'home',
                            label: t.homeNav
                        },
                        {
                            id: 'browse',
                            icon: 'search',
                            label: t.browseNav
                        },
                        {
                            id: 'orders',
                            icon: 'local_shipping',
                            label: t.ordersNav
                        },
                        {
                            id: 'profile',
                            icon: 'person',
                            label: t.profileNav
                        }
                    ].map((item)=>{
                        const isActive = buyerTab === item.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setBuyerTab(item.id),
                            className: `relative flex flex-col items-center justify-center py-1 rounded-xl transition-all duration-200 ${isActive ? 'text-primary font-black scale-105' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50'}`,
                            children: [
                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-2 w-8 h-1 bg-primary rounded-full animate-in fade-in zoom-in duration-200"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 425,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-1 rounded-full transition-all ${isActive ? 'bg-primary/15' : ''}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `material-symbols-outlined block text-[22px] ${isActive ? 'fill-current' : ''}`,
                                        children: item.icon
                                    }, void 0, false, {
                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                        lineNumber: 428,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 427,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-[10px] tracking-tight ${isActive ? 'font-extrabold text-primary' : 'font-medium'}`,
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 432,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                            lineNumber: 415,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                    lineNumber: 406,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$components$2f$BuyerSmartMatchModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuyerSmartMatchModal"], {
                    isOpen: isSmartMatchOpen,
                    onClose: ()=>{
                        setIsSmartMatchOpen(false);
                        setSelectedSellerForMatch(null);
                    },
                    onOrderCreated: handleOrderCreated,
                    buyerName: buyerName,
                    buyerDestination: buyerAddress || buyerLocation,
                    initialCrop: selectedMapCrop !== 'All Crops' ? selectedMapCrop : 'Tomato',
                    selectedSeller: selectedSellerForMatch
                }, void 0, false, {
                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                    lineNumber: 441,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$components$2f$InDriveMapModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InDriveMapModal"], {
                    isOpen: isMapOpen,
                    userRole: "buyer",
                    currentLocationName: buyerLocation,
                    onClose: ()=>setIsMapOpen(false),
                    onSelectLocation: (loc)=>{
                        setBuyerLocation(`${loc.name}`);
                    }
                }, void 0, false, {
                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                    lineNumber: 455,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$components$2f$PanIndiaBuyerMapModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanIndiaBuyerMapModal"], {
                    isOpen: isSellerMapOpen,
                    onClose: ()=>setIsSellerMapOpen(false),
                    buyerCityName: buyerLocation,
                    initialCrop: selectedMapCrop,
                    onSelectSeller: (seller)=>{
                        setSelectedSellerForMatch(seller);
                        setSelectedMapCrop(seller.crop);
                        setIsSmartMatchOpen(true);
                    }
                }, void 0, false, {
                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                    lineNumber: 466,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(BuyerPage, "6POeV1K9LBs5tJAMV7aBVgSkNiw=");
_c = BuyerPage;
var _c;
__turbopack_context__.k.register(_c, "BuyerPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BuyerSmartMatchModal",
    ()=>BuyerSmartMatchModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$cropCatalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/src/data/cropCatalog.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const BuyerSmartMatchModal = ({ isOpen, onClose, onOrderCreated, buyerName = 'Sourav Mukherjee', buyerDestination = 'Salt Lake, Kolkata', initialCrop = 'Tomato', selectedSeller = null })=>{
    _s();
    const [crop, setCrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialCrop || 'Tomato');
    const [requiredKg, setRequiredKg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedSeller ? Math.min(selectedSeller.quantityKg, 200) : 50);
    const [matchResult, setMatchResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Checkout & Payment flow states
    const [showPaymentStep, setShowPaymentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPayment, setSelectedPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('cash');
    const [isProcessingPayment, setIsProcessingPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOnlinePaid, setIsOnlinePaid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [availableCropsList, setAvailableCropsList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuyerSmartMatchModal.useEffect": ()=>{
            // Dynamic available crops from current catalog and stored produce
            const produce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredProduce"])();
            const catalog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$cropCatalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllCatalogCrops"])();
            const set = new Set();
            // Add produce items
            produce.forEach({
                "BuyerSmartMatchModal.useEffect": (p)=>set.add(p.cropName)
            }["BuyerSmartMatchModal.useEffect"]);
            // Add all catalog crops
            catalog.forEach({
                "BuyerSmartMatchModal.useEffect": (c)=>set.add(c.name)
            }["BuyerSmartMatchModal.useEffect"]);
            const uniqueCrops = Array.from(set);
            setAvailableCropsList(uniqueCrops.length > 0 ? uniqueCrops : [
                'Tomato',
                'Potato',
                'Onion',
                'Rice',
                'Wheat'
            ]);
        }
    }["BuyerSmartMatchModal.useEffect"], [
        isOpen
    ]);
    // Sync when initialCrop or selectedSeller updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuyerSmartMatchModal.useEffect": ()=>{
            if (selectedSeller) {
                setCrop(selectedSeller.crop);
                setRequiredKg(Math.min(selectedSeller.quantityKg, 500));
            } else if (initialCrop) {
                setCrop(initialCrop);
            }
            setShowPaymentStep(false);
            setMatchResult(null);
        }
    }["BuyerSmartMatchModal.useEffect"], [
        initialCrop,
        selectedSeller,
        isOpen
    ]);
    if (!isOpen) return null;
    const handleSearchMatch = ()=>{
        setIsSearching(true);
        setShowPaymentStep(false);
        setIsOnlinePaid(false);
        setTimeout(()=>{
            // If a specific seller was chosen directly from the Map, prioritize matching with them
            if (selectedSeller && selectedSeller.crop.toLowerCase() === crop.toLowerCase()) {
                const matchedKg = Math.min(selectedSeller.quantityKg, requiredKg);
                const totalCost = matchedKg * selectedSeller.pricePerKg;
                const result = {
                    requirementId: `req-${Date.now()}`,
                    cropName: selectedSeller.crop,
                    requestedKg: requiredKg,
                    fulfilledKg: matchedKg,
                    overallMatchPct: 98,
                    suppliers: [
                        {
                            produceId: selectedSeller.id,
                            farmerName: selectedSeller.name,
                            farmerLocation: `${selectedSeller.location}, ${selectedSeller.state}`,
                            availableKg: selectedSeller.quantityKg,
                            matchedKg,
                            grade: selectedSeller.grade || 'Grade A',
                            pricePerKg: selectedSeller.pricePerKg,
                            distanceKm: Math.round(selectedSeller.transitDaysToKolkata * 250),
                            matchPercentage: 99,
                            verified: selectedSeller.verified
                        }
                    ],
                    estimatedTotalCost: totalCost,
                    savingsVsMiddlemenPct: 22
                };
                setMatchResult(result);
            } else {
                const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSmartMatches"])(crop, requiredKg);
                setMatchResult(res);
            }
            setIsSearching(false);
        }, 400);
    };
    const handleProceedToBuy = ()=>{
        if (!matchResult) return;
        setShowPaymentStep(true);
    };
    const handleFinalizeOrder = (method)=>{
        if (!matchResult) return;
        setIsProcessingPayment(true);
        const paymentLabel = method === 'cash' ? 'Cash on Delivery' : method === 'card' ? 'Card Payment' : 'Online (UPI/QR)';
        setTimeout(()=>{
            const createdOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOrderFromMatch"])(matchResult, buyerName, paymentLabel, buyerDestination);
            setIsProcessingPayment(false);
            setShowPaymentStep(false);
            setIsOnlinePaid(false);
            onOrderCreated(createdOrder);
            onClose();
        }, method === 'online' ? 700 : 500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[430px] bg-surface rounded-t-2xl sm:rounded-2xl p-5 border border-outline-variant shadow-2xl flex flex-col gap-4 max-h-[95vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-outline-variant pb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-headline-sm font-bold text-on-surface",
                                    children: "Consumer Direct Farm Matching"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-body-sm text-[12px] text-on-surface-variant",
                                    children: "Connect directly with verified local & national farmers"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined text-[20px]",
                                children: "close"
                            }, void 0, false, {
                                fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant flex flex-col gap-3",
                    children: [
                        selectedSeller && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-emerald-50/90 border border-emerald-300 p-3 rounded-xl flex flex-col gap-1.5 animate-in fade-in duration-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] uppercase font-black tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full",
                                            children: "Selected Supplier from Map"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] font-extrabold text-emerald-900",
                                            children: selectedSeller.grade
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-9 h-9 rounded-full bg-emerald-200 text-emerald-950 font-black text-[13px] flex items-center justify-center shrink-0",
                                            children: selectedSeller.name.slice(0, 2).toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-extrabold text-emerald-950 text-[14px] leading-tight",
                                                    children: selectedSeller.name
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-emerald-800 font-medium",
                                                    children: [
                                                        selectedSeller.location,
                                                        ", ",
                                                        selectedSeller.state,
                                                        " • ",
                                                        selectedSeller.fpoOrCoop
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-1.5 pt-1 text-[10px] font-bold text-emerald-900 border-t border-emerald-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white/80 p-1.5 rounded-lg text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-slate-500 font-normal",
                                                    children: "Direct Rate"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-emerald-800 font-extrabold text-[12px]",
                                                    children: [
                                                        "₹",
                                                        selectedSeller.pricePerKg,
                                                        "/kg"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white/80 p-1.5 rounded-lg text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-slate-500 font-normal",
                                                    children: "Available"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-extrabold text-[12px]",
                                                    children: [
                                                        selectedSeller.quantityKg.toLocaleString(),
                                                        " kg"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white/80 p-1.5 rounded-lg text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-slate-500 font-normal",
                                                    children: "Transit"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-extrabold text-[12px]",
                                                    children: [
                                                        "~",
                                                        selectedSeller.transitDaysToKolkata,
                                                        " Days"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                            lineNumber: 162,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-body-sm text-[12px] text-on-surface-variant font-medium",
                                            children: "Crop Required"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        selectedSeller && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] font-bold text-emerald-700",
                                            children: "Preselected from Map"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 205,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: crop,
                                    onChange: (e)=>{
                                        setCrop(e.target.value);
                                        setShowPaymentStep(false);
                                    },
                                    className: "w-full mt-1 px-3 py-2 bg-surface-container-low border border-outline-variant rounded-lg font-bold text-on-surface focus:outline-primary",
                                    children: availableCropsList.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: c,
                                            children: c
                                        }, c, false, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 217,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center text-body-sm text-[12px] text-on-surface-variant",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Required Purchase Quantity"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "2",
                                                    max: "5000",
                                                    value: requiredKg,
                                                    onChange: (e)=>{
                                                        setRequiredKg(Math.max(2, Number(e.target.value)));
                                                        setShowPaymentStep(false);
                                                    },
                                                    className: "w-20 px-2 py-1 bg-surface-container border border-outline-variant rounded-lg font-extrabold text-primary text-right text-[14px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-primary",
                                                    children: "kg"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 225,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: "2",
                                    max: "5000",
                                    step: "1",
                                    value: requiredKg,
                                    onChange: (e)=>{
                                        setRequiredKg(Number(e.target.value));
                                        setShowPaymentStep(false);
                                    },
                                    className: "w-full mt-2 h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between text-[10px] text-on-surface-variant font-bold mt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "2 kg (Retail / Min)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 253,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "250 kg"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 254,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "1,000 kg"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 255,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "5,000 kg (Bulk)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 256,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSearchMatch,
                            disabled: isSearching,
                            className: "w-full py-2.5 bg-primary-container text-on-primary rounded-xl text-label-md font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2 shadow-xs active:scale-98",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-[18px]",
                                    children: "search"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isSearching ? 'Analyzing Local Mandis...' : 'Run Smart Match'
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                matchResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 animate-in fade-in duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-emerald-100 border border-emerald-300 p-3 rounded-xl flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-3 h-3 rounded-full bg-emerald-600 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 276,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-label-md font-extrabold text-primary",
                                            children: [
                                                "Smart Match: ",
                                                matchResult.overallMatchPct,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 277,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 275,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-label-sm font-bold text-secondary bg-surface px-2 py-0.5 rounded-md",
                                    children: "18% Savings"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 279,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                            lineNumber: 274,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-label-sm font-bold text-on-surface-variant uppercase tracking-wider",
                                    children: "Matched Supplier Combination:"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 286,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                matchResult.suppliers.length > 0 ? matchResult.suppliers.map((s, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-surface-container-lowest border border-outline-variant rounded-xl flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed font-bold text-[12px] flex items-center justify-center",
                                                        children: idx + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-label-md font-bold text-on-surface leading-tight",
                                                                children: s.farmerName
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                lineNumber: 295,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-body-sm text-[11px] text-on-surface-variant",
                                                                children: [
                                                                    s.farmerLocation,
                                                                    " • ₹",
                                                                    s.pricePerKg,
                                                                    "/kg"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                lineNumber: 296,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                lineNumber: 290,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-label-md font-extrabold text-primary-container",
                                                children: [
                                                    s.matchedKg,
                                                    " kg"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                lineNumber: 299,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                        lineNumber: 289,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-amber-50 border border-amber-200 rounded-xl text-[12px] text-amber-900 font-medium",
                                    children: "No direct matching lots found for this specific quantity right now. Try adjusting the requested kilograms."
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 305,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                            lineNumber: 285,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-surface-container-low p-3 rounded-xl border border-outline-variant flex justify-between items-center text-label-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-on-surface-variant",
                                            children: "Total Quantity Matched"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 314,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-extrabold text-on-surface",
                                            children: [
                                                matchResult.fulfilledKg.toLocaleString(),
                                                " / ",
                                                matchResult.requestedKg.toLocaleString(),
                                                " kg"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 315,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 313,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-on-surface-variant",
                                            children: "Estimated Order Value"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 318,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-extrabold text-primary text-headline-sm",
                                            children: [
                                                "₹",
                                                matchResult.estimatedTotalCost.toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 319,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 317,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                            lineNumber: 312,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        !showPaymentStep ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleProceedToBuy,
                            disabled: matchResult.fulfilledKg === 0,
                            className: "w-full py-3.5 bg-primary-container text-on-primary rounded-xl text-label-md font-extrabold hover:bg-primary transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-[20px]",
                                    children: "shopping_cart_checkout"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 330,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Buy Now • ₹",
                                        matchResult.estimatedTotalCost.toLocaleString()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 331,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                            lineNumber: 325,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : /* Payment Options Container */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-surface-container-lowest p-4 rounded-xl border-2 border-primary/40 flex flex-col gap-3 shadow-md animate-in slide-in-from-bottom-2 duration-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between border-b border-outline-variant pb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-extrabold text-[14px] text-on-surface flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[18px] text-primary",
                                                    children: "payments"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Select Payment Option"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 337,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full",
                                            children: [
                                                "Total: ₹",
                                                matchResult.estimatedTotalCost.toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 341,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 336,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-2 text-[12px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setSelectedPayment('cash');
                                                setIsOnlinePaid(false);
                                            },
                                            className: `p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${selectedPayment === 'cash' ? 'border-primary bg-primary/10 text-primary font-black shadow-xs ring-2 ring-primary/20' : 'border-outline-variant bg-surface hover:bg-surface-container-high text-on-surface-variant font-medium'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[24px]",
                                                    children: "payments"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Cash"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] opacity-80",
                                                    children: "(Pay on Delivery)"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 349,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setSelectedPayment('card');
                                                setIsOnlinePaid(false);
                                            },
                                            className: `p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${selectedPayment === 'card' ? 'border-primary bg-primary/10 text-primary font-black shadow-xs ring-2 ring-primary/20' : 'border-outline-variant bg-surface hover:bg-surface-container-high text-on-surface-variant font-medium'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[24px]",
                                                    children: "credit_card"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 377,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Card"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] opacity-80",
                                                    children: "(Debit / Credit)"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 366,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setSelectedPayment('online');
                                                setIsOnlinePaid(false);
                                            },
                                            className: `p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${selectedPayment === 'online' ? 'border-primary bg-primary/10 text-primary font-black shadow-xs ring-2 ring-primary/20' : 'border-outline-variant bg-surface hover:bg-surface-container-high text-on-surface-variant font-medium'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[24px]",
                                                    children: "qr_code_scanner"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Online"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] opacity-80",
                                                    children: "(UPI / QR Scanner)"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 383,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 347,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                selectedPayment === 'cash' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex flex-col gap-2 text-[12px] animate-in fade-in duration-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-emerald-900 font-bold",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[18px]",
                                                    children: "check_circle"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 404,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Cash on Delivery Verified"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 403,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-emerald-800 text-[11px]",
                                            children: [
                                                "Your order will be placed immediately. Hand over cash of ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        "₹",
                                                        matchResult.estimatedTotalCost.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 408,
                                                    columnNumber: 80
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " to the verified farm delivery partner upon receipt at ",
                                                buyerDestination,
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 407,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleFinalizeOrder('cash'),
                                            disabled: isProcessingPayment,
                                            className: "w-full mt-1 py-3 bg-primary text-white rounded-xl font-black text-[13px] hover:bg-primary/90 transition-all shadow-md active:scale-98 flex items-center justify-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[18px]",
                                                    children: "shopping_bag"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: isProcessingPayment ? 'Placing Order...' : 'Place Cash Order Now'
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 416,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 410,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 402,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                selectedPayment === 'card' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-50 border border-blue-200 rounded-xl p-3 flex flex-col gap-2.5 text-[12px] animate-in fade-in duration-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-blue-900 font-bold",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[18px]",
                                                    children: "credit_card"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Instant Card Checkout"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 424,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Card Number (XXXX XXXX XXXX XXXX)",
                                                    defaultValue: "4111 2233 4455 9988",
                                                    className: "w-full px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-[12px] font-mono"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "MM/YY",
                                                            defaultValue: "12/28",
                                                            className: "px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-[12px] text-center"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                            lineNumber: 436,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "password",
                                                            placeholder: "CVV",
                                                            defaultValue: "786",
                                                            maxLength: 3,
                                                            className: "px-3 py-1.5 bg-white border border-blue-200 rounded-lg text-[12px] text-center"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                            lineNumber: 442,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 428,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleFinalizeOrder('card'),
                                            disabled: isProcessingPayment,
                                            className: "w-full py-3 bg-blue-700 text-white rounded-xl font-black text-[13px] hover:bg-blue-800 transition-all shadow-md active:scale-98 flex items-center justify-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[18px]",
                                                    children: "lock"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 456,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: isProcessingPayment ? 'Authorizing Card...' : `Pay ₹${matchResult.estimatedTotalCost.toLocaleString()} & Place Order`
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 457,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 451,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 423,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                selectedPayment === 'online' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-900 text-white border border-slate-700 rounded-xl p-3.5 flex flex-col items-center gap-3 text-[12px] animate-in fade-in duration-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between w-full border-b border-slate-700 pb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 text-emerald-400 font-bold",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-[18px]",
                                                            children: "qr_code_scanner"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                            lineNumber: 467,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Scan & Pay via any UPI App"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                            lineNumber: 468,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300 font-mono",
                                                    children: "GPay • PhonePe • Paytm"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 470,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 465,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-3 rounded-2xl shadow-xl flex flex-col items-center gap-2 border-2 border-emerald-500/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-40 h-40 bg-white relative flex items-center justify-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-36 h-36",
                                                            viewBox: "0 0 100 100",
                                                            fill: "currentColor",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "5",
                                                                    y: "5",
                                                                    width: "28",
                                                                    height: "28",
                                                                    fill: "#111827",
                                                                    rx: "3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 481,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "9",
                                                                    y: "9",
                                                                    width: "20",
                                                                    height: "20",
                                                                    fill: "white",
                                                                    rx: "1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 482,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "13",
                                                                    y: "13",
                                                                    width: "12",
                                                                    height: "12",
                                                                    fill: "#047857",
                                                                    rx: "1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 483,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "67",
                                                                    y: "5",
                                                                    width: "28",
                                                                    height: "28",
                                                                    fill: "#111827",
                                                                    rx: "3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 485,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "71",
                                                                    y: "9",
                                                                    width: "20",
                                                                    height: "20",
                                                                    fill: "white",
                                                                    rx: "1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 486,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "75",
                                                                    y: "13",
                                                                    width: "12",
                                                                    height: "12",
                                                                    fill: "#047857",
                                                                    rx: "1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 487,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "5",
                                                                    y: "67",
                                                                    width: "28",
                                                                    height: "28",
                                                                    fill: "#111827",
                                                                    rx: "3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 489,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "9",
                                                                    y: "71",
                                                                    width: "20",
                                                                    height: "20",
                                                                    fill: "white",
                                                                    rx: "1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 490,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "13",
                                                                    y: "75",
                                                                    width: "12",
                                                                    height: "12",
                                                                    fill: "#047857",
                                                                    rx: "1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 491,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "38",
                                                                    y: "10",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 494,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "48",
                                                                    y: "10",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 495,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "58",
                                                                    y: "10",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 496,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "38",
                                                                    y: "20",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 497,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "48",
                                                                    y: "25",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 498,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "58",
                                                                    y: "20",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 499,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "10",
                                                                    y: "38",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 501,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "20",
                                                                    y: "38",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 502,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "30",
                                                                    y: "45",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 503,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "40",
                                                                    y: "38",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 504,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "50",
                                                                    y: "45",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 505,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "60",
                                                                    y: "38",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 506,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "70",
                                                                    y: "45",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 507,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "80",
                                                                    y: "38",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 508,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "38",
                                                                    y: "55",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 510,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "48",
                                                                    y: "55",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 511,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "58",
                                                                    y: "55",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 512,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "38",
                                                                    y: "67",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 514,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "48",
                                                                    y: "75",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 515,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "58",
                                                                    y: "67",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 516,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "67",
                                                                    y: "67",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 517,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "75",
                                                                    y: "75",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 518,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "85",
                                                                    y: "67",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 519,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "75",
                                                                    y: "85",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 520,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "85",
                                                                    y: "85",
                                                                    width: "5",
                                                                    height: "5",
                                                                    fill: "#111827"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 521,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "50",
                                                                    cy: "50",
                                                                    r: "10",
                                                                    fill: "#047857"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 524,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                    x: "50",
                                                                    y: "54",
                                                                    fontSize: "10",
                                                                    fontWeight: "bold",
                                                                    fill: "white",
                                                                    textAnchor: "middle",
                                                                    children: "₹"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                    lineNumber: 525,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                            lineNumber: 479,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-x-2 h-0.5 bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse pointer-events-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                            lineNumber: 529,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 477,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-800 font-extrabold tracking-wider uppercase",
                                                    children: "UPI ID: farm2flow@icici"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 476,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center space-y-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-extrabold text-[13px] text-white",
                                                    children: [
                                                        "Scan & Pay ₹",
                                                        matchResult.estimatedTotalCost.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 537,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-400",
                                                    children: "Scan with your mobile camera or any UPI app."
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 540,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 536,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        !isOnlinePaid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setIsProcessingPayment(true);
                                                setTimeout(()=>{
                                                    setIsProcessingPayment(false);
                                                    setIsOnlinePaid(true);
                                                }, 900);
                                            },
                                            disabled: isProcessingPayment,
                                            className: "w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-[12px] flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-98",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[16px]",
                                                    children: "qr_code"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 558,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: isProcessingPayment ? 'Verifying UPI Scanner...' : 'Simulate Scan / Approve UPI Payment'
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 559,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 547,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full space-y-2 animate-in zoom-in duration-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-emerald-950 border border-emerald-500/80 rounded-xl p-2.5 flex items-center justify-center gap-2 text-emerald-300 font-bold text-[12px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-[20px] text-emerald-400 animate-bounce",
                                                            children: "verified"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                            lineNumber: 564,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "UPI Payment Verified Successfully!"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                            lineNumber: 565,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 563,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleFinalizeOrder('online'),
                                                    disabled: isProcessingPayment,
                                                    className: "w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-[13px] transition-all shadow-lg active:scale-98 flex items-center justify-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-[18px]",
                                                            children: "check_circle"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                            lineNumber: 572,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Finalize & Place Order"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                            lineNumber: 573,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 567,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 562,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 464,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                            lineNumber: 335,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                    lineNumber: 272,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
            lineNumber: 141,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BuyerSmartMatchModal, "HlUyTbDKCDmj+gLtwkCK+wb/KCc=");
_c = BuyerSmartMatchModal;
var _c;
__turbopack_context__.k.register(_c, "BuyerSmartMatchModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/pwa/src/components/InDriveMapModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InDriveMapModal",
    ()=>InDriveMapModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
// Popular Bengal Agricultural hubs & mandis for quick selection
const POPULAR_LOCATIONS = {
    farmer: [
        {
            name: 'Hooghly Hub (Singur)',
            address: 'Singur Vegetable Belt, Hooghly, WB',
            lat: 22.8123,
            lng: 88.2325
        },
        {
            name: 'Burdwan Paddy Mandi',
            address: 'Shaktigarh Agricultural Cluster, Purba Bardhaman, WB',
            lat: 23.2324,
            lng: 87.8615
        },
        {
            name: 'Nadia Vegetable Zone',
            address: 'Ranaghat Mandi Complex, Nadia, WB',
            lat: 23.1812,
            lng: 88.5812
        },
        {
            name: 'North 24 Parganas (Barasat)',
            address: 'Kachua Road, Barasat Agro Market, WB',
            lat: 22.7225,
            lng: 88.4812
        },
        {
            name: 'Midnapore Potato Center',
            address: 'Ghatal Mandi Depot, Paschim Medinipur, WB',
            lat: 22.6681,
            lng: 87.7214
        }
    ],
    buyer: [
        {
            name: 'Salt Lake (Sector 1), Kolkata',
            address: 'AD-Block, Sector 1, Salt Lake, Kolkata - 700064',
            lat: 22.5862,
            lng: 88.4091
        },
        {
            name: 'New Town (Action Area 1)',
            address: 'Tower 4, Uniworld City, New Town, Kolkata - 700156',
            lat: 22.5804,
            lng: 88.4625
        },
        {
            name: 'Ballygunge, South Kolkata',
            address: '42/1 Dover Road, Ballygunge, Kolkata - 700019',
            lat: 22.5280,
            lng: 88.3653
        },
        {
            name: 'Jadavpur, Kolkata',
            address: 'Prince Anwar Shah Road, Jadavpur, Kolkata - 700032',
            lat: 22.4988,
            lng: 88.3715
        },
        {
            name: 'Dum Dum Park, North Kolkata',
            address: 'Tank No. 3, Dum Dum Park, Kolkata - 700055',
            lat: 22.6072,
            lng: 88.4065
        }
    ]
};
const InDriveMapModal = ({ isOpen, onClose, userRole, currentLocationName, onSelectLocation })=>{
    _s();
    const mapContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [selectedLoc, setSelectedLoc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "InDriveMapModal.useState": ()=>{
            const list = POPULAR_LOCATIONS[userRole];
            const match = list.find({
                "InDriveMapModal.useState": (l)=>l.name.toLowerCase().includes(currentLocationName.toLowerCase())
            }["InDriveMapModal.useState"]) || list[0];
            return match;
        }
    }["InDriveMapModal.useState"]);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLocatingGPS, setIsLocatingGPS] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [gpsError, setGpsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Initialize interactive Leaflet map
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InDriveMapModal.useEffect": ()=>{
            if (!isOpen) return;
            // Small delay to ensure modal DOM is mounted
            const timer = setTimeout({
                "InDriveMapModal.useEffect.timer": ()=>{
                    if (("TURBOPACK compile-time value", "object") === 'undefined' || !window.L || !mapContainerRef.current) return;
                    const L = window.L;
                    if (!mapInstanceRef.current) {
                        const map = L.map(mapContainerRef.current, {
                            center: [
                                selectedLoc.lat,
                                selectedLoc.lng
                            ],
                            zoom: 13,
                            zoomControl: false
                        });
                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            maxZoom: 19,
                            attribution: '&copy; OpenStreetMap'
                        }).addTo(map);
                        L.control.zoom({
                            position: 'bottomright'
                        }).addTo(map);
                        // Custom InDrive-style Marker icon
                        const pinIcon = L.divIcon({
                            className: 'indrive-pin-wrapper',
                            html: `
            <div style="
              width: 38px; height: 38px;
              background: #006c35;
              border: 3px solid #ffffff;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              box-shadow: 0 4px 12px rgba(0,0,0,0.35);
              display: flex; align-items: center; justify-content: center;
            ">
              <span style="
                transform: rotate(45deg);
                color: #ffffff;
                font-weight: 900;
                font-size: 16px;
              ">📍</span>
            </div>
          `,
                            iconSize: [
                                38,
                                38
                            ],
                            iconAnchor: [
                                19,
                                38
                            ]
                        });
                        const marker = L.marker([
                            selectedLoc.lat,
                            selectedLoc.lng
                        ], {
                            draggable: true,
                            icon: pinIcon
                        }).addTo(map);
                        marker.on('dragend', {
                            "InDriveMapModal.useEffect.timer": async ()=>{
                                const pos = marker.getLatLng();
                                const lat = parseFloat(pos.lat.toFixed(5));
                                const lng = parseFloat(pos.lng.toFixed(5));
                                setSelectedLoc({
                                    "InDriveMapModal.useEffect.timer": (prev)=>({
                                            name: `Pinned Location (${lat}, ${lng})`,
                                            address: `Coordinates: ${lat}° N, ${lng}° E • West Bengal`,
                                            lat,
                                            lng
                                        })
                                }["InDriveMapModal.useEffect.timer"]);
                            }
                        }["InDriveMapModal.useEffect.timer"]);
                        map.on('click', {
                            "InDriveMapModal.useEffect.timer": (e)=>{
                                const lat = parseFloat(e.latlng.lat.toFixed(5));
                                const lng = parseFloat(e.latlng.lng.toFixed(5));
                                marker.setLatLng([
                                    lat,
                                    lng
                                ]);
                                map.panTo([
                                    lat,
                                    lng
                                ]);
                                setSelectedLoc({
                                    "InDriveMapModal.useEffect.timer": (prev)=>({
                                            name: `Selected Point (${lat}, ${lng})`,
                                            address: `Tapped Pin: ${lat}° N, ${lng}° E • West Bengal`,
                                            lat,
                                            lng
                                        })
                                }["InDriveMapModal.useEffect.timer"]);
                            }
                        }["InDriveMapModal.useEffect.timer"]);
                        mapInstanceRef.current = map;
                        markerRef.current = marker;
                    } else {
                        mapInstanceRef.current.invalidateSize();
                        mapInstanceRef.current.setView([
                            selectedLoc.lat,
                            selectedLoc.lng
                        ], 13);
                        if (markerRef.current) {
                            markerRef.current.setLatLng([
                                selectedLoc.lat,
                                selectedLoc.lng
                            ]);
                        }
                    }
                }
            }["InDriveMapModal.useEffect.timer"], 150);
            return ({
                "InDriveMapModal.useEffect": ()=>{
                    clearTimeout(timer);
                }
            })["InDriveMapModal.useEffect"];
        }
    }["InDriveMapModal.useEffect"], [
        isOpen
    ]);
    // Clean up on modal close
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InDriveMapModal.useEffect": ()=>{
            if (!isOpen && mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
                markerRef.current = null;
            }
        }
    }["InDriveMapModal.useEffect"], [
        isOpen
    ]);
    // Handle GPS location access (InDrive style "Locate Me")
    const handleGetLiveGPS = ()=>{
        if (("TURBOPACK compile-time value", "object") === 'undefined' || !navigator.geolocation) {
            setGpsError('Geolocation not supported by this browser.');
            return;
        }
        setIsLocatingGPS(true);
        setGpsError('');
        navigator.geolocation.getCurrentPosition((pos)=>{
            setIsLocatingGPS(false);
            const lat = parseFloat(pos.coords.latitude.toFixed(5));
            const lng = parseFloat(pos.coords.longitude.toFixed(5));
            const liveLoc = {
                name: 'My Current Live GPS Location',
                address: `GPS Lat: ${lat}, Lng: ${lng} (±${Math.round(pos.coords.accuracy)}m accuracy)`,
                lat,
                lng
            };
            setSelectedLoc(liveLoc);
            if (mapInstanceRef.current && markerRef.current) {
                mapInstanceRef.current.setView([
                    lat,
                    lng
                ], 15);
                markerRef.current.setLatLng([
                    lat,
                    lng
                ]);
            }
        }, (err)=>{
            setIsLocatingGPS(false);
            setGpsError('GPS permission denied or timed out. Please select from below.');
            console.warn('GPS Error:', err);
        }, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        });
    };
    const handlePickPreset = (loc)=>{
        setSelectedLoc(loc);
        if (mapInstanceRef.current && markerRef.current) {
            mapInstanceRef.current.setView([
                loc.lat,
                loc.lng
            ], 14);
            markerRef.current.setLatLng([
                loc.lat,
                loc.lng
            ]);
        }
    };
    const handleConfirmLocation = ()=>{
        onSelectLocation(selectedLoc);
        onClose();
    };
    if (!isOpen) return null;
    const presets = POPULAR_LOCATIONS[userRole];
    const filteredPresets = searchQuery ? presets.filter((p)=>p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.address.toLowerCase().includes(searchQuery.toLowerCase())) : presets;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[430px] bg-surface rounded-t-3xl sm:rounded-3xl border border-outline-variant shadow-2xl flex flex-col h-[90vh] sm:h-[650px] overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 bg-surface border-b border-outline-variant flex items-center justify-between shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-9 h-9 rounded-xl bg-primary-container text-on-primary flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined text-[20px]",
                                        children: "explore"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[16px] font-extrabold text-on-surface leading-tight",
                                            children: userRole === 'farmer' ? 'Set Farm / Mandi Location' : 'Set Buyer Delivery Hub'
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-on-surface-variant font-medium",
                                            children: "InDrive-Style Interactive Map & GPS"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined text-[20px]",
                                children: "close"
                            }, void 0, false, {
                                fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex-1 min-h-[220px] bg-surface-container-high overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: mapContainerRef,
                            className: "w-full h-full",
                            style: {
                                zIndex: 1
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleGetLiveGPS,
                            disabled: isLocatingGPS,
                            title: "Locate my position with GPS",
                            className: "absolute top-3 right-3 z-10 bg-white hover:bg-emerald-50 text-primary border border-outline-variant px-3 py-2 rounded-xl shadow-lg flex items-center gap-1.5 text-[12px] font-extrabold active:scale-95 transition-transform",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `material-symbols-outlined text-[18px] ${isLocatingGPS ? 'animate-spin text-amber-600' : 'text-primary'}`,
                                    children: isLocatingGPS ? 'refresh' : 'my_location'
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isLocatingGPS ? 'Locating...' : 'Use My GPS'
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-2 left-1/2 -translate-x-1/2 z-10 bg-black/75 text-white px-3 py-1 rounded-full text-[11px] font-bold pointer-events-none whitespace-nowrap shadow-md backdrop-blur-xs",
                            children: "📍 Drag pin or tap anywhere on map to set spot"
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                            lineNumber: 267,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                    lineNumber: 250,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-surface p-4 border-t border-outline-variant flex flex-col gap-3 max-h-[45%] overflow-y-auto shrink-0 shadow-lg",
                    children: [
                        gpsError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 bg-amber-50 border border-amber-200 text-amber-900 rounded-lg text-[11px] font-bold",
                            children: [
                                "⚠️ ",
                                gpsError
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                            lineNumber: 275,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-surface-container-low p-3 rounded-2xl border border-outline-variant flex items-start gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-primary text-[22px] mt-0.5",
                                    children: "location_on"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                                    lineNumber: 282,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[13px] font-extrabold text-on-surface truncate",
                                            children: selectedLoc.name
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                                            lineNumber: 284,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-on-surface-variant font-medium truncate",
                                            children: selectedLoc.address
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                                            lineNumber: 285,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                            lineNumber: 281,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-[18px] absolute left-3 top-2.5 text-on-surface-variant",
                                    children: "search"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    placeholder: "Search Bengal mandis, hubs or districts...",
                                    className: "w-full pl-9 pr-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-xl text-[12px] font-bold text-on-surface focus:outline-none focus:border-primary shadow-xs"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold uppercase tracking-wider text-on-surface-variant",
                                    children: "Quick Select Hubs:"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                                    lineNumber: 303,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 gap-1.5 max-h-[110px] overflow-y-auto pr-1",
                                    children: filteredPresets.map((loc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handlePickPreset(loc),
                                            className: `p-2 rounded-xl text-left flex items-center justify-between border transition-all ${selectedLoc.name === loc.name ? 'bg-primary-container/15 border-primary text-primary font-bold' : 'bg-surface-container-lowest hover:bg-surface-container-low border-outline-variant text-on-surface text-[12px]'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0 flex-1 pr-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-[12px] truncate",
                                                            children: loc.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-on-surface-variant truncate font-normal",
                                                            children: loc.address
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                                                            lineNumber: 319,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[16px] text-on-surface-variant",
                                                    children: "chevron_right"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                                            lineNumber: 308,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                                    lineNumber: 306,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                            lineNumber: 302,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleConfirmLocation,
                            className: "w-full py-3 bg-primary text-white rounded-xl text-[14px] font-extrabold hover:bg-primary/90 transition-all shadow-md active:scale-98 flex items-center justify-center gap-1.5 mt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-[18px]",
                                    children: "check_circle"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Confirm & Set Location"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
                    lineNumber: 273,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
            lineNumber: 226,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/pwa/src/components/InDriveMapModal.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(InDriveMapModal, "e/4k4RWFI9M1vlNk4GRPI/IrGPM=");
_c = InDriveMapModal;
var _c;
__turbopack_context__.k.register(_c, "InDriveMapModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PanIndiaBuyerMapModal",
    ()=>PanIndiaBuyerMapModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$panIndiaSellers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/src/data/panIndiaSellers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/src/services/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const PanIndiaBuyerMapModal = ({ isOpen, onClose, buyerCityName = 'Salt Lake, Kolkata', initialCrop = 'All Crops', onSelectSeller })=>{
    _s();
    const mapContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markersLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Live real-time sellers list from storage & live events
    const [liveProduce, setLiveProduce] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PanIndiaBuyerMapModal.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredProduce"])();
            }
            //TURBOPACK unreachable
            ;
        }
    }["PanIndiaBuyerMapModal.useState"]);
    const [selectedCrop, setSelectedCrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PanIndiaBuyerMapModal.useState": ()=>{
            return initialCrop || 'All Crops';
        }
    }["PanIndiaBuyerMapModal.useState"]);
    const [selectedSeller, setSelectedSeller] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeStateFilter, setActiveStateFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All States');
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('split');
    const [mapStyle, setMapStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('streets');
    const [showDirectLines, setShowDirectLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Listen to real-time events from farmer listings across tabs and current tab
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PanIndiaBuyerMapModal.useEffect": ()=>{
            const handleProduceUpdated = {
                "PanIndiaBuyerMapModal.useEffect.handleProduceUpdated": (e)=>{
                    const updated = e.detail?.produceList || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredProduce"])();
                    setLiveProduce([
                        ...updated
                    ]);
                }
            }["PanIndiaBuyerMapModal.useEffect.handleProduceUpdated"];
            const handleStorageChange = {
                "PanIndiaBuyerMapModal.useEffect.handleStorageChange": (e)=>{
                    if (e.key === 'farm2flow_produce_items') {
                        setLiveProduce((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredProduce"])());
                    }
                }
            }["PanIndiaBuyerMapModal.useEffect.handleStorageChange"];
            if ("TURBOPACK compile-time truthy", 1) {
                window.addEventListener('farm2flow_produce_updated', handleProduceUpdated);
                window.addEventListener('storage', handleStorageChange);
                // Refresh on open
                if (isOpen) {
                    setLiveProduce((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredProduce"])());
                }
            }
            return ({
                "PanIndiaBuyerMapModal.useEffect": ()=>{
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.removeEventListener('farm2flow_produce_updated', handleProduceUpdated);
                        window.removeEventListener('storage', handleStorageChange);
                    }
                }
            })["PanIndiaBuyerMapModal.useEffect"];
        }
    }["PanIndiaBuyerMapModal.useEffect"], [
        isOpen
    ]);
    // Combine base pan-India sellers with live farmer-enlisted crops
    const allSellers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PanIndiaBuyerMapModal.useMemo[allSellers]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$panIndiaSellers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLivePanIndiaSellers"])(liveProduce);
        }
    }["PanIndiaBuyerMapModal.useMemo[allSellers]"], [
        liveProduce
    ]);
    // Dynamically compute available crops from all active sellers
    const dynamicCropList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PanIndiaBuyerMapModal.useMemo[dynamicCropList]": ()=>{
            const set = new Set();
            allSellers.forEach({
                "PanIndiaBuyerMapModal.useMemo[dynamicCropList]": (s)=>{
                    if (s.crop) set.add(s.crop);
                }
            }["PanIndiaBuyerMapModal.useMemo[dynamicCropList]"]);
            return [
                'All Crops',
                ...Array.from(set)
            ];
        }
    }["PanIndiaBuyerMapModal.useMemo[dynamicCropList]"], [
        allSellers
    ]);
    // Filter sellers based on crop, state, and query
    const filteredSellers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PanIndiaBuyerMapModal.useMemo[filteredSellers]": ()=>{
            return allSellers.filter({
                "PanIndiaBuyerMapModal.useMemo[filteredSellers]": (seller)=>{
                    const matchesCrop = selectedCrop === 'All Crops' || seller.crop.toLowerCase() === selectedCrop.toLowerCase();
                    const matchesState = activeStateFilter === 'All States' || seller.state.toLowerCase() === activeStateFilter.toLowerCase();
                    const matchesQuery = !searchQuery || seller.name.toLowerCase().includes(searchQuery.toLowerCase()) || seller.location.toLowerCase().includes(searchQuery.toLowerCase()) || seller.state.toLowerCase().includes(searchQuery.toLowerCase()) || seller.fpoOrCoop.toLowerCase().includes(searchQuery.toLowerCase()) || seller.variety.toLowerCase().includes(searchQuery.toLowerCase());
                    return matchesCrop && matchesState && matchesQuery;
                }
            }["PanIndiaBuyerMapModal.useMemo[filteredSellers]"]);
        }
    }["PanIndiaBuyerMapModal.useMemo[filteredSellers]"], [
        allSellers,
        selectedCrop,
        activeStateFilter,
        searchQuery
    ]);
    // Unique states for current selected crop
    const availableStates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PanIndiaBuyerMapModal.useMemo[availableStates]": ()=>{
            const states = new Set();
            allSellers.forEach({
                "PanIndiaBuyerMapModal.useMemo[availableStates]": (s)=>{
                    if (selectedCrop === 'All Crops' || s.crop.toLowerCase() === selectedCrop.toLowerCase()) {
                        states.add(s.state);
                    }
                }
            }["PanIndiaBuyerMapModal.useMemo[availableStates]"]);
            return [
                'All States',
                ...Array.from(states)
            ];
        }
    }["PanIndiaBuyerMapModal.useMemo[availableStates]"], [
        allSellers,
        selectedCrop
    ]);
    // Buyer coordinates (Default: Kolkata wholesale hub)
    const buyerCoords = [
        22.5852,
        88.3563
    ];
    // Initialize or re-center Leaflet Map
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PanIndiaBuyerMapModal.useEffect": ()=>{
            if (!isOpen) return;
            const timer = setTimeout({
                "PanIndiaBuyerMapModal.useEffect.timer": ()=>{
                    if (("TURBOPACK compile-time value", "object") === 'undefined' || !window.L || !mapContainerRef.current) return;
                    const L = window.L;
                    if (!mapInstanceRef.current) {
                        const map = L.map(mapContainerRef.current, {
                            center: [
                                22.5,
                                79.5
                            ],
                            zoom: 5,
                            minZoom: 4,
                            maxZoom: 18,
                            zoomControl: false
                        });
                        const tileUrls = {
                            streets: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                            satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
                            terrain: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
                        };
                        const currentTileLayer = L.tileLayer(tileUrls.streets, {
                            maxZoom: 19,
                            attribution: '&copy; OpenStreetMap contributors'
                        }).addTo(map);
                        map._baseTileLayer = currentTileLayer;
                        L.control.zoom({
                            position: 'bottomright'
                        }).addTo(map);
                        // Buyer Pin
                        // Consumer Location Pin
                        const buyerIcon = L.divIcon({
                            className: 'buyer-dest-pin',
                            html: `
            <div style="
              width: 44px; height: 44px;
              background: #003b1b;
              border: 3px solid #ffcc00;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              box-shadow: 0 6px 18px rgba(0,0,0,0.45);
              display: flex; align-items: center; justify-content: center;
              cursor: pointer;
            ">
              <span style="
                transform: rotate(45deg);
                font-size: 18px;
                color: #ffffff;
              ">🏠</span>
            </div>
          `,
                            iconSize: [
                                44,
                                44
                            ],
                            iconAnchor: [
                                22,
                                44
                            ]
                        });
                        const buyerMarker = L.marker(buyerCoords, {
                            icon: buyerIcon
                        }).addTo(map);
                        buyerMarker.bindPopup(`
          <div style="font-family: sans-serif; padding: 2px;">
            <div style="font-weight: 800; color: #003b1b; font-size: 13px;">📍 Your Home Delivery Location</div>
            <div style="font-size: 11px; color: #333; margin-top: 2px;">${buyerCityName}</div>
            <div style="font-size: 10px; color: #666; margin-top: 2px;">Direct doorstep delivery from verified farmers across India.</div>
          </div>
        `);
                        markersLayerRef.current = L.featureGroup().addTo(map);
                        mapInstanceRef.current = map;
                    } else {
                        mapInstanceRef.current.invalidateSize();
                    }
                    renderMarkers();
                }
            }["PanIndiaBuyerMapModal.useEffect.timer"], 150);
            return ({
                "PanIndiaBuyerMapModal.useEffect": ()=>clearTimeout(timer)
            })["PanIndiaBuyerMapModal.useEffect"];
        }
    }["PanIndiaBuyerMapModal.useEffect"], [
        isOpen
    ]);
    // Update map tile layer when mapStyle changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PanIndiaBuyerMapModal.useEffect": ()=>{
            if (!mapInstanceRef.current || ("TURBOPACK compile-time value", "object") === 'undefined' || !window.L) return;
            const L = window.L;
            const map = mapInstanceRef.current;
            if (map._baseTileLayer) {
                map.removeLayer(map._baseTileLayer);
            }
            const tileUrls = {
                streets: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
                terrain: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
            };
            const newLayer = L.tileLayer(tileUrls[mapStyle], {
                maxZoom: 19,
                attribution: '&copy; OpenStreetMap / ESRI'
            }).addTo(map);
            map._baseTileLayer = newLayer;
        }
    }["PanIndiaBuyerMapModal.useEffect"], [
        mapStyle
    ]);
    // Render seller markers & connection paths
    const renderMarkers = ()=>{
        if (!mapInstanceRef.current || !markersLayerRef.current || ("TURBOPACK compile-time value", "object") === 'undefined' || !window.L) return;
        const L = window.L;
        markersLayerRef.current.clearLayers();
        const cropColors = {
            tomato: {
                bg: '#dc2626',
                border: '#fef2f2',
                emoji: '🍅'
            },
            potato: {
                bg: '#d97706',
                border: '#fffbeb',
                emoji: '🥔'
            },
            onion: {
                bg: '#9333ea',
                border: '#faf5ff',
                emoji: '🧅'
            },
            wheat: {
                bg: '#ca8a04',
                border: '#fefce8',
                emoji: '🌾'
            },
            rice: {
                bg: '#059669',
                border: '#ecfdf5',
                emoji: '🍚'
            },
            chilli: {
                bg: '#e11d48',
                border: '#fff1f2',
                emoji: '🌶️'
            },
            mustard: {
                bg: '#eab308',
                border: '#fefce8',
                emoji: '🌼'
            },
            apple: {
                bg: '#b91c1c',
                border: '#fef2f2',
                emoji: '🍎'
            }
        };
        filteredSellers.forEach((seller)=>{
            const cropKey = seller.crop.toLowerCase();
            const style = cropColors[cropKey] || {
                bg: '#0284c7',
                border: '#f0f9ff',
                emoji: '📦'
            };
            const markerHtml = `
        <div class="seller-pin-marker" style="
          width: 38px; height: 38px;
          background: ${style.bg};
          border: 2.5px solid #ffffff;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 4px 14px rgba(0,0,0,0.35);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: transform 0.2s ease;
        ">
          <span style="
            transform: rotate(45deg);
            font-size: 16px;
            filter: drop-shadow(0 1px 2px rgba(0,0,0,0.4));
          ">${style.emoji}</span>
          <div style="
            position: absolute;
            bottom: -22px;
            left: 50%;
            transform: translateX(-50%) rotate(45deg);
            background: rgba(15, 23, 42, 0.9);
            color: #ffffff;
            font-size: 9px;
            font-weight: 800;
            padding: 1px 4px;
            border-radius: 4px;
            white-space: nowrap;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          ">₹${seller.pricePerKg}/kg</div>
        </div>
      `;
            const customIcon = L.divIcon({
                className: `seller-marker-${seller.id}`,
                html: markerHtml,
                iconSize: [
                    38,
                    38
                ],
                iconAnchor: [
                    19,
                    38
                ]
            });
            const marker = L.marker([
                seller.lat,
                seller.lng
            ], {
                icon: customIcon
            });
            // Optional connecting geodesic line to buyer's destination hub
            if (showDirectLines) {
                const polyline = L.polyline([
                    [
                        seller.lat,
                        seller.lng
                    ],
                    buyerCoords
                ], {
                    color: style.bg,
                    weight: 2,
                    opacity: 0.5,
                    dashArray: '5, 8'
                });
                markersLayerRef.current.addLayer(polyline);
            }
            // Popup card on click
            marker.bindPopup(`
        <div style="font-family: system-ui, sans-serif; min-width: 200px; padding: 2px;">
          <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
            <span style="font-size: 20px;">${style.emoji}</span>
            <div>
              <div style="font-weight: 900; font-size: 13px; color: #0f172a; line-height: 1.2;">${seller.name}</div>
              <div style="font-size: 10px; color: #006c35; font-weight: 700;">${seller.fpoOrCoop}</div>
            </div>
          </div>
          <div style="font-size: 11px; color: #475569; margin-bottom: 6px;">
            📍 <strong>${seller.location}</strong> (${seller.state})
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; background: #f8fafc; padding: 6px; border-radius: 6px; font-size: 10px; margin-bottom: 6px;">
            <div><strong>Rate:</strong> <span style="color: #006c35; font-weight: 800;">₹${seller.pricePerKg}/kg</span></div>
            <div><strong>Qty:</strong> ${seller.quantityKg.toLocaleString()} kg</div>
            <div><strong>Grade:</strong> ${seller.grade}</div>
            <div><strong>Transit:</strong> ${seller.transitDaysToKolkata} days</div>
          </div>
          <button id="btn-select-${seller.id}" style="
            width: 100%;
            background: #006c35;
            color: #ffffff;
            border: none;
            border-radius: 6px;
            padding: 6px 10px;
            font-size: 11px;
            font-weight: 800;
            cursor: pointer;
          ">Select Supplier & View Deal</button>
        </div>
      `);
            marker.on('popupopen', ()=>{
                const btn = document.getElementById(`btn-select-${seller.id}`);
                if (btn) {
                    btn.onclick = ()=>{
                        setSelectedSeller(seller);
                        if (onSelectSeller) onSelectSeller(seller);
                    };
                }
                setSelectedSeller(seller);
            });
            marker.on('click', ()=>{
                setSelectedSeller(seller);
            });
            markersLayerRef.current.addLayer(marker);
        });
        // Auto fit map bounds to show all markers & buyer location
        if (filteredSellers.length > 0) {
            try {
                const bounds = markersLayerRef.current.getBounds();
                bounds.extend(buyerCoords);
                mapInstanceRef.current.fitBounds(bounds, {
                    padding: [
                        40,
                        40
                    ],
                    maxZoom: 10
                });
            } catch (e) {}
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PanIndiaBuyerMapModal.useEffect": ()=>{
            renderMarkers();
        }
    }["PanIndiaBuyerMapModal.useEffect"], [
        filteredSellers,
        showDirectLines
    ]);
    // Clean up on close
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PanIndiaBuyerMapModal.useEffect": ()=>{
            if (!isOpen && mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
                markersLayerRef.current = null;
            }
        }
    }["PanIndiaBuyerMapModal.useEffect"], [
        isOpen
    ]);
    const handleFlyToSeller = (seller)=>{
        setSelectedSeller(seller);
        if (mapInstanceRef.current) {
            mapInstanceRef.current.flyTo([
                seller.lat,
                seller.lng
            ], 11, {
                duration: 1.2
            });
        }
    };
    const handleResetPanIndiaView = ()=>{
        setSelectedSeller(null);
        if (mapInstanceRef.current) {
            mapInstanceRef.current.flyTo([
                22.5,
                79.5
            ], 5, {
                duration: 1.0
            });
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-0 sm:p-3 animate-in fade-in duration-250",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[920px] h-[95vh] sm:h-[720px] bg-surface rounded-none sm:rounded-3xl border border-outline-variant shadow-2xl flex flex-col overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3.5 sm:p-4 bg-surface-container-lowest border-b border-outline-variant flex items-center justify-between shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-900 text-white flex items-center justify-center shadow-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined text-[24px]",
                                        children: "public"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                        lineNumber: 394,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                    lineNumber: 393,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-[17px] font-extrabold text-on-surface leading-tight",
                                                    children: "Pan-India Direct Sellers Map"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] bg-emerald-100 text-emerald-800 font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider",
                                                    children: "Live Mandi Network"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 401,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                            lineNumber: 397,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-on-surface-variant font-medium",
                                            children: [
                                                "Sourcing destination: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-primary",
                                                    children: buyerCityName
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 406,
                                                    columnNumber: 39
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " • ",
                                                filteredSellers.length,
                                                " verified producers available"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                            lineNumber: 405,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                    lineNumber: 396,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                            lineNumber: 392,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:flex bg-surface-container-high rounded-xl p-0.5 border border-outline-variant text-[11px] font-bold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setMapStyle('streets'),
                                            className: `px-2.5 py-1 rounded-lg transition-all ${mapStyle === 'streets' ? 'bg-primary-container text-on-primary shadow-xs' : 'text-on-surface-variant'}`,
                                            children: "🗺️ Standard"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                            lineNumber: 414,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setMapStyle('satellite'),
                                            className: `px-2.5 py-1 rounded-lg transition-all ${mapStyle === 'satellite' ? 'bg-primary-container text-on-primary shadow-xs' : 'text-on-surface-variant'}`,
                                            children: "🛰️ Satellite"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                            lineNumber: 420,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                    lineNumber: 413,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleResetPanIndiaView,
                                    className: "px-2.5 py-1.5 bg-surface-container text-on-surface hover:bg-surface-container-high rounded-xl text-[11px] font-bold border border-outline-variant flex items-center gap-1",
                                    title: "Fit entire India map view",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-[16px]",
                                            children: "crop_free"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                            lineNumber: 433,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "Whole Country"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                            lineNumber: 434,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                    lineNumber: 428,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined text-[22px]",
                                        children: "close"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                        lineNumber: 441,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                    lineNumber: 437,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                            lineNumber: 411,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                    lineNumber: 391,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-surface-container-low px-3.5 py-2 border-b border-outline-variant flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-bold text-on-surface-variant uppercase tracking-wider shrink-0 flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-[16px] text-primary",
                                    children: "filter_alt"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                    lineNumber: 449,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Product:"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                    lineNumber: 450,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                            lineNumber: 448,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        dynamicCropList.map((crop)=>{
                            const isSelected = selectedCrop.toLowerCase() === crop.toLowerCase();
                            const count = crop === 'All Crops' ? allSellers.length : allSellers.filter((s)=>s.crop.toLowerCase() === crop.toLowerCase()).length;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setSelectedCrop(crop);
                                    setActiveStateFilter('All States');
                                    setSelectedSeller(null);
                                },
                                className: `px-3 py-1.5 rounded-full text-[12px] font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${isSelected ? 'bg-primary-container text-on-primary shadow-sm scale-102 ring-2 ring-primary/20' : 'bg-white hover:bg-surface-container-high text-on-surface border border-outline-variant'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            crop === 'Tomato' && '🍅',
                                            crop === 'Potato' && '🥔',
                                            crop === 'Onion' && '🧅',
                                            crop === 'Wheat' && '🌾',
                                            crop === 'Rice' && '🍚',
                                            crop === 'Chilli' && '🌶️',
                                            crop === 'Mustard' && '🌼',
                                            crop === 'Apple' && '🍎',
                                            crop === 'Cauliflower' && '🥦',
                                            crop === 'Cabbage' && '🥬',
                                            crop === 'Carrot' && '🥕',
                                            crop === 'Brinjal' && '🍆',
                                            crop === 'All Crops' && '🌐',
                                            ![
                                                'Tomato',
                                                'Potato',
                                                'Onion',
                                                'Wheat',
                                                'Rice',
                                                'Chilli',
                                                'Mustard',
                                                'Apple',
                                                'Cauliflower',
                                                'Cabbage',
                                                'Carrot',
                                                'Brinjal',
                                                'All Crops'
                                            ].includes(crop) && '🌱'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                        lineNumber: 473,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: crop
                                    }, void 0, false, {
                                        fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                        lineNumber: 489,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${isSelected ? 'bg-white/20 text-white' : 'bg-surface-container text-on-surface-variant'}`,
                                        children: count
                                    }, void 0, false, {
                                        fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                        lineNumber: 490,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, crop, true, {
                                fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                lineNumber: 460,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                    lineNumber: 447,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-surface px-3.5 py-1.5 border-b border-outline-variant flex items-center justify-between gap-2 overflow-x-auto text-[11px] shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 overflow-x-auto no-scrollbar",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-on-surface-variant shrink-0",
                                    children: "States:"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                    lineNumber: 501,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                availableStates.map((st)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveStateFilter(st),
                                        className: `px-2 py-0.5 rounded-md font-semibold whitespace-nowrap transition-colors ${activeStateFilter === st ? 'bg-secondary text-on-secondary font-bold' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'}`,
                                        children: st
                                    }, st, false, {
                                        fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                        lineNumber: 503,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                            lineNumber: 500,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-1 text-[11px] font-bold text-on-surface-variant shrink-0 cursor-pointer pl-2 border-l border-outline-variant",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: showDirectLines,
                                    onChange: (e)=>setShowDirectLines(e.target.checked),
                                    className: "w-3.5 h-3.5 rounded accent-primary"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                    lineNumber: 518,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "Transit Routes to Hub"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                    lineNumber: 524,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                            lineNumber: 517,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                    lineNumber: 499,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col md:flex-row overflow-hidden relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 relative h-[55%] md:h-full bg-slate-100 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: mapContainerRef,
                                    className: "w-full h-full z-10"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                    lineNumber: 533,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-3 left-3 z-20 bg-surface/90 backdrop-blur-md px-3 py-2 rounded-2xl border border-outline-variant shadow-lg text-[11px] flex flex-col gap-1 max-w-[200px] pointer-events-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between font-extrabold text-on-surface border-b border-outline-variant pb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Map Legend"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 538,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-emerald-700",
                                                    children: "Live Pins"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                            lineNumber: 537,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 pt-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-3.5 h-3.5 rounded-full bg-red-600 border border-white inline-block shadow-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 542,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-on-surface font-medium",
                                                    children: "Tomato (WB, MH, KA)"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 543,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                            lineNumber: 541,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-3.5 h-3.5 rounded-full bg-purple-600 border border-white inline-block shadow-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 546,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-on-surface font-medium",
                                                    children: "Nashik / Mahuva Onion"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 547,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                            lineNumber: 545,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-3.5 h-3.5 rounded-full bg-amber-600 border border-white inline-block shadow-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 550,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-on-surface font-medium",
                                                    children: "Hooghly / Agra Potato"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 551,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                            lineNumber: 549,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-3.5 h-3.5 rounded-full bg-emerald-950 border border-amber-400 inline-block shadow-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 554,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-on-surface font-extrabold",
                                                    children: [
                                                        "Consumer Home (",
                                                        buyerCityName.split(',')[0],
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 555,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                            lineNumber: 553,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                    lineNumber: 536,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-3 left-3 z-20 flex gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleResetPanIndiaView,
                                        className: "bg-white/95 backdrop-blur-xs text-on-surface font-extrabold px-3 py-1.5 rounded-xl border border-outline-variant shadow-md text-[11px] flex items-center gap-1.5 hover:bg-emerald-50 active:scale-95 transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-[16px] text-primary",
                                                children: "zoom_out_map"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                lineNumber: 565,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Fit India View"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                lineNumber: 566,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                        lineNumber: 561,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                    lineNumber: 560,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                            lineNumber: 532,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:w-[360px] h-[45%] md:h-full bg-surface-container-lowest border-t md:border-t-0 md:border-l border-outline-variant flex flex-col z-20 shadow-xl overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 border-b border-outline-variant bg-surface shrink-0 flex items-center gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]",
                                                children: "search"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                lineNumber: 577,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: `Search in ${selectedCrop} suppliers...`,
                                                value: searchQuery,
                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                className: "w-full pl-8 pr-2 py-1.5 text-[12px] bg-surface-container-low border border-outline-variant rounded-xl text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                lineNumber: 578,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                        lineNumber: 576,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                    lineNumber: 575,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                selectedSeller && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-emerald-50 border-b border-emerald-200 shrink-0 flex flex-col gap-2 animate-in slide-in-from-top duration-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-2xl",
                                                            children: selectedSeller.crop === 'Tomato' ? '🍅' : selectedSeller.crop === 'Potato' ? '🥔' : selectedSeller.crop === 'Onion' ? '🧅' : '🌾'
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                            lineNumber: 593,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-[14px] font-extrabold text-emerald-950 leading-tight",
                                                                    children: selectedSeller.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                                    lineNumber: 597,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] text-emerald-800 font-bold",
                                                                    children: selectedSeller.fpoOrCoop
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                                    lineNumber: 600,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                            lineNumber: 596,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 592,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedSeller(null),
                                                    className: "text-emerald-700 hover:text-emerald-950 text-[12px] font-bold",
                                                    children: "✕"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 603,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                            lineNumber: 591,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-1.5 text-[11px] bg-white p-2 rounded-xl border border-emerald-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Mandi:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                            lineNumber: 612,
                                                            columnNumber: 24
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        selectedSeller.location
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 612,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "State:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                            lineNumber: 613,
                                                            columnNumber: 24
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        selectedSeller.state
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 613,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Rate:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                            lineNumber: 614,
                                                            columnNumber: 24
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-extrabold text-emerald-700 text-[13px]",
                                                            children: [
                                                                "₹",
                                                                selectedSeller.pricePerKg
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                            lineNumber: 614,
                                                            columnNumber: 47
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "/kg"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 614,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Volume:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                            lineNumber: 615,
                                                            columnNumber: 24
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        selectedSeller.quantityKg.toLocaleString(),
                                                        " kg"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Transit:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                            lineNumber: 616,
                                                            columnNumber: 24
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ~",
                                                        selectedSeller.transitDaysToKolkata,
                                                        " Days"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 616,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Grade:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                            lineNumber: 617,
                                                            columnNumber: 24
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        selectedSeller.grade
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 617,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                            lineNumber: 611,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 pt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `tel:${selectedSeller.phone}`,
                                                    className: "flex-1 py-2 bg-white border border-emerald-300 text-emerald-900 rounded-xl text-[12px] font-bold text-center flex items-center justify-center gap-1 shadow-xs hover:bg-emerald-100/50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-[16px]",
                                                            children: "call"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                            lineNumber: 625,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Call Seller"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                            lineNumber: 626,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 621,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        if (onSelectSeller) onSelectSeller(selectedSeller);
                                                        onClose();
                                                    },
                                                    className: "flex-1 py-2 bg-primary-container text-on-primary rounded-xl text-[12px] font-extrabold text-center flex items-center justify-center gap-1 shadow-md hover:bg-primary active:scale-95",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-[16px]",
                                                            children: "shopping_cart_checkout"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                            lineNumber: 635,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Direct Procure"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                            lineNumber: 636,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 628,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                            lineNumber: 620,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                    lineNumber: 590,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto p-2.5 flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center px-1 text-[11px] text-on-surface-variant font-bold",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        filteredSellers.length,
                                                        " Farmers & FPOs Listed"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 645,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Click to Pinpoint on Map"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 646,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                            lineNumber: 644,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        filteredSellers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-12 text-center text-on-surface-variant flex flex-col items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[36px] text-on-surface-variant",
                                                    children: "travel_explore"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 651,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[13px] font-bold",
                                                    children: "No suppliers match this query"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 652,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setSelectedCrop('All Crops');
                                                        setActiveStateFilter('All States');
                                                        setSearchQuery('');
                                                    },
                                                    className: "text-primary text-[12px] font-bold underline",
                                                    children: "Reset all filters"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 653,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                            lineNumber: 650,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)) : filteredSellers.map((seller)=>{
                                            const isSelected = selectedSeller?.id === seller.id;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>handleFlyToSeller(seller),
                                                className: `p-2.5 rounded-2xl border transition-all cursor-pointer flex flex-col gap-1.5 ${isSelected ? 'bg-emerald-50/90 border-primary ring-2 ring-primary/20 shadow-md' : 'bg-white hover:bg-surface-container-low border-outline-variant shadow-xs'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-8 h-8 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center font-extrabold text-[12px]",
                                                                        children: seller.name.split(' ').map((n)=>n[0]).join('').slice(0, 2)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                                        lineNumber: 675,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "text-[13px] font-extrabold text-on-surface leading-tight",
                                                                                children: seller.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                                                lineNumber: 679,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[10px] text-on-surface-variant truncate max-w-[170px]",
                                                                                children: seller.fpoOrCoop
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                                                lineNumber: 682,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                                        lineNumber: 678,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                                lineNumber: 674,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[14px] font-black text-primary block leading-tight",
                                                                        children: [
                                                                            "₹",
                                                                            seller.pricePerKg,
                                                                            " ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] text-on-surface-variant font-medium",
                                                                                children: "/kg"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                                                lineNumber: 688,
                                                                                columnNumber: 50
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                                        lineNumber: 687,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded-md",
                                                                        children: [
                                                                            seller.quantityKg,
                                                                            " kg"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                                        lineNumber: 690,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                                lineNumber: 686,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                        lineNumber: 673,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between text-[11px] pt-1 border-t border-outline-variant/60 text-on-surface-variant",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-0.5 truncate font-medium",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "material-symbols-outlined text-[14px] text-primary",
                                                                        children: "location_on"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                                        lineNumber: 698,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "truncate",
                                                                        children: [
                                                                            seller.location,
                                                                            ", ",
                                                                            seller.state
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                                        lineNumber: 699,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                                lineNumber: 697,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-bold bg-surface-container px-1.5 py-0.5 rounded text-on-surface shrink-0",
                                                                children: [
                                                                    seller.transitDaysToKolkata,
                                                                    "d transit"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                                lineNumber: 701,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                        lineNumber: 696,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, seller.id, true, {
                                                fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                lineNumber: 664,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                    lineNumber: 643,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-surface border-t border-outline-variant flex items-center justify-between text-[11px] font-bold text-on-surface-variant shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "National Mandi Connectivity"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                            lineNumber: 713,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-emerald-700 font-extrabold flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 715,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Active Geodesic Routing"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                                    lineNumber: 716,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                            lineNumber: 714,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                                    lineNumber: 712,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                            lineNumber: 572,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
                    lineNumber: 529,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
            lineNumber: 388,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/pwa/src/components/PanIndiaBuyerMapModal.tsx",
        lineNumber: 387,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PanIndiaBuyerMapModal, "zMeRMI3AV+bz/55V78Pw2Zl94ms=");
_c = PanIndiaBuyerMapModal;
var _c;
__turbopack_context__.k.register(_c, "PanIndiaBuyerMapModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/pwa/src/data/cropCatalog.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_CROP_CATALOG",
    ()=>BASE_CROP_CATALOG,
    "addNewCustomCrop",
    ()=>addNewCustomCrop,
    "getAllCatalogCrops",
    ()=>getAllCatalogCrops
]);
const BASE_CROP_CATALOG = [
    // --- VEGETABLES ---
    {
        id: 'crop-veg-1',
        name: 'Tomato',
        category: 'Vegetables',
        icon: '🍅',
        variety: 'Hybrid Red Flavour',
        suggestedPriceMin: 28,
        suggestedPriceMax: 32,
        unit: 'kg',
        demandTonnes: 21.8,
        forecastDemandTonnes: 26.4,
        trend: 'up',
        recommendation: 'Surging demand in urban Kolkata retail markets. Harvest firm red fruits for direct logistics.'
    },
    {
        id: 'crop-veg-2',
        name: 'Potato',
        category: 'Vegetables',
        icon: '🥔',
        variety: 'Jyoti Golden Super',
        suggestedPriceMin: 16,
        suggestedPriceMax: 20,
        unit: 'kg',
        demandTonnes: 45.0,
        forecastDemandTonnes: 47.2,
        trend: 'stable',
        recommendation: 'Stable round-the-year demand. Hooghly & Burdwan cold storages clearing stock steadily.'
    },
    {
        id: 'crop-veg-3',
        name: 'Onion',
        category: 'Vegetables',
        icon: '🧅',
        variety: 'Nashik Red & Bellary',
        suggestedPriceMin: 24,
        suggestedPriceMax: 28,
        unit: 'kg',
        demandTonnes: 34.2,
        forecastDemandTonnes: 39.5,
        trend: 'up',
        recommendation: 'Festive season bulk buying starting. High off-take for medium calibrated bulbs.'
    },
    {
        id: 'crop-veg-4',
        name: 'Cauliflower',
        category: 'Vegetables',
        icon: '🥦',
        variety: 'Snowball White Compact',
        suggestedPriceMin: 22,
        suggestedPriceMax: 28,
        unit: 'kg',
        demandTonnes: 18.5,
        forecastDemandTonnes: 22.0,
        trend: 'up',
        recommendation: 'Early curds receiving premium spot prices in local wholesale markets.'
    },
    {
        id: 'crop-veg-5',
        name: 'Cabbage',
        category: 'Vegetables',
        icon: '🥬',
        variety: 'Green Globe Crisp',
        suggestedPriceMin: 14,
        suggestedPriceMax: 18,
        unit: 'kg',
        demandTonnes: 16.0,
        forecastDemandTonnes: 17.5,
        trend: 'stable',
        recommendation: 'Consistent demand across community kitchens and restaurants.'
    },
    {
        id: 'crop-veg-6',
        name: 'Carrot',
        category: 'Vegetables',
        icon: '🥕',
        variety: 'Pusa Kesar Deep Orange',
        suggestedPriceMin: 30,
        suggestedPriceMax: 38,
        unit: 'kg',
        demandTonnes: 14.2,
        forecastDemandTonnes: 17.0,
        trend: 'up',
        recommendation: 'High consumer preference for tender, washed red roots.'
    },
    {
        id: 'crop-veg-7',
        name: 'Brinjal',
        category: 'Vegetables',
        icon: '🍆',
        variety: 'Muktakeshi Round Purple',
        suggestedPriceMin: 25,
        suggestedPriceMax: 32,
        unit: 'kg',
        demandTonnes: 19.0,
        forecastDemandTonnes: 21.2,
        trend: 'up',
        recommendation: 'High domestic household staple consumption; quick turnover crop.'
    },
    {
        id: 'crop-veg-8',
        name: 'Lady Finger (Okra)',
        category: 'Vegetables',
        icon: '🌱',
        variety: 'Kashi Kranti Tender Green',
        suggestedPriceMin: 32,
        suggestedPriceMax: 40,
        unit: 'kg',
        demandTonnes: 12.4,
        forecastDemandTonnes: 14.8,
        trend: 'up',
        recommendation: 'Daily morning harvests fetch top tier prices when unblemished.'
    },
    {
        id: 'crop-veg-9',
        name: 'Green Peas',
        category: 'Vegetables',
        icon: '🫛',
        variety: 'Arkel Sweet Pods',
        suggestedPriceMin: 45,
        suggestedPriceMax: 55,
        unit: 'kg',
        demandTonnes: 15.6,
        forecastDemandTonnes: 20.0,
        trend: 'up',
        recommendation: 'High profit margins for farm-fresh whole pods.'
    },
    {
        id: 'crop-veg-10',
        name: 'Bitter Gourd (Karela)',
        category: 'Vegetables',
        icon: '🥒',
        variety: 'Pusa Do Mausami Dark Green',
        suggestedPriceMin: 28,
        suggestedPriceMax: 36,
        unit: 'kg',
        demandTonnes: 9.8,
        forecastDemandTonnes: 11.2,
        trend: 'stable',
        recommendation: 'Steady medicinal and health-conscious consumer retail purchases.'
    },
    {
        id: 'crop-veg-11',
        name: 'Bottle Gourd (Lauki)',
        category: 'Vegetables',
        icon: '🫒',
        variety: 'Pusa Naveen Cylindrical',
        suggestedPriceMin: 18,
        suggestedPriceMax: 24,
        unit: 'kg',
        demandTonnes: 17.2,
        forecastDemandTonnes: 18.9,
        trend: 'stable',
        recommendation: 'Heavy demand from city daily consumers for fresh morning harvest.'
    },
    {
        id: 'crop-veg-12',
        name: 'Capsicum (Bell Pepper)',
        category: 'Vegetables',
        icon: '🫑',
        variety: 'Indra Dark Green Glossy',
        suggestedPriceMin: 40,
        suggestedPriceMax: 52,
        unit: 'kg',
        demandTonnes: 11.5,
        forecastDemandTonnes: 15.0,
        trend: 'up',
        recommendation: 'Restaurants and retail supermarket buyers offering direct contracts.'
    },
    {
        id: 'crop-veg-13',
        name: 'Cucumber',
        category: 'Vegetables',
        icon: '🥒',
        variety: 'Malini Salad Crisp',
        suggestedPriceMin: 20,
        suggestedPriceMax: 26,
        unit: 'kg',
        demandTonnes: 22.0,
        forecastDemandTonnes: 24.5,
        trend: 'stable',
        recommendation: 'High velocity salad product. Clean grading recommended.'
    },
    {
        id: 'crop-veg-14',
        name: 'Garlic',
        category: 'Vegetables',
        icon: '🧄',
        variety: 'Yamuna Safed White Bulbs',
        suggestedPriceMin: 90,
        suggestedPriceMax: 120,
        unit: 'kg',
        demandTonnes: 8.5,
        forecastDemandTonnes: 10.5,
        trend: 'up',
        recommendation: 'Excellent shelf-life and high wholesale price realization.'
    },
    {
        id: 'crop-veg-15',
        name: 'Ginger',
        category: 'Vegetables',
        icon: '🫚',
        variety: 'Maran Aromatic Fresh Rhizome',
        suggestedPriceMin: 70,
        suggestedPriceMax: 95,
        unit: 'kg',
        demandTonnes: 10.2,
        forecastDemandTonnes: 12.8,
        trend: 'up',
        recommendation: 'Spices and herbal tea demand maintaining strong price floor.'
    },
    {
        id: 'crop-veg-16',
        name: 'Pumpkin',
        category: 'Vegetables',
        icon: '🎃',
        variety: 'Pusa Vishwas Golden Flesh',
        suggestedPriceMin: 14,
        suggestedPriceMax: 18,
        unit: 'kg',
        demandTonnes: 13.0,
        forecastDemandTonnes: 14.1,
        trend: 'stable',
        recommendation: 'Long holding capability without cold chain requirements.'
    },
    // --- FRUITS ---
    {
        id: 'crop-frt-1',
        name: 'Apple',
        category: 'Fruits',
        icon: '🍎',
        variety: 'Himachal Royal Delicious',
        suggestedPriceMin: 85,
        suggestedPriceMax: 110,
        unit: 'kg',
        demandTonnes: 28.0,
        forecastDemandTonnes: 34.5,
        trend: 'up',
        recommendation: 'Premium table-fruit demand surging across tier 1 urban buyers.'
    },
    {
        id: 'crop-frt-2',
        name: 'Banana',
        category: 'Fruits',
        icon: '🍌',
        variety: 'Grand Naine (G9) Golden',
        suggestedPriceMin: 22,
        suggestedPriceMax: 30,
        unit: 'kg',
        demandTonnes: 52.0,
        forecastDemandTonnes: 56.0,
        trend: 'stable',
        recommendation: 'Uninterrupted daily consumption. Uniform bunch grading yields top rate.'
    },
    {
        id: 'crop-frt-3',
        name: 'Mango',
        category: 'Fruits',
        icon: '🥭',
        variety: 'Himsagar / Langra Heritage',
        suggestedPriceMin: 75,
        suggestedPriceMax: 105,
        unit: 'kg',
        demandTonnes: 40.0,
        forecastDemandTonnes: 48.0,
        trend: 'up',
        recommendation: 'High consumer appetite; guaranteed prompt buyouts by pre-registered consumers.'
    },
    {
        id: 'crop-frt-4',
        name: 'Orange',
        category: 'Fruits',
        icon: '🍊',
        variety: 'Nagpur Sweet Juicy',
        suggestedPriceMin: 45,
        suggestedPriceMax: 60,
        unit: 'kg',
        demandTonnes: 26.5,
        forecastDemandTonnes: 31.0,
        trend: 'up',
        recommendation: 'Heavy juice stall and family fruit basket ordering.'
    },
    {
        id: 'crop-frt-5',
        name: 'Guava',
        category: 'Fruits',
        icon: '🍈',
        variety: 'Allahabad Safeda Crisp White',
        suggestedPriceMin: 30,
        suggestedPriceMax: 42,
        unit: 'kg',
        demandTonnes: 14.8,
        forecastDemandTonnes: 17.2,
        trend: 'up',
        recommendation: 'Sweet, spotless fruit crates moving rapidly.'
    },
    {
        id: 'crop-frt-6',
        name: 'Papaya',
        category: 'Fruits',
        icon: '🥭',
        variety: 'Red Lady 786 Sweet Hybrid',
        suggestedPriceMin: 24,
        suggestedPriceMax: 32,
        unit: 'kg',
        demandTonnes: 20.4,
        forecastDemandTonnes: 23.0,
        trend: 'stable',
        recommendation: 'Continuous harvest cycles throughout the month.'
    },
    {
        id: 'crop-frt-7',
        name: 'Watermelon',
        category: 'Fruits',
        icon: '🍉',
        variety: 'Kiran Sugar Baby Hybrid',
        suggestedPriceMin: 15,
        suggestedPriceMax: 22,
        unit: 'kg',
        demandTonnes: 38.0,
        forecastDemandTonnes: 42.0,
        trend: 'stable',
        recommendation: 'High tonnage direct dispatch straight to consumer housing complexes.'
    },
    {
        id: 'crop-frt-8',
        name: 'Pomegranate',
        category: 'Fruits',
        icon: '🫐',
        variety: 'Bhagwa Deep Red Pearls',
        suggestedPriceMin: 95,
        suggestedPriceMax: 135,
        unit: 'kg',
        demandTonnes: 11.2,
        forecastDemandTonnes: 14.0,
        trend: 'up',
        recommendation: 'Superfood premium pricing; buyers readily accept direct pre-orders.'
    },
    {
        id: 'crop-frt-9',
        name: 'Pineapple',
        category: 'Fruits',
        icon: '🍍',
        variety: 'Queen Sweet Siliguri Special',
        suggestedPriceMin: 35,
        suggestedPriceMax: 48,
        unit: 'kg',
        demandTonnes: 16.5,
        forecastDemandTonnes: 19.5,
        trend: 'up',
        recommendation: 'Strong regional demand from Siliguri to Greater Kolkata.'
    },
    // --- GRAINS & CEREALS ---
    {
        id: 'crop-grn-1',
        name: 'Rice',
        category: 'Grains',
        icon: '🌾',
        variety: 'Gobindobhog & Katarni Fragrant',
        suggestedPriceMin: 65,
        suggestedPriceMax: 82,
        unit: 'kg',
        demandTonnes: 60.0,
        forecastDemandTonnes: 68.0,
        trend: 'up',
        recommendation: 'High value GI-tagged aromatic rice receiving constant bulk inquiries.'
    },
    {
        id: 'crop-grn-2',
        name: 'Wheat',
        category: 'Grains',
        icon: '🌾',
        variety: 'Sharbati & HD-3086 Golden',
        suggestedPriceMin: 26,
        suggestedPriceMax: 32,
        unit: 'kg',
        demandTonnes: 48.0,
        forecastDemandTonnes: 52.0,
        trend: 'stable',
        recommendation: 'Steady milling & flour demand; direct storage to consumer orders active.'
    },
    {
        id: 'crop-grn-3',
        name: 'Maize (Corn)',
        category: 'Grains',
        icon: '🌽',
        variety: 'Sweet Corn & Yellow Feed',
        suggestedPriceMin: 22,
        suggestedPriceMax: 28,
        unit: 'kg',
        demandTonnes: 25.0,
        forecastDemandTonnes: 29.0,
        trend: 'up',
        recommendation: 'Sweet corn cobs in high demand in urban retail kiosks.'
    },
    // --- SPICES & OILSEEDS ---
    {
        id: 'crop-spc-1',
        name: 'Chilli',
        category: 'Spices',
        icon: '🌶️',
        variety: 'Bullet Green & Guntur Teja S17',
        suggestedPriceMin: 45,
        suggestedPriceMax: 60,
        unit: 'kg',
        demandTonnes: 19.5,
        forecastDemandTonnes: 24.0,
        trend: 'up',
        recommendation: 'Export & local spice grinder markets are aggressive on pungent lots.'
    },
    {
        id: 'crop-spc-2',
        name: 'Mustard',
        category: 'Spices',
        icon: '🌼',
        variety: 'Yellow Pusa Bold & Black',
        suggestedPriceMin: 55,
        suggestedPriceMax: 68,
        unit: 'kg',
        demandTonnes: 22.0,
        forecastDemandTonnes: 25.5,
        trend: 'up',
        recommendation: 'Direct oil expeller and local kitchen requirement creates immediate demand.'
    },
    {
        id: 'crop-spc-3',
        name: 'Turmeric',
        category: 'Spices',
        icon: '🫚',
        variety: 'Salem High Curcumin Raw',
        suggestedPriceMin: 60,
        suggestedPriceMax: 85,
        unit: 'kg',
        demandTonnes: 12.0,
        forecastDemandTonnes: 15.0,
        trend: 'up',
        recommendation: 'High health-interest value; certified curcumin tests command 20% bonus.'
    },
    // --- LEAFY GREENS ---
    {
        id: 'crop-leaf-1',
        name: 'Spinach (Palak)',
        category: 'Leafy Greens',
        icon: '🥬',
        variety: 'All Green Tender Leaf',
        suggestedPriceMin: 18,
        suggestedPriceMax: 25,
        unit: 'kg',
        demandTonnes: 14.5,
        forecastDemandTonnes: 17.5,
        trend: 'up',
        recommendation: 'Daily early morning delivery requested by resident consumer groups.'
    },
    {
        id: 'crop-leaf-2',
        name: 'Coriander (Dhania)',
        category: 'Leafy Greens',
        icon: '🌿',
        variety: 'Super Aroma Lush Green',
        suggestedPriceMin: 35,
        suggestedPriceMax: 50,
        unit: 'kg',
        demandTonnes: 8.8,
        forecastDemandTonnes: 11.0,
        trend: 'up',
        recommendation: 'Essential culinary herb; constant turnover.'
    },
    {
        id: 'crop-leaf-3',
        name: 'Mint (Pudina)',
        category: 'Leafy Greens',
        icon: '🌱',
        variety: 'Spearmint Fresh Leaf',
        suggestedPriceMin: 30,
        suggestedPriceMax: 45,
        unit: 'kg',
        demandTonnes: 6.2,
        forecastDemandTonnes: 8.0,
        trend: 'up',
        recommendation: 'Steady beverage & culinary consumer purchase orders.'
    }
];
const STORAGE_CUSTOM_CROPS_KEY = 'farm2flow_custom_crops_v1';
const getAllCatalogCrops = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(STORAGE_CUSTOM_CROPS_KEY);
        if (!raw) return BASE_CROP_CATALOG;
        const customItems = JSON.parse(raw);
        return [
            ...BASE_CROP_CATALOG,
            ...customItems
        ];
    } catch  {
        return BASE_CROP_CATALOG;
    }
};
const addNewCustomCrop = (crop)=>{
    let defaultIcon = '🌱';
    if (crop.category === 'Fruits') defaultIcon = '🍎';
    else if (crop.category === 'Vegetables') defaultIcon = '🥕';
    else if (crop.category === 'Grains') defaultIcon = '🌾';
    else if (crop.category === 'Spices') defaultIcon = '🌶️';
    else if (crop.category === 'Leafy Greens') defaultIcon = '🥬';
    const newItem = {
        id: `custom-crop-${Date.now()}`,
        name: crop.name.trim(),
        category: crop.category,
        icon: crop.icon || defaultIcon,
        variety: crop.variety?.trim() || 'Farm Fresh Select',
        suggestedPriceMin: crop.suggestedPriceMin || 25,
        suggestedPriceMax: crop.suggestedPriceMax || 35,
        unit: 'kg',
        demandTonnes: 15.0,
        forecastDemandTonnes: 18.5,
        trend: 'up',
        recommendation: `Direct newly enlisted item: ${crop.name}. High demand across local and urban consumers.`
    };
    if ("TURBOPACK compile-time truthy", 1) {
        const raw = localStorage.getItem(STORAGE_CUSTOM_CROPS_KEY);
        const existing = raw ? JSON.parse(raw) : [];
        const updated = [
            newItem,
            ...existing
        ];
        localStorage.setItem(STORAGE_CUSTOM_CROPS_KEY, JSON.stringify(updated));
        // Broadcast event for real-time reactivity
        window.dispatchEvent(new CustomEvent('farm2flow_catalog_updated', {
            detail: {
                newCrop: newItem,
                catalog: [
                    ...BASE_CROP_CATALOG,
                    ...updated
                ]
            }
        }));
    }
    return newItem;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/pwa/src/data/mockData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initialOrders",
    ()=>initialOrders,
    "initialProduceList",
    ()=>initialProduceList,
    "mockBuyers",
    ()=>mockBuyers,
    "mockFarmers",
    ()=>mockFarmers,
    "mockForecasts",
    ()=>mockForecasts,
    "mockImpactMetrics",
    ()=>mockImpactMetrics,
    "mockLogisticsData",
    ()=>mockLogisticsData
]);
const mockFarmers = [
    {
        id: 'f-101',
        name: 'Ramesh Ghosh',
        role: 'farmer',
        location: 'Hooghly, West Bengal',
        phone: '+91 98310 44210',
        verified: true,
        fpoName: 'Hooghly Agri Producers Cooperative',
        avatarUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=200'
    },
    {
        id: 'f-102',
        name: 'Suhas Biswas',
        role: 'farmer',
        location: 'Barasat, North 24 Parganas',
        phone: '+91 98311 88320',
        verified: true,
        fpoName: 'Barasat Farmers Collective'
    },
    {
        id: 'f-103',
        name: 'Hooghly FPO Hub',
        role: 'farmer',
        location: 'Singur, Hooghly',
        phone: '+91 98312 99430',
        verified: true,
        fpoName: 'NABARD Hooghly FPO'
    },
    {
        id: 'f-104',
        name: 'Bimal Halder',
        role: 'farmer',
        location: 'Tarakeswar, Hooghly',
        phone: '+91 98313 11540',
        verified: true
    }
];
const mockBuyers = [
    {
        id: 'b-201',
        name: 'Kolkata Wholesale Mandi',
        role: 'buyer',
        location: 'Posta, Kolkata',
        phone: '+91 98300 12345',
        verified: true
    },
    {
        id: 'b-202',
        name: 'FreshRetail Hypermarkets',
        role: 'buyer',
        location: 'New Town, Kolkata',
        phone: '+91 98301 54321',
        verified: true
    }
];
const initialProduceList = [
    {
        id: 'prod-001',
        farmerId: 'f-101',
        farmerName: 'Ramesh Ghosh',
        farmerLocation: 'Hooghly (Singur)',
        cropName: 'Tomato',
        variety: 'Hybrid Red Flavour',
        grade: 'Grade A',
        quantityKg: 800,
        expectedPricePerKg: 30,
        marketSuggestedPriceMin: 28,
        marketSuggestedPriceMax: 32,
        harvestDate: '2026-09-10',
        demandStatus: 'High',
        demandForecastPct: 18,
        status: 'Available',
        fpoVerified: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 'prod-002',
        farmerId: 'f-102',
        farmerName: 'Suhas Biswas',
        farmerLocation: 'Barasat (24 km)',
        cropName: 'Tomato',
        variety: 'Roma Organic',
        grade: 'Grade A',
        quantityKg: 500,
        expectedPricePerKg: 29,
        marketSuggestedPriceMin: 28,
        marketSuggestedPriceMax: 32,
        harvestDate: '2026-09-10',
        demandStatus: 'High',
        demandForecastPct: 18,
        status: 'Available',
        fpoVerified: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 'prod-003',
        farmerId: 'f-103',
        farmerName: 'Subhash Mondal',
        farmerLocation: 'Burdwan (Shaktigarh)',
        cropName: 'Rice',
        variety: 'Gobindobhog Aromatic',
        grade: 'Export Quality',
        quantityKg: 3500,
        expectedPricePerKg: 78,
        marketSuggestedPriceMin: 72,
        marketSuggestedPriceMax: 84,
        harvestDate: '2026-09-08',
        demandStatus: 'High',
        demandForecastPct: 22,
        status: 'Available',
        fpoVerified: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 'prod-004',
        farmerId: 'f-104',
        farmerName: 'Bimal Halder',
        farmerLocation: 'Tarakeswar, Hooghly',
        cropName: 'Potato',
        variety: 'Jyoti Golden Super',
        grade: 'Grade A',
        quantityKg: 4500,
        expectedPricePerKg: 17,
        marketSuggestedPriceMin: 15,
        marketSuggestedPriceMax: 19,
        harvestDate: '2026-09-09',
        demandStatus: 'Steady',
        demandForecastPct: 8,
        status: 'Available',
        fpoVerified: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 'prod-005',
        farmerId: 'f-105',
        farmerName: 'Animesh Biswas',
        farmerLocation: 'Nadia (Ranaghat)',
        cropName: 'Chilli',
        variety: 'Bullet Green Spicy',
        grade: 'Grade A',
        quantityKg: 650,
        expectedPricePerKg: 46,
        marketSuggestedPriceMin: 42,
        marketSuggestedPriceMax: 50,
        harvestDate: '2026-09-10',
        demandStatus: 'High',
        demandForecastPct: 25,
        status: 'Available',
        fpoVerified: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 'prod-006',
        farmerId: 'f-106',
        farmerName: 'Vasantrao Patil',
        farmerLocation: 'Lasalgaon Mandi, Nashik',
        cropName: 'Onion',
        variety: 'Nashik Red Premium',
        grade: 'Grade A',
        quantityKg: 6000,
        expectedPricePerKg: 24,
        marketSuggestedPriceMin: 22,
        marketSuggestedPriceMax: 26,
        harvestDate: '2026-09-08',
        demandStatus: 'High',
        demandForecastPct: 20,
        status: 'Available',
        fpoVerified: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 'prod-007',
        farmerId: 'f-107',
        farmerName: 'Gurpreet Singh',
        farmerLocation: 'Khanna Mandi, Ludhiana',
        cropName: 'Wheat',
        variety: 'HD-3086 Premium Grade',
        grade: 'Export Quality',
        quantityKg: 12000,
        expectedPricePerKg: 27,
        marketSuggestedPriceMin: 25,
        marketSuggestedPriceMax: 30,
        harvestDate: '2026-09-07',
        demandStatus: 'Steady',
        demandForecastPct: 10,
        status: 'Available',
        fpoVerified: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 'prod-008',
        farmerId: 'f-108',
        farmerName: 'K. Venkata Rao',
        farmerLocation: 'Guntur Mirchi Yard, AP',
        cropName: 'Chilli',
        variety: 'Guntur Teja S17 Fiery',
        grade: 'Export Quality',
        quantityKg: 3200,
        expectedPricePerKg: 195,
        marketSuggestedPriceMin: 185,
        marketSuggestedPriceMax: 210,
        harvestDate: '2026-09-09',
        demandStatus: 'High',
        demandForecastPct: 30,
        status: 'Available',
        fpoVerified: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 'prod-009',
        farmerId: 'f-109',
        farmerName: 'Bhawani Singh Rathore',
        farmerLocation: 'Kumher Mandi, Bharatpur, RJ',
        cropName: 'Mustard',
        variety: 'Black Bold Oil-Rich (42%)',
        grade: 'Export Quality',
        quantityKg: 6400,
        expectedPricePerKg: 58,
        marketSuggestedPriceMin: 54,
        marketSuggestedPriceMax: 62,
        harvestDate: '2026-09-08',
        demandStatus: 'Steady',
        demandForecastPct: 12,
        status: 'Available',
        fpoVerified: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 'prod-010',
        farmerId: 'f-110',
        farmerName: 'Chander Mohan Thakur',
        farmerLocation: 'Kotkhai, Shimla, HP',
        cropName: 'Apple',
        variety: 'Royal Delicious Mountain Fresh',
        grade: 'Export Quality',
        quantityKg: 2500,
        expectedPricePerKg: 92,
        marketSuggestedPriceMin: 85,
        marketSuggestedPriceMax: 105,
        harvestDate: '2026-09-09',
        demandStatus: 'High',
        demandForecastPct: 24,
        status: 'Available',
        fpoVerified: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 'prod-011',
        farmerId: 'f-111',
        farmerName: 'Prabhat Mondal',
        farmerLocation: 'Bongaon, North 24 Parganas',
        cropName: 'Cauliflower',
        variety: 'Snowball White Compact',
        grade: 'Grade A',
        quantityKg: 1400,
        expectedPricePerKg: 22,
        marketSuggestedPriceMin: 20,
        marketSuggestedPriceMax: 25,
        harvestDate: '2026-09-10',
        demandStatus: 'High',
        demandForecastPct: 15,
        status: 'Available',
        fpoVerified: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 'prod-012',
        farmerId: 'f-112',
        farmerName: 'Harish Patel',
        farmerLocation: 'Anand Horticulture Hub, Gujarat',
        cropName: 'Cabbage',
        variety: 'Green Globe Crisp',
        grade: 'Grade A',
        quantityKg: 2800,
        expectedPricePerKg: 14,
        marketSuggestedPriceMin: 12,
        marketSuggestedPriceMax: 16,
        harvestDate: '2026-09-09',
        demandStatus: 'Steady',
        demandForecastPct: 8,
        status: 'Available',
        fpoVerified: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 'prod-013',
        farmerId: 'f-113',
        farmerName: 'Manjunath Gowda',
        farmerLocation: 'Kolar Agro Belt, Karnataka',
        cropName: 'Carrot',
        variety: 'Kuroda Sweet Orange',
        grade: 'Grade A',
        quantityKg: 1800,
        expectedPricePerKg: 32,
        marketSuggestedPriceMin: 28,
        marketSuggestedPriceMax: 35,
        harvestDate: '2026-09-10',
        demandStatus: 'High',
        demandForecastPct: 17,
        status: 'Available',
        fpoVerified: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 'prod-014',
        farmerId: 'f-114',
        farmerName: 'Debabrata Das',
        farmerLocation: 'Baruipur, South 24 Parganas',
        cropName: 'Brinjal',
        variety: 'Muktakeshi Purple Gloss',
        grade: 'Grade A',
        quantityKg: 900,
        expectedPricePerKg: 26,
        marketSuggestedPriceMin: 24,
        marketSuggestedPriceMax: 30,
        harvestDate: '2026-09-10',
        demandStatus: 'Steady',
        demandForecastPct: 11,
        status: 'Available',
        fpoVerified: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 'prod-015',
        farmerId: 'f-115',
        farmerName: 'Manoj Mandal',
        farmerLocation: 'Katihar Mandi, Bihar',
        cropName: 'Rice',
        variety: 'Katarni Bhagalpur Fragrant',
        grade: 'Grade A',
        quantityKg: 4200,
        expectedPricePerKg: 54,
        marketSuggestedPriceMin: 50,
        marketSuggestedPriceMax: 60,
        harvestDate: '2026-09-08',
        demandStatus: 'High',
        demandForecastPct: 19,
        status: 'Available',
        fpoVerified: true,
        createdAt: new Date().toISOString()
    }
];
const mockForecasts = {
    Tomato: {
        cropName: 'Tomato',
        currentDemandTonnes: 21.8,
        forecastDemandTonnes: 26.4,
        percentageChange: 21,
        confidencePct: 87,
        mandiLocation: 'Kolkata Wholesale Mandi',
        recommendation: 'Tomato demand may increase next week. Consider increasing tomato supply to capture higher payout.',
        trend: 'up'
    },
    Potato: {
        cropName: 'Potato',
        currentDemandTonnes: 45.0,
        forecastDemandTonnes: 47.2,
        percentageChange: 5,
        confidencePct: 92,
        mandiLocation: 'Howrah Terminal Mandi',
        recommendation: 'Stable demand expected. Maintain regular supply intervals.',
        trend: 'stable'
    },
    Onion: {
        cropName: 'Onion',
        currentDemandTonnes: 34.2,
        forecastDemandTonnes: 39.5,
        percentageChange: 15,
        confidencePct: 84,
        mandiLocation: 'Kolkata Wholesale Mandi',
        recommendation: 'Upcoming festival demand driving onion requirements up.',
        trend: 'up'
    }
};
const mockLogisticsData = {
    orderId: 'ORD-FF2048',
    before: {
        distanceKm: 184,
        estimatedCostRs: 18400,
        vehiclesCount: 6,
        travelTimeHours: 6.5
    },
    optimized: {
        distanceKm: 132,
        estimatedCostRs: 13750,
        vehiclesCount: 4,
        travelTimeHours: 4.2
    },
    savingsRs: 4650,
    savingsPct: 25.2,
    stops: [
        {
            id: 'stop-1',
            name: 'Farmer A (Ramesh) - Farm Gate',
            type: 'Farmer',
            location: 'Hooghly Lot #4',
            cargoKg: 800,
            estimatedArrival: '07:30 AM',
            coordinates: {
                lat: 22.9031,
                lng: 88.3888
            }
        },
        {
            id: 'stop-2',
            name: 'Farmer B (Suhas) - Pickup Point',
            type: 'Farmer',
            location: 'Barasat Hub',
            cargoKg: 500,
            estimatedArrival: '08:45 AM',
            coordinates: {
                lat: 22.7226,
                lng: 88.4804
            }
        },
        {
            id: 'stop-3',
            name: 'FPO C & Farmer D Pooling Point',
            type: 'Collection Hub',
            location: 'Singur Aggregation Hub',
            cargoKg: 700,
            estimatedArrival: '10:15 AM',
            coordinates: {
                lat: 22.8123,
                lng: 88.2312
            }
        },
        {
            id: 'stop-4',
            name: 'Kolkata Central Wholesale Buyer',
            type: 'Buyer Mandi',
            location: 'Posta Mandi, Kolkata',
            cargoKg: 2000,
            estimatedArrival: '01:30 PM',
            coordinates: {
                lat: 22.5726,
                lng: 88.3639
            }
        }
    ]
};
const initialOrders = [
    {
        id: 'ord-1',
        orderNumber: 'FF-2048',
        buyerId: 'b-201',
        buyerName: 'Kolkata Wholesale Mandi',
        destination: 'Posta Mandi, Kolkata',
        items: [
            {
                produceId: 'prod-001',
                farmerName: 'Farmer A (Ramesh Ghosh)',
                cropName: 'Tomato (Grade A)',
                quantityKg: 800,
                pricePerKg: 30,
                subtotal: 24000
            },
            {
                produceId: 'prod-002',
                farmerName: 'Farmer B (Suhas Biswas)',
                cropName: 'Tomato (Grade A)',
                quantityKg: 500,
                pricePerKg: 29,
                subtotal: 14500
            },
            {
                produceId: 'prod-003',
                farmerName: 'FPO C (Hooghly Collective)',
                cropName: 'Tomato (Grade A)',
                quantityKg: 400,
                pricePerKg: 28,
                subtotal: 11200
            },
            {
                produceId: 'prod-004',
                farmerName: 'Farmer D (Bimal Halder)',
                cropName: 'Tomato (Grade A)',
                quantityKg: 300,
                pricePerKg: 31,
                subtotal: 9300
            }
        ],
        totalQuantityKg: 2000,
        totalAmount: 59000,
        savingsRealized: 11800,
        status: 'In Transit',
        expectedDelivery: 'Tomorrow, 2:30 PM',
        createdAt: '2026-09-03T10:00:00Z',
        routeId: 'route-opt-101'
    }
];
const mockImpactMetrics = {
    farmersConnected: 1248,
    produceTradedTonnes: 482,
    totalOrders: 3842,
    farmerRealizationPct: 17,
    logisticsSavingsPct: 23,
    middlemenEliminated: 4
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/pwa/src/data/panIndiaSellers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PAN_INDIA_CROPS",
    ()=>PAN_INDIA_CROPS,
    "PAN_INDIA_SELLERS",
    ()=>PAN_INDIA_SELLERS,
    "extractCoordinatesAndState",
    ()=>extractCoordinatesAndState,
    "getLivePanIndiaSellers",
    ()=>getLivePanIndiaSellers
]);
const PAN_INDIA_CROPS = [
    'All Crops',
    'Tomato',
    'Potato',
    'Onion',
    'Wheat',
    'Rice',
    'Chilli',
    'Mustard',
    'Apple',
    'Cauliflower',
    'Cabbage',
    'Carrot',
    'Brinjal'
];
const PAN_INDIA_SELLERS = [
    // West Bengal
    {
        id: 'seller-wb-1',
        name: 'Ramesh Ghosh',
        fpoOrCoop: 'Singur Vegetable Cluster FPO',
        crop: 'Tomato',
        variety: 'Hybrid Red Flavour',
        grade: 'Grade A',
        quantityKg: 1200,
        pricePerKg: 29,
        location: 'Singur, Hooghly',
        state: 'West Bengal',
        lat: 22.8123,
        lng: 88.2325,
        harvestDate: 'Freshly Harvested',
        verified: true,
        phone: '+91 98310 44210',
        rating: 4.9,
        transitDaysToKolkata: 0.2
    },
    {
        id: 'seller-wb-2',
        name: 'Subhash Mondal',
        fpoOrCoop: 'Bardhaman Paddy & Grain Producers',
        crop: 'Rice',
        variety: 'Gobindobhog Aromatic',
        grade: 'Export Quality',
        quantityKg: 3500,
        pricePerKg: 78,
        location: 'Shaktigarh, Purba Bardhaman',
        state: 'West Bengal',
        lat: 23.2324,
        lng: 87.8615,
        harvestDate: 'Batch Tested Ready',
        verified: true,
        phone: '+91 98312 66321',
        rating: 4.8,
        transitDaysToKolkata: 0.5
    },
    {
        id: 'seller-wb-3',
        name: 'Animesh Biswas',
        fpoOrCoop: 'Nadia Fresh Horticulture Collective',
        crop: 'Chilli',
        variety: 'Bullet Green Spicy',
        grade: 'Grade A',
        quantityKg: 650,
        pricePerKg: 46,
        location: 'Ranaghat, Nadia',
        state: 'West Bengal',
        lat: 23.1812,
        lng: 88.5812,
        harvestDate: 'Daily Fresh Pick',
        verified: true,
        phone: '+91 98315 77412',
        rating: 4.7,
        transitDaysToKolkata: 0.3
    },
    {
        id: 'seller-wb-4',
        name: 'Bimal Halder',
        fpoOrCoop: 'Tarakeswar Potato Growers Union',
        crop: 'Potato',
        variety: 'Jyoti Golden Super',
        grade: 'Grade A',
        quantityKg: 4500,
        pricePerKg: 17,
        location: 'Tarakeswar, Hooghly',
        state: 'West Bengal',
        lat: 22.8884,
        lng: 88.0215,
        harvestDate: 'Cold Store Verified',
        verified: true,
        phone: '+91 98313 11540',
        rating: 4.9,
        transitDaysToKolkata: 0.3
    },
    // Maharashtra
    {
        id: 'seller-mh-1',
        name: 'Vasantrao Patil',
        fpoOrCoop: 'Nashik Agro Farmer Producer Co.',
        crop: 'Onion',
        variety: 'Nashik Red Premium',
        grade: 'Export Quality',
        quantityKg: 6000,
        pricePerKg: 24,
        location: 'Lasalgaon Mandi, Nashik',
        state: 'Maharashtra',
        lat: 20.1472,
        lng: 74.2289,
        harvestDate: 'Cured & Graded',
        verified: true,
        phone: '+91 94222 31089',
        rating: 5.0,
        transitDaysToKolkata: 2.5
    },
    {
        id: 'seller-mh-2',
        name: 'Dnyaneshwar Shinde',
        fpoOrCoop: 'Pune Krishi Vikas Sangh',
        crop: 'Tomato',
        variety: 'Abhinav Firm Hybrid',
        grade: 'Grade A',
        quantityKg: 2800,
        pricePerKg: 26,
        location: 'Narayangaon, Pune',
        state: 'Maharashtra',
        lat: 19.1234,
        lng: 73.9782,
        harvestDate: 'Long Transit Firm',
        verified: true,
        phone: '+91 98901 88410',
        rating: 4.8,
        transitDaysToKolkata: 2.2
    },
    // Karnataka
    {
        id: 'seller-ka-1',
        name: 'Basavaraj Gowda',
        fpoOrCoop: 'Kolar Tomato Growers Federation',
        crop: 'Tomato',
        variety: 'Kolar Red Heavy Density',
        grade: 'Grade A',
        quantityKg: 3800,
        pricePerKg: 27,
        location: 'Kolar APMC Mandi',
        state: 'Karnataka',
        lat: 13.1367,
        lng: 78.1292,
        harvestDate: 'Cold Chain Prepped',
        verified: true,
        phone: '+91 98450 12890',
        rating: 4.9,
        transitDaysToKolkata: 2.8
    },
    {
        id: 'seller-ka-2',
        name: 'Manjunath Swamy',
        fpoOrCoop: 'Byadagi Spices Cooperative',
        crop: 'Chilli',
        variety: 'Byadagi Deep Crimson',
        grade: 'Export Quality',
        quantityKg: 1400,
        pricePerKg: 185,
        location: 'Byadgi, Haveri',
        state: 'Karnataka',
        lat: 14.6789,
        lng: 75.4891,
        harvestDate: 'Sun Dried & Sorted',
        verified: true,
        phone: '+91 99801 34910',
        rating: 4.9,
        transitDaysToKolkata: 3.0
    },
    // Uttar Pradesh
    {
        id: 'seller-up-1',
        name: 'Ramkishore Yadav',
        fpoOrCoop: 'Agra Potato Consortium',
        crop: 'Potato',
        variety: 'Kufri Bahar Extra',
        grade: 'Grade A',
        quantityKg: 8500,
        pricePerKg: 15,
        location: 'Khandauli, Agra',
        state: 'Uttar Pradesh',
        lat: 27.2831,
        lng: 78.0725,
        harvestDate: 'Prime Cold Stored',
        verified: true,
        phone: '+91 94120 78231',
        rating: 4.8,
        transitDaysToKolkata: 1.8
    },
    {
        id: 'seller-up-2',
        name: 'Suresh Chandra Sharma',
        fpoOrCoop: 'Aligarh Grain Hub',
        crop: 'Wheat',
        variety: 'Sharbati Gold MP-UP',
        grade: 'Grade A',
        quantityKg: 9500,
        pricePerKg: 28,
        location: 'Atrauli, Aligarh',
        state: 'Uttar Pradesh',
        lat: 28.0315,
        lng: 78.2912,
        harvestDate: 'Machine Cleaned',
        verified: true,
        phone: '+91 98371 44021',
        rating: 4.7,
        transitDaysToKolkata: 2.0
    },
    // Punjab
    {
        id: 'seller-pb-1',
        name: 'Gurpreet Singh',
        fpoOrCoop: 'Malwa Progressive Farmers Society',
        crop: 'Wheat',
        variety: 'HD-3086 Premium Grade',
        grade: 'Export Quality',
        quantityKg: 12000,
        pricePerKg: 27,
        location: 'Khanna Mandi, Ludhiana',
        state: 'Punjab',
        lat: 30.7024,
        lng: 76.2198,
        harvestDate: 'Silo Stored & Certified',
        verified: true,
        phone: '+91 98140 55102',
        rating: 5.0,
        transitDaysToKolkata: 2.4
    },
    {
        id: 'seller-pb-2',
        name: 'Harbhajan Sandhu',
        fpoOrCoop: 'Doaba Organic Vegetable Trust',
        crop: 'Potato',
        variety: 'Kufri Pukhraj Seed / Table',
        grade: 'Grade A',
        quantityKg: 5200,
        pricePerKg: 16,
        location: 'Jalandhar Cantt Agro Yard',
        state: 'Punjab',
        lat: 31.2824,
        lng: 75.6124,
        harvestDate: 'Fresh Cold Stored',
        verified: true,
        phone: '+91 98722 34190',
        rating: 4.8,
        transitDaysToKolkata: 2.5
    },
    // Madhya Pradesh
    {
        id: 'seller-mp-1',
        name: 'Mukesh Patidar',
        fpoOrCoop: 'Nimar Onion & Garlic Producers Co.',
        crop: 'Onion',
        variety: 'Khandwa Pink Globe',
        grade: 'Grade A',
        quantityKg: 4200,
        pricePerKg: 23,
        location: 'Khandwa Mandi',
        state: 'Madhya Pradesh',
        lat: 21.8314,
        lng: 76.3498,
        harvestDate: 'Graded & Bagged',
        verified: true,
        phone: '+91 97520 88219',
        rating: 4.8,
        transitDaysToKolkata: 2.0
    },
    {
        id: 'seller-mp-2',
        name: 'Devendra Patel',
        fpoOrCoop: 'Malwa Sharbati Wheat Alliance',
        crop: 'Wheat',
        variety: 'Sehore Sharbati Royal',
        grade: 'Export Quality',
        quantityKg: 7800,
        pricePerKg: 32,
        location: 'Sehore Krishi Mandi',
        state: 'Madhya Pradesh',
        lat: 23.2031,
        lng: 77.0844,
        harvestDate: 'High Protein Tested',
        verified: true,
        phone: '+91 98261 44520',
        rating: 5.0,
        transitDaysToKolkata: 2.1
    },
    // Rajasthan
    {
        id: 'seller-rj-1',
        name: 'Bhawani Singh Rathore',
        fpoOrCoop: 'Bharatpur Mustard Producers Co.',
        crop: 'Mustard',
        variety: 'Black Bold Oil-Rich (42% Oil)',
        grade: 'Export Quality',
        quantityKg: 6400,
        pricePerKg: 58,
        location: 'Kumher Mandi, Bharatpur',
        state: 'Rajasthan',
        lat: 27.3184,
        lng: 77.3752,
        harvestDate: 'High Oil Test Passed',
        verified: true,
        phone: '+91 94140 19820',
        rating: 4.9,
        transitDaysToKolkata: 2.0
    },
    {
        id: 'seller-rj-2',
        name: 'Kailash Choudhary',
        fpoOrCoop: 'Jaipur Organic Horticulture FPO',
        crop: 'Tomato',
        variety: 'Rani Hybrid High Yield',
        grade: 'Grade A',
        quantityKg: 2200,
        pricePerKg: 28,
        location: 'Muhana Mandi, Jaipur',
        state: 'Rajasthan',
        lat: 26.7932,
        lng: 75.7681,
        harvestDate: 'Polyhouse Picked',
        verified: true,
        phone: '+91 98290 66120',
        rating: 4.7,
        transitDaysToKolkata: 2.3
    },
    // Andhra Pradesh & Telangana
    {
        id: 'seller-ap-1',
        name: 'K. Venkata Rao',
        fpoOrCoop: 'Guntur Mirchi Yard Growers FPO',
        crop: 'Chilli',
        variety: 'Guntur Teja S17 Fiery',
        grade: 'Export Quality',
        quantityKg: 3200,
        pricePerKg: 195,
        location: 'Guntur Mirchi Yard',
        state: 'Andhra Pradesh',
        lat: 16.3067,
        lng: 80.4365,
        harvestDate: 'Laboratory Tested & Graded',
        verified: true,
        phone: '+91 98481 22910',
        rating: 5.0,
        transitDaysToKolkata: 2.0
    },
    {
        id: 'seller-ap-2',
        name: 'T. Narsimha Reddy',
        fpoOrCoop: 'Rayalaseema Tomato Consortium',
        crop: 'Tomato',
        variety: 'Madanapalle Red Firm',
        grade: 'Grade A',
        quantityKg: 4600,
        pricePerKg: 25,
        location: 'Madanapalle Market, Chittoor',
        state: 'Andhra Pradesh',
        lat: 13.5562,
        lng: 78.5029,
        harvestDate: 'Asia Largest Tomato Belt',
        verified: true,
        phone: '+91 98492 33810',
        rating: 4.9,
        transitDaysToKolkata: 2.7
    },
    // Himachal Pradesh & J&K
    {
        id: 'seller-hp-1',
        name: 'Chander Mohan Thakur',
        fpoOrCoop: 'Shimla Valley Apple Growers Union',
        crop: 'Apple',
        variety: 'Royal Delicious Mountain Fresh',
        grade: 'Export Quality',
        quantityKg: 2500,
        pricePerKg: 92,
        location: 'Kotkhai, Shimla',
        state: 'Himachal Pradesh',
        lat: 31.1215,
        lng: 77.5312,
        harvestDate: 'Tree Ripe Hand Picked',
        verified: true,
        phone: '+91 94180 55190',
        rating: 5.0,
        transitDaysToKolkata: 2.9
    },
    // Bihar
    {
        id: 'seller-br-1',
        name: 'Sanjay Kumar Singh',
        fpoOrCoop: 'Vaishali Agro Producer Co.',
        crop: 'Potato',
        variety: 'Red Kanchan Table Top',
        grade: 'Grade A',
        quantityKg: 3900,
        pricePerKg: 16,
        location: 'Hajipur, Vaishali',
        state: 'Bihar',
        lat: 25.6854,
        lng: 85.2146,
        harvestDate: 'Direct Field Packed',
        verified: true,
        phone: '+91 94312 88410',
        rating: 4.7,
        transitDaysToKolkata: 1.0
    },
    {
        id: 'seller-br-2',
        name: 'Manoj Mandal',
        fpoOrCoop: 'Kosi Seemanchal Grain Hub',
        crop: 'Rice',
        variety: 'Katarni Bhagalpur Fragrant',
        grade: 'Grade A',
        quantityKg: 4200,
        pricePerKg: 54,
        location: 'Katihar Mandi',
        state: 'Bihar',
        lat: 25.5412,
        lng: 87.5714,
        harvestDate: 'GI Tagged Fresh Lot',
        verified: true,
        phone: '+91 98351 22901',
        rating: 4.8,
        transitDaysToKolkata: 0.8
    },
    // Gujarat
    {
        id: 'seller-gj-1',
        name: 'Pravinbhai Patel',
        fpoOrCoop: 'Saurashtra Onion & Garlic Guild',
        crop: 'Onion',
        variety: 'Mahuva White Onion',
        grade: 'Export Quality',
        quantityKg: 5500,
        pricePerKg: 25,
        location: 'Mahuva APMC, Bhavnagar',
        state: 'Gujarat',
        lat: 21.0914,
        lng: 71.7612,
        harvestDate: 'Dehydration & Export Spec',
        verified: true,
        phone: '+91 98251 99014',
        rating: 4.9,
        transitDaysToKolkata: 2.8
    },
    {
        id: 'seller-gj-2',
        name: 'Ashokbhai Desai',
        fpoOrCoop: 'Deesa Potato Super Cluster',
        crop: 'Potato',
        variety: 'Lady Rosetta (Processing / Crisp)',
        grade: 'Export Quality',
        quantityKg: 7200,
        pricePerKg: 19,
        location: 'Deesa APMC, Banaskantha',
        state: 'Gujarat',
        lat: 24.2584,
        lng: 72.1812,
        harvestDate: 'Dry Matter > 21% Tested',
        verified: true,
        phone: '+91 98790 44102',
        rating: 5.0,
        transitDaysToKolkata: 2.6
    }
];
const extractCoordinatesAndState = (locStr)=>{
    const lower = (locStr || '').toLowerCase();
    if (lower.includes('singur') || lower.includes('hooghly')) {
        return {
            lat: 22.8123,
            lng: 88.2325,
            state: 'West Bengal'
        };
    }
    if (lower.includes('shaktigarh') || lower.includes('bardhaman') || lower.includes('burdwan')) {
        return {
            lat: 23.2324,
            lng: 87.8615,
            state: 'West Bengal'
        };
    }
    if (lower.includes('ranaghat') || lower.includes('nadia')) {
        return {
            lat: 23.1812,
            lng: 88.5812,
            state: 'West Bengal'
        };
    }
    if (lower.includes('tarakeswar')) {
        return {
            lat: 22.8884,
            lng: 88.0215,
            state: 'West Bengal'
        };
    }
    if (lower.includes('barasat') || lower.includes('24 parganas')) {
        return {
            lat: 22.7225,
            lng: 88.4812,
            state: 'West Bengal'
        };
    }
    if (lower.includes('nashik') || lower.includes('maharashtra') || lower.includes('pune')) {
        return {
            lat: 20.1472,
            lng: 74.2289,
            state: 'Maharashtra'
        };
    }
    if (lower.includes('kolar') || lower.includes('karnataka')) {
        return {
            lat: 13.1367,
            lng: 78.1292,
            state: 'Karnataka'
        };
    }
    if (lower.includes('agra') || lower.includes('uttar pradesh')) {
        return {
            lat: 27.2831,
            lng: 78.0725,
            state: 'Uttar Pradesh'
        };
    }
    if (lower.includes('ludhiana') || lower.includes('punjab')) {
        return {
            lat: 30.7024,
            lng: 76.2198,
            state: 'Punjab'
        };
    }
    if (lower.includes('guntur') || lower.includes('andhra')) {
        return {
            lat: 16.3067,
            lng: 80.4365,
            state: 'Andhra Pradesh'
        };
    }
    // Default coordinate jitter inside Bengal cluster for realism
    const jitterLat = 22.7 + (Math.random() * 0.4 - 0.2);
    const jitterLng = 88.2 + (Math.random() * 0.4 - 0.2);
    return {
        lat: parseFloat(jitterLat.toFixed(4)),
        lng: parseFloat(jitterLng.toFixed(4)),
        state: 'West Bengal'
    };
};
const getLivePanIndiaSellers = (userProduceItems = [])=>{
    const dynamicFromProduce = userProduceItems.map((p)=>{
        const geo = extractCoordinatesAndState(p.farmerLocation);
        return {
            id: `live-${p.id}`,
            name: p.farmerName || 'Verified Local Farmer',
            fpoOrCoop: p.variety ? `${p.variety} Direct Harvest` : 'Farm2Flow Direct Grower',
            crop: p.cropName,
            variety: p.variety || 'Farm Fresh',
            grade: p.grade || 'Grade A',
            quantityKg: p.quantityKg,
            pricePerKg: p.expectedPricePerKg,
            location: p.farmerLocation || 'Local Farm Cluster, WB',
            state: geo.state,
            lat: geo.lat,
            lng: geo.lng,
            harvestDate: p.harvestDate || 'Just Listed',
            verified: p.fpoVerified ?? true,
            phone: '+91 98310 44210',
            rating: 5.0,
            transitDaysToKolkata: geo.state === 'West Bengal' ? 0.3 : 2.0,
            isUserListed: true
        };
    });
    // Deduplicate by ID and put newest live listings at the top
    return [
        ...dynamicFromProduce,
        ...PAN_INDIA_SELLERS
    ];
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/pwa/src/data/translations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
    EN: {
        appTitle: 'Farm2Flow',
        farmerRole: 'Farmer',
        tagline: 'From Farm to Market, Smarter',
        offlineDraft: 'Offline Draft Mode • Changes Queued',
        onlineSync: 'PWA Online • Direct Sync Active',
        goOnline: 'Go Online',
        simulateOffline: 'Simulate Offline',
        mandiOpen: 'Mandi: Open',
        verifiedFarmer: '✓ NABARD / e-NAM Verified Farmer',
        highDemandOpp: '🌟 HIGH DEMAND OPPORTUNITY',
        demandSurge: '+21% Demand',
        tomatoGradeA: 'Tomato (Grade A)',
        hybridRedDesc: 'Hybrid Red • Firm Harvest Ready',
        estimatedFairRate: 'Estimated Fair Rate',
        perKg: '/kg',
        aiRecommendation: 'AI Recommendation',
        aiRecText: 'Tomato demand may increase next week. Consider increasing tomato supply to capture higher payout.',
        listProduceBtn: 'List My Produce for Direct Sale',
        activeListings: 'Active Listings',
        confirmedOrders: 'Confirmed Orders',
        directToVerified: 'Direct to verified buyers',
        pickupScheduled: 'Pickup scheduled',
        marketIntel: 'Market Intelligence & Rates',
        currentMandiDemand: 'Current Mandi Demand',
        forecastDemand: 'Forecast Demand',
        directPriceRealization: 'Direct Farm2Flow Price Realization:',
        directPriceDesc: 'Farmer: ₹30/kg → Buyer: ₹35/kg (Eliminates ₹15/kg middlemen spread!)',
        cropSelection: 'Crop Selection:',
        myActiveListings: 'My Active Listings',
        listProduce: '+ List Produce',
        activeOrdersDispatches: 'Active Orders & Dispatches',
        orderValue: 'Order Value',
        farmerProfile: 'Farmer Profile',
        mobile: 'Mobile',
        location: 'Location',
        verification: 'Verification',
        signOut: '← Back to Login / Sign Out',
        homeNav: 'Home',
        marketNav: 'Market',
        sellNav: 'Sell',
        ordersNav: 'Orders',
        profileNav: 'Profile',
        voiceAssistant: 'Voice Command Assistant',
        voiceAssistantSubtitle: 'Speak in English, Bengali, or Hindi',
        tapToTalk: 'Tap to Talk',
        listening: 'Listening...',
        speakPrompt: 'Tap the mic and speak: "Sell tomato", "Show prices", or "Track orders"',
        orTapAction: 'Or Tap Quick Action',
        actionPrices: "Show today's market prices",
        actionPricesDesc: 'View real-time mandi rates & AI demand alerts',
        actionSell: 'Sell my produce',
        actionSellDesc: 'List crop in 3 simple steps',
        actionTrack: 'Track my orders',
        actionTrackDesc: 'View live dispatch & logistics status',
        actionMarket: 'Market Intelligence',
        actionMarketDesc: 'Forecast demand and fair rate analysis',
        wizardTitle: 'List Produce for Direct Sale',
        stepOf: 'Step {step} of 3 • Direct Mandi Match',
        step1Crop: 'Step 1: Select Crop',
        continueQuantity: 'Continue to Quantity',
        step2Quantity: 'Step 2: Harvest Quantity (Kg)',
        availableLot: 'Available Lot Quantity',
        setQualityPrice: 'Set Quality & Price',
        step3Quality: 'Step 3: Quality, Price & Date',
        qualityGrade: 'Quality Grade',
        expectedPrice: 'Expected Price per Kg (₹)',
        aiMarketRange: 'AI Market Range: ₹28 – ₹32 / kg',
        expectedHarvestDate: 'Expected Harvest / Dispatch Date',
        back: 'Back',
        submitListing: 'List My Produce',
        submitting: 'Listing Produce...',
        listSuccess: 'Produce listed successfully. Saved locally and synced to e-NAM!',
        voiceAutofillPrompt: 'Listening... say crop, quantity, or price (e.g. "500 kg at 32 rupees")',
        // Consumer Portal Translations
        buyerRole: 'Consumer',
        buyerTitle: 'Direct Farm-to-Consumer',
        buyerSubtitle: 'Order freshly harvested crops directly from verified local & national farmers.',
        verifiedAggregator: 'Verified Consumer',
        farmEconomicsTitle: 'Direct Farmer-to-Consumer Model:',
        farmEconomicsDesc: 'Enjoy fresh produce straight from farms with 18% – 25% savings by skipping mandi middlemen.',
        runSmartMatchBtn: 'Create Requirement & Auto-Match Farmers',
        availableLotsTitle: 'Fresh Harvests Directly From Farmers',
        viewAllLots: 'View All Harvests',
        browseTitle: 'Browse Direct Farm Listings',
        procureViaSmartMatch: 'Order via Smart Match',
        trackOrdersTitle: 'Track Deliveries & Orders',
        totalLots: 'Total',
        quantityLabel: 'Quantity',
        destinationLabel: 'Delivery Address',
        deliveryLabel: 'Delivery Status',
        totalProcurementCost: 'Total Order Cost',
        middlemenSavings: 'Middlemen Markup Saved',
        buyerProfileTitle: 'Consumer Profile',
        entityLabel: 'Account Holder',
        buyerEntityValue: 'Individual Household Consumer',
        buyerLocationValue: 'Salt Lake, Kolkata',
        buyerStatusValue: 'Verified Direct Consumer ✓',
        browseNav: 'Browse'
    },
    BN: {
        appTitle: 'ফার্ম২ফ্লো',
        farmerRole: 'কৃষক',
        buyerRole: 'ভোক্তা / ক্রেতা',
        tagline: 'ক্ষেত থেকে সরাসরি বাজারে, স্মার্ট উপায়ে',
        offlineDraft: 'অফলাইন ড্রাফট মোড • ডেটা সংরক্ষিত হচ্ছে',
        onlineSync: 'পিডব্লিউএ অনলাইন • সরাসরি সিঙ্ক সক্রিয়',
        goOnline: 'অনলাইনে যান',
        simulateOffline: 'অফলাইন পরীক্ষা',
        mandiOpen: 'মান্ডি: খোলা আছে',
        verifiedFarmer: '✓ নাবার্ড / ই-নাম যাচাইকৃত কৃষক',
        highDemandOpp: '🌟 উচ্চ চাহিদার সুযোগ',
        demandSurge: '+২১% চাহিদা বৃদ্ধি',
        tomatoGradeA: 'টমেটো (গ্রেড এ)',
        hybridRedDesc: 'হাইব্রিড লাল • তাজা ও তোলার উপযোগী',
        estimatedFairRate: 'আনুমানিক ন্যায্য দর',
        perKg: '/কেজি',
        aiRecommendation: 'এআই সুপারিশ',
        aiRecText: 'আগামী সপ্তাহে টমেটোর চাহিদা বাড়তে পারে। সর্বোচ্চ দর পেতে ফসলের জোগান প্রস্তুত রাখুন।',
        listProduceBtn: 'সরাসরি বিক্রির জন্য ফসল যোগ করুন',
        activeListings: 'সক্রিয় তালিকাভুক্ত ফসল',
        confirmedOrders: 'নিশ্চিত ক্রয়াদেশ (অর্ডার)',
        directToVerified: 'যাচাইকৃত সরাসরি পাইকারি ক্রেতাদের জন্য',
        pickupScheduled: 'পরিবহন নির্ধারিত হয়েছে',
        marketIntel: 'বাজার দর ও চাহিদা বিশ্লেষণ',
        currentMandiDemand: 'বর্তমান মান্ডি চাহিদা',
        forecastDemand: 'ভবিষ্যদ্বাণী চাহিদা',
        directPriceRealization: 'ফার্ম২ফ্লো সরাসরি মূল্য প্রাপ্তি:',
        directPriceDesc: 'কৃষক পাবেন: ₹৩০/কেজি → ক্রেতা দেবেন: ₹৩৫/কেজি (দালালদের ₹১৫/কেজি লাভ নির্মূল!)',
        cropSelection: 'ফসল নির্বাচন:',
        myActiveListings: 'আমার বর্তমান বিক্রয় তালিকা',
        listProduce: '+ ফসল যোগ করুন',
        activeOrdersDispatches: 'সক্রিয় অর্ডার ও চালান স্থিতি',
        orderValue: 'অর্ডারের মোট মূল্য',
        farmerProfile: 'কৃষক পরিচিতি',
        mobile: 'মোবাইল নম্বর',
        location: 'অবস্থান',
        verification: 'যাচাইকরণ স্থিতি',
        signOut: '← লগইন পৃষ্ঠায় ফিরে যান',
        homeNav: 'মূলপাতা',
        marketNav: 'বাজার দর',
        sellNav: 'বিক্রি',
        ordersNav: 'অর্ডার',
        profileNav: 'প্রোফাইল',
        voiceAssistant: 'ভয়েস কমান্ড সহকারী',
        voiceAssistantSubtitle: 'বাংলা, ইংরেজি বা হিন্দিতে কথা বলুন',
        tapToTalk: 'কথা বলতে ট্যাপ করুন',
        listening: 'শুনছি...',
        speakPrompt: 'মাইক্রোফোনে ট্যাপ করে বলুন: "টমেটো বিক্রি", "বাজার দর দেখাও", বা "অর্ডার স্থিতি"',
        orTapAction: 'অথবা নিচের বিকল্প স্পর্শ করুন',
        actionPrices: 'আজকের বাজার দর দেখুন',
        actionPricesDesc: 'সরাসরি মান্ডি দর এবং এআই অ্যালার্ট দেখুন',
        actionSell: 'আমার ফসল বিক্রি করব',
        actionSellDesc: 'মাত্র ৩টি সহজ ধাপে ফসল তালিকাভুক্ত করুন',
        actionTrack: 'আমার অর্ডার ট্র্যাক করুন',
        actionTrackDesc: 'গাড়ি এবং ডেলিভারির সঠিক স্থিতি জানুন',
        actionMarket: 'বাজারের চাহিদা তথ্য',
        actionMarketDesc: 'চাহিদার পূর্বাভাস ও ন্যায্য দরের বিশ্লেষণ',
        wizardTitle: 'সরাসরি বিক্রির জন্য ফসল তালিকাভুক্তকরণ',
        stepOf: 'ধাপ {step}/৩ • সরাসরি মান্ডি সংযোগ',
        step1Crop: 'ধাপ ১: ফসল বাছাই করুন',
        continueQuantity: 'পরিমাণ নির্ধারণে এগিয়ে যান',
        step2Quantity: 'ধাপ ২: ফলনের পরিমাণ (কেজি)',
        availableLot: 'মোট মজুত পরিমাণ',
        setQualityPrice: 'মান ও দর নির্ধারণ করুন',
        step3Quality: 'ধাপ ৩: ফসলের গ্রেড, দর ও তারিখ',
        qualityGrade: 'ফসলের মান (গ্রেড)',
        expectedPrice: 'প্রত্যাশিত মূল্য প্রতি কেজি (টাকা)',
        aiMarketRange: 'এআই বাজার সীমার দর: ₹২৮ – ₹৩২ / কেজি',
        expectedHarvestDate: 'ফসল তোলার / চালানের সম্ভাব্য তারিখ',
        back: 'পেছনে',
        submitListing: 'ফসল তালিকাভুক্ত করুন',
        submitting: 'তালিকাভুক্ত করা হচ্ছে...',
        listSuccess: 'ফসল সফলভাবে তালিকাভুক্ত হয়েছে এবং ই-নাম পোর্টালের সাথে সিঙ্ক হয়েছে!',
        voiceAutofillPrompt: 'শুনছি... ফসলের নাম, পরিমাণ বা দর বলুন (যেমন: "৫০০ কেজি ৩২ টাকা")',
        // Consumer Portal Translations (BN)
        buyerTitle: 'সরাসরি কৃষক থেকে ভোক্তা',
        buyerSubtitle: 'যাচাইকৃত কৃষকদের থেকে সরাসরি তাজা ফসল কিনুন।',
        verifiedAggregator: 'যাচাইকৃত ভোক্তা',
        farmEconomicsTitle: 'সরাসরি কৃষক-ভোক্তা সাশ্রয় অর্থনীতি:',
        farmEconomicsDesc: 'ঐতিহ্যবাহী মধ্যস্বত্বভোগী বা দালাল ছাড়া সরাসরি ১৮% – ২৫% সাশ্রয়।',
        runSmartMatchBtn: 'চাহিদা তৈরি করুন ও কৃষক ম্যাচ চালান',
        availableLotsTitle: 'সরাসরি খামারের উপলব্ধ ফসলের লট',
        viewAllLots: 'সব দেখুন',
        browseTitle: 'সকল খামার তালিকা ব্রাউজ করুন',
        procureViaSmartMatch: 'স্মার্ট ম্যাচের মাধ্যমে কিনুন',
        trackOrdersTitle: 'চালান ও অর্ডার ট্র্যাক করুন',
        totalLots: 'মোট',
        quantityLabel: 'পরিমাণ',
        destinationLabel: 'ডেলিভারি ঠিকানা',
        deliveryLabel: 'ডেলিভারি',
        totalProcurementCost: 'মোট ক্রয় ব্যয়',
        middlemenSavings: 'অর্জিত মধ্যস্বত্বভোগী সাশ্রয়',
        buyerProfileTitle: 'ভোক্তা প্রোফাইল',
        entityLabel: 'গ্রাহক নাম',
        buyerEntityValue: 'ব্যক্তিগত ভোক্তা / পরিবার',
        buyerLocationValue: 'সল্টলেক, কলকাতা',
        buyerStatusValue: 'যাচাইকৃত সরাসরি ভোক্তা ✓',
        browseNav: 'ব্রাউজ'
    },
    HI: {
        appTitle: 'फार्म२फ्लो',
        farmerRole: 'किसान',
        buyerRole: 'उपभोक्ता',
        tagline: 'खेत से सीधे आपके घर, स्मार्ट समाधान',
        offlineDraft: 'ऑफलाइन ड्राफ्ट मोड • डेटा कतारबद्ध है',
        onlineSync: 'पीडब्लूए ऑनलाइन • सीधा सिंक सक्रिय',
        goOnline: 'ऑनलाइन जाएं',
        simulateOffline: 'ऑफलाइन टेस्ट करें',
        mandiOpen: 'मंडी: खुली है',
        verifiedFarmer: '✓ नाबार्ड / ई-नाम सत्यापित किसान',
        highDemandOpp: '🌟 उच्च मांग का अवसर',
        demandSurge: '+२१% मांग में बढ़ोतरी',
        tomatoGradeA: 'टमाटर (ग्रेड ए)',
        hybridRedDesc: 'हाइब्रिड लाल • ताजी और तुड़ाई योग्य फसल',
        estimatedFairRate: 'अनुमानित उचित भाव',
        perKg: '/किग्रा',
        aiRecommendation: 'एआई सलाह',
        aiRecText: 'अगले सप्ताह टमाटर की मांग बढ़ सकती है। बेहतर मुनाफे के लिए अधिक आपूर्ति तैयार रखें।',
        listProduceBtn: 'सीधी बिक्री के लिए फसल जोड़ें',
        activeListings: 'सक्रिय फसल सूची',
        confirmedOrders: 'पुष्ट ऑर्डर',
        directToVerified: 'सत्यापित थोक खरीदारों के लिए',
        pickupScheduled: 'पिकअप निर्धारित',
        marketIntel: 'मंडी भाव एवं मांग विश्लेषण',
        currentMandiDemand: 'वर्तमान मंडी मांग',
        forecastDemand: 'अनुमानित मांग',
        directPriceRealization: 'फार्म२फ्लो सीधा भाव लाभ:',
        directPriceDesc: 'किसान को मिलेगा: ₹३०/किग्रा → खरीदार देगा: ₹३५/किग्रा (बिचौलियों का ₹१५/किग्रा मुनाफा खत्म!)',
        cropSelection: 'फसल चुनें:',
        myActiveListings: 'मेरी सक्रिय फसलें',
        listProduce: '+ फसल जोड़ें',
        activeOrdersDispatches: 'सक्रिय ऑर्डर व डिलीवरी स्थिति',
        orderValue: 'ऑर्डर का कुल मूल्य',
        farmerProfile: 'किसान प्रोफाइल',
        mobile: 'मोबाइल नंबर',
        location: 'स्थान',
        verification: 'सत्यापन स्थिति',
        signOut: '← लॉगिन पेज पर वापस जाएं',
        homeNav: 'होम',
        marketNav: 'मंडी भाव',
        sellNav: 'बिक्री',
        ordersNav: 'ऑर्डर',
        profileNav: 'प्रोफाइल',
        voiceAssistant: 'वॉयस कमांड सहायक',
        voiceAssistantSubtitle: 'हिंदी, बंगाली या अंग्रेजी में बोलें',
        tapToTalk: 'बोलने के लिए दबाएं',
        listening: 'सुन रहे हैं...',
        speakPrompt: 'माइक दबाकर बोलें: "टमाटर बेचना है", "भाव बताओ", या "ऑर्डर दिखाओ"',
        orTapAction: 'या नीचे दिए गए विकल्प चुनें',
        actionPrices: 'आज के मंडी भाव देखें',
        actionPricesDesc: 'वास्तविक समय के भाव और एआई अलर्ट देखें',
        actionSell: 'फसल बेचें',
        actionSellDesc: 'केवल ३ आसान चरणों में फसल दर्ज करें',
        actionTrack: 'अपने ऑर्डर ट्रैक करें',
        actionTrackDesc: 'डिलीवरी और वाहन की लाइव स्थिति देखें',
        actionMarket: 'बाजार की मांग जानकारी',
        actionMarketDesc: 'मांग पूर्वानुमान और उचित मूल्य का विश्लेषण',
        wizardTitle: 'सीधी बिक्री हेतु फसल दर्ज करें',
        stepOf: 'चरण {step}/३ • सीधा मंडी मिलान',
        step1Crop: 'चरण १: फसल चुनें',
        continueQuantity: 'मात्रा तय करने आगे बढ़ें',
        step2Quantity: 'चरण २: फसल की मात्रा (किग्रा)',
        availableLot: 'उपलब्ध कुल मात्रा',
        setQualityPrice: 'गुणवत्ता और भाव तय करें',
        step3Quality: 'चरण ३: ग्रेड, भाव और तारीख',
        qualityGrade: 'फसल की गुणवत्ता (ग्रेड)',
        expectedPrice: 'अपेक्षित मूल्य प्रति किग्रा (₹)',
        aiMarketRange: 'एआई मंडी दायरा: ₹२८ – ₹३२ / किग्रा',
        expectedHarvestDate: 'तुड़ाई या भेजने की अनुमानित तारीख',
        back: 'पीछे',
        submitListing: 'फसल दर्ज करें',
        submitting: 'दर्ज किया जा रहा है...',
        listSuccess: 'फसल सफलतापूर्वक दर्ज हो गई है और ई-नाम पोर्टल से सिंक हो चुकी है!',
        voiceAutofillPrompt: 'सुन रहे हैं... फसल का नाम, मात्रा या भाव बोलें (जैसे: "५०० किलो ३२ रुपये")',
        // Consumer Portal Translations (HI)
        buyerTitle: 'सीधी किसान-उपभोक्ता खरीद',
        buyerSubtitle: 'सत्यापित किसानों से सीधे ताजी फसल घर मंगाएं।',
        verifiedAggregator: 'सत्यापित उपभोक्ता',
        farmEconomicsTitle: 'सीधा किसान-उपभोक्ता बचत मॉडल:',
        farmEconomicsDesc: 'बिचौलियों के बिना सीधे खेत से ताजी उपज में १८% – २५% की शुद्ध बचत।',
        runSmartMatchBtn: 'आवश्यकता दर्ज करें व किसान मैच चलाएं',
        availableLotsTitle: 'किसानों द्वारा सीधे उपलब्ध ताजी फसलें',
        viewAllLots: 'सभी फसलें देखें',
        browseTitle: 'सभी कृषि लॉट सूची देखें',
        procureViaSmartMatch: 'स्मार्ट मैच द्वारा ऑर्डर करें',
        trackOrdersTitle: 'डिलीवरी एवं ऑर्डर ट्रैक करें',
        totalLots: 'कुल',
        quantityLabel: 'मात्रा',
        destinationLabel: 'डिलीवरी का पता',
        deliveryLabel: 'डिलीवरी स्थिति',
        totalProcurementCost: 'कुल ऑर्डर लागत',
        middlemenSavings: 'बचत (बिचौलिया कमीशन मुक्त)',
        buyerProfileTitle: 'उपभोक्ता प्रोफाइल',
        entityLabel: 'ग्राहक का नाम',
        buyerEntityValue: 'व्यक्तिगत घरेलू उपभोक्ता',
        buyerLocationValue: 'सॉल्ट लेक, कोलकाता',
        buyerStatusValue: 'सत्यापित उपभोक्ता ग्राहक ✓',
        browseNav: 'ब्राउज़'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/pwa/src/services/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOrderFromMatch",
    ()=>createOrderFromMatch,
    "deleteProduce",
    ()=>deleteProduce,
    "findSmartMatches",
    ()=>findSmartMatches,
    "getDemandForecast",
    ()=>getDemandForecast,
    "getImpactMetrics",
    ()=>getImpactMetrics,
    "getLogisticsOptimization",
    ()=>getLogisticsOptimization,
    "getOrders",
    ()=>getOrders,
    "getPriceEstimate",
    ()=>getPriceEstimate,
    "getRegisteredAccounts",
    ()=>getRegisteredAccounts,
    "getStoredProduce",
    ()=>getStoredProduce,
    "registerNewAccount",
    ()=>registerNewAccount,
    "saveProduce",
    ()=>saveProduce,
    "syncRegisteredAccountsFromBackend",
    ()=>syncRegisteredAccountsFromBackend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/src/data/mockData.ts [app-client] (ecmascript)");
;
// Browser storage fallback for PWA offline execution
const STORAGE_KEYS = {
    PRODUCE: 'farm2flow_produce_items',
    ORDERS: 'farm2flow_orders',
    PENDING_SYNC: 'farm2flow_pending_sync',
    REGISTERED_USERS: 'farm2flow_registered_users_db'
};
const getRegisteredAccounts = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const stored = localStorage.getItem(STORAGE_KEYS.REGISTERED_USERS);
    if (!stored) return [];
    try {
        return JSON.parse(stored);
    } catch  {
        return [];
    }
};
const syncRegisteredAccountsFromBackend = async ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const res = await fetch('http://localhost:8000/api/users', {
            cache: 'no-store'
        });
        if (res.ok) {
            const serverUsers = await res.json();
            if (Array.isArray(serverUsers) && serverUsers.length > 0) {
                const localAccounts = getRegisteredAccounts();
                const mergedMap = new Map();
                localAccounts.forEach((u)=>mergedMap.set(u.phone, u));
                serverUsers.forEach((u)=>{
                    mergedMap.set(u.phone, {
                        id: u.id,
                        name: u.name,
                        address: u.address,
                        location: u.location || (u.address.includes(',') ? u.address.split(',').slice(-2, -1)[0].trim() : u.address),
                        dob: u.dob || '1995-01-01',
                        phone: u.phone,
                        role: u.role || 'buyer',
                        email: u.email,
                        createdAt: u.created_at || new Date().toISOString()
                    });
                });
                const mergedList = Array.from(mergedMap.values());
                localStorage.setItem(STORAGE_KEYS.REGISTERED_USERS, JSON.stringify(mergedList));
                window.dispatchEvent(new CustomEvent('farm2flow_accounts_updated', {
                    detail: {
                        allAccounts: mergedList
                    }
                }));
                return mergedList;
            }
        }
    } catch  {}
    return getRegisteredAccounts();
};
const registerNewAccount = async (account)=>{
    const newAccount = {
        ...account,
        id: `usr-${Date.now().toString().slice(-5)}`,
        location: account.address.includes(',') ? account.address.split(',').slice(-2, -1)[0].trim() : account.address,
        createdAt: new Date().toISOString()
    };
    // 1. Save in local browser storage
    if ("TURBOPACK compile-time truthy", 1) {
        const existing = getRegisteredAccounts();
        const updated = [
            newAccount,
            ...existing.filter((u)=>u.phone !== account.phone && (!account.email || u.email !== account.email))
        ];
        localStorage.setItem(STORAGE_KEYS.REGISTERED_USERS, JSON.stringify(updated));
        window.dispatchEvent(new CustomEvent('farm2flow_accounts_updated', {
            detail: {
                newAccount,
                allAccounts: updated
            }
        }));
    }
    // 2. Sync in background with backend API server if available
    try {
        fetch('http://localhost:8000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(account)
        }).catch(()=>{});
    } catch  {}
    return newAccount;
};
const getStoredProduce = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const stored = localStorage.getItem(STORAGE_KEYS.PRODUCE);
    if (!stored) {
        localStorage.setItem(STORAGE_KEYS.PRODUCE, JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialProduceList"]));
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialProduceList"];
    }
    try {
        return JSON.parse(stored);
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialProduceList"];
    }
};
const saveProduce = (newProduce)=>{
    const current = getStoredProduce();
    const created = {
        ...newProduce,
        id: `prod-${Date.now().toString().slice(-4)}`,
        createdAt: new Date().toISOString()
    };
    const updated = [
        created,
        ...current
    ];
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.setItem(STORAGE_KEYS.PRODUCE, JSON.stringify(updated));
        // Broadcast real-time event across tabs/components
        window.dispatchEvent(new CustomEvent('farm2flow_produce_updated', {
            detail: {
                newProduce: created,
                produceList: updated
            }
        }));
        // If offline, flag for sync
        if (!navigator.onLine) {
            const syncQueue = JSON.parse(localStorage.getItem(STORAGE_KEYS.PENDING_SYNC) || '[]');
            syncQueue.push({
                type: 'CREATE_PRODUCE',
                payload: created,
                timestamp: Date.now()
            });
            localStorage.setItem(STORAGE_KEYS.PENDING_SYNC, JSON.stringify(syncQueue));
        }
    }
    return created;
};
const deleteProduce = (produceId)=>{
    const current = getStoredProduce();
    const updated = current.filter((p)=>p.id !== produceId);
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.setItem(STORAGE_KEYS.PRODUCE, JSON.stringify(updated));
        // Broadcast real-time event across tabs/components
        window.dispatchEvent(new CustomEvent('farm2flow_produce_updated', {
            detail: {
                deletedProduceId: produceId,
                produceList: updated
            }
        }));
        // If offline, flag for sync
        if (!navigator.onLine) {
            const syncQueue = JSON.parse(localStorage.getItem(STORAGE_KEYS.PENDING_SYNC) || '[]');
            syncQueue.push({
                type: 'DELETE_PRODUCE',
                payload: {
                    id: produceId
                },
                timestamp: Date.now()
            });
            localStorage.setItem(STORAGE_KEYS.PENDING_SYNC, JSON.stringify(syncQueue));
        }
    }
    return updated;
};
const getDemandForecast = (cropName)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockForecasts"][cropName] || {
        cropName,
        currentDemandTonnes: 15.0,
        forecastDemandTonnes: 18.2,
        percentageChange: 18,
        confidencePct: 85,
        mandiLocation: 'Regional Central Mandi',
        recommendation: `${cropName} shows strong demand signals in nearby markets.`,
        trend: 'up'
    };
};
const getPriceEstimate = (cropName, location = 'Hooghly')=>{
    const isTomato = cropName.toLowerCase().includes('tomato');
    const isPotato = cropName.toLowerCase().includes('potato');
    if (isTomato) {
        return {
            cropName: 'Tomato',
            location,
            currentMin: 24,
            currentMax: 26,
            suggestedMin: 28,
            suggestedMax: 32,
            historicalAvg: 22,
            confidence: 89
        };
    } else if (isPotato) {
        return {
            cropName: 'Potato',
            location,
            currentMin: 15,
            currentMax: 17,
            suggestedMin: 18,
            suggestedMax: 21,
            historicalAvg: 14,
            confidence: 93
        };
    }
    return {
        cropName,
        location,
        currentMin: 30,
        currentMax: 34,
        suggestedMin: 36,
        suggestedMax: 40,
        historicalAvg: 28,
        confidence: 82
    };
};
const findSmartMatches = (cropName, requiredKg)=>{
    const availableList = getStoredProduce().filter((p)=>p.cropName.toLowerCase() === cropName.toLowerCase() && p.status === 'Available');
    let fulfilled = 0;
    const suppliersMatched = [];
    for (const item of availableList){
        if (fulfilled >= requiredKg) break;
        const needed = requiredKg - fulfilled;
        const takenKg = Math.min(item.quantityKg, needed);
        fulfilled += takenKg;
        suppliersMatched.push({
            produceId: item.id,
            farmerName: item.farmerName,
            farmerLocation: item.farmerLocation,
            availableKg: item.quantityKg,
            matchedKg: takenKg,
            grade: item.grade,
            pricePerKg: item.expectedPricePerKg,
            distanceKm: item.farmerLocation.includes('Singur') ? 18 : item.farmerLocation.includes('Barasat') ? 24 : item.farmerLocation.includes('Hooghly') ? 32 : 45,
            matchPercentage: item.fpoVerified ? 96 : 89,
            verified: item.fpoVerified
        });
    }
    const totalCost = suppliersMatched.reduce((acc, s)=>acc + s.matchedKg * s.pricePerKg, 0);
    return {
        requirementId: `req-${Date.now()}`,
        cropName,
        requestedKg: requiredKg,
        fulfilledKg: fulfilled,
        overallMatchPct: suppliersMatched.length > 0 ? 94 : 0,
        suppliers: suppliersMatched,
        estimatedTotalCost: totalCost,
        savingsVsMiddlemenPct: 18
    };
};
const createOrderFromMatch = (matchResult, buyerName = 'Kolkata Wholesale Mandi', paymentMethod = 'Cash on Delivery', destination = 'Salt Lake, Kolkata')=>{
    const newOrder = {
        id: `ord-${Date.now()}`,
        orderNumber: `FF-${Math.floor(1000 + Math.random() * 9000)}`,
        buyerId: 'b-201',
        buyerName,
        destination,
        items: matchResult.suppliers.map((s)=>({
                produceId: s.produceId,
                farmerName: s.farmerName,
                cropName: `${matchResult.cropName} (${s.grade})`,
                quantityKg: s.matchedKg,
                pricePerKg: s.pricePerKg,
                subtotal: s.matchedKg * s.pricePerKg
            })),
        totalQuantityKg: matchResult.fulfilledKg,
        totalAmount: matchResult.estimatedTotalCost,
        savingsRealized: Math.round(matchResult.estimatedTotalCost * 0.18),
        status: 'Confirmed',
        expectedDelivery: 'Tomorrow, 2:30 PM',
        createdAt: new Date().toISOString(),
        routeId: 'route-opt-101',
        paymentMethod,
        paymentStatus: paymentMethod === 'Cash on Delivery' ? 'Pending Cash on Delivery' : 'Paid'
    };
    if ("TURBOPACK compile-time truthy", 1) {
        const existingOrders = JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS) || JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialOrders"]));
        localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify([
            newOrder,
            ...existingOrders
        ]));
    }
    return newOrder;
};
const getOrders = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const stored = localStorage.getItem(STORAGE_KEYS.ORDERS);
    if (!stored) return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialOrders"];
    try {
        return JSON.parse(stored);
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialOrders"];
    }
};
const getLogisticsOptimization = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockLogisticsData"];
};
const getImpactMetrics = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockImpactMetrics"];
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_pwa_src_0rzj13t._.js.map