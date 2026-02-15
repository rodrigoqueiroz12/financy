import cors from '@fastify/cors'
import fastify from 'fastify'
import { env } from './env'

const app = fastify()

app.register(cors, {
	origin: env.CORS_ORIGIN
})

export { app }
