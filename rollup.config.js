import babel from "rollup-plugin-babel";
import fs from "fs";
import nodeResolve from "rollup-plugin-node-resolve";
import copyIndex from "./plugins/copyIndex";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";

export default {
  input: "src/client/index.js",
  output: {
    format: "umd",
    entryFileNames: "client-[hash].js",
    dir: "dist",
    name: "test",
    globals: {
      react: "React",
      "react-dom": "ReactDOM"
    }
  },
  external:
    process.env.NODE_ENV === "development" ? [] : ["react", "react-dom"],
  plugins: [
    replace({
      "process.env.NODE_ENV": `'${process.env.NODE_ENV}'`
    }),
    nodeResolve(),
    babel({
      babelrc: false,
      include: "src/**",
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-react"]
    }),
    commonjs(),
    copyIndex({
      index: "src/client/index.html",
      CDN_PATH: process.env.CDN_PATH
    })
  ]
};
