import { Field, InputType } from 'type-graphql'

@InputType()
export class UpdateUser {
	@Field(() => String)
	name!: string
}
