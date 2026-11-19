// TP: Math.random used for a security token
function resetToken() { return Math.random().toString(36).slice(2); }
module.exports = { resetToken };
