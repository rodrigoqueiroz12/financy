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
import { CreateCategory } from '@/dtos/create-category.dto'
import { UpdateCategory } from '@/dtos/update-category.dto'
import { GraphqlUser } from '@/graphql/decorators/user.decorator'
import { auth } from '@/middlewares/auth.middleware'
import { CategoryModel } from '@/models/category.model'
import { CategoryService } from '@/services/category.service'
import { TransactionService } from '@/services/transaction.service'

@Resolver(() => CategoryModel)
@UseMiddleware(auth)
export class CategoryResolver {
	private categoryService = new CategoryService()
	private transactionService = new TransactionService()

	@Mutation(() => CategoryModel, { name: 'createCategory' })
	async create(
		@GraphqlUser() user: UserModel,
		@Arg('data', () => CreateCategory) data: CreateCategory
	): Promise<CategoryModel> {
		return await this.categoryService.create(user.id, data)
	}

	@Mutation(() => CategoryModel, { name: 'updateCategory' })
	async update(
		@GraphqlUser() user: UserModel,
		@Arg('id', () => String) id: string,
		@Arg('data', () => UpdateCategory) data: UpdateCategory
	): Promise<CategoryModel> {
		return await this.categoryService.update(user.id, id, data)
	}

	@Mutation(() => Boolean, { name: 'deleteCategory' })
	async delete(
		@GraphqlUser() user: UserModel,
		@Arg('id', () => String) id: string
	): Promise<boolean> {
		await this.categoryService.delete(user.id, id)
		return true
	}

	@Query(() => [CategoryModel], { name: 'listCategories' })
	async list(@GraphqlUser() user: UserModel): Promise<CategoryModel[]> {
		return await this.categoryService.findManyByUserId(user.id)
	}

	@Query(() => CategoryModel, { name: 'getCategory' })
	async get(
		@GraphqlUser() user: UserModel,
		@Arg('id', () => String) id: string
	): Promise<CategoryModel> {
		return await this.categoryService.findById(user.id, id)
	}

	@Query(() => [CategoryModel], { name: 'listRankedCategories' })
	async listRanked(
		@GraphqlUser() user: UserModel,
		@Arg('limit', () => Int, { nullable: true }) limit?: number
	): Promise<CategoryModel[]> {
		return await this.categoryService.findRankedCategories(user.id, limit)
	}

	@FieldResolver(() => Number)
	async countTransactions(
		@GraphqlUser() user: UserModel,
		@Root() category: CategoryModel
	): Promise<number> {
		return this.transactionService.countByCategoryId(user.id, category.id)
	}

	@FieldResolver(() => Number)
	async amount(
		@GraphqlUser() user: UserModel,
		@Root() category: CategoryModel
	): Promise<number> {
		return this.transactionService.sumByCategoryId(user.id, category.id)
	}
}
