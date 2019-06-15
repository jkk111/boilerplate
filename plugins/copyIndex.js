import util from "util";
import path from "path";
import fs from "fs";

const required = variable => {
  throw new Error(util.format("Missing Required Variable '%s'", variable));
};

const copyIndex = (options = {}) => {
  const {
    CDN_PATH = "",
    index = required("index"),
    name = "index.html"
  } = options;
  return {
    name: "copyIndex",
    generateBundle: (opts, bundle) => {
      const outputName = path.join(path.resolve(opts.dir), name);
      const fileName = Object.keys(bundle)[0];

      let html = fs.readFileSync(index, "utf8");
      html = html.replace(/CDN_PATH/g, CDN_PATH);
      html = html.replace(/FILE_NAME/g, fileName);
      fs.writeFileSync(outputName, html);
    }
  };
};

export default copyIndex;
