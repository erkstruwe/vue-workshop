module.exports = {
    root: true,
    env: {
        node: true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
    ],
    rules: {
        indent: ["error", 4, {SwitchCase: 1}],
        quotes: ["error", "double"],
        semi: ["error", "never"],
        "comma-dangle": ["error", "always-multiline"],

        "vue/script-indent": ["error", 4, {baseIndent: 1}],
    },
    parserOptions: {
        parser: "babel-eslint",
    },
    overrides: [
        {
            files: [
                "**/*.spec.js",
            ],
            env: {
                jest: true,
            },
        },
        {
            files: ["*.vue"],
            rules: {
                indent: "off",
            },
        },
    ],
}
