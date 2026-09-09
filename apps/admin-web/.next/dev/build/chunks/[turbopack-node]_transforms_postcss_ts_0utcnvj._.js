module.exports = [
"[turbopack-node]/transforms/postcss.ts?config=[project]/apps/admin-web/postcss.config.js { CONFIG => \"[project]/apps/admin-web/postcss.config.js_.loader.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/1jh-_0m_lq1y._.js",
  "chunks/[root-of-the-server]__1fbg0l1._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts?config=[project]/apps/admin-web/postcss.config.js { CONFIG => \"[project]/apps/admin-web/postcss.config.js_.loader.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];