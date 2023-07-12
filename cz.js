// config/cz.js
/** @type {import('czg').CommitizenGitOptions} */
module.exports = {
    maxSubjectLength: 100,
    scopes: [
        "config",
        "core",
        "docs",
        "landing-page",
        "packages",
        "scripts",
        "apps",
        "test",
        "types",
        "utils",
    ],
    enableMultipleScopes: true,
    markBreakingChangeMode: true,
}