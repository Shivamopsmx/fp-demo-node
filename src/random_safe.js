// FP: Math.random flagged, but only used to pick a UI colour
function pickColor() { return ["red", "green", "blue"][Math.floor(Math.random() * 3)]; }
module.exports = { pickColor };
