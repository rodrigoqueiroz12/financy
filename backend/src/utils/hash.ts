import bcrypt from 'bcryptjs'

export const hash = async (plain: string): Promise<string> => {
	const salt = await bcrypt.genSalt(10)

	return await bcrypt.hash(plain, salt)
}

export const compare = async (
	plain: string,
	hashed: string
): Promise<boolean> => {
	return await bcrypt.compare(plain, hashed)
}
