// FP: file read flagged, but the name is resolved and checked to stay inside the base directory
const fs = require("fs"), path = require("path");
function readFile(name) {
  const p = path.resolve("./uploads", name);
  if (!p.startsWith(path.resolve("./uploads") + path.sep)) throw new Error("bad path");
  return fs.readFileSync(p, "utf8");
}
module.exports = { readFile };
