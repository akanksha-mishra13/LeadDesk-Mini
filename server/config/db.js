const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const db = new sqlite3.Database(
  path.join(__dirname, "../database/leaddesk.db"),
  (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("✅ SQLite Connected");

      db.run(`
        CREATE TABLE IF NOT EXISTS leads(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          budget TEXT NOT NULL,
          message TEXT NOT NULL,
          status TEXT DEFAULT 'New',
          createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);

      db.run(`
        CREATE TABLE IF NOT EXISTS admins(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT UNIQUE,
          password TEXT
        )
      `);
    }
  }
);

module.exports = db;