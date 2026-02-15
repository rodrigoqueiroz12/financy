import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import {
  BaggageClaim,
  BookOpen,
  BriefcaseBusiness,
  CarFront,
  Dumbbell,
  Gift,
  HeartPulse,
  House,
  Mailbox,
  PawPrint,
  PiggyBank,
  ReceiptText,
  ShoppingCart,
  Ticket,
  ToolCase,
  Utensils,
  X
} from 'lucide-react'
import type { ReactNode } from 'react'
import { IconButton } from './icon-button'
import { LabelButton } from './label-button'

interface NewCategoryModalProps {
  children: ReactNode
}

export function NewCategoryModal({ children }: NewCategoryModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/20 data-[state=open]:animate-overlayShow z-40" />

        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl p-6 shadow-lg focus:outline-none data-[state=open]:animate-contentShow z-50">
          <div className="flex items-center justify-between mb-6">
            <div>
              <Dialog.Title className="font-semibold text-gray-800 mb-0.5">
                Nova categoria
              </Dialog.Title>

              <Dialog.Description className="text-sm text-gray-600">
                Organize suas transações com categorias
              </Dialog.Description>
            </div>

            <Dialog.Close asChild>
              <IconButton type="button" aria-label="Fechar">
                <X />
              </IconButton>
            </Dialog.Close>
          </div>

          <form className="flex flex-col gap-4">
            <div className="space-y-2">
              <label
                htmlFor="title"
                className="text-sm font-medium text-gray-700 block w-fit"
              >
                Título
              </label>

              <input
                autoComplete="off"
                id="title"
                type="text"
                placeholder="Ex. Alimentação"
                className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-brand-base focus:ring-1 focus:ring-brand-base transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="description"
                className="text-sm font-medium text-gray-700 block w-fit"
              >
                Descrição
              </label>

              <input
                autoComplete="off"
                id="description"
                type="text"
                placeholder="Descrição da categoria"
                className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-brand-base focus:ring-1 focus:ring-brand-base transition-colors"
              />

              <span className="text-xs text-gray-500 leading-4">Opcional</span>
            </div>

            <div className="space-y-2">
              <span className="text-sm font-medium text-gray-700 block">
                Ícone
              </span>

              <RadioGroup.Root
                defaultValue="utensils"
                className="grid grid-cols-8 gap-2"
              >
                {[
                  { value: 'briefcase', icon: BriefcaseBusiness },
                  { value: 'car', icon: CarFront },
                  { value: 'heart', icon: HeartPulse },
                  { value: 'piggy-bank', icon: PiggyBank },
                  { value: 'shopping-cart', icon: ShoppingCart },
                  { value: 'ticket', icon: Ticket },
                  { value: 'tool-case', icon: ToolCase },
                  { value: 'utensils', icon: Utensils },
                  { value: 'paw-print', icon: PawPrint },
                  { value: 'house', icon: House },
                  { value: 'gift', icon: Gift },
                  { value: 'dumbbell', icon: Dumbbell },
                  { value: 'book-open', icon: BookOpen },
                  { value: 'baggage-claim', icon: BaggageClaim },
                  { value: 'mailbox', icon: Mailbox },
                  { value: 'receipt-text', icon: ReceiptText }
                ].map(({ value, icon: Icon }) => (
                  <RadioGroup.Item
                    key={value}
                    value={value}
                    className="size-10.5 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 focus:outline-none data-[state=checked]:border-brand-base data-[state=checked]:text-brand-base data-[state=checked]:bg-gray-100 cursor-pointer transition-colors"
                  >
                    <Icon className="size-5" />
                  </RadioGroup.Item>
                ))}
              </RadioGroup.Root>
            </div>

            <div className="space-y-2">
              <span className="text-sm font-medium text-gray-700 block w-fit">
                Cor
              </span>

              <RadioGroup.Root defaultValue="green" className="flex gap-2">
                {[
                  { value: 'green', color: 'bg-green-base' },
                  { value: 'blue', color: 'bg-blue-base' },
                  { value: 'purple', color: 'bg-purple-base' },
                  { value: 'pink', color: 'bg-pink-base' },
                  { value: 'red', color: 'bg-red-base' },
                  { value: 'orange', color: 'bg-orange-base' },
                  { value: 'yellow', color: 'bg-yellow-base' }
                ].map(({ value, color }) => (
                  <RadioGroup.Item
                    key={value}
                    value={value}
                    className="h-7.5 flex-1 rounded-lg p-1 focus:outline-none cursor-pointer bg-gray-100 border border-gray-300 data-[state=checked]:border-brand-base"
                  >
                    <div className={`size-full rounded-sm ${color}`} />
                  </RadioGroup.Item>
                ))}
              </RadioGroup.Root>
            </div>

            <LabelButton type="submit" className="mt-2">
              Salvar
            </LabelButton>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
