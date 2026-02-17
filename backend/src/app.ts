import 'reflect-metadata'
import { ApolloServer } from '@apollo/server'
import fastifyApollo, {
	fastifyApolloDrainPlugin
} from '@as-integrations/fastify'
import cors from '@fastify/cors'
import fastify from 'fastify'
import { buildSchema } from 'type-graphql'
import { env } from './env'
import { CategoryResolver } from './resolvers/category.resolver'
import { TransactionResolver } from './resolvers/transaction.resolver'
import { UserResolver } from './resolvers/user.resolver'

async function bootstrap() {
	const app = fastify()

	app.register(cors, {
		origin: env.CORS_ORIGIN
	})

	const schema = await buildSchema({
		resolvers: [UserResolver, CategoryResolver, TransactionResolver],
		validate: false,
		emitSchemaFile: './schema.graphql'
	})

	const apollo = new ApolloServer({
		schema,
		plugins: [fastifyApolloDrainPlugin(app)]
	})

	await apollo.start()

	await app.register(fastifyApollo(apollo))

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
