(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/pwa/src/app/buyer/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BuyerPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$components$2f$BuyerSmartMatchModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$components$2f$InDriveMapModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/src/components/InDriveMapModal.tsx [app-client] (ecmascript)");
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
    const [buyerName, setBuyerName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Kolkata Wholesale Mandi');
    const [buyerLocation, setBuyerLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Posta Mandi, Kolkata');
    const [buyerAddress, setBuyerAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Posta Wholesale Hub, Strand Road, Kolkata - 700007');
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
        }
    }["BuyerPage.useEffect"], []);
    const handleOrderCreated = (newOrder)=>{
        setOrdersList((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrders"])());
        setBuyerTab('orders');
    };
    const filteredProduce = selectedCropFilter === 'All' ? produceList : produceList.filter((p)=>p.cropName.toLowerCase() === selectedCropFilter.toLowerCase());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-surface text-on-surface antialiased min-h-screen pb-28 font-sans",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[430px] mx-auto min-h-screen bg-surface flex flex-col relative shadow-md border-x border-outline-variant",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "bg-surface border-b border-outline-variant sticky top-0 z-40",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center w-full px-4 h-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-[24px]",
                                            children: "storefront"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[17px] font-extrabold text-primary leading-tight",
                                                        children: t.appTitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] bg-secondary-container text-on-secondary-container font-bold px-1.5 py-0.2 rounded",
                                                        children: t.buyerRole
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-on-surface-variant font-bold",
                                                children: t.buyerTitle
                                            }, void 0, false, {
                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-surface-container-high rounded-full p-0.5 flex text-[11px] border border-outline-variant font-bold shadow-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setLanguage('EN'),
                                            className: `px-2 py-0.5 rounded-full transition-all ${language === 'EN' ? 'bg-primary-container text-on-primary font-bold shadow-xs' : 'text-on-surface-variant'}`,
                                            children: "EN"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setLanguage('BN'),
                                            className: `px-2 py-0.5 rounded-full transition-all ${language === 'BN' ? 'bg-primary-container text-on-primary font-bold shadow-xs' : 'text-on-surface-variant'}`,
                                            children: "বাংলা"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setLanguage('HI'),
                                            className: `px-2 py-0.5 rounded-full transition-all ${language === 'HI' ? 'bg-primary-container text-on-primary font-bold shadow-xs' : 'text-on-surface-variant'}`,
                                            children: "हिन्दी"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "bg-surface-container-low px-4 py-2 flex items-center justify-between border-b border-outline-variant text-[11px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsMapOpen(true),
                            className: "flex items-center gap-1.5 font-bold text-on-surface hover:text-primary transition-colors text-left max-w-[280px]",
                            title: "Open Interactive Map (InDrive style)",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-[18px] text-secondary animate-pulse",
                                    children: "location_on"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate underline decoration-dotted",
                                    children: buyerLocation
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] bg-secondary/15 text-secondary px-1.5 py-0.5 rounded-md uppercase font-extrabold shrink-0",
                                    children: "Map"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-surface-container-lowest px-2 py-0.5 rounded-full border border-outline-variant font-bold text-emerald-700 shrink-0",
                            children: t.verifiedAggregator
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                    lineNumber: 103,
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
                                                            lineNumber: 126,
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
                                                            lineNumber: 127,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-full bg-secondary-fixed text-secondary font-extrabold flex items-center justify-center border border-secondary text-sm",
                                                    children: buyerName.split(' ').map((w)=>w[0]).join('').slice(0, 2).toUpperCase() || 'BY'
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 124,
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
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-emerald-800 mt-0.5",
                                                    children: t.farmEconomicsDesc
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 text-white p-4 rounded-2xl border border-emerald-700/50 shadow-lg flex flex-col gap-3 relative overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -right-6 -bottom-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 141,
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
                                                                    lineNumber: 145,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[11px] font-extrabold uppercase tracking-wider text-emerald-300",
                                                                    children: "National Sourcing Radar"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                                    lineNumber: 146,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] bg-emerald-500/20 text-emerald-200 px-2 py-0.5 rounded-full font-bold border border-emerald-400/30",
                                                            children: "All-India Mandis"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 143,
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
                                                                    lineNumber: 157,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[18px]",
                                                                    children: "🗺️"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-emerald-200/90 mt-0.5 font-medium",
                                                            children: "Filter by crop to view verified farmers, live farm-gate prices & direct transit routes to your receiving depot."
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-[11px]",
                                                    children: [
                                                        'Tomato',
                                                        'Potato',
                                                        'Onion',
                                                        'Wheat',
                                                        'Chilli'
                                                    ].map((crop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setSelectedMapCrop(crop);
                                                                setIsSellerMapOpen(true);
                                                            },
                                                            className: "px-2.5 py-1 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100 font-bold border border-emerald-600/40 whitespace-nowrap active:scale-95 transition-all shadow-xs",
                                                            children: [
                                                                crop === 'Tomato' && '🍅 ',
                                                                crop === 'Potato' && '🥔 ',
                                                                crop === 'Onion' && '🧅 ',
                                                                crop === 'Wheat' && '🌾 ',
                                                                crop === 'Chilli' && '🌶️ ',
                                                                crop
                                                            ]
                                                        }, crop, true, {
                                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 166,
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
                                                            lineNumber: 193,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Open Whole Country Sellers Map"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 140,
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
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t.runSmartMatchBtn
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 123,
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
                                                    lineNumber: 210,
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
                                                    lineNumber: 211,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 209,
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
                                                                        lineNumber: 223,
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
                                                                        lineNumber: 224,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                                lineNumber: 222,
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
                                                                lineNumber: 226,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 221,
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
                                                                lineNumber: 231,
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
                                                                lineNumber: 232,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                            lineNumber: 121,
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
                                            lineNumber: 243,
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
                                                            lineNumber: 253,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "View Map"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                            lineNumber: 254,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-1",
                                                    children: [
                                                        'All',
                                                        'Tomato',
                                                        'Potato'
                                                    ].map((crop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setSelectedCropFilter(crop),
                                                            className: `px-2.5 py-1 rounded-lg text-[11px] font-bold ${selectedCropFilter === crop ? 'bg-primary-container text-on-primary' : 'bg-surface-container-high text-on-surface-variant'}`,
                                                            children: crop
                                                        }, crop, false, {
                                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 242,
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
                                                                lineNumber: 276,
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
                                                                lineNumber: 277,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-emerald-100 text-primary-container px-2 py-0.5 rounded-full text-[11px] font-bold",
                                                        children: item.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                lineNumber: 274,
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
                                                        lineNumber: 284,
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
                                                        lineNumber: 285,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                lineNumber: 283,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsSmartMatchOpen(true),
                                                className: "w-full py-2 bg-surface-container-high hover:bg-surface-container-highest rounded-lg text-[12px] font-bold text-primary flex items-center justify-center gap-1 transition-colors mt-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t.procureViaSmartMatch
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                lineNumber: 287,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                        lineNumber: 273,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                            lineNumber: 241,
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
                                            lineNumber: 301,
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
                                            lineNumber: 302,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 300,
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
                                                        lineNumber: 307,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full text-[11px] font-bold",
                                                        children: ord.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                lineNumber: 306,
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
                                                                lineNumber: 311,
                                                                columnNumber: 24
                                                            }, this),
                                                            " ",
                                                            ord.totalQuantityKg,
                                                            " kg"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 311,
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
                                                                lineNumber: 312,
                                                                columnNumber: 24
                                                            }, this),
                                                            " ",
                                                            ord.destination
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 312,
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
                                                                lineNumber: 313,
                                                                columnNumber: 24
                                                            }, this),
                                                            " ",
                                                            ord.expectedDelivery
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                lineNumber: 310,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center text-[13px] font-bold text-on-surface pt-2 border-t border-outline-variant",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t.totalProcurementCost
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                        lineNumber: 316,
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
                                                        lineNumber: 317,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                                lineNumber: 315,
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
                                                lineNumber: 320,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, ord.id, true, {
                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                        lineNumber: 305,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                            lineNumber: 299,
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
                                    lineNumber: 331,
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
                                            lineNumber: 332,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        buyerName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 332,
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
                                            lineNumber: 333,
                                            columnNumber: 18
                                        }, this),
                                        " +91 98300 12345"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 333,
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
                                            lineNumber: 334,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        buyerLocation
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 334,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Address:"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                            lineNumber: 335,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        buyerAddress
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 335,
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
                                            lineNumber: 336,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        t.buyerStatusValue
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 336,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-2 border-t border-outline-variant",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "text-secondary font-bold hover:underline block py-1",
                                        children: t.signOut
                                    }, void 0, false, {
                                        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                        lineNumber: 338,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 337,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                            lineNumber: 330,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-surface-container-lowest border-t border-outline-variant grid grid-cols-4 text-[10px] font-bold text-center py-2 z-40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setBuyerTab('home'),
                            className: buyerTab === 'home' ? 'text-primary' : 'text-on-surface-variant',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined block text-[20px]",
                                    children: "home"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 349,
                                    columnNumber: 13
                                }, this),
                                t.homeNav
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                            lineNumber: 348,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setBuyerTab('browse'),
                            className: buyerTab === 'browse' ? 'text-primary' : 'text-on-surface-variant',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined block text-[20px]",
                                    children: "search"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, this),
                                t.browseNav
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                            lineNumber: 351,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setBuyerTab('orders'),
                            className: buyerTab === 'orders' ? 'text-primary' : 'text-on-surface-variant',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined block text-[20px]",
                                    children: "local_shipping"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 355,
                                    columnNumber: 13
                                }, this),
                                t.ordersNav
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                            lineNumber: 354,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setBuyerTab('profile'),
                            className: buyerTab === 'profile' ? 'text-primary' : 'text-on-surface-variant',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined block text-[20px]",
                                    children: "person"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                                    lineNumber: 358,
                                    columnNumber: 13
                                }, this),
                                t.profileNav
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                            lineNumber: 357,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                    lineNumber: 347,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$components$2f$BuyerSmartMatchModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuyerSmartMatchModal"], {
                    isOpen: isSmartMatchOpen,
                    onClose: ()=>setIsSmartMatchOpen(false),
                    onOrderCreated: handleOrderCreated
                }, void 0, false, {
                    fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
                    lineNumber: 363,
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
                    lineNumber: 370,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/pwa/src/app/buyer/page.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(BuyerPage, "Df2jGuGWqelWOq99OJwyu65fHC4=");
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
;
var _s = __turbopack_context__.k.signature();
;
;
const BuyerSmartMatchModal = ({ isOpen, onClose, onOrderCreated })=>{
    _s();
    const [crop, setCrop] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('Tomato');
    const [requiredKg, setRequiredKg] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(50);
    const [matchResult, setMatchResult] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [isSearching, setIsSearching] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [isCreatingOrder, setIsCreatingOrder] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    if (!isOpen) return null;
    const handleSearchMatch = ()=>{
        setIsSearching(true);
        setTimeout(()=>{
            const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSmartMatches"])(crop, requiredKg);
            setMatchResult(res);
            setIsSearching(false);
        }, 500);
    };
    const handleCreateOrder = ()=>{
        if (!matchResult) return;
        setIsCreatingOrder(true);
        setTimeout(()=>{
            const createdOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOrderFromMatch"])(matchResult);
            setIsCreatingOrder(false);
            onOrderCreated(createdOrder);
            onClose();
        }, 600);
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
                                    children: "Buyer Smart Matching Engine"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-body-sm text-[12px] text-on-surface-variant",
                                    children: "Automated multi-supplier crop aggregation"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined text-[20px]",
                                children: "close"
                            }, void 0, false, {
                                fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant flex flex-col gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-body-sm text-[12px] text-on-surface-variant",
                                    children: "Crop Required"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: crop,
                                    onChange: (e)=>setCrop(e.target.value),
                                    className: "w-full mt-1 px-3 py-2 bg-surface-container-low border border-outline-variant rounded-lg font-bold text-on-surface",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Tomato",
                                            children: "Tomato (Grade A)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Potato",
                                            children: "Potato (Jyoti)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Onion",
                                            children: "Onion (Nashik)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                            lineNumber: 61,
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
                                            lineNumber: 76,
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
                                                    onChange: (e)=>setRequiredKg(Math.max(2, Number(e.target.value))),
                                                    className: "w-20 px-2 py-1 bg-surface-container border border-outline-variant rounded-lg font-extrabold text-primary text-right text-[14px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-primary",
                                                    children: "kg"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: "2",
                                    max: "5000",
                                    step: "1",
                                    value: requiredKg,
                                    onChange: (e)=>setRequiredKg(Number(e.target.value)),
                                    className: "w-full mt-2 h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between text-[10px] text-on-surface-variant font-bold mt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "2 kg (Retail / Min)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "250 kg"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "1,000 kg"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "5,000 kg (Bulk)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSearchMatch,
                            disabled: isSearching,
                            className: "w-full py-2.5 bg-primary-container text-on-primary rounded-xl text-label-md font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2",
                            children: isSearching ? 'Analyzing Local Mandis...' : 'Run Smart Match'
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                    lineNumber: 60,
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
                                            lineNumber: 121,
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
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-label-sm font-bold text-secondary bg-surface px-2 py-0.5 rounded-md",
                                    children: "18% Savings"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                            lineNumber: 119,
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
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                matchResult.suppliers.map((s, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        lineNumber: 135,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-label-md font-bold text-on-surface leading-tight",
                                                                children: s.farmerName
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                                lineNumber: 139,
                                                                columnNumber: 23
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
                                                                lineNumber: 140,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                lineNumber: 134,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-label-md font-extrabold text-primary-container",
                                                children: [
                                                    s.matchedKg,
                                                    " kg"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                            lineNumber: 130,
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
                                            lineNumber: 153,
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
                                            lineNumber: 154,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 152,
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
                                            lineNumber: 157,
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
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCreateOrder,
                            disabled: isCreatingOrder,
                            className: "w-full py-3.5 bg-primary-container text-on-primary rounded-xl text-label-md font-extrabold hover:bg-primary transition-all shadow-md active:scale-95 flex items-center justify-center gap-2",
                            children: isCreatingOrder ? 'Creating Direct Order...' : 'Create Order & Dispatch Logistics'
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/pwa/src/components/BuyerSmartMatchModal.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BuyerSmartMatchModal, "7/YEL3lJ2WBu/L2NHrmNdBEoh/s=");
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
            name: 'Posta Mandi, Kolkata',
            address: 'Posta Wholesale Market, Strand Road, Kolkata - 700007',
            lat: 22.5852,
            lng: 88.3563
        },
        {
            name: 'Koley Market, Sealdah',
            address: 'Koley Market Complex, Sealdah, Kolkata - 700014',
            lat: 22.5697,
            lng: 88.3712
        },
        {
            name: 'Mechua Fruit & Veg Mandi',
            address: 'Mechua Bazaar, Central Avenue, Kolkata - 700073',
            lat: 22.5815,
            lng: 88.3610
        },
        {
            name: 'Howrah Wholesale Hub',
            address: 'Fish & Produce Yard, Howrah Station Road, Howrah',
            lat: 22.5892,
            lng: 88.3415
        },
        {
            name: 'Salt Lake Sector V Depot',
            address: 'Central Procurement Hub, Sector V, Bidhannagar',
            lat: 22.5785,
            lng: 88.4325
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
        farmerName: 'Farmer A (Ramesh Ghosh)',
        farmerLocation: 'Hooghly (32 km)',
        cropName: 'Tomato',
        variety: 'Hybrid Red',
        grade: 'Grade A',
        quantityKg: 800,
        expectedPricePerKg: 30,
        marketSuggestedPriceMin: 28,
        marketSuggestedPriceMax: 32,
        harvestDate: '2026-09-04',
        demandStatus: 'High',
        demandForecastPct: 18,
        status: 'Available',
        fpoVerified: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 'prod-002',
        farmerId: 'f-102',
        farmerName: 'Farmer B (Suhas Biswas)',
        farmerLocation: 'Barasat (24 km)',
        cropName: 'Tomato',
        variety: 'Roma Organic',
        grade: 'Grade A',
        quantityKg: 500,
        expectedPricePerKg: 29,
        marketSuggestedPriceMin: 28,
        marketSuggestedPriceMax: 32,
        harvestDate: '2026-09-04',
        demandStatus: 'High',
        demandForecastPct: 18,
        status: 'Available',
        fpoVerified: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 'prod-003',
        farmerId: 'f-103',
        farmerName: 'FPO C (Hooghly Agri Collective)',
        farmerLocation: 'Singur (18 km)',
        cropName: 'Tomato',
        variety: 'Desi Hybrid',
        grade: 'Grade A',
        quantityKg: 400,
        expectedPricePerKg: 28,
        marketSuggestedPriceMin: 28,
        marketSuggestedPriceMax: 32,
        harvestDate: '2026-09-03',
        demandStatus: 'High',
        demandForecastPct: 18,
        status: 'Available',
        fpoVerified: true,
        createdAt: new Date().toISOString()
    },
    {
        id: 'prod-004',
        farmerId: 'f-104',
        farmerName: 'Farmer D (Bimal Halder)',
        farmerLocation: 'Tarakeswar (45 km)',
        cropName: 'Tomato',
        variety: 'Red Globe',
        grade: 'Grade A',
        quantityKg: 300,
        expectedPricePerKg: 31,
        marketSuggestedPriceMin: 28,
        marketSuggestedPriceMax: 32,
        harvestDate: '2026-09-05',
        demandStatus: 'High',
        demandForecastPct: 18,
        status: 'Available',
        fpoVerified: false,
        createdAt: new Date().toISOString()
    },
    {
        id: 'prod-005',
        farmerId: 'f-101',
        farmerName: 'Ramesh Ghosh',
        farmerLocation: 'Hooghly (32 km)',
        cropName: 'Potato',
        variety: 'Jyoti',
        grade: 'Grade A',
        quantityKg: 1200,
        expectedPricePerKg: 18,
        marketSuggestedPriceMin: 16,
        marketSuggestedPriceMax: 20,
        harvestDate: '2026-09-02',
        demandStatus: 'Steady',
        demandForecastPct: 5,
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
        buyerRole: 'Buyer',
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
        // Buyer Portal Translations
        buyerTitle: 'Wholesale Procurement',
        buyerSubtitle: 'Procure directly from verified Hooghly & Bengal farmers.',
        verifiedAggregator: 'Verified Aggregator',
        farmEconomicsTitle: 'Direct Farm-to-Buyer Economics:',
        farmEconomicsDesc: 'Average savings realized: 18% – 25% compared to traditional multi-tier middlemen mandis.',
        runSmartMatchBtn: 'Create Requirement & Run Smart Match',
        availableLotsTitle: 'Available Direct Farm Lots',
        viewAllLots: 'View All',
        browseTitle: 'Browse All Farm Listings',
        procureViaSmartMatch: 'Procure via Smart Match',
        trackOrdersTitle: 'Track Dispatches & Orders',
        totalLots: 'Total',
        quantityLabel: 'Quantity',
        destinationLabel: 'Destination',
        deliveryLabel: 'Delivery',
        totalProcurementCost: 'Total Procurement Cost',
        middlemenSavings: 'Realized Middlemen Savings',
        buyerProfileTitle: 'Buyer Profile',
        entityLabel: 'Entity',
        buyerEntityValue: 'Kolkata Wholesale Mandi Aggregator',
        buyerLocationValue: 'Posta Mandi, Kolkata',
        buyerStatusValue: 'Verified Wholesale Buyer ✓',
        browseNav: 'Browse'
    },
    BN: {
        appTitle: 'ফার্ম২ফ্লো',
        farmerRole: 'কৃষক',
        buyerRole: 'ক্রেতা',
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
        // Buyer Portal Translations (BN)
        buyerTitle: 'পাইকারি ক্রয় ও সংগ্ৰহ',
        buyerSubtitle: 'হুগলি ও বাংলার যাচাইকৃত কৃষকদের থেকে সরাসরি ফসল কিনুন।',
        verifiedAggregator: 'যাচাইকৃত সংগ্রাহক',
        farmEconomicsTitle: 'সরাসরি কৃষক-ক্রেতা সাশ্রয় অর্থনীতি:',
        farmEconomicsDesc: 'ঐতিহ্যবাহী বহুস্তরের দালাল মণ্ডির তুলনায় গড়ে ১৮% – ২৫% সাশ্রয়।',
        runSmartMatchBtn: 'চাহিদা তৈরি করুন ও স্মার্ট ম্যাচ চালান',
        availableLotsTitle: 'সরাসরি খামারের উপলব্ধ ফসলের লট',
        viewAllLots: 'সব দেখুন',
        browseTitle: 'সকল খামার তালিকা ব্রাউজ করুন',
        procureViaSmartMatch: 'স্মার্ট ম্যাচের মাধ্যমে কিনুন',
        trackOrdersTitle: 'চালান ও অর্ডার ট্র্যাক করুন',
        totalLots: 'মোট',
        quantityLabel: 'পরিমাণ',
        destinationLabel: 'গন্তব্য',
        deliveryLabel: 'ডেলিভারি',
        totalProcurementCost: 'মোট ক্রয় ব্যয়',
        middlemenSavings: 'অর্জিত মধ্যস্বত্বভোগী সাশ্রয়',
        buyerProfileTitle: 'ক্রেতা প্রোফাইল',
        entityLabel: 'প্রতিষ্ঠান',
        buyerEntityValue: 'কলকাতা পাইকারি মান্ডি সংগ্রাহক',
        buyerLocationValue: 'পোস্তা মান্ডি, কলকাতা',
        buyerStatusValue: 'যাচাইকৃত পাইকারি ক্রেতা ✓',
        browseNav: 'ব্রাউজ'
    },
    HI: {
        appTitle: 'फार्म२फ्लो',
        farmerRole: 'किसान',
        buyerRole: 'खरीदार',
        tagline: 'खेत से सीधे मंडी तक, स्मार्ट समाधान',
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
        // Buyer Portal Translations (HI)
        buyerTitle: 'थोक खरीद एवं संग्रह',
        buyerSubtitle: 'हुगली एवं बंगाल के सत्यापित किसानों से सीधे फसल खरीदें।',
        verifiedAggregator: 'सत्यापित खरीदार / संग्रहकर्ता',
        farmEconomicsTitle: 'सीधा किसान-खरीदार बचत मॉडल:',
        farmEconomicsDesc: 'पारंपरिक बिचौलिया मंडियों की तुलना में औसतन १८% – २५% की शुद्ध बचत।',
        runSmartMatchBtn: 'आवश्यकता दर्ज करें व स्मार्ट मैच चलाएं',
        availableLotsTitle: 'उपलब्ध प्रत्यक्ष कृषि लॉट',
        viewAllLots: 'सभी देखें',
        browseTitle: 'सभी कृषि लॉट सूची देखें',
        procureViaSmartMatch: 'स्मार्ट मैच द्वारा खरीदें',
        trackOrdersTitle: 'डिलीवरी एवं ऑर्डर ट्रैक करें',
        totalLots: 'कुल',
        quantityLabel: 'मात्रा',
        destinationLabel: 'गंतव्य',
        deliveryLabel: 'डिलीवरी',
        totalProcurementCost: 'कुल खरीद लागत',
        middlemenSavings: 'प्राप्त बिचौलिया बचत',
        buyerProfileTitle: 'खरीदार प्रोफाइल',
        entityLabel: 'संस्था',
        buyerEntityValue: 'कोलकाता थोक मंडी एग्रीगेटर',
        buyerLocationValue: 'पोस्ता मंडी, कोलकाता',
        buyerStatusValue: 'सत्यापित थोक खरीदार ✓',
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
    "getStoredProduce",
    ()=>getStoredProduce,
    "saveProduce",
    ()=>saveProduce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/src/data/mockData.ts [app-client] (ecmascript)");
;
// Browser storage fallback for PWA offline execution
const STORAGE_KEYS = {
    PRODUCE: 'farm2flow_produce_items',
    ORDERS: 'farm2flow_orders',
    PENDING_SYNC: 'farm2flow_pending_sync'
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
const createOrderFromMatch = (matchResult, buyerName = 'Kolkata Wholesale Mandi')=>{
    const newOrder = {
        id: `ord-${Date.now()}`,
        orderNumber: `FF-${Math.floor(1000 + Math.random() * 9000)}`,
        buyerId: 'b-201',
        buyerName,
        destination: 'Posta Mandi, Kolkata',
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
        routeId: 'route-opt-101'
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

//# sourceMappingURL=apps_pwa_src_1kmks2h._.js.map