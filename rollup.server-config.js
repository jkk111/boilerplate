import babel from "rollup-plugin-babel";
import json from "rollup-plugin-json";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";

export default {
  input: "src/server/index.js",
  output: {
    format: "cjs",
    file: "dist/server.js",
    name: "test"
  },
  external: [
    "express",
    "stream",
    "crypto",
    "string_decoder",
    "buffer",
    "zlib",
    "util",
    "fs",
    "path",
    "querystring",
    "net",
    "events",
    "tty",
    "http",
    "url"
  ],
  plugins: [
    json(),
    commonjs(),
    nodeResolve({ preferBuiltins: true }),
    babel({
      babelrc: false,
      include: "src/**",
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-react"]
    })
  ],
  onwarn: message => {
    if (message.code === "EVAL" || message.code === "CIRCULAR_DEPENDENCY") {
      return;
    }
    console.log(message);
  }
};
