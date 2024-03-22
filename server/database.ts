import sqlite3 from 'sqlite3';
import { resolve, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..')
const dbPath = join(__dirname, 'db', 'app.db')

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Conexão bem-sucedida com o banco de dados SQLite');
  }
});

export { db };
