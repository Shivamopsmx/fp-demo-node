// FP: innerHTML-style output flagged, but the value is HTML-escaped first
function esc(s) { return String(s).replace(/[&<>"']/g, c => "&#" + c.charCodeAt(0) + ";"); }
function greet(req, res) { res.send("<h1>Hello " + esc(req.query.name) + "</h1>"); }
module.exports = { greet };
