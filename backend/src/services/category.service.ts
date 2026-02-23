import type { CreateCategory } from '@/dtos/create-category.dto'
import type { UpdateCategory } from '@/dtos/update-category.dto'
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

	async create(userId: string, data: CreateCategory) {
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

	async update(userId: string, id: string, data: UpdateCategory) {
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
			data: { ...data, updatedAt: new Date() }
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

	async findRankedCategories(userId: string, limit?: number) {
		const aggregations = await prisma.transaction.groupBy({
			by: ['categoryId'],
			where: { userId },
			_sum: { amount: true },
			orderBy: { _sum: { amount: 'desc' } },
			take: limit
		})

		const categoryIds = aggregations.map(agg => agg.categoryId)

		const categories = await prisma.category.findMany({
			where: {
				id: { in: categoryIds },
				userId
			}
		})

		const sortedCategories = []
		for (const agg of aggregations) {
			const category = categories.find(c => c.id === agg.categoryId)
			if (category) {
				sortedCategories.push(category)
			}
		}

		return sortedCategories
	}
}
