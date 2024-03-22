import { FastifyInstance } from 'fastify'

export async function loginRoutes(app: FastifyInstance) {
  app.get('/', (request, reply) => {
    reply.send('hello world!')
  })
}