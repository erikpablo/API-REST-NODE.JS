import 'dotenv/config'
import { knex as setupKnex, Knex } from 'knex'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL env not found.')
}

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: process.env.DATABASE_URL,
  },
  useNullAsDefault: true, // para evitar problemas com campos nulos
  migrations: {
    extension: 'ts', // para usar migrations em typescript,
    directory: './db/migrations', // onde vamos salvar as migrations
  },
}

export const knex = setupKnex(config)
