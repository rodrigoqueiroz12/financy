import { Field, InputType } from 'type-graphql'

@InputType()
export class CreateTransaction {
	@Field(() => String)
	type!: string

	@Field(() => String)
	description!: string

	@Field(() => Number)
	amount!: number

	@Field(() => String)
	transactedAt!: string
}
