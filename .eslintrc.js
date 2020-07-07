module.exports = {
	'env': {
		'browser': true,
		'es2020': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 11,
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		"no-tabs": 0,
		"max-len": [ "error", { "code": 100, "comments": 100, "tabWidth": 4 } ],
		"arrow-parens": [ "error", "as-needed" ],
		"comma-dangle": [ "error", "never" ],
		"object-curly-spacing": [
			"error",
			"always"
		],
		"space-in-parens": [
			"error",
			"always"
		],
		"array-bracket-spacing": [
			"error",
			"always"
		]
	}
};
