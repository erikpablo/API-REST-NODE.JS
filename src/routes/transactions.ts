import type { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { randomUUID } from 'node:crypto'
import { z } from 'zod'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const transactions = await knex('transaction').select()

    return { transactions }
  })

  app.get('/:id', async (request) => {
    const createFilterTransactionSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = createFilterTransactionSchema.parse(request.params)

    const transaction = await knex('transaction').where('id', id).first()
    // esperamos que so tenha um trans com esse id, o first diz so temos um resultado

    return { transaction }
  })

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
