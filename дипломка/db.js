const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./users.db");

const init = () => {
  return new Promise((res, rej) => {
    db.run(
      `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT,
      password TEXT
  )`,
      (err, row) => {
        if (err) rej(err);
        else res();
      }
    );
  });
};

// Функция для получения пользователя из базы данных по имени пользователя
function getUserByEmail(username) {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM users WHERE email = ?", [username], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}

function getAllUsers() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM users", (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}

exports.init = init
exports.db = db
exports.getUserByEmail = getUserByEmail
exports.getAllUsers = getAllUsers
