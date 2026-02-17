import { Field, GraphQLISODateTime, ID, Int, ObjectType } from 'type-graphql'

@ObjectType()
export class TransactionModel {
	@Field(() => ID)
	id!: string

	@Field(() => ID)
	userId!: string

	@Field(() => ID)
	categoryId!: string

	@Field(() => String)
	type!: string

	@Field(() => String)
	description!: string

	@Field(() => Int)
	amount!: number

	@Field(() => GraphQLISODateTime)
	transactedAt!: Date

	@Field(() => GraphQLISODateTime)
	createdAt!: Date

	@Field(() => GraphQLISODateTime)
	updatedAt!: Date
}
