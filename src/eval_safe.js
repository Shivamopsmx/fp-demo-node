// FP: eval flagged, but the input is validated to digits and operators only
function calc(expr) {
  if (!/^[0-9+\-*/ ().]+$/.test(expr)) throw new Error("bad input");
  return eval(expr);
}
module.exports = { calc };
