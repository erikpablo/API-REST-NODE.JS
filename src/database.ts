import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true, // para evitar problemas com campos nulos
  migrations: {
    extension: 'ts', // para usar migrations em typescript,
    directory: './db/migrations', // onde vamos salvar as migrations
  },
}

export const knex = setupKnex(config)
