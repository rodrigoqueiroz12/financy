import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { CircleArrowDown, CircleArrowUp, X } from 'lucide-react'
import type { ReactNode } from 'react'
import { tv } from 'tailwind-variants/lite'
import { IconButton } from './icon-button'
import { Input } from './input'
import { LabelButton } from './label-button'
import { Select } from './select'

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
              <IconButton type="button" aria-label="Fechar">
                <X />
              </IconButton>
            </Dialog.Close>
          </div>

          <form className="flex flex-col gap-6">
            <RadioGroup.Root
              defaultValue="outcome"
              className="grid grid-cols-2 border border-gray-200 p-2 rounded-xl"
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

            <Input.Root>
              <Input.Label htmlFor="description">Descrição</Input.Label>
              <Input.Control>
                <Input.Field
                  id="description"
                  autoComplete="off"
                  type="text"
                  placeholder="Ex. Almoço no restaurante"
                  required
                />
              </Input.Control>
            </Input.Root>

            <div className="grid grid-cols-2 gap-4">
              <Input.Root>
                <Input.Label htmlFor="date">Data</Input.Label>
                <Input.Control>
                  <Input.Field id="date" type="date" required />
                </Input.Control>
              </Input.Root>

              <Input.Root>
                <Input.Label htmlFor="amount">Valor</Input.Label>
                <Input.Control>
                  <span className="text-black text-sm">R$</span>

                  <Input.Field
                    id="amount"
                    type="number"
                    step="0.01"
                    placeholder="0,00"
                    autoComplete="off"
                    required
                  />
                </Input.Control>
              </Input.Root>
            </div>

            <div className="space-y-2">
              <Select.Root>
                <Select.Label>Categoria</Select.Label>

                <Select.Trigger id="category">
                  <Select.Value placeholder="Selecione" />
                </Select.Trigger>

                <Select.Content>
                  <Select.Item value="food">Alimentação</Select.Item>
                  <Select.Item value="transport">Transporte</Select.Item>
                  <Select.Item value="market">Mercado</Select.Item>
                  <Select.Item value="entertainment">
                    Entretenimento
                  </Select.Item>
                  <Select.Item value="utilities">Utilidades</Select.Item>
                </Select.Content>
              </Select.Root>
            </div>

            <LabelButton type="submit">Salvar</LabelButton>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
