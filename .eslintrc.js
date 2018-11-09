// https://eslint.org/docs/user-guide/configuring

module.exports = {
    extends: [
        'airbnb-base',
    ],
    plugins: [
        'import',
    ],
    env: {
        browser: true,
        mocha: true,
    },
    rules: {
        'indent': ['error', 4, {
            'SwitchCase': 1
        }],
        'arrow-body-style': ['error', 'as-needed', {'requireReturnForObjectLiteral': true }],
        'no-multiple-empty-lines': ['error', { 'max': 1 }],
        'no-use-before-define': ['error', 'nofunc'],
        'import/prefer-default-export': ['off'],
        'no-underscore-dangle': ['off'],
        'function-paren-newline': ['error', 'consistent']
    }
};
