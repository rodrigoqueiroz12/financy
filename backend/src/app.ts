import 'reflect-metadata'
import { ApolloServer } from '@apollo/server'
import {
	fastifyApolloDrainPlugin,
	fastifyApolloHandler
} from '@as-integrations/fastify'
import cors from '@fastify/cors'
import fastify from 'fastify'
import { buildSchema } from 'type-graphql'
import { env } from './env'
import { context } from './graphql/context'
import { AuthResolver } from './resolvers/auth.resolver'
import { CategoryResolver } from './resolvers/category.resolver'
import { TransactionResolver } from './resolvers/transaction.resolver'
import { UserResolver } from './resolvers/user.resolver'

async function bootstrap() {
	const app = fastify()

	app.register(cors, {
		origin: env.CORS_ORIGIN
	})

	const schema = await buildSchema({
		resolvers: [
			AuthResolver,
			UserResolver,
			CategoryResolver,
			TransactionResolver
		],
		validate: false,
		emitSchemaFile: './schema.graphql'
	})

	const apollo = new ApolloServer({
		schema,
		plugins: [fastifyApolloDrainPlugin(app)]
	})

	await apollo.start()

	app.post(
		'/graphql',
		fastifyApolloHandler(apollo, {
			context
		})
	)

	app.listen(
		{
			port: env.APP_PORT
		},
		(_err, address) => {
			console.log(`🚀 Server ready at: ${address}`)
		}
	)
}

bootstrap()
