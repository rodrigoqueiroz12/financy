import { Field, InputType } from 'type-graphql'

@InputType()
export class UpdateTransaction {
	@Field(() => String)
	categoryId!: string

	@Field(() => String)
	type!: string

	@Field(() => String)
	description!: string

	@Field(() => Number)
	amount!: number

	@Field(() => String)
	transactedAt!: string
}
