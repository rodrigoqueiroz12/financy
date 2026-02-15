import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
	DATABASE_URL: z.url(),
	APP_PORT: z.coerce.number().default(3333)
})

export const env = envSchema.parse(process.env)
