import type { CreateUserDTO } from '@/dtos/create-user.dto'
import type { UpdateUserDTO } from '@/dtos/update-user.dto'
import { prisma } from '@/lib/prisma'
import { hash } from '@/utils/hash'

export class UserService {
	async findById(id: string) {
		const user = await prisma.user.findUnique({
			where: {
				id
			}
		})

		if (!user) {
			throw new Error('User not found')
		}

		return user
	}

	async create(data: CreateUserDTO) {
		const user = await prisma.user.findUnique({
			where: {
				email: data.email
			}
		})

		if (user) {
			throw new Error('User already exists')
		}

		return await prisma.user.create({
			data: {
				name: data.name,
				email: data.email,
				password: await hash(data.password)
			}
		})
	}

	async update(id: string, data: UpdateUserDTO) {
		const user = await prisma.user.findUnique({
			where: {
				id
			}
		})

		if (!user) {
			throw new Error('User not found')
		}

		return await prisma.user.update({
			where: {
				id
			},
			data
		})
	}
}
