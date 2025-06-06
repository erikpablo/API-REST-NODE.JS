import { it, beforeAll, afterAll, describe, expect } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

describe('transactions routes', async () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  // deve ser possivel fazer x coisa

  it('should be able to create a new transaction', async () => {
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 5000,
        type: 'credit',
      })
      .expect(201)
  })

  it('should be able to list all transactions', async () => {
    const createTransactionResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 5000,
        type: 'credit',
      })

    const cookies = createTransactionResponse.get('Set-Cookie')
    const listTransactionsResponse = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies ?? [])
      .expect(200)

    expect(listTransactionsResponse.body.transactions).toEqual([
      expect.objectContaining({
        title: 'New transaction', // falamos o seguinte, esperamos que tenha tais dados
        amount: 5000,
      }),
    ])
  })
})

/**
 * Podemos usar o .skip, ele ira pular o teste que passamos ele
 * .todo, usado para lembra de testa mais tarde
 * .only, ira rodar somente o teste que passamos ele
 *
 * REGRA
 * -Jamais, escrever um teste que depende de outro teste
 *
 * Dessa forma para pegar o cookie
 * criamos a transacao dentro da que queremos lista
 *
 * usamos o set para enivar a solicitacao
 */
