import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { CreateUserDTO } from '@/dtos/create-user.dto'
import { UpdateUserDTO } from '@/dtos/update-user.dto'
import { UserModel } from '@/models/user.model'
import { UserService } from '@/services/user.service'

@Resolver(() => UserModel)
export class UserResolver {
	private readonly userService = new UserService()

	@Mutation(() => UserModel)
	async create(
		@Arg('data', () => CreateUserDTO) data: CreateUserDTO
	): Promise<UserModel> {
		return this.userService.create(data)
	}

	@Mutation(() => UserModel)
	async updateUser(
		@Arg('id', () => String) id: string,
		@Arg('data', () => UpdateUserDTO) data: UpdateUserDTO
	): Promise<UserModel> {
		return this.userService.update(id, data)
	}

	@Query(() => UserModel)
	async getUser(@Arg('id', () => String) id: string): Promise<UserModel> {
		return this.userService.findById(id)
	}
}
