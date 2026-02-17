import { Field, GraphQLISODateTime, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class CategoryModel {
	@Field(() => ID)
	id!: string

	@Field(() => ID)
	userId!: string

	@Field(() => String)
	title!: string

	@Field(() => String, { nullable: true })
	description!: string | null

	@Field(() => String)
	icon!: string

	@Field(() => String)
	color!: string

	@Field(() => GraphQLISODateTime)
	createdAt!: Date

	@Field(() => GraphQLISODateTime)
	updatedAt!: Date
}
