import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./mydatabase.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Conexão bem-sucedida com o banco de dados SQLite');
  }
});

export { db };
