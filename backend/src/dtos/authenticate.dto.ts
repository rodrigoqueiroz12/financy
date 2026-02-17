import { Field, InputType } from 'type-graphql'

@InputType()
export class RegisterDTO {
	@Field(() => String)
	name!: string

	@Field(() => String)
	email!: string

	@Field(() => String)
	password!: string
}

@InputType()
export class AuthenticateDTO {
	@Field(() => String)
	email!: string

	@Field(() => String)
	password!: string
}
