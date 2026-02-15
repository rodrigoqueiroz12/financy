import { EyeClosed, Lock, LogIn, Mail, UserRound } from 'lucide-react'
import { useNavigate } from 'react-router'
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
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-gray-700 font-medium text-sm"
                >
                  Nome completo
                </label>

                <div className="border border-gray-300 bg-white rounded-lg px-3 flex items-center gap-3">
                  <div>
                    <UserRound className="size-4 text-gray-400" />
                  </div>

                  <input
                    type="text"
                    id="name"
                    className="w-full py-3.5 focus:outline-none leading-2 text-gray-800"
                    placeholder="Seu nome completo"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-gray-700 font-medium text-sm"
                >
                  E-mail
                </label>

                <div className="border border-gray-300 bg-white rounded-lg px-3 flex items-center gap-3">
                  <div>
                    <Mail className="size-4 text-gray-400" />
                  </div>

                  <input
                    type="email"
                    id="email"
                    className="w-full py-3.5 focus:outline-none leading-2 text-gray-800"
                    placeholder="mail@exemplo.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="text-gray-700 font-medium text-sm"
                >
                  Senha
                </label>

                <div className="border border-gray-300 bg-white rounded-lg px-3 flex items-center gap-3">
                  <div>
                    <Lock className="size-4 text-gray-400" />
                  </div>

                  <input
                    type="password"
                    id="password"
                    className="w-full py-3.5 focus:outline-none leading-2 text-gray-800"
                    placeholder="Digite sua senha"
                  />

                  <button type="button" className="hover:cursor-pointer">
                    <EyeClosed className="size-4 text-gray-700" />
                  </button>
                </div>

                <span className="text-xs text-gray-500 select-none">
                  A senha deve ter no mínimo 8 caracteres.
                </span>
              </div>
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
