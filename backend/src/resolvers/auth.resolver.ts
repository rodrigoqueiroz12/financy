import { Arg, Mutation, Resolver } from 'type-graphql'
import { AuthenticateDTO, RegisterDTO } from '@/dtos/authenticate.dto'
import {
	AuthenticateOutput,
	RegisterOutput
} from '@/dtos/authenticate-output.dto'
import { AuthService } from '@/services/auth.service'

@Resolver()
export class AuthResolver {
	private authService = new AuthService()

	@Mutation(() => AuthenticateOutput)
	async authenticate(
		@Arg('data', () => AuthenticateDTO) data: AuthenticateDTO
	): Promise<AuthenticateOutput> {
		return this.authService.authenticate(data)
	}

	@Mutation(() => RegisterOutput)
	async register(
		@Arg('data', () => RegisterDTO) data: RegisterDTO
	): Promise<RegisterOutput> {
		return this.authService.register(data)
	}
}
