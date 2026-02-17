import type { CreateCategoryDTO } from '@/dtos/create-category.dto'
import type { UpdateCategoryDTO } from '@/dtos/update-category.dto'
import { prisma } from '@/lib/prisma'

export class CategoryService {
	async findManyByUserId(userId: string) {
		return await prisma.category.findMany({
			where: {
				userId
			}
		})
	}

	async findById(userId: string, id: string) {
		const category = await prisma.category.findUnique({
			where: {
				id,
				userId
			}
		})

		if (!category) {
			throw new Error('Category not found')
		}

		return category
	}

	async create(userId: string, data: CreateCategoryDTO) {
		return await prisma.category.create({
			data: {
				userId,
				title: data.title,
				description: data.description,
				icon: data.icon,
				color: data.color
			}
		})
	}

	async update(userId: string, id: string, data: UpdateCategoryDTO) {
		const category = await prisma.category.findUnique({
			where: {
				id,
				userId
			}
		})

		if (!category) {
			throw new Error('Category not found')
		}

		return await prisma.category.update({
			where: {
				id,
				userId
			},
			data
		})
	}

	async delete(userId: string, id: string) {
		const category = await prisma.category.findUnique({
			where: {
				id,
				userId
			}
		})

		if (!category) {
			throw new Error('Category not found')
		}

		return await prisma.category.delete({
			where: {
				id,
				userId
			}
		})
	}
}
