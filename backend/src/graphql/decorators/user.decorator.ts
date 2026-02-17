import { createParameterDecorator, type ResolverData } from 'type-graphql'
import { prisma } from '@/lib/prisma'
import type { UserModel } from '@/models/user.model'
import type { GraphqlContext } from '../context'

export const GraphqlUser = () => {
	return createParameterDecorator(
		async ({
			context
		}: ResolverData<GraphqlContext>): Promise<UserModel | null> => {
			if (!context?.user) return null

			try {
				const user = await prisma.user.findUnique({
					where: {
						id: context.user
					}
				})

				if (!user) throw new Error('Usuário não encontrado')

				return user
			} catch (error) {
				console.log(error)

				return null
			}
		}
	)
}
