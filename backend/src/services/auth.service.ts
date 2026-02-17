import type { AuthenticateDTO, RegisterDTO } from '@/dtos/authenticate.dto'
import { prisma } from '@/lib/prisma'
import type { UserModel } from '@/models/user.model'
import { compare, hash } from '@/utils/hash'
import { sign } from '@/utils/jwt'

export class AuthService {
	async authenticate(data: AuthenticateDTO) {
		const existingUser = await prisma.user.findUnique({
			where: {
				email: data.email
			}
		})

		if (!existingUser) throw new Error('Usuário não cadastrado!')

		const isSame = await compare(data.password, existingUser.password)

		if (!isSame) throw new Error('Senha inválida!')

		return this.gerenerateTokens(existingUser)
	}

	async register(data: RegisterDTO) {
		const existingUser = await prisma.user.findUnique({
			where: {
				email: data.email
			}
		})

		if (existingUser) throw new Error('E-mail já cadastrado!')

		const hashed = await hash(data.password)

		const user = await prisma.user.create({
			data: {
				name: data.name,
				email: data.email,
				password: hashed
			}
		})

		return this.gerenerateTokens(user)
	}

	gerenerateTokens(user: UserModel) {
		const token = sign({ id: user.id, email: user.email }, '1d')
		const refreshToken = sign({ id: user.id, email: user.email }, '1d')

		return { token, refreshToken, user }
	}
}
