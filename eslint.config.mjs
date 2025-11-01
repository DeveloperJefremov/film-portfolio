import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});
const eslintConfig = [
	...compat.config({
		extends: ['next', 'next/core-web-vitals', 'prettier'],
		rules: {
			'no-console': ['warn'],
			// 'no-unused-vars': ['warn'],
			'no-inner-declarations': ['error', 'functions'],
			'prefer-arrow-callback': 'error',
			'prefer-template': ['warn'],
		},
	}),
];
export default eslintConfig;
