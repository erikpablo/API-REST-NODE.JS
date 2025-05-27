import { knex as setupKnex } from 'knex'

/**
 * importamos o knex
 *
 * exportamos a const
 * --onde a mesma ira receber dois dados obrigadorios
 * --o primeiro e o nome do banco de dados
 * ---O cliente: sqlite3
 * --o segundo e o objeto de configuracao
 * ---connection = precisa ter informacoes sobre a conexao
 * ----Todos recebem muitos dados, porem o sqlite3
 *----recebe apenas o nome do arquivo do banco de dados
 * -----filename onde vamos salvar o banco
 *
 */

export const knex = setupKnex({
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db',
  },
})
/**
 * exportamos o knex
 * --para que possamos usar em outros arquivos
 * --e assim fazer as consultas no banco de dados
 *
 * --o knex e um objeto que possui varios metodos
 * --para fazer consultas no banco de dados
 * --como: select, insert, update, delete, etc.
 */
