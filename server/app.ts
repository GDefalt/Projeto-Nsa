import fastify from "fastify"
import { loginRoutes } from "./routes/login"

export const app = fastify()

app.register(loginRoutes, {
  prefix: 'api/login'
})