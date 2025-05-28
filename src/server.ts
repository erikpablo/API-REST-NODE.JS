import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'

const app = fastify()

// GET POST PUT DELETE PATCH
//  http://localhost:3333/hello

app.get('/hello', async () => {
  const transaction = knex('transaction').where('amount', 1000).select('*')

  return transaction
})

/**
 * Criamos a const transction
 * Pegamos nossa tabela criada transaction
 * e damos um insert({}) para inserir uma nova transicao
 * Porem, para returna todos os dados usamos o
 * returning('*') para retorna todos
 * Para pegar os dados que ja consta
 * usamos o .select('*')
 *
 * e se quisemos filtra usamos o where
 */

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is running')
  })
