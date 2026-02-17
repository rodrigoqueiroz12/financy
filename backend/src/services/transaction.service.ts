import type { CreateTransactionDTO } from '@/dtos/create-transaction.dto'
import type { UpdateTransactionDTO } from '@/dtos/update-transaction.dto'
import { prisma } from '@/lib/prisma'

export class TransactionService {
	async findManyByUserId(userId: string) {
		return await prisma.transaction.findMany({
			where: {
				userId
			}
		})
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

	async create(userId: string, categoryId: string, data: CreateTransactionDTO) {
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

	async update(userId: string, id: string, data: UpdateTransactionDTO) {
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
}
