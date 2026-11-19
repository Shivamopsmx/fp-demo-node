// FP: query built with concatenation, but only a constant and a placeholder
function findUser(db, name) {
  const base = "SELECT * FROM users WHERE name = ";
  return db.query(base + "?", [name]);
}
module.exports = { findUser };
