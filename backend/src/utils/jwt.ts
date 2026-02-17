import jwt, { type Secret, type SignOptions } from 'jsonwebtoken'
import { env } from '@/env'

export type Payload = {
	id: string
	email: string
}

export const sign = (payload: Payload, expiresIn?: string) => {
	const secret: Secret = env.JWT_SECRET

	let options: SignOptions = {}

	const expiration = expiresIn

	if (expiration) {
		options = {
			expiresIn: expiration as unknown as NonNullable<SignOptions['expiresIn']>
		}
	}

	return jwt.sign(payload, secret, options)
}

export const verify = (token: string) => {
	const secret: Secret = env.JWT_SECRET

	return jwt.verify(token, secret)
}
