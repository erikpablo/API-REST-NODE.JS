import { expect, test, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test('O usuario conseque criar uma nova transação', async () => {
  await request(app.server)
    .post('/transactions')
    .send({
      title: 'New transaction',
      amount: 5000,
      type: 'credit',
    })
    .expect(201)
})

/**
 * Podemos usar feramenta para teste
 * Podemos fazer teste sem colocar a aplicação no ar
 *
 * npm i supertest -D
 * tudo para teste é como D
 *
 * Separando o app.ts do server
 * dessa forma podemos usar o app sem precisar usar o lister no server
 * app fica config para cria a aplicação e server fica o nosso serve kkk
 *
 * supertest nao suporta o ts, entao usamos o @types/supertest -D
 *
 * --Inicianmdo os testes
 * como nao retorna nada usamos request
 * que seria o supertest, onde ele deve receber o app.serve
 * que seria o serve Http do node
 * onde passamos o metodo post, passando a rota
 * usanso o send para enviar um objeto json com os dados da criacao
 *
 * dessa forma passando para o expect, ziemos que
 * eu quero que meu response.statusCode seja igual a 201
 * podemos usar colado
 *
 * beforeAll
 * diz o seguinte, antes de continua, quero que aguarde o app.ready()
 *
 * afterAll
 * apos finalizar o teste feche aplicação
 */
