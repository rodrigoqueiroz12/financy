import type { UserModel } from 'generated/prisma/models'
import {
	Arg,
	FieldResolver,
	Int,
	Mutation,
	Query,
	Resolver,
	Root,
	UseMiddleware
} from 'type-graphql'
import { CreateTransaction } from '@/dtos/create-transaction.dto'
import { UpdateTransaction } from '@/dtos/update-transaction.dto'
import { GraphqlUser } from '@/graphql/decorators/user.decorator'
import { auth } from '@/middlewares/auth.middleware'
import { CategoryModel } from '@/models/category.model'
import { TransactionModel } from '@/models/transaction.model'
import { CategoryService } from '@/services/category.service'
import { TransactionService } from '@/services/transaction.service'

@Resolver(() => TransactionModel)
@UseMiddleware(auth)
export class TransactionResolver {
	private transactionService = new TransactionService()
	private categoryService = new CategoryService()

	@FieldResolver(() => CategoryModel)
	async category(
		@GraphqlUser() user: UserModel,
		@Root() transaction: TransactionModel
	): Promise<CategoryModel> {
		return await this.categoryService.findById(user.id, transaction.categoryId)
	}

	@Mutation(() => TransactionModel, { name: 'createTransaction' })
	async create(
		@GraphqlUser() user: UserModel,
		@Arg('categoryId', () => String) categoryId: string,
		@Arg('data', () => CreateTransaction) data: CreateTransaction
	): Promise<TransactionModel> {
		return await this.transactionService.create(user.id, categoryId, data)
	}

	@Mutation(() => TransactionModel, { name: 'updateTransaction' })
	async update(
		@GraphqlUser() user: UserModel,
		@Arg('id', () => String) id: string,
		@Arg('data', () => UpdateTransaction) data: UpdateTransaction
	): Promise<TransactionModel> {
		return await this.transactionService.update(user.id, id, data)
	}

	@Mutation(() => Boolean, { name: 'deleteTransaction' })
	async delete(
		@GraphqlUser() user: UserModel,
		@Arg('id', () => String) id: string
	): Promise<boolean> {
		await this.transactionService.delete(user.id, id)
		return true
	}

	@Query(() => [TransactionModel], { name: 'listTransactions' })
	async list(
		@GraphqlUser() user: UserModel,
		@Arg('limit', () => Int, { nullable: true }) limit?: number,
		@Arg('offset', () => Int, { nullable: true }) offset?: number,
		@Arg('orderBy', () => String, { nullable: true }) orderBy?: string,
		@Arg('orderDirection', () => String, { nullable: true })
		orderDirection?: string
	): Promise<TransactionModel[]> {
		return await this.transactionService.findManyByUserId(
			user.id,
			limit,
			offset,
			orderBy,
			orderDirection
		)
	}

	@Query(() => TransactionModel, { name: 'getTransaction' })
	async get(
		@GraphqlUser() user: UserModel,
		@Arg('id', () => String) id: string
	): Promise<TransactionModel> {
		return await this.transactionService.findById(user.id, id)
	}

	@Query(() => Int, { name: 'totalBalance' })
	async totalBalance(@GraphqlUser() user: UserModel): Promise<number> {
		return await this.transactionService.totalBalance(user.id)
	}

	@Query(() => Int, { name: 'monthIncoming' })
	async monthIncoming(@GraphqlUser() user: UserModel): Promise<number> {
		return await this.transactionService.monthIncoming(user.id)
	}

	@Query(() => Int, { name: 'monthOutgoing' })
	async monthOutgoing(@GraphqlUser() user: UserModel): Promise<number> {
		return await this.transactionService.monthOutgoing(user.id)
	}
}
