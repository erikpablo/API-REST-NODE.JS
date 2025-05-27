import fastify from 'fastify'

const app = fastify()

// GET POST PUT DELETE PATCH

//  http://localhost:3333/hello

app.get('/hello', () => {
  return 'hello world'
})

// Chamando o servidor para escutar na porta 3333
// o listen vai retorna um Promise, e por isso usamos o then para da um console.log

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is running')
  })
