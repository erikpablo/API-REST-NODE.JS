import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

export const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection:
    env.DATABASE_CLIENT === 'sqlite'
      ? {
          filename: env.DATABASE_URL,
        }
      : env.DATABASE_URL,
  useNullAsDefault: true, // para evitar problemas com campos nulos
  migrations: {
    extension: 'ts', // para usar migrations em typescript,
    directory: './db/migrations', // onde vamos salvar as migrations
  },
}

export const knex = setupKnex(config)
