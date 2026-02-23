import { Field, Int, ObjectType } from 'type-graphql'
import { TransactionModel } from './transaction.model'

@ObjectType()
export class PaginatedTransactionsModel {
	@Field(() => [TransactionModel])
	transactions: TransactionModel[]

	@Field(() => Int)
	totalCount: number
}
