(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/pwa/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FarmerPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$components$2f$PredefinedHelpModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/src/components/PredefinedHelpModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$components$2f$ListProduceWizard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/src/components/ListProduceWizard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function FarmerPage() {
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('EN');
    const [isOfflineSim, setIsOfflineSim] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [offlineNotice, setOfflineNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // App Data States
    const [produceList, setProduceList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [ordersList, setOrdersList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCrop, setSelectedCrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Tomato');
    // Modal Visibility States
    const [isHelpOpen, setIsHelpOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isListWizardOpen, setIsListWizardOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Active Bottom Navigation Tab for Farmer
    const [farmerTab, setFarmerTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('home');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FarmerPage.useEffect": ()=>{
            setProduceList((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredProduce"])());
            setOrdersList((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrders"])());
        }
    }["FarmerPage.useEffect"], []);
    const handleProduceCreated = (newProduce)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveProduce"])(newProduce);
        setProduceList((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStoredProduce"])());
        if (isOfflineSim) {
            setOfflineNotice("Saved locally. Will sync when network is restored.");
            setTimeout(()=>setOfflineNotice(''), 4000);
        }
    };
    const forecast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDemandForecast"])(selectedCrop);
    const priceEst = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPriceEstimate"])(selectedCrop);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-surface text-on-surface antialiased min-h-screen pb-28 font-sans",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[430px] mx-auto min-h-screen bg-surface flex flex-col relative shadow-md border-x border-outline-variant",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `px-4 py-2 text-[11px] font-bold flex items-center justify-between transition-colors ${isOfflineSim ? 'bg-amber-100 text-amber-900 border-b border-amber-300' : 'bg-secondary-fixed text-on-secondary-fixed-variant'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `inline-block w-2.5 h-2.5 rounded-full ${isOfflineSim ? 'bg-amber-600' : 'bg-emerald-600 animate-pulse'}`
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isOfflineSim ? "Offline Draft Mode • Changes Queued" : "PWA Online • Direct Sync Active"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsOfflineSim(!isOfflineSim),
                            className: "underline hover:opacity-80 text-[11px]",
                            children: isOfflineSim ? 'Go Online' : 'Simulate Offline'
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                offlineNotice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-emerald-700 text-white px-4 py-2 text-[12px] font-bold text-center animate-in slide-in-from-top duration-300",
                    children: offlineNotice
                }, void 0, false, {
                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "bg-surface border-b border-outline-variant sticky top-0 z-40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center w-full px-4 h-14",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-lg bg-primary-container text-primary-fixed flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-[24px]",
                                                children: "agriculture"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 77,
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
                                                            children: "Farm2Flow"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] bg-primary-container text-on-primary font-bold px-1.5 py-0.2 rounded",
                                                            children: "Farmer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-on-surface-variant font-bold",
                                                    children: "From Farm to Market, Smarter"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-surface-container-high rounded-full p-0.5 flex text-[11px] border border-outline-variant font-bold",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setLanguage('EN'),
                                                    className: `px-2 py-0.5 rounded-full ${language === 'EN' ? 'bg-primary-container text-on-primary' : 'text-on-surface-variant'}`,
                                                    children: "EN"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setLanguage('BN'),
                                                    className: `px-1.5 py-0.5 rounded-full ${language === 'BN' ? 'bg-primary-container text-on-primary' : 'text-on-surface-variant'}`,
                                                    children: "বাংলা"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setLanguage('HI'),
                                                    className: `px-1.5 py-0.5 rounded-full ${language === 'HI' ? 'bg-primary-container text-on-primary' : 'text-on-surface-variant'}`,
                                                    children: "हिन्दी"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsHelpOpen(true),
                                            className: "w-9 h-9 rounded-full flex items-center justify-center bg-surface-container-high text-primary hover:bg-surface-container active:scale-95 transition-transform",
                                            title: "Voice Assistant",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-[20px]",
                                                children: "mic"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 bg-surface-container-low border-t border-outline-variant px-1.5 py-1 text-[12px] font-bold text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setFarmerTab('home'),
                                    className: "py-1.5 rounded-md bg-primary-container text-on-primary shadow-xs flex items-center justify-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🌾"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Farmer App"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/buyer",
                                    className: "py-1.5 rounded-md text-on-surface-variant hover:bg-surface-container-high transition-all flex items-center justify-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🏪"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Buyer Portal"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/login",
                                    className: "py-1.5 rounded-md text-secondary hover:bg-surface-container-high transition-all flex items-center justify-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🔑"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Login"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "bg-surface-container-low px-4 py-1.5 flex items-center justify-between border-b border-outline-variant text-[11px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 font-bold text-on-surface",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-[15px] text-secondary",
                                    children: "location_on"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Hooghly, West Bengal"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-surface-container-lowest px-2 py-0.5 rounded-full border border-outline-variant font-bold text-primary-container",
                            children: "Mandi: Open"
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "p-4 flex flex-col gap-4",
                    children: [
                        farmerTab === 'home' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between bg-surface-container-lowest p-3 rounded-xl border border-outline-variant",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-full bg-primary-fixed-dim text-primary font-extrabold text-base flex items-center justify-center border-2 border-primary",
                                                    children: "RG"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "text-[16px] font-extrabold text-on-surface leading-tight",
                                                            children: "Ramesh Ghosh"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex items-center gap-1 text-[10px] font-bold text-primary-container bg-primary-fixed px-2 py-0.5 rounded-md mt-0.5",
                                                            children: "✓ NABARD / e-NAM Verified Farmer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsListWizardOpen(true),
                                            className: "bg-primary-container text-on-primary px-3 py-1.5 rounded-lg text-[12px] font-bold shadow-xs flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[16px]",
                                                    children: "add"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Sell"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "bg-surface-container-lowest rounded-xl border-2 border-primary-container p-4 shadow-xs flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between pb-2 border-b border-outline-variant",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-secondary font-bold uppercase tracking-wider",
                                                    children: "🌟 High Demand Opportunity"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-emerald-100 text-primary-container px-2.5 py-0.5 rounded-full text-[11px] font-bold",
                                                    children: [
                                                        "+",
                                                        forecast.percentageChange,
                                                        "% Demand"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-[20px] font-extrabold text-on-surface",
                                                            children: "Tomato (Grade A)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[12px] text-on-surface-variant",
                                                            children: "Hybrid Red • Firm Harvest Ready"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] text-on-surface-variant",
                                                            children: "Estimated Fair Rate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[24px] font-extrabold text-primary-container leading-none",
                                                            children: [
                                                                "₹",
                                                                priceEst.suggestedMin,
                                                                "–",
                                                                priceEst.suggestedMax,
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[12px] font-normal",
                                                                    children: "/kg"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                                    lineNumber: 186,
                                                                    columnNumber: 72
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-surface-container-low p-3 rounded-lg border border-outline-variant flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-tertiary text-[20px]",
                                                    children: "smart_toy"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[12px] font-bold text-on-surface",
                                                            children: "AI Recommendation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-on-surface-variant mt-0.5",
                                                            children: [
                                                                '"',
                                                                forecast.recommendation,
                                                                '"'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsListWizardOpen(true),
                                            className: "w-full py-3 bg-primary-container text-on-primary rounded-xl text-[14px] font-bold hover:bg-primary transition-all flex items-center justify-center gap-2 active:scale-95 shadow-md",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[20px]",
                                                    children: "add_circle"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "List My Produce for Direct Sale"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2 text-[12px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-surface-container-lowest p-3 rounded-xl border border-outline-variant flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-on-surface-variant font-bold",
                                                    children: "Active Listings"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[20px] font-extrabold text-primary",
                                                    children: produceList.length
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-emerald-700 font-bold",
                                                    children: "Direct to verified buyers"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 211,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-surface-container-lowest p-3 rounded-xl border border-outline-variant flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-on-surface-variant font-bold",
                                                    children: "Confirmed Orders"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[20px] font-extrabold text-secondary",
                                                    children: ordersList.length
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-primary-container font-bold",
                                                    children: "Pickup scheduled"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this),
                        farmerTab === 'market' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-[16px] font-bold text-on-surface",
                                    children: "Market Intelligence & Rates"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2 text-[12px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-surface-container-low p-3 rounded-lg border border-outline-variant",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-on-surface-variant",
                                                    children: "Current Mandi Demand"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-on-surface text-[14px]",
                                                    children: [
                                                        forecast.currentDemandTonnes,
                                                        " tonnes/week"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 229,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-surface-container-low p-3 rounded-lg border border-outline-variant",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-on-surface-variant",
                                                    children: "Forecast Demand"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-primary text-[14px]",
                                                    children: [
                                                        forecast.forecastDemandTonnes,
                                                        " tonnes/week"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-[12px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-emerald-900",
                                            children: "Direct Farm2Flow Price Realization:"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 240,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-emerald-800 mt-1",
                                            children: "Farmer: ₹30/kg → Buyer: ₹35/kg (Eliminates ₹15/kg middlemen spread!)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 241,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 239,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-surface-container-low p-3 rounded-xl border border-outline-variant flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-[13px] text-on-surface",
                                            children: "Crop Selection:"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                'Tomato',
                                                'Potato'
                                            ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedCrop(c),
                                                    className: `px-3 py-1.5 rounded-lg text-[12px] font-bold ${selectedCrop === c ? 'bg-primary-container text-on-primary' : 'bg-surface-container-high text-on-surface-variant'}`,
                                                    children: c
                                                }, c, false, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 246,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 244,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                            lineNumber: 226,
                            columnNumber: 13
                        }, this),
                        farmerTab === 'sell' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[16px] font-bold text-on-surface",
                                            children: "My Active Listings"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 266,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsListWizardOpen(true),
                                            className: "bg-primary-container text-on-primary px-3 py-1.5 rounded-lg text-[12px] font-bold flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[16px]",
                                                    children: "add"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "List Produce"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 267,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 265,
                                    columnNumber: 15
                                }, this),
                                produceList.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant flex flex-col gap-2",
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
                                                                fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                                lineNumber: 279,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[12px] text-on-surface-variant",
                                                                children: [
                                                                    item.farmerLocation,
                                                                    " • ",
                                                                    item.variety
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                                lineNumber: 280,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-emerald-100 text-primary-container px-2 py-0.5 rounded-full text-[11px] font-bold",
                                                        children: item.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                lineNumber: 277,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center text-[13px] pt-1 border-t border-outline-variant",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-on-surface",
                                                        children: [
                                                            item.quantityKg,
                                                            " kg"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-extrabold text-primary",
                                                        children: [
                                                            "₹",
                                                            item.expectedPricePerKg,
                                                            " / kg"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                lineNumber: 286,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/apps/pwa/src/app/page.tsx",
                                        lineNumber: 276,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                            lineNumber: 264,
                            columnNumber: 13
                        }, this),
                        farmerTab === 'orders' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-[16px] font-bold text-on-surface",
                                    children: "Active Orders & Dispatches"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 297,
                                    columnNumber: 15
                                }, this),
                                ordersList.map((ord)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3.5 bg-surface-container-low border border-outline-variant rounded-xl text-[12px] flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between font-bold text-primary",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[14px]",
                                                        children: ord.orderNumber
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full text-[10px]",
                                                        children: ord.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                lineNumber: 300,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-on-surface-variant",
                                                children: [
                                                    "Buyer: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-on-surface",
                                                        children: ord.buyerName
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 65
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                lineNumber: 304,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-on-surface-variant",
                                                children: [
                                                    "Destination: ",
                                                    ord.destination
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                lineNumber: 305,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center pt-2 border-t border-outline-variant text-[13px] font-bold text-on-surface",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Order Value"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-primary text-[15px]",
                                                        children: [
                                                            "₹",
                                                            ord.totalAmount.toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/page.tsx",
                                                lineNumber: 306,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, ord.id, true, {
                                        fileName: "[project]/apps/pwa/src/app/page.tsx",
                                        lineNumber: 299,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                            lineNumber: 296,
                            columnNumber: 13
                        }, this),
                        farmerTab === 'profile' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3 text-[13px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-[16px] font-bold text-on-surface",
                                    children: "Farmer Profile"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Name:"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 318,
                                            columnNumber: 18
                                        }, this),
                                        " Ramesh Ghosh"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 318,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Mobile:"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 319,
                                            columnNumber: 18
                                        }, this),
                                        " +91 98310 44210"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 319,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Location:"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 320,
                                            columnNumber: 18
                                        }, this),
                                        " Hooghly, West Bengal"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Verification:"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 321,
                                            columnNumber: 18
                                        }, this),
                                        " NABARD / e-NAM Verified ✓"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 321,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-2 border-t border-outline-variant",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/buyer",
                                            className: "text-primary font-bold hover:underline block py-1",
                                            children: "→ Switch to Buyer Portal"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 323,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/login",
                                            className: "text-secondary font-bold hover:underline block py-1",
                                            children: "→ Sign Out / Switch Account"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                                            lineNumber: 326,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 322,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                            lineNumber: 316,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-surface-container-lowest border-t border-outline-variant grid grid-cols-5 text-[10px] font-bold text-center py-2 z-40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setFarmerTab('home'),
                            className: farmerTab === 'home' ? 'text-primary' : 'text-on-surface-variant',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined block text-[20px]",
                                    children: "home"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 337,
                                    columnNumber: 13
                                }, this),
                                "Home"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                            lineNumber: 336,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setFarmerTab('market'),
                            className: farmerTab === 'market' ? 'text-primary' : 'text-on-surface-variant',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined block text-[20px]",
                                    children: "analytics"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 340,
                                    columnNumber: 13
                                }, this),
                                "Market"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                            lineNumber: 339,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setFarmerTab('sell'),
                            className: farmerTab === 'sell' ? 'text-primary' : 'text-on-surface-variant',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined block text-[20px]",
                                    children: "add_circle"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 343,
                                    columnNumber: 13
                                }, this),
                                "Sell"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                            lineNumber: 342,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setFarmerTab('orders'),
                            className: farmerTab === 'orders' ? 'text-primary' : 'text-on-surface-variant',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined block text-[20px]",
                                    children: "local_shipping"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 346,
                                    columnNumber: 13
                                }, this),
                                "Orders"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                            lineNumber: 345,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setFarmerTab('profile'),
                            className: farmerTab === 'profile' ? 'text-primary' : 'text-on-surface-variant',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined block text-[20px]",
                                    children: "person"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                                    lineNumber: 349,
                                    columnNumber: 13
                                }, this),
                                "Profile"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/page.tsx",
                            lineNumber: 348,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                    lineNumber: 335,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$components$2f$PredefinedHelpModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredefinedHelpModal"], {
                    isOpen: isHelpOpen,
                    onClose: ()=>setIsHelpOpen(false),
                    onSelectAction: (actionKey)=>{
                        if (actionKey === 'sell') setIsListWizardOpen(true);
                        if (actionKey === 'prices') setFarmerTab('market');
                        if (actionKey === 'track') setFarmerTab('orders');
                    }
                }, void 0, false, {
                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                    lineNumber: 354,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$components$2f$ListProduceWizard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListProduceWizard"], {
                    isOpen: isListWizardOpen,
                    onClose: ()=>setIsListWizardOpen(false),
                    onSuccess: handleProduceCreated
                }, void 0, false, {
                    fileName: "[project]/apps/pwa/src/app/page.tsx",
                    lineNumber: 364,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/pwa/src/app/page.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/pwa/src/app/page.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(FarmerPage, "/13dLGAk8R/B9AGFrX5fx/Sr9Z4=");
_c = FarmerPage;
var _c;
__turbopack_context__.k.register(_c, "FarmerPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/pwa/src/components/ListProduceWizard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListProduceWizard",
    ()=>ListProduceWizard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const ListProduceWizard = ({ isOpen, onClose, onSuccess })=>{
    _s();
    const [step, setStep] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(1);
    const [selectedCrop, setSelectedCrop] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('Tomato');
    const [quantityKg, setQuantityKg] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(800);
    const [grade, setGrade] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('Grade A');
    const [expectedPrice, setExpectedPrice] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(30);
    const [harvestDate, setHarvestDate] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('2026-09-04');
    const [isSubmitting, setIsSubmitting] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [successMsg, setSuccessMsg] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('');
    if (!isOpen) return null;
    const cropOptions = [
        {
            name: 'Tomato',
            icon: '🍅',
            variety: 'Hybrid Red',
            suggestedPrice: '₹28–32/kg'
        },
        {
            name: 'Potato',
            icon: '🥔',
            variety: 'Jyoti',
            suggestedPrice: '₹16–20/kg'
        },
        {
            name: 'Onion',
            icon: '🧅',
            variety: 'Nashik Red',
            suggestedPrice: '₹24–28/kg'
        },
        {
            name: 'Rice',
            icon: '🌾',
            variety: 'Minikit',
            suggestedPrice: '₹38–44/kg'
        }
    ];
    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(()=>{
            const created = {
                id: `prod-${Date.now().toString().slice(-4)}`,
                farmerId: 'f-101',
                farmerName: 'Farmer A (Ramesh Ghosh)',
                farmerLocation: 'Hooghly (32 km)',
                cropName: selectedCrop,
                variety: cropOptions.find((c)=>c.name === selectedCrop)?.variety || 'Hybrid',
                grade,
                quantityKg,
                expectedPricePerKg: expectedPrice,
                marketSuggestedPriceMin: selectedCrop === 'Tomato' ? 28 : 16,
                marketSuggestedPriceMax: selectedCrop === 'Tomato' ? 32 : 20,
                harvestDate,
                demandStatus: 'High',
                demandForecastPct: 18,
                status: 'Available',
                fpoVerified: true,
                createdAt: new Date().toISOString()
            };
            setIsSubmitting(false);
            setSuccessMsg('Produce listed successfully. Saved locally and synced to e-NAM!');
            setTimeout(()=>{
                onSuccess(created);
                setSuccessMsg('');
                setStep(1);
                onClose();
            }, 1200);
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
                                    children: "List Produce for Sale"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-body-sm text-[12px] text-on-surface-variant",
                                    children: [
                                        "Step ",
                                        step,
                                        " of 3 • Direct Mandi Match"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined text-[20px]",
                                children: "close"
                            }, void 0, false, {
                                fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-1.5 h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `h-full transition-all duration-300 ${step >= 1 ? 'bg-primary flex-1' : 'bg-transparent'}`
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `h-full transition-all duration-300 ${step >= 2 ? 'bg-primary flex-1' : 'bg-transparent'}`
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `h-full transition-all duration-300 ${step >= 3 ? 'bg-primary flex-1' : 'bg-transparent'}`
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                successMsg ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-emerald-100 text-primary-container p-6 rounded-xl text-center flex flex-col items-center gap-3 my-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-14 h-14 rounded-full bg-primary-container text-on-primary flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined text-[32px]",
                                children: "check_circle"
                            }, void 0, false, {
                                fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-headline-sm font-bold",
                            children: successMsg
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                    lineNumber: 91,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "flex flex-col gap-4",
                    children: [
                        step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-label-md font-bold text-on-surface",
                                    children: "Step 1: Select Crop"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 102,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2.5",
                                    children: cropOptions.map((crop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setSelectedCrop(crop.name),
                                            className: `p-3.5 rounded-xl border text-left flex flex-col gap-1 transition-all ${selectedCrop === crop.name ? 'border-2 border-primary bg-primary-container/10 ring-1 ring-primary' : 'border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl",
                                                    children: crop.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-label-md font-bold text-on-surface",
                                                    children: crop.name
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-body-sm text-[11px] text-on-surface-variant",
                                                    children: crop.variety
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-label-sm text-[11px] text-secondary font-bold mt-1",
                                                    children: crop.suggestedPrice
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, crop.name, true, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 105,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setStep(2),
                                    className: "mt-3 w-full py-3.5 bg-primary-container text-on-primary rounded-xl text-label-md font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Continue to Quantity"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 127,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-[18px]",
                                            children: "arrow_forward"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                            lineNumber: 101,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-label-md font-bold text-on-surface",
                                    children: "Step 2: Harvest Quantity (Kg)"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-body-sm text-on-surface-variant",
                                                    children: "Available Lot Quantity"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-headline-lg font-extrabold text-primary",
                                                    children: [
                                                        quantityKg,
                                                        " kg"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 139,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: "100",
                                            max: "5000",
                                            step: "50",
                                            value: quantityKg,
                                            onChange: (e)=>setQuantityKg(Number(e.target.value)),
                                            className: "w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 143,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-[11px] text-on-surface-variant font-bold",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "100 kg"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "1,000 kg"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "5,000 kg"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 152,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 138,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setStep(1),
                                            className: "py-3 px-4 bg-surface-container-high text-on-surface rounded-xl text-label-md font-bold",
                                            children: "Back"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 160,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setStep(3),
                                            className: "flex-1 py-3 bg-primary-container text-on-primary rounded-xl text-label-md font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Set Quality & Price"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[18px]",
                                                    children: "arrow_forward"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 167,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 159,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                            lineNumber: 135,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-label-md font-bold text-on-surface",
                                    children: "Step 3: Quality, Price & Date"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 182,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-body-sm text-[12px] text-on-surface-variant",
                                            children: "Quality Grade"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 186,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-2 mt-1",
                                            children: [
                                                'Grade A',
                                                'Grade B',
                                                'Standard'
                                            ].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setGrade(g),
                                                    className: `py-2 rounded-lg text-label-sm font-bold border transition-colors ${grade === g ? 'bg-primary-container text-on-primary border-primary' : 'bg-surface-container-lowest text-on-surface border-outline-variant'}`,
                                                    children: g
                                                }, g, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 187,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 185,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-body-sm text-[12px] text-on-surface-variant",
                                            children: "Expected Price per Kg (₹)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 207,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute left-3.5 top-3 font-bold text-on-surface-variant",
                                                    children: "₹"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: expectedPrice,
                                                    onChange: (e)=>setExpectedPrice(Number(e.target.value)),
                                                    className: "w-full pl-8 pr-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-xl font-bold text-on-surface focus:outline-none focus:border-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 208,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-secondary font-bold mt-1",
                                            children: "AI Market Range: ₹28 – ₹32 / kg"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 217,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 206,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-body-sm text-[12px] text-on-surface-variant",
                                            children: "Expected Harvest / Dispatch Date"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 222,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: harvestDate,
                                            onChange: (e)=>setHarvestDate(e.target.value),
                                            className: "w-full px-3.5 py-2.5 mt-1 bg-surface-container-lowest border border-outline-variant rounded-xl font-bold text-on-surface focus:outline-none focus:border-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 223,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 221,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setStep(2),
                                            className: "py-3 px-4 bg-surface-container-high text-on-surface rounded-xl text-label-md font-bold",
                                            children: "Back"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 232,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isSubmitting,
                                            className: "flex-1 py-3.5 bg-primary-container text-on-primary rounded-xl text-label-md font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2 shadow-md active:scale-95",
                                            children: isSubmitting ? 'Listing Produce...' : 'List My Produce'
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 239,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 231,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                            lineNumber: 181,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ListProduceWizard, "cPwYxuu8iuvj9E4A4jZH7M8hnFw=");
_c = ListProduceWizard;
var _c;
__turbopack_context__.k.register(_c, "ListProduceWizard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/pwa/src/components/PredefinedHelpModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PredefinedHelpModal",
    ()=>PredefinedHelpModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const PredefinedHelpModal = ({ isOpen, onClose, onSelectAction })=>{
    if (!isOpen) return null;
    const quickActions = [
        {
            key: 'prices',
            icon: 'payments',
            label: "Show today's market prices",
            desc: "View real-time mandi rates & AI demand alerts"
        },
        {
            key: 'sell',
            icon: 'add_circle',
            label: "Sell my produce",
            desc: "List crop in 3 simple steps"
        },
        {
            key: 'track',
            icon: 'local_shipping',
            label: "Track my order",
            desc: "View live dispatch & logistics status"
        },
        {
            key: 'buyers',
            icon: 'handshake',
            label: "Find buyers",
            desc: "Run smart matching algorithm"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[430px] bg-surface rounded-t-2xl sm:rounded-2xl p-5 border border-outline-variant shadow-xl flex flex-col gap-4 max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-outline-variant pb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined text-[24px]",
                                        children: "mic"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-headline-sm font-bold text-on-surface",
                                            children: "Farm2Flow Voice Assistant"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-body-sm text-on-surface-variant text-[12px]",
                                            children: "Trigger instant agricultural actions"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined text-[20px]",
                                children: "close"
                            }, void 0, false, {
                                fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2.5",
                    children: quickActions.map((action)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                onSelectAction(action.key);
                                onClose();
                            },
                            className: "p-3 bg-surface-container-lowest hover:bg-surface-container-low border border-outline-variant rounded-xl flex items-center gap-3 text-left transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-9 h-9 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined text-[20px]",
                                        children: action.icon
                                    }, void 0, false, {
                                        fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-label-md font-bold text-on-surface",
                                            children: action.label
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-body-sm text-[12px] text-on-surface-variant truncate",
                                            children: action.desc
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, action.key, true, {
                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PredefinedHelpModal;
var _c;
__turbopack_context__.k.register(_c, "PredefinedHelpModal");
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

//# sourceMappingURL=apps_pwa_src_0dyc3l5._.js.map