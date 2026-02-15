import { EyeClosed, Lock, LogIn, Mail, UserRound } from 'lucide-react'
import { useNavigate } from 'react-router'
import { Input } from '@/components/input'
import { LabelButton } from '@/components/label-button'
import { Logo } from '../components/logo'

export function SignUp() {
  const navigate = useNavigate()

  function handleSignIn() {
    navigate('/')
  }

  return (
    <main className="min-h-dvh">
      <div className="pt-12 max-w-md mx-auto flex flex-col items-center gap-8">
        <Logo className="h-8" />

        <div className="w-full bg-white border border-gray-200 p-8 rounded-xl flex flex-col gap-8">
          <div>
            <h1 className="text-gray-800 text-xl font-bold text-center mb-1">
              Criar conta
            </h1>

            <p className="text-center text-gray-600">
              Comece a controlar suas finanças ainda hoje
            </p>
          </div>

          <form action="#" className="space-y-6">
            <div className="space-y-4">
              <Input.Root>
                <Input.Label htmlFor="name">Nome completo</Input.Label>
                <Input.Control>
                  <UserRound className="size-4 text-gray-400" />
                  <Input.Field
                    type="text"
                    id="name"
                    placeholder="Seu nome completo"
                  />
                </Input.Control>
              </Input.Root>

              <Input.Root>
                <Input.Label htmlFor="email">E-mail</Input.Label>
                <Input.Control>
                  <Mail className="size-4 text-gray-400" />
                  <Input.Field
                    type="email"
                    id="email"
                    placeholder="mail@exemplo.com"
                  />
                </Input.Control>
              </Input.Root>

              <Input.Root>
                <Input.Label htmlFor="password">Senha</Input.Label>
                <Input.Control>
                  <Lock className="size-4 text-gray-400" />
                  <Input.Field
                    type="password"
                    id="password"
                    placeholder="Digite sua senha"
                  />
                  <button
                    type="button"
                    className="enabled:hover:cursor-pointer"
                  >
                    <EyeClosed className="size-4 text-gray-700" />
                  </button>
                </Input.Control>
                <Input.Helper>
                  A senha deve ter no mínimo 8 caracteres.
                </Input.Helper>
              </Input.Root>
            </div>

            <LabelButton type="button" className="w-full">
              Cadastrar
            </LabelButton>

            <div className="flex items-center gap-3 select-none">
              <hr className="flex-1 border-gray-300" />
              <span className="text-sm text-gray-500">ou</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            <p className="text-gray-600 text-sm text-center">
              Ainda não tem uma conta?
            </p>

            <LabelButton
              type="button"
              onClick={handleSignIn}
              variant="secondary"
              className="w-full"
            >
              <LogIn />
              Já tem uma conta?
            </LabelButton>
          </form>
        </div>
      </div>
    </main>
  )
}
