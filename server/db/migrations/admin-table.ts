import { db } from "../../database";

const createAdminsTable = /*sql*/`
  CREATE TABLE IF NOT EXISTS admin (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    password TEXT NOT NULL,
    avatar TEXT
  )
`

db.run(createAdminsTable, (err: Error) => {
  if(err) {
    console.error(err.message);
  } else {
    console.log('tabela de usuários criada com sucesso')
  }
})

db.close((err) => {
  if (err) {
    console.error('Erro ao fechar a conexão com o banco de dados:', err.message);
  } else {
    console.log('Conexão com o banco de dados SQLite encerrada');
  }
});
