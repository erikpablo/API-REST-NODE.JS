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

  app.get('/summary', async () => {
    const summary = await knex('transaction')
      .sum('amount', { as: 'amount' })
      .first()

    return { summary }
  })

  app.post('/', async (request, reply) => {
    const createTransactionsSchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })

    const { title, amount, type } = createTransactionsSchema.parse(request.body)

    let sessionId = request.cookies.sessionId
    if (!sessionId) {
      sessionId = randomUUID()

      reply.cookie('sessionId', sessionId, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })
    }

    await knex('transaction').insert({
      id: randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
      session_id: sessionId,
    })

    return reply.status(201).send()
  })
}
