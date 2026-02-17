import type { FastifyReply, FastifyRequest } from 'fastify'
import { type Payload, verify } from '@/utils/jwt'

export type GraphqlContext = {
	user: string | undefined
	token: string | undefined
	req: FastifyRequest
	res: FastifyReply
}

export const context = async ({
	req,
	res
}: {
	req: FastifyRequest
	res: FastifyReply
}): Promise<GraphqlContext> => {
	const authHeader = req.headers.authorization
	let user: string | undefined
	let token: string | undefined

	if (authHeader?.startsWith('Bearer ')) {
		token = authHeader.substring('Bearer '.length)

		try {
			const payload = verify(token) as Payload

			user = payload.id
		} catch (error) {
			console.error(error)
		}
	}

	return { user, token, req, res }
}
