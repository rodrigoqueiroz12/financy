import type { UserModel } from 'generated/prisma/models'
import { Arg, Mutation, Query, Resolver, UseMiddleware } from 'type-graphql'
import { CreateTransaction } from '@/dtos/create-transaction.dto'
import { UpdateTransaction } from '@/dtos/update-transaction.dto'
import { GraphqlUser } from '@/graphql/decorators/user.decorator'
import { auth } from '@/middlewares/auth.middleware'
import { TransactionModel } from '@/models/transaction.model'
import { TransactionService } from '@/services/transaction.service'

@Resolver(() => TransactionModel)
@UseMiddleware(auth)
export class TransactionResolver {
	private transactionService = new TransactionService()

	@Mutation(() => TransactionModel)
	async create(
		@GraphqlUser() user: UserModel,
		@Arg('categoryId', () => String) categoryId: string,
		@Arg('data', () => CreateTransaction) data: CreateTransaction
	): Promise<TransactionModel> {
		return await this.transactionService.create(user.id, categoryId, data)
	}

	@Mutation(() => TransactionModel)
	async update(
		@GraphqlUser() user: UserModel,
		@Arg('id', () => String) id: string,
		@Arg('data', () => UpdateTransaction) data: UpdateTransaction
	): Promise<TransactionModel> {
		return await this.transactionService.update(user.id, id, data)
	}

	@Mutation(() => Boolean)
	async delete(
		@GraphqlUser() user: UserModel,
		@Arg('id', () => String) id: string
	): Promise<boolean> {
		await this.transactionService.delete(user.id, id)
		return true
	}

	@Query(() => [TransactionModel])
	async list(@GraphqlUser() user: UserModel): Promise<TransactionModel[]> {
		return await this.transactionService.findManyByUserId(user.id)
	}

	@Query(() => TransactionModel)
	async get(
		@GraphqlUser() user: UserModel,
		@Arg('id', () => String) id: string
	): Promise<TransactionModel> {
		return await this.transactionService.findById(user.id, id)
	}
}
