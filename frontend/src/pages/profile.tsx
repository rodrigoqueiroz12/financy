import { useMutation } from '@apollo/client/react'
import { LogOut, Mail, User } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { Input } from '@/components/input'
import { LabelButton } from '@/components/label-button'
import { updateUser } from '@/lib/graphql/mutations/update-user'
import { useAuthStore } from '@/stores/auth.store'

export function Profile() {
  const user = useAuthStore(state => state.user)
  const updateUserNameStore = useAuthStore(state => state.updateUserName)
  const [name, setName] = useState(user?.name || '')
  const [updateUserFn, { loading }] = useMutation(updateUser, {
    onCompleted() {
      toast.success('Perfil atualizado com sucesso')
      updateUserNameStore(name)
    },
    onError() {
      toast.error('Falha ao atualizar o perfil')
    }
  })
  const [loggingOut, setLoggingOut] = useState(false)
  const logout = useAuthStore(state => state.logout)

  const handleLogout = () => {
    setLoggingOut(true)
    logout()
  }

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()

    updateUserFn({
      variables: {
        id: user?.id,
        data: {
          name
        }
      }
    })
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-center">
        <div className="size-16 rounded-full text-2xl leading-10 font-medium text-gray-800 uppercase flex items-center justify-center bg-gray-300 mb-6">
          CT
        </div>

        <h1 className="text-xl font-semibold text-gray-800 mb-0.5">
          {user?.name}
        </h1>

        <p className="text-gray-500">{user?.email}</p>

        <div className="w-full border-b border-gray-200 my-8" />

        <form className="w-full space-y-6" onSubmit={handleSubmit}>
          <Input.Root>
            <Input.Label htmlFor="name">Nome completo</Input.Label>
            <Input.Control>
              <User className="size-4 text-gray-800" />
              <Input.Field
                id="name"
                type="text"
                placeholder="Digite seu nome completo"
                className="text-gray-800"
                autoComplete="name"
                value={name}
                onChange={e => setName(e.target.value)}
                minLength={3}
                maxLength={100}
              />
            </Input.Control>
          </Input.Root>

          <Input.Root disabled>
            <Input.Label htmlFor="email">E-mail</Input.Label>
            <Input.Control>
              <Mail className="size-4 text-gray-500" />
              <Input.Field
                id="email"
                type="email"
                defaultValue={user?.email}
                className="text-gray-500 cursor-not-allowed"
                disabled
              />
            </Input.Control>
            <Input.Helper>O e-mail não pode ser alterado</Input.Helper>
          </Input.Root>

          <div className="flex flex-col gap-4">
            <LabelButton type="submit" className="w-full" disabled={loading}>
              Salvar alterações
            </LabelButton>

            <LabelButton
              type="button"
              variant="secondary"
              className="w-full"
              onClick={handleLogout}
              disabled={loggingOut}
            >
              <LogOut className="text-red-base" />
              Sair da conta
            </LabelButton>
          </div>
        </form>
      </div>
    </div>
  )
}
