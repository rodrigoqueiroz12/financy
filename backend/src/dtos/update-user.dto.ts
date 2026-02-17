import { Field, InputType } from 'type-graphql'

@InputType()
export class UpdateUserDTO {
	@Field(() => String)
	name!: string
}
