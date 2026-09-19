import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

/** @type {import("eslint").Linter.Config[]} */
const config = [
  { ignores: [".next/**", "node_modules/**", "out/**", "next-env.d.ts"] },
  ...coreWebVitals,
  ...typescript,
  {
    rules: {
      // This rule targets the old `pages/_document.js` model. Fonts here are
      // loaded from a <link> in the App Router root layout, which applies
      // site-wide. See the note at the top of src/app/layout.tsx.
      "@next/next/no-page-custom-font": "off",
    },
  },
];

export default config;
