import { Arg, Mutation, Resolver } from 'type-graphql'
import { Authenticate, Register } from '@/dtos/authenticate.dto'
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
		@Arg('data', () => Authenticate) data: Authenticate
	): Promise<AuthenticateOutput> {
		return this.authService.authenticate(data)
	}

	@Mutation(() => RegisterOutput)
	async register(
		@Arg('data', () => Register) data: Register
	): Promise<RegisterOutput> {
		return this.authService.register(data)
	}
}
