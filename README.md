# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
	// other rules...
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json', './tsconfig.node.json'],
		tsconfigRootDir: __dirname,
	},
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# reCAT

## Project configuration

1. Husky

> https://www.npmjs.com/package/husky

2. Prettier

> https://prettier.io/docs/en/install

> Rules
>
> > ```
> > {
> > "useTabs": true,
> > "semi": false,
> > "trailingComma": "es5",
> > "singleQuote": true,
> > "quoteProps": "consistent",
> > "bracketSpacing": true,
> > "bracketSameLine": true,
> > "arrowParens": "always",
> > "htmlWhitespaceSensitivity": "css"
> > },
> > ```

3. Testing library:

> https://www.npmjs.com/package/@testing-library/react
> npm install --save-dev @testing-library/react

4. Vitest:

   > https://vitest.dev/guide/

5. React router:
   > https://reactrouter.com/en/main/start/tutorial
   > npm install react-router-dom
