import { Field, InputType } from 'type-graphql'

@InputType()
export class Register {
	@Field(() => String)
	name!: string

	@Field(() => String)
	email!: string

	@Field(() => String)
	password!: string
}

@InputType()
export class Authenticate {
	@Field(() => String)
	email!: string

	@Field(() => String)
	password!: string
}
