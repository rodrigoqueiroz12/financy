import { EyeClosed, EyeIcon, Lock, LogIn, Mail, UserRound } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'
import { Input } from '@/components/input'
import { LabelButton } from '@/components/label-button'
import { useAuthStore } from '@/stores/auth.store'
import { Logo } from '../components/logo'

export function SignUp() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const signup = useAuthStore(state => state.signup)

  const navigate = useNavigate()

  function handleSignIn() {
    navigate('/')
  }

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault()

    setLoading(true)

    try {
      const registered = await signup({
        name,
        email,
        password
      })

      if (registered) {
        toast.success('Cadastro realizado com sucesso!')

        setTimeout(() => {
          navigate('/', { replace: true })
        }, 1500)
      }
    } catch (_error: any) {
      toast.error('Ops! Algo deu errado ao realizar o cadastro. Tente novamente mais tarde.')
    } finally {
      setLoading(false)
    }
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

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Input.Root>
                <Input.Label htmlFor="name">Nome completo</Input.Label>
                <Input.Control>
                  <UserRound className="size-4 text-gray-400" />
                  <Input.Field
                    type="text"
                    id="name"
                    placeholder="Seu nome completo"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    minLength={3}
                    maxLength={100}
                    required
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
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    maxLength={254}
                    required
                  />
                </Input.Control>
              </Input.Root>

              <Input.Root>
                <Input.Label htmlFor="password">Senha</Input.Label>
                <Input.Control>
                  <Lock className="size-4 text-gray-400" />
                  <Input.Field
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    minLength={8}
                    maxLength={64}
                  />
                  <button
                    type="button"
                    className="enabled:hover:cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeIcon className="size-4 text-gray-700" />
                    ) : (
                      <EyeClosed className="size-4 text-gray-700" />
                    )}
                  </button>
                </Input.Control>

                <Input.Helper>
                  A senha deve ter no mínimo 8 caracteres.
                </Input.Helper>
              </Input.Root>
            </div>

            <LabelButton type="submit" className="w-full" disabled={loading}>
              {loading ? 'Cadastrando...' : 'Cadastrar'}
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
