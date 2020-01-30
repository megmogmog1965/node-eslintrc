module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        // https://eslint.org/docs/rules/#possible-errors
        // using "eslint:recommended".

        // https://eslint.org/docs/rules/#best-practices
        "curly": "error",
        "eqeqeq": "error",
        "indent": ["error", 2],

        // https://eslint.org/docs/rules/#variables

        // https://eslint.org/docs/rules/#node-js-and-commonjs

        // https://eslint.org/docs/rules/#stylistic-issues
        "array-bracket-spacing": "error",
        "block-spacing": "error",
        "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
        "comma-spacing": "error",
        "func-call-spacing": "error",
        "key-spacing": "error",
        "keyword-spacing": "error",
        "linebreak-style": ["error", "unix"],
        "no-trailing-spaces": "error",
        "quotes": ["error", "single"],
        "semi": "error",
        "semi-spacing": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": "error",
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": "error",

        // https://eslint.org/docs/rules/#ecmascript-6
        "no-var": "error",
        "prefer-const": "error"
    }
};
