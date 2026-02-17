import { prisma } from '../src/lib/prisma'
import { hash } from '../src/utils/hash'

async function main() {
	const existingUser = await prisma.user.findUnique({
		where: {
			email: 'john@mail.com'
		}
	})

	if (existingUser) {
		return
	}

	await prisma.user.create({
		data: {
			name: 'John Doe',
			email: 'john@mail.com',
			password: await hash('12345678')
		}
	})

	console.log('✅ Usuário criado com sucesso!')
	console.log('📧 Email: john@mail.com')
	console.log('🔑 Senha: 12345678')
}

main()
	.catch(e => {
		console.error('❌ Erro ao executar seed:', e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
