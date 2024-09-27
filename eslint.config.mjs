import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

import prettierConfig from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    {
        ignores: [
            'stubs/**.*',
            'stubs/**/**.*',
            'src/index.tsx',
            '**.config.js',
            'src/components/ui/**.tsx'
        ],
    },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        plugins: {
            prettier: pluginPrettier,
        },
    },
    {
        rules: {
            ...prettierConfig.rules,
            'prettier/prettier': 'error',
        },
    },
];
