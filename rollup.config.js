import json from '@rollup/plugin-json';
import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
import postcss from 'rollup-plugin-postcss'
import resolve from "rollup-plugin-node-resolve";
import cleanup from 'rollup-plugin-cleanup';

const input = "./src/index.js";
const outputDir = "./dist";

export default [
  // CommonJS
  {
    input,
    output: {
      // file: packageJSON.main,
      dir: outputDir,
      format: "cjs",
      inlineDynamicImports: true
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
        presets: ['@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-optional-chaining']
      }),
      commonjs(),
      resolve(),
      json(),
      cleanup(),
      postcss({
        plugins: []
      })  
    ]
  }
];