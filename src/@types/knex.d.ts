import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    transaction: {
      id: string
      title: string
      amount: number
      created_at: string
      session_id?: string
    }
  }
}

/**
 * Quando precisamos sobrecerver um tipo
 * que vende dentro de uma bliblioteca
 *
 * PRIMEIRA coisa
 * temos que importa ela
 */
