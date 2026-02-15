import { LogOut, Mail, User } from 'lucide-react'
import { Input } from '@/components/input'
import { LabelButton } from '@/components/label-button'

export function Profile() {
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-center">
        <div className="size-16 rounded-full text-2xl leading-10 font-medium text-gray-800 uppercase flex items-center justify-center bg-gray-300 mb-6">
          CT
        </div>

        <h1 className="text-xl font-semibold text-gray-800 mb-0.5">
          Conta teste
        </h1>

        <p className="text-gray-500">conta@teste.com</p>

        <div className="w-full border-b border-gray-200 my-8" />

        <form className="w-full space-y-6">
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
                defaultValue="conta@teste.com"
                className="text-gray-500 cursor-not-allowed"
                disabled
              />
            </Input.Control>
            <Input.Helper>O e-mail não pode ser alterado</Input.Helper>
          </Input.Root>

          <div className="flex flex-col gap-4">
            <LabelButton type="button" className="w-full">
              Salvar alterações
            </LabelButton>

            <LabelButton type="button" variant="secondary" className="w-full">
              <LogOut className="text-red-base" />
              Sair da conta
            </LabelButton>
          </div>
        </form>
      </div>
    </div>
  )
}
