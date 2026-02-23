import { Check, EyeClosed, Lock, Mail, UserRoundPlus } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Input } from '@/components/input'
import { LabelButton } from '@/components/label-button'
import { useAuthStore } from '@/stores/auth.store'
import { Logo } from '../components/logo'
import { toast } from 'sonner'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const login = useAuthStore(state => state.login)
  const navigate = useNavigate()

  function handleSignUp() {
    navigate('/sign-up')
  }

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault()

    setLoading(true)

    try {
      await login({ email, password })
    } catch (_error) {
      setLoading(false)

      toast.error('E-mail ou senha inválidos')
    }
  }

  return (
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

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Input.Root>
              <Input.Label htmlFor="email">E-mail</Input.Label>

              <Input.Control>
                <Mail className="size-4 text-gray-400" />

                <Input.Field
                  type="email"
                  id="email"
                  placeholder="mail@exemplo.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
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
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />

                <button type="button" className="enabled:hover:cursor-pointer">
                  <EyeClosed className="size-4 text-gray-700" />
                </button>
              </Input.Control>
            </Input.Root>

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
                href="#recuperar-senha"
                className="text-sm text-brand-base font-medium hover:underline"
              >
                Recuperar senha
              </a>
            </div>
          </div>

          <LabelButton type="submit" className="w-full" disabled={loading}>
            Entrar
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
            onClick={handleSignUp}
            variant="secondary"
            size="md"
            className="w-full"
          >
            <UserRoundPlus />
            Criar conta
          </LabelButton>
        </form>
      </div>
    </div>
  )
}
