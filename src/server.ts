import fastify from 'fastify'
import { env } from './env'
import cookie from '@fastify/cookie'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

// GET POST PUT DELETE PATCH
//  http://localhost:3333/hello

app.register(cookie) // antes das rotas, pois vamos trabalha nas rotas
app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Server is running')
  })
