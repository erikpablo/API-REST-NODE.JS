import type { FastifyReply, FastifyRequest } from 'fastify'

export async function checkSessionIdExist(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const sessionId = request.cookies.sessionId

  if (!sessionId) {
    return reply.status(401).send({
      error: 'Unauthorized',
    })
  }
}

/**
 * Middlewares, sao intercepitadores
 * -- Ira verificar, caso nao de erro pode passar
 * com O preHandler
 * -- Ele diz, execute antes do handler
 * quem é handler? o restando da rota
 * ---usando ele depois de passar a rota
 *
 *
 */
