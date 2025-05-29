import type { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { randomUUID } from 'node:crypto'
import { z } from 'zod'

export async function transactionsRoutes(app: FastifyInstance) {
  app.post('/', async (request, replay) => {
    const createTransactionsSchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })

    const { title, amount, type } = createTransactionsSchema.parse(request.body)

    await knex('transaction').insert({
      id: randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
    })

    return replay.status(201).send()
  })
}

/**
 * Como todas as rotas teram /transactions
 * Podemos usar uma das config do fastify
 * no register, podemos passar outro parametro
 * (nome da F, {
 *    prefix: 'transactions'
 * })
 *
 * como criamos uma nova trans
 * usamos o post
 * e para consegui os dados, usamos o body
 * e onde conseguimos ele?
 * --no request.body(sempre sera um ob)
 * Porem o body, esta como any e nao gostamos disso
 *
 * Dessa forma com o zod podemos validas os dados e o body ira receber os dados corretos
 *
 * vamos inserir os dados no banco
 */
