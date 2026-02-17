import { Arg, Mutation, Query, Resolver, UseMiddleware } from 'type-graphql'
import { CreateUserDTO } from '@/dtos/create-user.dto'
import { UpdateUserDTO } from '@/dtos/update-user.dto'
import { auth } from '@/middlewares/auth.middleware'
import { UserModel } from '@/models/user.model'
import { UserService } from '@/services/user.service'

@Resolver(() => UserModel)
@UseMiddleware(auth)
export class UserResolver {
	private readonly userService = new UserService()

	@Mutation(() => UserModel)
	async create(
		@Arg('data', () => CreateUserDTO) data: CreateUserDTO
	): Promise<UserModel> {
		return this.userService.create(data)
	}

	@Mutation(() => UserModel)
	async update(
		@Arg('id', () => String) id: string,
		@Arg('data', () => UpdateUserDTO) data: UpdateUserDTO
	): Promise<UserModel> {
		return this.userService.update(id, data)
	}

	@Query(() => UserModel)
	async get(@Arg('id', () => String) id: string): Promise<UserModel> {
		return this.userService.findById(id)
	}
}
