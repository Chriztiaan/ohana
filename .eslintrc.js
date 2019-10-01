module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/recommended',
		'@vue/prettier',
		'@vue/typescript'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'@typescript-eslint/no-use-before-define': ['error', { functions: false }],
		'@typescript-eslint/no-explicit-any': 'off',
		'vue/no-deprecated-scope-attribute': 'error'
	},
	parserOptions: {
		parser: '@typescript-eslint/parser'
	}
};
