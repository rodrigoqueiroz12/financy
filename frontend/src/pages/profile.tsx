import { LogOut, Mail, User } from 'lucide-react'
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
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-700 block"
            >
              Nome completo
            </label>
            <div className="flex items-center gap-3 px-3 border border-gray-300 rounded-lg focus-within:border-brand-base focus-within:ring-1 focus-within:ring-brand-base transition-all bg-white">
              <User className="size-4 text-gray-800" />
              <input
                id="name"
                type="text"
                defaultValue="Conta teste"
                className="flex-1 py-3.5 outline-none text-gray-800 text-sm leading-relaxed placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 block"
            >
              E-mail
            </label>
            <div className="flex items-center gap-3 px-3 border border-gray-300 rounded-lg bg-gray-50">
              <Mail className="size-4 text-gray-500" />
              <input
                id="email"
                type="email"
                defaultValue="conta@teste.com"
                className="flex-1 py-3.5 outline-none text-gray-500 text-sm leading-relaxed bg-transparent cursor-not-allowed"
                disabled
              />
            </div>
            <p className="text-xs text-gray-500">
              O e-mail não pode ser alterado
            </p>
          </div>

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
