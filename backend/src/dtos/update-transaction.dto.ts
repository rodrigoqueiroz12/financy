import { Field, InputType } from 'type-graphql'

@InputType()
export class UpdateTransactionDTO {
	@Field(() => String)
	type!: string

	@Field(() => String)
	description!: string

	@Field(() => Number)
	amount!: number

	@Field(() => String)
	transactedAt!: string
}
