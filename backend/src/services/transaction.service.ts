import type { CreateTransaction } from '@/dtos/create-transaction.dto'
import type { UpdateTransaction } from '@/dtos/update-transaction.dto'
import { prisma } from '@/lib/prisma'

export class TransactionService {
	async findManyByUserId(
		userId: string,
		limit?: number,
		offset?: number,
		orderBy?: string,
		orderDirection?: string
	) {
		const query: any = {
			where: { userId }
		}

		if (limit !== undefined && limit !== null) query.take = limit
		if (offset !== undefined && offset !== null) query.skip = offset

		if (orderBy) {
			query.orderBy = {
				[orderBy]: orderDirection || 'desc'
			}
		} else {
			query.orderBy = {
				createdAt: 'desc'
			}
		}

		return await prisma.transaction.findMany(query)
	}

	async findById(userId: string, id: string) {
		const transaction = await prisma.transaction.findUnique({
			where: {
				id,
				userId
			}
		})

		if (!transaction) {
			throw new Error('Transaction not found')
		}

		return transaction
	}

	async create(userId: string, categoryId: string, data: CreateTransaction) {
		return await prisma.transaction.create({
			data: {
				userId,
				categoryId,
				type: data.type,
				description: data.description,
				amount: data.amount,
				transactedAt: data.transactedAt
			}
		})
	}

	async update(userId: string, id: string, data: UpdateTransaction) {
		const transaction = await prisma.transaction.findUnique({
			where: {
				id,
				userId
			}
		})

		if (!transaction) {
			throw new Error('Transaction not found')
		}

		return await prisma.transaction.update({
			where: {
				id,
				userId
			},
			data: { ...data, updatedAt: new Date() }
		})
	}

	async delete(userId: string, id: string) {
		const transaction = await prisma.transaction.findUnique({
			where: {
				id,
				userId
			}
		})

		if (!transaction) {
			throw new Error('Transaction not found')
		}

		return await prisma.transaction.delete({
			where: {
				id,
				userId
			}
		})
	}

	async countByCategoryId(userId: string, categoryId: string) {
		return await prisma.transaction.count({
			where: {
				userId,
				categoryId
			}
		})
	}

	async sumByCategoryId(userId: string, categoryId: string) {
		const agg = await prisma.transaction.aggregate({
			where: {
				userId,
				categoryId
			},
			_sum: { amount: true }
		})
		return agg._sum?.amount || 0
	}

	async totalBalance(userId: string) {
		const aggregations = await prisma.transaction.groupBy({
			by: ['type'],
			where: { userId },
			_sum: { amount: true }
		})

		let total = 0
		for (const agg of aggregations) {
			if (agg.type === 'income') total += agg._sum?.amount || 0
			if (agg.type === 'outcome') total -= agg._sum?.amount || 0
		}

		return total
	}

	async monthIncoming(userId: string) {
		const now = new Date()
		const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
		const endOfMonth = new Date(
			now.getFullYear(),
			now.getMonth() + 1,
			0,
			23,
			59,
			59,
			999
		)

		const agg = await prisma.transaction.aggregate({
			where: {
				userId,
				type: 'income',
				transactedAt: {
					gte: startOfMonth,
					lte: endOfMonth
				}
			},
			_sum: { amount: true }
		})

		return agg._sum?.amount || 0
	}

	async monthOutgoing(userId: string) {
		const now = new Date()
		const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
		const endOfMonth = new Date(
			now.getFullYear(),
			now.getMonth() + 1,
			0,
			23,
			59,
			59,
			999
		)

		const agg = await prisma.transaction.aggregate({
			where: {
				userId,
				type: 'outcome',
				transactedAt: {
					gte: startOfMonth,
					lte: endOfMonth
				}
			},
			_sum: { amount: true }
		})

		return agg._sum?.amount || 0
	}
}
