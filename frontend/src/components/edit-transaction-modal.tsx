import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { CircleArrowDown, CircleArrowUp, X } from 'lucide-react'
import { type FormEvent, type ReactNode, useEffect, useState } from 'react'
import { tv } from 'tailwind-variants/lite'
import { useCategoriesStore } from '@/stores/categories.store'
import { useTransactionsStore } from '@/stores/transactions.store'
import type { Transaction } from '@/types'
import { IconButton } from './icon-button'
import { Input } from './input'
import { LabelButton } from './label-button'
import { Select } from './select'

interface EditTransactionModalProps {
  children: ReactNode
  transaction: Transaction
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

export function EditTransactionModal({
  children,
  transaction
}: EditTransactionModalProps) {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState<'income' | 'outcome'>(transaction.type)
  const [description, setDescription] = useState(transaction.description)
  const [date, setDate] = useState('')
  const [amount, setAmount] = useState('')
  const [categoryId, setCategoryId] = useState(transaction.categoryId)

  const { categories } = useCategoriesStore()
  const updateTransaction = useTransactionsStore(
    state => state.updateTransaction
  )

  useEffect(() => {
    if (open) {
      setType(transaction.type)
      setDescription(transaction.description)
      setCategoryId(transaction.categoryId)

      // Format date for date input "YYYY-MM-DD"
      const d = new Date(transaction.transactedAt)
      const year = d.getFullYear()
      const month = String(d.getMonth() + 1).padStart(2, '0')
      const day = String(d.getDate()).padStart(2, '0')
      setDate(`${year}-${month}-${day}`)

      // Convert amount back to formatted string input (e.g. from 1250 to "12.50")
      setAmount((transaction.amount / 100).toString())
    }
  }, [open, transaction])

  async function handleUpdateTransaction(event: FormEvent) {
    event.preventDefault()

    if (!categoryId) {
      alert('Por favor, selecione uma categoria.')
      return
    }

    try {
      // Formata data e transactedAt e amount
      const transactedAt = new Date(`${date}T12:00:00`).toISOString()
      const parsedAmount = parseFloat(amount.replace(',', '.'))
      const amountInCents = Math.round(parsedAmount * 100)

      await updateTransaction(transaction.id, {
        description,
        type,
        amount: amountInCents,
        transactedAt,
        categoryId
      })

      setOpen(false)
    } catch (_error) {
      console.log('Erro ao atualizar transação')
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/20 data-[state=open]:animate-overlayShow z-40" />

        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl p-6 shadow-lg focus:outline-none data-[state=open]:animate-contentShow z-50">
          <div className="flex items-center justify-between mb-6">
            <div>
              <Dialog.Title className="font-semibold text-gray-800 mb-0.5">
                Editar transação
              </Dialog.Title>

              <Dialog.Description className="text-sm text-gray-600">
                Altere os detalhes da transação
              </Dialog.Description>
            </div>

            <Dialog.Close asChild>
              <IconButton type="button" aria-label="Fechar">
                <X />
              </IconButton>
            </Dialog.Close>
          </div>

          <form
            onSubmit={handleUpdateTransaction}
            className="flex flex-col gap-6"
          >
            <RadioGroup.Root
              value={type}
              onValueChange={value => setType(value as 'income' | 'outcome')}
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
              <Input.Label htmlFor={`description-${transaction.id}`}>
                Descrição
              </Input.Label>
              <Input.Control>
                <Input.Field
                  id={`description-${transaction.id}`}
                  autoComplete="off"
                  type="text"
                  placeholder="Ex. Almoço no restaurante"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  required
                />
              </Input.Control>
            </Input.Root>

            <div className="grid grid-cols-2 gap-4">
              <Input.Root>
                <Input.Label htmlFor={`date-${transaction.id}`}>
                  Data
                </Input.Label>
                <Input.Control>
                  <Input.Field
                    id={`date-${transaction.id}`}
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    required
                  />
                </Input.Control>
              </Input.Root>

              <Input.Root>
                <Input.Label htmlFor={`amount-${transaction.id}`}>
                  Valor
                </Input.Label>
                <Input.Control>
                  <span className="text-black text-sm">R$</span>

                  <Input.Field
                    id={`amount-${transaction.id}`}
                    type="number"
                    step="0.01"
                    placeholder="0,00"
                    autoComplete="off"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    required
                  />
                </Input.Control>
              </Input.Root>
            </div>

            <div className="space-y-2">
              <Select.Root
                value={categoryId}
                onValueChange={value => setCategoryId(value)}
              >
                <Select.Label>Categoria</Select.Label>

                <Select.Trigger id={`category-${transaction.id}`}>
                  <Select.Value placeholder="Selecione" />
                </Select.Trigger>

                <Select.Content>
                  {categories.map(category => (
                    <Select.Item key={category.id} value={category.id}>
                      {category.title}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </div>

            <LabelButton type="submit">Salvar alteração</LabelButton>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
