import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const db = new sqlite3.Database(join(__dirname, 'quotes.db'));

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS quotes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    company TEXT,
    origin TEXT,
    destination TEXT,
    serviceType TEXT NOT NULL,
    cargoType TEXT,
    weight TEXT,
    dimensions TEXT,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

export const saveQuote = (quoteData) => {
  return new Promise((resolve, reject) => {
    const stmt = db.prepare(`INSERT INTO quotes (
      name, email, phone, company, origin, destination, 
      serviceType, cargoType, weight, dimensions, description
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
    
    stmt.run([
      quoteData.name,
      quoteData.email,
      quoteData.phone,
      quoteData.company,
      quoteData.origin,
      quoteData.destination,
      quoteData.serviceType,
      quoteData.cargoType,
      quoteData.weight,
      quoteData.dimensions,
      quoteData.description
    ], function(err) {
      if (err) {
        reject(err);
      } else {
        resolve(this.lastID);
      }
    });
    stmt.finalize();
  });
};

export default db;