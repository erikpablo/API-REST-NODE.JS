import { config } from './src/database'

export default config

/**
 * Porem mesmo falando onde esta o banco de dados
 * --o knex nao cria o banco de dados
 * ---pois ele nao suporta ts sem uma das blibliotecas e
 * ---para isso teriamos que tira o tsx
 * ----
 * No scripts do package.json
 * knex: node --loader tsx ./node-modules/.bin/knex
 * --loader = para carregar o tsx
 * --e passamos o caminho do binario do knex
 *
 * quando usamos npm run knex -h
 * o run acha que o h é para ele
 * para passar o parametro para o knex usamos o -- -h
 * ..........
 * usamos o knex para criar as migrations
 * npm run knex -- migrate:make create-documentes
 * .........
 *
 */
