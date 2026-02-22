import {
  ChevronLeft,
  ChevronRight,
  Pencil,
  Plus,
  Search,
  Trash,
  Utensils
} from 'lucide-react'
import { useEffect } from 'react'
import { CategoryIcon } from '@/components/category-icon'
import { IconButton } from '@/components/icon-button'
import { Input } from '@/components/input'
import { LabelButton } from '@/components/label-button'
import { PaginationButton } from '@/components/pagination-button'
import { Select } from '@/components/select'
import { Tag } from '@/components/tag'
import { Type } from '@/components/type'
import { useCategoriesStore } from '@/stores/categories.store'
import { useTransactionsStore } from '@/stores/transactions.store'
import { CATEGORY_ICONS } from '@/utils/categories'
import { EditTransactionModal } from '../components/edit-transaction-modal'
import { NewTransactionModal } from '../components/new-transaction-modal'

export function Transactions() {
  const { transactions, fetchTransactions, deleteTransaction } =
    useTransactionsStore()
  const { fetchCategories } = useCategoriesStore()

  useEffect(() => {
    fetchTransactions()
    fetchCategories()
  }, [fetchTransactions, fetchCategories])

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-0.5">
            Transações
          </h1>

          <p className="text-gray-600">
            Gerencie todas as suas transações financeiras
          </p>
        </div>

        <NewTransactionModal>
          <LabelButton type="button" size="sm">
            <Plus />
            Nova transação
          </LabelButton>
        </NewTransactionModal>
      </div>

      <section className="bg-white border border-gray-200 rounded-xl px-6 pt-5 pb-6 grid grid-cols-4 gap-4">
        <Input.Root>
          <Input.Label htmlFor="search">Buscar</Input.Label>
          <Input.Control>
            <Input.Field
              id="search"
              type="text"
              placeholder="Buscar por descrição"
              autoComplete="off"
            />
            <Search className="size-4 text-gray-400" />
          </Input.Control>
        </Input.Root>

        <div className="space-y-2">
          <Select.Root>
            <Select.Label>Tipo</Select.Label>
            <Select.Trigger id="type">
              <Select.Value placeholder="Selecione" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="all">Todos</Select.Item>
              <Select.Item value="income">Entrada</Select.Item>
              <Select.Item value="outcome">Saída</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        <div className="space-y-2">
          <Select.Root>
            <Select.Label>Categoria</Select.Label>
            <Select.Trigger id="category">
              <Select.Value placeholder="Selecione" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="all">Todas</Select.Item>
              <Select.Item value="food">Alimentação</Select.Item>
              <Select.Item value="transport">Transporte</Select.Item>
              <Select.Item value="market">Mercado</Select.Item>
              <Select.Item value="salary">Salário</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        <div className="space-y-2">
          <Select.Root>
            <Select.Label>Período</Select.Label>
            <Select.Trigger id="period">
              <Select.Value placeholder="Selecione" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="11-2025">Novembro / 2025</Select.Item>
              <Select.Item value="12-2025">Dezembro / 2025</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </section>

      <section className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full border-separate border-spacing-0">
          <thead>
            <tr className="bg-white">
              <th className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-[0.03em] border-b border-gray-200">
                Descrição
              </th>
              <th className="px-6 py-5 text-center text-xs font-medium text-gray-500 uppercase tracking-[0.03em] border-b border-gray-200">
                Data
              </th>
              <th className="px-6 py-5 text-center text-xs font-medium text-gray-500 uppercase tracking-[0.03em] border-b border-gray-200">
                Categoria
              </th>
              <th className="px-6 py-5 text-center text-xs font-medium text-gray-500 uppercase tracking-[0.03em] border-b border-gray-200">
                Tipo
              </th>
              <th className="px-6 py-5 text-right text-xs font-medium text-gray-500 uppercase tracking-[0.03em] border-b border-gray-200">
                Valor
              </th>
              <th className="px-6 py-5 text-right text-xs font-medium text-gray-500 uppercase tracking-[0.03em] border-b border-gray-200">
                Ações
              </th>
            </tr>
          </thead>

          <tbody>
            {transactions.map(transaction => {
              const Icon = CATEGORY_ICONS[transaction.category.icon] || Utensils

              return (
                <tr
                  key={transaction.id}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <CategoryIcon
                        icon={Icon}
                        variant={transaction.category.color as any}
                      />
                      <span className="font-medium text-gray-800">
                        {transaction.description}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600 text-center">
                    {new Intl.DateTimeFormat('pt-BR').format(
                      new Date(transaction.transactedAt)
                    )}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center">
                    <Tag variant={transaction.category.color as any}>
                      {transaction.category.title}
                    </Tag>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    <Type variant={transaction.type as 'income' | 'outcome'}>
                      {transaction.type === 'income' ? 'Entrada' : 'Saída'}
                    </Type>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-right">
                    <span className="text-sm font-bold text-gray-800">
                      {transaction.type === 'income' ? '+' : '-'} R${' '}
                      {(transaction.amount / 100).toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}
                    </span>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-end gap-2">
                      <IconButton
                        variant="danger"
                        onClick={() => deleteTransaction(transaction.id)}
                      >
                        <Trash className="size-4" />
                      </IconButton>
                      <EditTransactionModal transaction={transaction}>
                        <IconButton>
                          <Pencil className="size-4" />
                        </IconButton>
                      </EditTransactionModal>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan={6} className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">
                    1 a 10 | 27 resultados
                  </span>

                  <div className="flex items-center gap-2">
                    <PaginationButton disabled>
                      <ChevronLeft className="size-4" />
                    </PaginationButton>

                    <PaginationButton active>1</PaginationButton>
                    <PaginationButton>2</PaginationButton>
                    <PaginationButton>3</PaginationButton>

                    <PaginationButton>
                      <ChevronRight className="size-4" />
                    </PaginationButton>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </section>
    </div>
  )
}
