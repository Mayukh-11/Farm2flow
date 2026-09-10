module.exports = [
"[project]/apps/pwa/src/app/farmer/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FarmerPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/src/services/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$components$2f$PredefinedHelpModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/src/components/PredefinedHelpModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$components$2f$ListProduceWizard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/src/components/ListProduceWizard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/src/data/translations.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function FarmerPage() {
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('EN');
    const [isOfflineSim, setIsOfflineSim] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [offlineNotice, setOfflineNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // App Data States
    const [produceList, setProduceList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [ordersList, setOrdersList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCrop, setSelectedCrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Tomato');
    const [farmerName, setFarmerName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Ramesh Ghosh');
    const [currentLocation, setCurrentLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Hooghly (Singur), West Bengal');
    const [farmerAddress, setFarmerAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Singur Vegetable Cluster, Hooghly, WB');
    // Modal Visibility States
    const [isHelpOpen, setIsHelpOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isListWizardOpen, setIsListWizardOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Active Bottom Navigation Tab for Farmer
    const [farmerTab, setFarmerTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('home');
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][language] || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"].EN;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Auth Guard: Always require login first
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        setProduceList((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredProduce"])());
        setOrdersList((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrders"])());
        // Real-time synchronization when produce is listed or updated
        const handleProduceUpdated = (e)=>{
            if (e?.detail?.produceList) {
                setProduceList(e.detail.produceList);
            } else {
                setProduceList((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredProduce"])());
            }
        };
        const handleStorageChange = (e)=>{
            if (e.key === 'farm2flow_produce_items') {
                setProduceList((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredProduce"])());
            }
        };
        window.addEventListener('farm2flow_produce_updated', handleProduceUpdated);
        window.addEventListener('storage', handleStorageChange);
        return ()=>{
            window.removeEventListener('farm2flow_produce_updated', handleProduceUpdated);
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);
    const handleProduceCreated = (newProduce)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveProduce"])(newProduce);
        setProduceList((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStoredProduce"])());
        if (isOfflineSim) {
            setOfflineNotice("Saved locally. Will sync when network is restored.");
            setTimeout(()=>setOfflineNotice(''), 4000);
        }
    };
    const handleDeleteProduce = (produceId, cropName)=>{
        const confirmDelete = window.confirm(`Are you sure you want to remove ${cropName} from your listed produce?`);
        if (!confirmDelete) return;
        const updated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteProduce"])(produceId);
        setProduceList(updated);
        setOfflineNotice(`✓ ${cropName} listing removed in real-time.`);
        setTimeout(()=>setOfflineNotice(''), 3000);
    };
    const forecast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDemandForecast"])(selectedCrop);
    const priceEst = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPriceEstimate"])(selectedCrop);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-slate-950 text-on-surface antialiased min-h-screen pb-28 font-sans",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[430px] mx-auto min-h-screen bg-slate-50 flex flex-col relative shadow-2xl border-x border-slate-200/80",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `px-4 py-2 text-[11px] font-bold flex items-center justify-between transition-colors ${isOfflineSim ? 'bg-amber-100 text-amber-900 border-b border-amber-300' : 'bg-emerald-900 text-emerald-100'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `inline-block w-2.5 h-2.5 rounded-full ${isOfflineSim ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'}`
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isOfflineSim ? t.offlineDraft : t.onlineSync
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsOfflineSim(!isOfflineSim),
                            className: "underline hover:opacity-80 text-[11px] font-bold text-emerald-200",
                            children: isOfflineSim ? t.goOnline : t.simulateOffline
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                offlineNotice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-emerald-800 text-white px-4 py-2 text-[12px] font-bold text-center animate-in slide-in-from-top duration-300 border-b border-emerald-600",
                    children: offlineNotice
                }, void 0, false, {
                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                    lineNumber: 120,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "bg-white/90 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-40 transition-all shadow-xs",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center w-full px-4 h-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-900 to-emerald-700 text-white flex items-center justify-center shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-[22px]",
                                            children: "agriculture"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[17px] font-black text-emerald-950 leading-tight tracking-tight",
                                                        children: t.appTitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] bg-emerald-100 text-emerald-800 font-extrabold px-1.5 py-0.5 rounded-md uppercase border border-emerald-300/60",
                                                        children: "Farmer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-slate-500 font-bold",
                                                children: t.tagline
                                            }, void 0, false, {
                                                fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-100/90 rounded-full p-0.5 flex text-[11px] border border-slate-200 font-bold shadow-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setLanguage('EN'),
                                                className: `px-2 py-0.5 rounded-full transition-all ${language === 'EN' ? 'bg-emerald-800 text-white font-black shadow-xs' : 'text-slate-600 hover:text-slate-900'}`,
                                                children: "EN"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setLanguage('BN'),
                                                className: `px-2 py-0.5 rounded-full transition-all ${language === 'BN' ? 'bg-emerald-800 text-white font-black shadow-xs' : 'text-slate-600 hover:text-slate-900'}`,
                                                children: "বাংলা"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setLanguage('HI'),
                                                className: `px-2 py-0.5 rounded-full transition-all ${language === 'HI' ? 'bg-emerald-800 text-white font-black shadow-xs' : 'text-slate-600 hover:text-slate-900'}`,
                                                children: "हिन्दी"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsHelpOpen(true),
                                        className: "w-9 h-9 rounded-full flex items-center justify-center bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 active:scale-95 transition-transform",
                                        title: t.voiceAssistant,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-[20px]",
                                            children: "mic"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "bg-surface-container-low px-4 py-2 flex items-center justify-between border-b border-outline-variant text-[11px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 font-bold text-on-surface max-w-[280px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-[18px] text-primary",
                                    children: "location_on"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate",
                                    children: currentLocation
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-surface-container-lowest px-2 py-0.5 rounded-full border border-outline-variant font-bold text-primary-container shrink-0",
                            children: t.mandiOpen
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "p-4 flex flex-col gap-4",
                    children: [
                        farmerTab === 'home' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between bg-surface-container-lowest p-3 rounded-xl border border-outline-variant",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-full bg-primary-fixed-dim text-primary font-extrabold text-base flex items-center justify-center border-2 border-primary",
                                                    children: farmerName.split(' ').map((n)=>n[0]).join('').slice(0, 2).toUpperCase() || 'FM'
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "text-[16px] font-extrabold text-on-surface leading-tight",
                                                            children: farmerName
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex items-center gap-1 text-[10px] font-bold text-primary-container bg-primary-fixed px-2 py-0.5 rounded-md mt-0.5",
                                                            children: t.verifiedFarmer
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsListWizardOpen(true),
                                            className: "bg-primary-container text-on-primary px-3 py-1.5 rounded-lg text-[12px] font-bold shadow-xs flex items-center gap-1 active:scale-95",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[16px]",
                                                    children: "add"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t.sellNav
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "bg-surface-container-lowest rounded-xl border-2 border-primary-container p-4 shadow-xs flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between pb-2 border-b border-outline-variant",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-secondary font-bold uppercase tracking-wider",
                                                    children: t.highDemandOpp
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-emerald-100 text-primary-container px-2.5 py-0.5 rounded-full text-[11px] font-bold",
                                                    children: t.demandSurge
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-[20px] font-extrabold text-on-surface",
                                                        children: t.tomatoGradeA
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[12px] text-on-surface-variant",
                                                        children: t.hybridRedDesc
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsListWizardOpen(true),
                                            className: "w-full py-3 bg-primary-container text-on-primary rounded-xl text-[14px] font-bold hover:bg-primary transition-all flex items-center justify-center gap-2 active:scale-95 shadow-md",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[20px]",
                                                    children: "add_circle"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t.listProduceBtn
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2 text-[12px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-surface-container-lowest p-3 rounded-xl border border-outline-variant flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-on-surface-variant font-bold",
                                                    children: t.activeListings
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[20px] font-extrabold text-primary",
                                                    children: produceList.length
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-emerald-700 font-bold",
                                                    children: t.directToVerified
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-surface-container-lowest p-3 rounded-xl border border-outline-variant flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-on-surface-variant font-bold",
                                                    children: t.confirmedOrders
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[20px] font-extrabold text-secondary",
                                                    children: ordersList.length
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-primary-container font-bold",
                                                    children: t.pickupScheduled
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                            lineNumber: 230,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this),
                        farmerTab === 'market' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-[16px] font-bold text-on-surface",
                                    children: t.marketIntel
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                    lineNumber: 241,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2 text-[12px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-surface-container-low p-3 rounded-lg border border-outline-variant",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-on-surface-variant",
                                                    children: t.currentMandiDemand
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-on-surface text-[14px]",
                                                    children: [
                                                        forecast.currentDemandTonnes,
                                                        " tonnes/week"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                            lineNumber: 243,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-surface-container-low p-3 rounded-lg border border-outline-variant",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-on-surface-variant",
                                                    children: t.forecastDemand
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-primary text-[14px]",
                                                    children: [
                                                        forecast.forecastDemandTonnes,
                                                        " tonnes/week"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                            lineNumber: 247,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                    lineNumber: 242,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-[12px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-emerald-900",
                                            children: t.directPriceRealization
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                            lineNumber: 254,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-emerald-800 mt-1",
                                            children: t.directPriceDesc
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-surface-container-low p-3 rounded-xl border border-outline-variant flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-[13px] text-on-surface",
                                            children: t.cropSelection
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                            lineNumber: 259,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 overflow-x-auto no-scrollbar py-1",
                                            children: [
                                                'Tomato',
                                                'Potato',
                                                'Onion',
                                                'Rice',
                                                'Wheat',
                                                'Chilli',
                                                'Cauliflower',
                                                'Cabbage',
                                                'Carrot',
                                                'Apple'
                                            ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedCrop(c),
                                                    className: `px-3 py-1.5 rounded-lg text-[12px] font-bold whitespace-nowrap transition-all ${selectedCrop === c ? 'bg-primary-container text-on-primary shadow-xs' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}`,
                                                    children: c
                                                }, c, false, {
                                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                            lineNumber: 260,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                    lineNumber: 258,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                            lineNumber: 240,
                            columnNumber: 13
                        }, this),
                        farmerTab === 'sell' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[16px] font-bold text-on-surface",
                                            children: t.myActiveListings
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                            lineNumber: 280,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsListWizardOpen(true),
                                            className: "bg-primary-container text-on-primary px-3 py-1.5 rounded-lg text-[12px] font-bold flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[16px]",
                                                    children: "add"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t.listProduce
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                            lineNumber: 281,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                    lineNumber: 279,
                                    columnNumber: 15
                                }, this),
                                produceList.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant flex flex-col gap-2 shadow-xs transition-all hover:border-outline",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-bold text-on-surface text-[15px]",
                                                                children: [
                                                                    item.cropName,
                                                                    " (",
                                                                    item.grade,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[12px] text-on-surface-variant",
                                                                children: [
                                                                    item.farmerLocation,
                                                                    " • ",
                                                                    item.variety
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                                lineNumber: 294,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "bg-emerald-100 text-primary-container px-2 py-0.5 rounded-full text-[11px] font-bold",
                                                                children: item.status
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                                lineNumber: 297,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDeleteProduce(item.id, item.cropName),
                                                                className: "p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors",
                                                                title: "Delete this listed product",
                                                                "aria-label": "Delete listing",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "material-symbols-outlined text-[18px]",
                                                                    children: "delete"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                                    lineNumber: 306,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                                lineNumber: 300,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                lineNumber: 291,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center text-[13px] pt-1.5 border-t border-outline-variant",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-on-surface",
                                                        children: [
                                                            item.quantityKg,
                                                            " kg"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-extrabold text-primary",
                                                                children: [
                                                                    "₹",
                                                                    item.expectedPricePerKg,
                                                                    " / kg"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                                lineNumber: 313,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleDeleteProduce(item.id, item.cropName),
                                                                className: "text-[11px] font-bold text-red-600 hover:text-red-800 underline flex items-center gap-0.5",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Remove"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                                    lineNumber: 318,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                                lineNumber: 314,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                lineNumber: 310,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                        lineNumber: 290,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                            lineNumber: 278,
                            columnNumber: 13
                        }, this),
                        farmerTab === 'orders' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-[16px] font-bold text-on-surface",
                                    children: t.activeOrdersDispatches
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                    lineNumber: 329,
                                    columnNumber: 15
                                }, this),
                                ordersList.map((ord)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3.5 bg-surface-container-low border border-outline-variant rounded-xl text-[12px] flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between font-bold text-primary",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[14px]",
                                                        children: ord.orderNumber
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full text-[10px]",
                                                        children: ord.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                lineNumber: 332,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-on-surface-variant",
                                                children: [
                                                    "Buyer: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-on-surface",
                                                        children: ord.buyerName
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 65
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                lineNumber: 336,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-on-surface-variant",
                                                children: [
                                                    "Destination: ",
                                                    ord.destination
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                lineNumber: 337,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center pt-2 border-t border-outline-variant text-[13px] font-bold text-on-surface",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t.orderValue
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-primary text-[15px]",
                                                        children: [
                                                            "₹",
                                                            ord.totalAmount.toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                                lineNumber: 338,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, ord.id, true, {
                                        fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                        lineNumber: 331,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                            lineNumber: 328,
                            columnNumber: 13
                        }, this),
                        farmerTab === 'profile' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-surface-container-lowest p-4 rounded-xl border border-outline-variant flex flex-col gap-3 text-[13px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-[16px] font-bold text-on-surface",
                                    children: t.farmerProfile
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                    lineNumber: 349,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Name:"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                            lineNumber: 350,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        farmerName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                    lineNumber: 350,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                t.mobile,
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                            lineNumber: 351,
                                            columnNumber: 18
                                        }, this),
                                        " +91 98310 44210"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                    lineNumber: 351,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                t.location,
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                            lineNumber: 352,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        currentLocation
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                    lineNumber: 352,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Address:"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                            lineNumber: 353,
                                            columnNumber: 18
                                        }, this),
                                        " ",
                                        farmerAddress
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                    lineNumber: 353,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                t.verification,
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                            lineNumber: 354,
                                            columnNumber: 18
                                        }, this),
                                        " NABARD / e-NAM Verified ✓"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                    lineNumber: 354,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-2 border-t border-outline-variant",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "text-secondary font-bold hover:underline block py-1",
                                        children: t.signOut
                                    }, void 0, false, {
                                        fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                        lineNumber: 356,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                    lineNumber: 355,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                            lineNumber: 348,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-surface-container-lowest/95 backdrop-blur-md border-t border-outline-variant grid grid-cols-5 text-[11px] font-bold text-center py-2 z-40 shadow-lg px-2",
                    children: [
                        {
                            id: 'home',
                            icon: 'home',
                            label: t.homeNav
                        },
                        {
                            id: 'market',
                            icon: 'analytics',
                            label: t.marketNav
                        },
                        {
                            id: 'sell',
                            icon: 'add_circle',
                            label: t.sellNav
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
                        const isActive = farmerTab === item.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setFarmerTab(item.id),
                            className: `relative flex flex-col items-center justify-center py-1 rounded-xl transition-all duration-200 ${isActive ? 'text-primary font-black scale-105' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50'}`,
                            children: [
                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-2 w-8 h-1 bg-primary rounded-full animate-in fade-in zoom-in duration-200"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                    lineNumber: 385,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-1 rounded-full transition-all ${isActive ? 'bg-primary/15' : ''}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `material-symbols-outlined block text-[22px] ${isActive ? 'fill-current' : ''}`,
                                        children: item.icon
                                    }, void 0, false, {
                                        fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                        lineNumber: 388,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                    lineNumber: 387,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-[10px] tracking-tight ${isActive ? 'font-extrabold text-primary' : 'font-medium'}`,
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                                    lineNumber: 392,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                            lineNumber: 375,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                    lineNumber: 365,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$components$2f$PredefinedHelpModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PredefinedHelpModal"], {
                    isOpen: isHelpOpen,
                    language: language,
                    onDetectedLanguage: (newLang)=>setLanguage(newLang),
                    onClose: ()=>setIsHelpOpen(false),
                    onSelectAction: (actionKey, params)=>{
                        if (actionKey === 'sell') {
                            if (params?.crop) setSelectedCrop(params.crop);
                            setIsListWizardOpen(true);
                        }
                        if (actionKey === 'prices' || actionKey === 'market') setFarmerTab('market');
                        if (actionKey === 'track') setFarmerTab('orders');
                    }
                }, void 0, false, {
                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                    lineNumber: 401,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$components$2f$ListProduceWizard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ListProduceWizard"], {
                    isOpen: isListWizardOpen,
                    initialCrop: selectedCrop,
                    language: language,
                    onClose: ()=>setIsListWizardOpen(false),
                    onSuccess: handleProduceCreated
                }, void 0, false, {
                    fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
                    lineNumber: 416,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
            lineNumber: 98,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/pwa/src/app/farmer/page.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/pwa/src/components/ListProduceWizard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListProduceWizard",
    ()=>ListProduceWizard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const ListProduceWizard = ({ isOpen, onClose, onSuccess, initialCrop = 'Tomato', language = 'EN' })=>{
    const [step, setStep] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(1);
    const [selectedCrop, setSelectedCrop] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(initialCrop);
    const [quantityKg, setQuantityKg] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(800);
    const [grade, setGrade] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState('Grade A');
    const [expectedPrice, setExpectedPrice] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(30);
    const [harvestDate, setHarvestDate] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState('2026-09-04');
    const [isSubmitting, setIsSubmitting] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [successMsg, setSuccessMsg] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState('');
    // Voice fill state inside wizard
    const [isWizardListening, setIsWizardListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [voiceNotice, setVoiceNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const wizardRecRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initialCrop) {
            setSelectedCrop(initialCrop);
        }
    }, [
        initialCrop
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (wizardRecRef.current) {
                try {
                    wizardRecRef.current.abort();
                } catch (e) {
                // ignore
                }
            }
        };
    }, []);
    const getLanguageTag = (lang)=>{
        if (lang === 'BN') return 'bn-IN';
        if (lang === 'HI') return 'hi-IN';
        return 'en-IN';
    };
    // Voice input support for filling wizard fields
    const toggleWizardSpeech = ()=>{
        if (isWizardListening) {
            try {
                wizardRecRef.current?.stop();
            } catch (e) {
            // ignore
            }
            setIsWizardListening(false);
            return;
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    if (!isOpen) return null;
    const cropOptions = [
        {
            name: 'Tomato',
            icon: '🍅',
            variety: 'Hybrid Red Flavour',
            suggestedPrice: '₹28–32/kg'
        },
        {
            name: 'Potato',
            icon: '🥔',
            variety: 'Jyoti Golden',
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
            icon: '🍚',
            variety: 'Gobindobhog Aromatic',
            suggestedPrice: '₹70–80/kg'
        },
        {
            name: 'Wheat',
            icon: '🌾',
            variety: 'Sharbati Gold',
            suggestedPrice: '₹26–30/kg'
        },
        {
            name: 'Chilli',
            icon: '🌶️',
            variety: 'Bullet Green Spicy',
            suggestedPrice: '₹44–50/kg'
        },
        {
            name: 'Cauliflower',
            icon: '🥦',
            variety: 'Snowball White',
            suggestedPrice: '₹20–25/kg'
        },
        {
            name: 'Cabbage',
            icon: '🥬',
            variety: 'Green Globe Crisp',
            suggestedPrice: '₹12–16/kg'
        },
        {
            name: 'Carrot',
            icon: '🥕',
            variety: 'Kuroda Sweet Orange',
            suggestedPrice: '₹28–35/kg'
        },
        {
            name: 'Brinjal',
            icon: '🍆',
            variety: 'Muktakeshi Purple',
            suggestedPrice: '₹24–30/kg'
        }
    ];
    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        let activeFarmerName = 'Ramesh Ghosh';
        let activeFarmerLocation = 'Hooghly (Singur)';
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        setTimeout(()=>{
            const created = {
                id: `prod-${Date.now().toString().slice(-4)}`,
                farmerId: `f-${Date.now().toString().slice(-3)}`,
                farmerName: activeFarmerName,
                farmerLocation: activeFarmerLocation,
                cropName: selectedCrop.trim(),
                variety: cropOptions.find((c)=>c.name.toLowerCase() === selectedCrop.toLowerCase())?.variety || 'Farm Fresh',
                grade,
                quantityKg,
                expectedPricePerKg: expectedPrice,
                marketSuggestedPriceMin: Math.max(10, Math.round(expectedPrice * 0.9)),
                marketSuggestedPriceMax: Math.round(expectedPrice * 1.15),
                harvestDate,
                demandStatus: 'High',
                demandForecastPct: 20,
                status: 'Available',
                fpoVerified: true,
                createdAt: new Date().toISOString()
            };
            setIsSubmitting(false);
            setSuccessMsg('Produce listed successfully! Synced real-time to Pan-India map & buyer feeds.');
            setTimeout(()=>{
                onSuccess(created);
                setSuccessMsg('');
                setStep(1);
                onClose();
            }, 1200);
        }, 600);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[430px] bg-surface rounded-t-3xl sm:rounded-3xl p-5 border border-outline-variant shadow-2xl flex flex-col gap-4 max-h-[95vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-outline-variant pb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-[17px] font-extrabold text-on-surface",
                                    children: "List Produce for Direct Sale"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[12px] text-on-surface-variant font-medium",
                                    children: [
                                        "Step ",
                                        step,
                                        " of 3 • Direct Mandi Match"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: toggleWizardSpeech,
                                    title: "Voice Autofill",
                                    className: `p-2 rounded-full transition-all ${isWizardListening ? 'bg-red-600 text-white animate-pulse' : 'bg-surface-container-high text-primary hover:bg-surface-container'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined text-[20px]",
                                        children: "mic"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined text-[20px]",
                                        children: "close"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                    lineNumber: 242,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                voiceNotice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-emerald-50 border border-emerald-200 text-emerald-900 p-2.5 rounded-xl text-[12px] font-bold",
                    children: voiceNotice
                }, void 0, false, {
                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                    lineNumber: 267,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-1.5 h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `h-full transition-all duration-300 ${step >= 1 ? 'bg-primary flex-1' : 'bg-transparent'}`
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                            lineNumber: 274,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `h-full transition-all duration-300 ${step >= 2 ? 'bg-primary flex-1' : 'bg-transparent'}`
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                            lineNumber: 275,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `h-full transition-all duration-300 ${step >= 3 ? 'bg-primary flex-1' : 'bg-transparent'}`
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                    lineNumber: 273,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                successMsg ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-emerald-100 text-primary-container p-6 rounded-2xl text-center flex flex-col items-center gap-3 my-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-14 h-14 rounded-full bg-primary-container text-on-primary flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined text-[32px]",
                                children: "check_circle"
                            }, void 0, false, {
                                fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                lineNumber: 282,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                            lineNumber: 281,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[16px] font-bold",
                            children: successMsg
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                            lineNumber: 284,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                    lineNumber: 280,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "flex flex-col gap-4",
                    children: [
                        step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[14px] font-bold text-on-surface",
                                            children: "Step 1: Select or Type Crop"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 292,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] font-bold text-secondary",
                                            children: "Voice or Type"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 293,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 291,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-surface-container-low p-3 rounded-2xl border border-outline-variant flex flex-col gap-2 shadow-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[12px] font-bold text-on-surface-variant flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Add Custom Crop / Product Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded-full",
                                                    children: "Voice Enabled"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 298,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute left-3.5 text-on-surface-variant material-symbols-outlined text-[20px]",
                                                    children: "eco"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: selectedCrop,
                                                    onChange: (e)=>setSelectedCrop(e.target.value),
                                                    placeholder: "Type crop name (e.g. Cauliflower, Mango, Wheat...)",
                                                    className: "w-full pl-10 pr-12 py-3 bg-white border border-outline-variant rounded-xl text-[14px] font-bold text-on-surface focus:outline-none focus:border-primary shadow-xs"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: toggleWizardSpeech,
                                                    title: "Speak crop name",
                                                    className: `absolute right-2.5 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${isWizardListening ? 'bg-red-600 text-white animate-pulse' : 'bg-primary-container text-primary-fixed hover:bg-primary'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-[18px]",
                                                        children: "mic"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 303,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 297,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 my-0.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px bg-outline-variant flex-1"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 326,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] text-on-surface-variant font-bold uppercase",
                                            children: "Or Choose Popular Crops"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 327,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px bg-outline-variant flex-1"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 328,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 325,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-[11px] font-bold",
                                    children: [
                                        'All',
                                        'Vegetables',
                                        'Fruits',
                                        'Grains',
                                        'Spices',
                                        'Leafy Greens'
                                    ].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setWizardCategory(cat),
                                            className: `px-2.5 py-1 rounded-full whitespace-nowrap transition-all ${wizardCategory === cat ? 'bg-primary-container text-on-primary shadow-xs font-black' : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'}`,
                                            children: cat
                                        }, cat, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 334,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 332,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2 max-h-[220px] overflow-y-auto no-scrollbar pr-0.5",
                                    children: filteredWizardCrops.map((crop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setSelectedCrop(crop.name);
                                                setExpectedPrice(crop.suggestedPriceMin || 30);
                                            },
                                            className: `p-2.5 rounded-xl border text-left flex flex-col gap-0.5 transition-all active:scale-98 ${selectedCrop.toLowerCase() === crop.name.toLowerCase() ? 'border-2 border-primary bg-primary-container/10 ring-1 ring-primary shadow-xs' : 'border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xl",
                                                            children: crop.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                            lineNumber: 366,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] font-extrabold px-1.5 py-0.2 bg-surface-container-high text-on-surface-variant rounded",
                                                            children: crop.category || 'Produce'
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                            lineNumber: 367,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-extrabold text-[13px] text-on-surface leading-tight truncate",
                                                    children: crop.name
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-on-surface-variant font-medium truncate",
                                                    children: crop.variety
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-black text-primary mt-0.5",
                                                    children: [
                                                        "₹",
                                                        crop.suggestedPriceMin,
                                                        "–",
                                                        crop.suggestedPriceMax,
                                                        "/kg"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 373,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, crop.name, true, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 352,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 350,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        if (!selectedCrop.trim()) {
                                            setVoiceNotice('Please type or speak a crop name first.');
                                            return;
                                        }
                                        setStep(2);
                                    },
                                    className: "mt-2 w-full py-3.5 bg-primary-container text-on-primary rounded-xl text-[14px] font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2 shadow-sm active:scale-98",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Continue to Quantity"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 389,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-[18px]",
                                            children: "arrow_forward"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 390,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 378,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                            lineNumber: 290,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[14px] font-bold text-on-surface",
                                    children: "Step 2: Harvest Quantity (Kg)"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 398,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[13px] text-on-surface-variant font-medium",
                                                    children: "Available Lot Quantity"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[24px] font-extrabold text-primary",
                                                    children: [
                                                        quantityKg,
                                                        " kg"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 401,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: "100",
                                            max: "5000",
                                            step: "50",
                                            value: quantityKg,
                                            onChange: (e)=>setQuantityKg(Number(e.target.value)),
                                            className: "w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 405,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-[11px] text-on-surface-variant font-bold",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "100 kg"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "1,000 kg"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 416,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "5,000 kg"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 417,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 414,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 400,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setStep(1),
                                            className: "py-3 px-4 bg-surface-container-high text-on-surface rounded-xl text-[13px] font-bold",
                                            children: "Back"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 422,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setStep(3),
                                            className: "flex-1 py-3 bg-primary-container text-on-primary rounded-xl text-[14px] font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Set Quality & Price"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[18px]",
                                                    children: "arrow_forward"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 429,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 421,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                            lineNumber: 397,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[14px] font-bold text-on-surface",
                                    children: "Step 3: Quality, Price & Date"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 444,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[12px] font-bold text-on-surface-variant",
                                            children: "Quality Grade"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 447,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-2 mt-1",
                                            children: [
                                                'Grade A',
                                                'Grade B',
                                                'Standard'
                                            ].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setGrade(g),
                                                    className: `py-2 rounded-xl text-[12px] font-bold border transition-colors ${grade === g ? 'bg-primary-container text-on-primary border-primary' : 'bg-surface-container-lowest text-on-surface border-outline-variant'}`,
                                                    children: g
                                                }, g, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 448,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 446,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[12px] font-bold text-on-surface-variant",
                                            children: "Expected Price per Kg (₹)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 467,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute left-3.5 top-3 font-bold text-on-surface-variant",
                                                    children: "₹"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 469,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: expectedPrice,
                                                    onChange: (e)=>setExpectedPrice(Number(e.target.value)),
                                                    placeholder: "Enter price per kg",
                                                    className: "w-full pl-8 pr-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-xl font-bold text-on-surface focus:outline-none focus:border-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                                    lineNumber: 470,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 468,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 466,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[12px] font-bold text-on-surface-variant",
                                            children: "Expected Harvest / Dispatch Date"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 481,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: harvestDate,
                                            onChange: (e)=>setHarvestDate(e.target.value),
                                            className: "w-full px-3.5 py-2.5 mt-1 bg-surface-container-lowest border border-outline-variant rounded-xl font-bold text-on-surface focus:outline-none focus:border-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 482,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 480,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setStep(2),
                                            className: "py-3 px-4 bg-surface-container-high text-on-surface rounded-xl text-[13px] font-bold",
                                            children: "Back"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 491,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isSubmitting,
                                            className: "flex-1 py-3.5 bg-primary-container text-on-primary rounded-xl text-[14px] font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2 shadow-md active:scale-95",
                                            children: isSubmitting ? 'Listing Produce...' : 'List My Produce'
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                            lineNumber: 498,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                                    lineNumber: 490,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                            lineNumber: 443,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
                    lineNumber: 287,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
            lineNumber: 239,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/pwa/src/components/ListProduceWizard.tsx",
        lineNumber: 238,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/apps/pwa/src/components/PredefinedHelpModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PredefinedHelpModal",
    ()=>PredefinedHelpModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const PredefinedHelpModal = ({ isOpen, onClose, onSelectAction, language = 'EN', onDetectedLanguage })=>{
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transcript, setTranscript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [detectedLangDisplay, setDetectedLangDisplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Omni-Voice (Listening in all Indian languages)');
    const [voiceRecognitionLang, setVoiceRecognitionLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('AUTO');
    const [speakingResponse, setSpeakingResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const quickActions = [
        {
            key: 'sell',
            icon: 'add_circle',
            label: "Sell my produce",
            desc: "List crop in 3 simple steps"
        },
        {
            key: 'prices',
            icon: 'payments',
            label: "Show today's market prices",
            desc: "View real-time mandi rates & AI demand alerts"
        },
        {
            key: 'track',
            icon: 'local_shipping',
            label: "Track my orders",
            desc: "View live dispatch & logistics status"
        },
        {
            key: 'market',
            icon: 'analytics',
            label: "Market Intelligence",
            desc: "Forecast demand and fair rate analysis"
        }
    ];
    // Browser Speech Synthesis (Voice response like YouTube / Google Assistant)
    const speakVoiceResponse = (text, langCode)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    // Detect language and intent universally
    const detectLanguageAndRespond = (spokenText)=>{
        const raw = spokenText.trim();
        if (!raw) return;
        setTranscript(raw);
        // 1. Script & Phonetic Language Detection
        const hasBengali = /[\u0980-\u09FF]/.test(raw) || /bikri|koto|daam|dor|dhan|alu|shobji|chawal|peyaj/i.test(raw);
        const hasHindi = /[\u0900-\u097F]/.test(raw) || /bechna|bhav|kya|aalu|khet|mandi|gehu/i.test(raw);
        let detected = 'EN';
        let ttsLang = 'en-IN';
        if (hasBengali) {
            detected = 'BN';
            ttsLang = 'bn-IN';
            setDetectedLangDisplay('🌐 বাংলা (Bengali Voice Detected)');
        } else if (hasHindi) {
            detected = 'HI';
            ttsLang = 'hi-IN';
            setDetectedLangDisplay('🌐 हिन्दी (Hindi Voice Detected)');
        } else {
            detected = 'EN';
            ttsLang = 'en-IN';
            setDetectedLangDisplay('🌐 English (Voice Detected)');
        }
        if (onDetectedLanguage) {
            onDetectedLanguage(detected);
        }
        const lower = raw.toLowerCase();
        // 2. Universal Crop Detection
        let detectedCrop = 'Tomato';
        if (lower.includes('potato') || lower.includes('alu') || lower.includes('aaloo') || lower.includes('আলু') || lower.includes('आलू')) {
            detectedCrop = 'Potato';
        } else if (lower.includes('onion') || lower.includes('pyaj') || lower.includes('peyaj') || lower.includes('পেঁয়াজ') || lower.includes('प्याज')) {
            detectedCrop = 'Onion';
        } else if (lower.includes('rice') || lower.includes('chawal') || lower.includes('dhan') || lower.includes('চাল') || lower.includes('ধান') || lower.includes('चावल')) {
            detectedCrop = 'Rice';
        } else if (lower.includes('wheat') || lower.includes('gehu') || lower.includes('gom') || lower.includes('গম') || lower.includes('गेहूं')) {
            detectedCrop = 'Wheat';
        } else if (lower.includes('mango') || lower.includes('aam') || lower.includes('আম') || lower.includes('आम')) {
            detectedCrop = 'Mango';
        } else if (lower.includes('cauliflower') || lower.includes('phulkopi') || lower.includes('গোভি') || lower.includes('ফুলকপি') || lower.includes('गोभी')) {
            detectedCrop = 'Cauliflower';
        }
        // 3. Command Intent Mapping with Audio Response
        // A. SELL / LIST
        if (lower.includes('sell') || lower.includes('list') || lower.includes('produce') || lower.includes('crop') || lower.includes('bikri') || lower.includes('bech') || lower.includes('বিক্রি') || lower.includes('বেচা') || lower.includes('ফসল') || lower.includes('बेचना') || lower.includes('बिक्री') || lower.includes('फसल') || lower.includes('টমেটো') || lower.includes('আলু') || lower.includes('পেঁয়াজ') || lower.includes('टमाटर') || lower.includes('आलू') || lower.includes('tomato') || lower.includes('potato')) {
            const responseMsg = detected === 'BN' ? `${detectedCrop} বিক্রির ফর্ম খোলা হচ্ছে` : detected === 'HI' ? `${detectedCrop} बेचने का फॉर्म खोला जा रहा है` : `Opening sell produce form for ${detectedCrop}`;
            setFeedback(`🔊 ${responseMsg}`);
            speakVoiceResponse(responseMsg, ttsLang);
            setTimeout(()=>{
                onSelectAction('sell', {
                    crop: detectedCrop
                });
                onClose();
            }, 1200);
            return;
        }
        // B. PRICES / MANDI RATES
        if (lower.includes('price') || lower.includes('rate') || lower.includes('mandi') || lower.includes('dam') || lower.includes('daam') || lower.includes('dor') || lower.includes('দর') || lower.includes('দাম') || lower.includes('মান্ডি') || lower.includes('বাজার') || lower.includes('भाव') || lower.includes('दाम') || lower.includes('मंडी')) {
            const responseMsg = detected === 'BN' ? 'আজকের বাজার দর দেখানো হচ্ছে' : detected === 'HI' ? 'आज का मंडी भाव दिखाया जा रहा है' : 'Showing today market rates';
            setFeedback(`🔊 ${responseMsg}`);
            speakVoiceResponse(responseMsg, ttsLang);
            setTimeout(()=>{
                onSelectAction('prices');
                onClose();
            }, 1200);
            return;
        }
        // C. ORDERS / DISPATCHES
        if (lower.includes('order') || lower.includes('track') || lower.includes('dispatch') || lower.includes('status') || lower.includes('delivery') || lower.includes('অর্ডার') || lower.includes('ট্র্যাক') || lower.includes('চালান') || lower.includes('ऑर्डर') || lower.includes('ट्रैक') || lower.includes('डिलीवरी')) {
            const responseMsg = detected === 'BN' ? 'আপনার অর্ডারের স্থিতি দেখাচ্ছি' : detected === 'HI' ? 'आपके ऑर्डर की स्थिति दिखाई जा रही है' : 'Tracking your orders';
            setFeedback(`🔊 ${responseMsg}`);
            speakVoiceResponse(responseMsg, ttsLang);
            setTimeout(()=>{
                onSelectAction('track');
                onClose();
            }, 1200);
            return;
        }
        // Generic acknowledgment
        const genericMsg = detected === 'BN' ? 'শুনতে পেয়েছি' : detected === 'HI' ? 'सुनाई दिया' : 'I heard: ' + raw;
        setFeedback(`Heard: "${raw}"`);
        speakVoiceResponse(genericMsg, ttsLang);
    };
    const startOmniVoice = async ()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const SpeechRecognition = undefined;
    };
    const stopOmniVoice = ()=>{
        if (recognitionRef.current) {
            try {
                recognitionRef.current.stop();
            } catch (e) {}
        }
        setIsListening(false);
    };
    const toggleListening = ()=>{
        if (isListening) {
            stopOmniVoice();
        } else {
            setTranscript('');
            setFeedback('Activating microphone pipeline...');
            startOmniVoice();
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isListening && transcript.trim()) {
            detectLanguageAndRespond(transcript);
        }
    }, [
        isListening,
        transcript
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[430px] bg-surface rounded-t-3xl sm:rounded-3xl p-5 border border-outline-variant shadow-2xl flex flex-col gap-4 max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-outline-variant pb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-11 h-11 rounded-2xl flex items-center justify-center transition-all ${isListening ? 'bg-red-600 text-white animate-bounce shadow-lg' : 'bg-primary-container text-on-primary'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined text-[26px]",
                                        children: "mic"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                    lineNumber: 303,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[17px] font-extrabold text-on-surface",
                                            children: "Universal Voice Assistant"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                            lineNumber: 309,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full inline-block mt-0.5",
                                            children: detectedLangDisplay
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                            lineNumber: 310,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                            lineNumber: 302,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined text-[22px]",
                                children: "close"
                            }, void 0, false, {
                                fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                lineNumber: 316,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                            lineNumber: 315,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                    lineNumber: 301,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between bg-surface-container-low px-3 py-2 rounded-xl border border-outline-variant text-[11px] font-bold",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-on-surface-variant flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-[16px]",
                                    children: "language"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                    lineNumber: 323,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Speech Dialect:"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                            lineNumber: 322,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setVoiceRecognitionLang('AUTO');
                                        setDetectedLangDisplay('🌐 Auto-Detecting Any Language');
                                    },
                                    className: `px-2 py-0.5 rounded-md transition-all ${voiceRecognitionLang === 'AUTO' ? 'bg-primary text-white shadow-xs' : 'bg-white text-on-surface-variant border border-outline-variant'}`,
                                    children: "Omni / Auto"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                    lineNumber: 327,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setVoiceRecognitionLang('BN');
                                        setDetectedLangDisplay('🇧🇩 বাংলা (Bengali Voice Mode)');
                                    },
                                    className: `px-2 py-0.5 rounded-md transition-all ${voiceRecognitionLang === 'BN' ? 'bg-primary text-white shadow-xs' : 'bg-white text-on-surface-variant border border-outline-variant'}`,
                                    children: "বাংলা"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setVoiceRecognitionLang('HI');
                                        setDetectedLangDisplay('🇮🇳 हिन्दी (Hindi Voice Mode)');
                                    },
                                    className: `px-2 py-0.5 rounded-md transition-all ${voiceRecognitionLang === 'HI' ? 'bg-primary text-white shadow-xs' : 'bg-white text-on-surface-variant border border-outline-variant'}`,
                                    children: "हिन्दी"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                    lineNumber: 341,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setVoiceRecognitionLang('EN');
                                        setDetectedLangDisplay('🇬🇧 English (Voice Mode)');
                                    },
                                    className: `px-2 py-0.5 rounded-md transition-all ${voiceRecognitionLang === 'EN' ? 'bg-primary text-white shadow-xs' : 'bg-white text-on-surface-variant border border-outline-variant'}`,
                                    children: "English"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                    lineNumber: 348,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                            lineNumber: 326,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                    lineNumber: 321,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-surface-container-low border border-outline-variant rounded-2xl p-4 flex flex-col items-center text-center gap-3 shadow-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: toggleListening,
                            className: `w-20 h-20 rounded-full flex flex-col items-center justify-center transition-all transform active:scale-95 shadow-md ${isListening ? 'bg-red-600 text-white ring-4 ring-red-300 animate-pulse' : 'bg-primary text-white hover:bg-primary/90'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-[36px]",
                                    children: isListening ? 'graphic_eq' : 'mic'
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                    lineNumber: 368,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold uppercase tracking-wider mt-0.5",
                                    children: isListening ? 'Listening...' : 'Tap to Talk'
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                    lineNumber: 371,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                            lineNumber: 360,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1 w-full",
                            children: [
                                transcript ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[15px] font-extrabold text-primary bg-white py-2.5 px-3 rounded-xl border border-outline-variant shadow-xs",
                                    children: [
                                        '"',
                                        transcript,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                    lineNumber: 378,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[12px] font-bold text-on-surface-variant px-2",
                                    children: feedback || 'Speak naturally in ANY language: English, Hindi, or Bengali! The app will automatically understand and respond.'
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                    lineNumber: 383,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                speakingResponse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-1 text-[11px] font-bold text-primary animate-pulse mt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-[16px]",
                                            children: "volume_up"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                            lineNumber: 389,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Responding aloud..."
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                            lineNumber: 390,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                    lineNumber: 388,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                            lineNumber: 376,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full pt-2.5 border-t border-outline-variant flex flex-col gap-1.5 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] uppercase font-bold text-on-surface-variant",
                                    children: "Instant Voice Simulator (1-Click Speak):"
                                }, void 0, false, {
                                    fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                    lineNumber: 397,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>detectLanguageAndRespond("টমেটো বিক্রি করব"),
                                            className: "text-[11px] font-bold bg-white hover:bg-emerald-50 text-primary border border-outline-variant px-2.5 py-1.5 rounded-lg transition-all active:scale-95 shadow-xs",
                                            children: '🇧🇩 বাংলা: "টমেটো বিক্রি"'
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                            lineNumber: 399,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>detectLanguageAndRespond("टमाटर बेचना है"),
                                            className: "text-[11px] font-bold bg-white hover:bg-emerald-50 text-primary border border-outline-variant px-2.5 py-1.5 rounded-lg transition-all active:scale-95 shadow-xs",
                                            children: '🇮🇳 हिन्दी: "टमाटर बेचना है"'
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                            lineNumber: 406,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>detectLanguageAndRespond("Sell 500 kg tomato"),
                                            className: "text-[11px] font-bold bg-white hover:bg-emerald-50 text-primary border border-outline-variant px-2.5 py-1.5 rounded-lg transition-all active:scale-95 shadow-xs",
                                            children: '🇬🇧 English: "Sell tomato"'
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                            lineNumber: 413,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>detectLanguageAndRespond("আজকের আলুর বাজার দর কত"),
                                            className: "text-[11px] font-bold bg-white hover:bg-emerald-50 text-primary border border-outline-variant px-2.5 py-1 rounded-lg transition-all active:scale-95",
                                            children: '🇧🇩 বাংলা: "আলুর দর"'
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                            lineNumber: 420,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>detectLanguageAndRespond("मंडी भाव दिखाओ"),
                                            className: "text-[11px] font-bold bg-white hover:bg-emerald-50 text-primary border border-outline-variant px-2.5 py-1 rounded-lg transition-all active:scale-95",
                                            children: '🇮🇳 हिन्दी: "मंडी भाव"'
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                            lineNumber: 427,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                    lineNumber: 398,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                            lineNumber: 396,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                    lineNumber: 359,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-bold text-secondary uppercase tracking-wider px-1",
                            children: "Or Tap Action Directly"
                        }, void 0, false, {
                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                            lineNumber: 440,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        quickActions.map((action)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    onSelectAction(action.key);
                                    onClose();
                                },
                                className: "p-3 bg-surface-container-lowest hover:bg-surface-container-low border border-outline-variant rounded-2xl flex items-center gap-3 text-left transition-all active:scale-98 shadow-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-xl bg-surface-container-high text-primary flex items-center justify-center shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-[22px]",
                                            children: action.icon
                                        }, void 0, false, {
                                            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                            lineNumber: 453,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                        lineNumber: 452,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[14px] font-bold text-on-surface",
                                                children: action.label
                                            }, void 0, false, {
                                                fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                                lineNumber: 456,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-on-surface-variant truncate font-medium",
                                                children: action.desc
                                            }, void 0, false, {
                                                fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                                lineNumber: 457,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                        lineNumber: 455,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, action.key, true, {
                                fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                                lineNumber: 444,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
                    lineNumber: 439,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
            lineNumber: 298,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/pwa/src/components/PredefinedHelpModal.tsx",
        lineNumber: 297,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/apps/pwa/src/data/mockData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/apps/pwa/src/data/translations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/apps/pwa/src/services/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "getStoredProduce",
    ()=>getStoredProduce,
    "saveProduce",
    ()=>saveProduce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/pwa/src/data/mockData.ts [app-ssr] (ecmascript)");
;
// Browser storage fallback for PWA offline execution
const STORAGE_KEYS = {
    PRODUCE: 'farm2flow_produce_items',
    ORDERS: 'farm2flow_orders',
    PENDING_SYNC: 'farm2flow_pending_sync'
};
const getStoredProduce = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initialProduceList"];
    //TURBOPACK unreachable
    ;
    const stored = undefined;
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return created;
};
const deleteProduce = (produceId)=>{
    const current = getStoredProduce();
    const updated = current.filter((p)=>p.id !== produceId);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return updated;
};
const getDemandForecast = (cropName)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockForecasts"][cropName] || {
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return newOrder;
};
const getOrders = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initialOrders"];
    //TURBOPACK unreachable
    ;
    const stored = undefined;
};
const getLogisticsOptimization = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockLogisticsData"];
};
const getImpactMetrics = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$pwa$2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockImpactMetrics"];
};
}),
];

//# sourceMappingURL=apps_pwa_src_1ziovv5._.js.map