// TP: reflected XSS
function greet(req, res) { res.send("<h1>Hello " + req.query.name + "</h1>"); }
module.exports = { greet };
