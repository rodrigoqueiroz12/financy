import type { UserModel } from 'generated/prisma/models'
import {
	Arg,
	FieldResolver,
	Mutation,
	Query,
	Resolver,
	Root
} from 'type-graphql'
import { CreateCategoryDTO } from '@/dtos/create-category.dto'
import { UpdateCategoryDTO } from '@/dtos/update-category.dto'
import { GraphqlUser } from '@/graphql/decorators/user.decorator'
import { CategoryModel } from '@/models/category.model'
import { CategoryService } from '@/services/category.service'
import { TransactionService } from '@/services/transaction.service'

@Resolver(() => CategoryModel)
export class CategoryResolver {
	private categoryService = new CategoryService()
	private transactionService = new TransactionService()

	@Mutation(() => CategoryModel)
	async create(
		@GraphqlUser() user: UserModel,
		@Arg('data', () => CreateCategoryDTO) data: CreateCategoryDTO
	): Promise<CategoryModel> {
		return await this.categoryService.create(user.id, data)
	}

	@Mutation(() => CategoryModel)
	async update(
		@GraphqlUser() user: UserModel,
		@Arg('id', () => String) id: string,
		@Arg('data', () => UpdateCategoryDTO) data: UpdateCategoryDTO
	): Promise<CategoryModel> {
		return await this.categoryService.update(user.id, id, data)
	}

	@Mutation(() => Boolean)
	async delete(
		@GraphqlUser() user: UserModel,
		@Arg('id', () => String) id: string
	): Promise<boolean> {
		await this.categoryService.delete(user.id, id)
		return true
	}

	@Query(() => [CategoryModel])
	async list(@GraphqlUser() user: UserModel): Promise<CategoryModel[]> {
		return await this.categoryService.findManyByUserId(user.id)
	}

	@Query(() => CategoryModel)
	async get(
		@GraphqlUser() user: UserModel,
		@Arg('id', () => String) id: string
	): Promise<CategoryModel> {
		return await this.categoryService.findById(user.id, id)
	}

	@FieldResolver(() => Number)
	async countTransactions(
		@GraphqlUser() user: UserModel,
		@Root() category: CategoryModel
	): Promise<number> {
		return this.transactionService.countByCategoryId(user.id, category.id)
	}
}
