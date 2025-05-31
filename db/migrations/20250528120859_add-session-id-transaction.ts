import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('transaction', (table) => {
    table.uuid('session_id').after('id').index()
  })

  /**
   * essa tabela seria para add um novo campo a migration
   * after diz que ser apos o campo passado
   * index diz que, 'Olha isso vai ser usado batante fica esperto'
   */
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('transaction', (table) => {
    table.dropColumn('session_id')
  })
}
