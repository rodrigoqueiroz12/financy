import { Check, EyeClosed, Lock, Mail, UserRoundPlus } from 'lucide-react'
import { Logo } from '../components/logo'

export function SignIn() {
  return (
    <main className="min-h-dvh">
      <div className="pt-12 max-w-md mx-auto flex flex-col items-center gap-8">
        <Logo className="h-8" />

        <div className="w-full bg-white border border-gray-200 p-8 rounded-xl flex flex-col gap-8">
          <div>
            <h1 className="text-gray-800 text-xl font-bold text-center mb-1">
              Fazer login
            </h1>

            <p className="text-center text-gray-600">
              Entre na sua conta para continuar
            </p>
          </div>

          <form action="#" className="space-y-6">
            <div className="space-y-4">
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

                  <button
                    type="button"
                    className="enabled:hover:cursor-pointer"
                  >
                    <EyeClosed className="size-4 text-gray-700" />
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="remember"
                    className="relative size-4 border border-gray-300 rounded-sm flex items-center justify-center has-checked:bg-green-base has-checked:border-green-base"
                  >
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      className="sr-only"
                    />

                    <Check className="size-3 text-white" />
                  </label>

                  <label
                    htmlFor="remember"
                    className="text-sm text-gray-700 select-none"
                  >
                    Lembrar-me
                  </label>
                </div>

                <a
                  href="#"
                  className="text-sm text-brand-base font-medium hover:underline"
                >
                  Recuperar senha
                </a>
              </div>
            </div>

            <button
              type="button"
              className="bg-brand-base rounded-lg px-4 py-3 flex items-center justify-center gap-2 font-medium text-white w-full border border-brand-base enabled:hover:cursor-pointer enabled:hover:bg-brand-dark enabled:hover:border-brand-dark transition-colors"
            >
              Entrar
            </button>

            <div className="flex items-center gap-3 select-none">
              <hr className="flex-1 border-gray-300" />
              <span className="text-sm text-gray-500">ou</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            <p className="text-gray-600 text-sm text-center">
              Ainda não tem uma conta?
            </p>

            <button
              type="button"
              className="bg-white rounded-lg px-4 py-3 flex items-center justify-center gap-2 font-medium text-gray-700 w-full border border-gray-300 enabled:hover:cursor-pointer enabled:hover:bg-gray-200 transition-colors"
            >
              <UserRoundPlus className="size-3.5" />
              Criar conta
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
