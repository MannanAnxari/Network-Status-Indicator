import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import vue from "rollup-plugin-vue";

const createConfig = (input, output, format = "esm") => ({
  input,
  output: [
    {
      file: `dist/${output}.${format === "esm" ? "esm.js" : "js"}`,
      format,
      sourcemap: true,
      name: "NetworkStatusIndicator",
      globals: {
        react: "React",
        vue: "Vue",
      },
    },
    {
      file: `dist/${output}.min.${format === "esm" ? "esm.js" : "js"}`,
      format,
      sourcemap: true,
      name: "NetworkStatusIndicator",
      globals: {
        react: "React",
        vue: "Vue",
      },
      plugins: [terser()], // Minify output
    },
  ],
  plugins: [
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
    }),
    typescript({
      tsconfig: "./tsconfig.json",
      clean: true,
    }),
    vue(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
      extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
      presets: ["@babel/preset-react", "@babel/preset-env"],
    }),
    commonjs(),
  ],
  external: ["react", "vue"],
});

export default [
  // Main bundle
  createConfig("src/index.js", "index"),
  createConfig("src/index.js", "index", "cjs"),

  // React
  createConfig("src/react.jsx", "react"),
  createConfig("src/react.jsx", "react", "cjs"),

  // Next.js
  createConfig("src/nextjs.jsx", "nextjs"),
  createConfig("src/nextjs.jsx", "nextjs", "cjs"),

  // Vue
  createConfig("src/vue.vue", "vue"),
  createConfig("src/vue.vue", "vue", "cjs"),

  // Vanilla
  createConfig("src/vanilla.js", "vanilla"),
  createConfig("src/vanilla.js", "vanilla", "cjs"),
];
