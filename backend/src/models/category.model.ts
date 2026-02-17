import { Field, GraphQLISODateTime, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class CategoryModel {
	@Field(() => ID)
	id!: string

	@Field(() => String)
	userId!: string

	@Field(() => String)
	title!: string

	@Field(() => String, { nullable: true })
	description?: string

	@Field(() => GraphQLISODateTime)
	icon!: Date

	@Field(() => GraphQLISODateTime)
	color!: Date

	@Field(() => GraphQLISODateTime)
	createdAt!: Date

	@Field(() => GraphQLISODateTime)
	updatedAt!: Date
}
