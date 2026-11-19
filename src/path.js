// TP: path traversal
const fs = require("fs");
function readFile(name) { return fs.readFileSync("./uploads/" + name, "utf8"); }
module.exports = { readFile };
