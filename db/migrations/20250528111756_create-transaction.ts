import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transaction', table => {
    table.uuid('id').primary()
    table.text('title').notNullable()
    table.decimal('amount', 10, 2).notNullable()
    table.timestamp('Created_at').defaultTo(knex.fn.now()).notNullable()
  })

  /**
   * await para aguarda
   * createTable para cria a tabela
   * onde ira receber o nome da tabela transaction
   * e um  segundo paramtro que seria uma funcao onde iria cria os compas
   * sendo passado o parametro table para a funcao
   * e teremos acesso aos tipos de dados da tabela
   * como id, text, data, int
   */
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transaction')
  /**
   * Para desfazer a criacao da tabela
   *
   */
}

/**
 * npm run dev knex migrate:latest
 * agora como validas os dados?
 * npm run dev knex migrate:rollback
 * para desfazer a migration(sem ter subido para producao) para poder alterar o nome
 *
 */
