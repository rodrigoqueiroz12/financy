import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import * as Select from '@radix-ui/react-select'
import { ChevronDown, CircleArrowDown, CircleArrowUp, X } from 'lucide-react'
import type { ReactNode } from 'react'
import { tv } from 'tailwind-variants/lite'
import { LabelButton } from './label-button'

interface NewTransactionModalProps {
  children: ReactNode
}

const transactionTypeButton = tv({
  base: 'h-11.5 group flex items-center justify-center gap-3 rounded-lg py-3.5 px-3 leading-[1.125] border border-transparent cursor-pointer transition-colors focus:outline-none text-gray-600 data-[state=checked]:text-gray-800 data-[state=checked]:bg-gray-100 data-[state=checked]:font-medium',
  variants: {
    variant: {
      income: 'data-[state=checked]:border-green-base',
      outcome: 'data-[state=checked]:border-red-base'
    }
  }
})

export function NewTransactionModal({ children }: NewTransactionModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/20 data-[state=open]:animate-overlayShow z-40" />

        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl p-6 shadow-lg focus:outline-none data-[state=open]:animate-contentShow z-50">
          <div className="flex items-center justify-between mb-6">
            <div>
              <Dialog.Title className="font-semibold text-gray-800 mb-0.5">
                Nova transação
              </Dialog.Title>

              <Dialog.Description className="text-sm text-gray-600">
                Registre sua despesa ou receita
              </Dialog.Description>
            </div>

            <Dialog.Close asChild>
              <button
                type="button"
                className="size-8 text-gray-700 hover:text-gray-800 focus:outline-none rounded-lg flex items-center justify-center border border-gray-300 bg-white transition-colors hover:bg-gray-100 cursor-pointer"
                aria-label="Fechar"
              >
                <X className="size-4" />
              </button>
            </Dialog.Close>
          </div>

          <form className="flex flex-col gap-6">
            <RadioGroup.Root
              defaultValue="outcome"
              className="grid grid-cols-2 gap-4"
              aria-label="Tipo de transação"
            >
              <RadioGroup.Item
                value="outcome"
                className={transactionTypeButton({ variant: 'outcome' })}
              >
                <CircleArrowDown className="size-4 group-data-[state=checked]:text-red-base" />
                Despesa
              </RadioGroup.Item>

              <RadioGroup.Item
                value="income"
                className={transactionTypeButton({ variant: 'income' })}
              >
                <CircleArrowUp className="size-4 group-data-[state=checked]:text-green-base" />
                Receita
              </RadioGroup.Item>
            </RadioGroup.Root>

            <div className="space-y-2">
              <label
                htmlFor="description"
                className="text-sm font-medium text-gray-700 block"
              >
                Descrição
              </label>

              <input
                id="description"
                type="text"
                placeholder="Ex. Almoço no restaurante"
                className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-brand-base focus:ring-1 focus:ring-brand-base transition-colors"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="date"
                  className="text-sm font-medium text-gray-700 block"
                >
                  Data
                </label>
                <input
                  id="date"
                  type="date"
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-brand-base focus:ring-1 focus:ring-brand-base transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="amount"
                  className="text-sm font-medium text-gray-700 block"
                >
                  Valor
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 pointer-events-none">
                    R$
                  </span>
                  <input
                    id="amount"
                    type="number"
                    step="0.01"
                    placeholder="0,00"
                    className="w-full pl-10 pr-4 py-3.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-brand-base focus:ring-1 focus:ring-brand-base transition-colors"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="category"
                className="text-sm font-medium text-gray-700 block"
              >
                Categoria
              </label>

              <Select.Root>
                <Select.Trigger
                  id="category"
                  className="w-full flex items-center justify-between px-4 py-3.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-brand-base focus:ring-1 focus:ring-brand-base transition-colors data-placeholder:text-gray-400"
                >
                  <Select.Value placeholder="Selecione" />
                  <Select.Icon className="text-gray-500">
                    <ChevronDown className="size-4" />
                  </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                  <Select.Content className="overflow-hidden bg-white rounded-lg shadow-lg border border-gray-200 z-60">
                    <Select.Viewport className="p-1">
                      <Select.Item
                        value="food"
                        className="relative flex items-center h-10 px-8 py-2 text-sm text-gray-700 rounded select-none hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none cursor-pointer data-[state=checked]:font-medium data-[state=checked]:text-brand-base"
                      >
                        <Select.ItemText>Alimentação</Select.ItemText>
                      </Select.Item>
                      <Select.Item
                        value="transport"
                        className="relative flex items-center h-10 px-8 py-2 text-sm text-gray-700 rounded select-none hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none cursor-pointer data-[state=checked]:font-medium data-[state=checked]:text-brand-base"
                      >
                        <Select.ItemText>Transporte</Select.ItemText>
                      </Select.Item>
                      <Select.Item
                        value="market"
                        className="relative flex items-center h-10 px-8 py-2 text-sm text-gray-700 rounded select-none hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none cursor-pointer data-[state=checked]:font-medium data-[state=checked]:text-brand-base"
                      >
                        <Select.ItemText>Mercado</Select.ItemText>
                      </Select.Item>
                      <Select.Item
                        value="entertainment"
                        className="relative flex items-center h-10 px-8 py-2 text-sm text-gray-700 rounded select-none hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none cursor-pointer data-[state=checked]:font-medium data-[state=checked]:text-brand-base"
                      >
                        <Select.ItemText>Entretenimento</Select.ItemText>
                      </Select.Item>
                      <Select.Item
                        value="utilities"
                        className="relative flex items-center h-10 px-8 py-2 text-sm text-gray-700 rounded select-none hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none cursor-pointer data-[state=checked]:font-medium data-[state=checked]:text-brand-base"
                      >
                        <Select.ItemText>Utilidades</Select.ItemText>
                      </Select.Item>
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </div>

            <LabelButton type="submit">Salvar</LabelButton>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
