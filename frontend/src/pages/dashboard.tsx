import {
  ChevronRight,
  CircleArrowDown,
  CircleArrowUp,
  Plus,
  Utensils,
  Wallet
} from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router'
import { CategoryIcon } from '@/components/category-icon'
import { Tag } from '@/components/tag'
import { useCategoriesStore } from '@/stores/categories.store'
import { useTransactionsStore } from '@/stores/transactions.store'
import { CATEGORY_ICONS } from '@/utils/categories'
import { NewTransactionModal } from '../components/new-transaction-modal'

export function Dashboard() {
  const { transactions, fetchTransactions } = useTransactionsStore()
  const { categories, fetchCategories } = useCategoriesStore()

  useEffect(() => {
    fetchTransactions()
    fetchCategories()
  }, [fetchTransactions, fetchCategories])

  const currentMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear()

  const currentMonthTransactions = transactions.filter(t => {
    const d = new Date(t.transactedAt)
    return d.getMonth() === currentMonth && d.getFullYear() === currentYear
  })

  const totalBalance = transactions.reduce((acc, t) => {
    if (t.type === 'income') return acc + t.amount
    return acc - t.amount
  }, 0)

  const monthIncoming = currentMonthTransactions.reduce((acc, t) => {
    return t.type === 'income' ? acc + t.amount : acc
  }, 0)

  const monthOutgoing = currentMonthTransactions.reduce((acc, t) => {
    return t.type === 'outcome' ? acc + t.amount : acc
  }, 0)

  const recentTransactions = [...transactions]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 5)

  const categoriesWithAmount = categories
    .map(category => {
      const catTransactions = transactions.filter(
        t => t.categoryId === category.id
      )
      const amount = catTransactions.reduce((acc, t) => acc + t.amount, 0)
      return {
        ...category,
        amount
      }
    })
    .sort((a, b) => b.countTransactions - a.countTransactions)
    .slice(0, 4)

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value / 100)
  }

  return (
    <div className="space-y-6">
      <section className="grid grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Wallet className="size-5 text-purple-base" />
            <h2 className="text-xs text-gray-500 font-medium tracking-[0.0375em] uppercase">
              Saldo total
            </h2>
          </div>

          <strong className="text-[1.75rem] leading-8 font-bold text-gray-800">
            {formatCurrency(totalBalance)}
          </strong>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <CircleArrowUp className="size-5 text-brand-base" />
            <h2 className="text-xs text-gray-500 font-medium tracking-[0.0375em] uppercase">
              Receitas do mês
            </h2>
          </div>

          <strong className="text-[1.75rem] leading-8 font-bold text-gray-800">
            {formatCurrency(monthIncoming)}
          </strong>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <CircleArrowDown className="size-5 text-red-base" />
            <h2 className="text-xs text-gray-500 font-medium tracking-[0.0375em] uppercase">
              Despesas do mês
            </h2>
          </div>

          <strong className="text-[1.75rem] leading-8 font-bold text-gray-800">
            {formatCurrency(monthOutgoing)}
          </strong>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <table className="w-full border border-gray-200 rounded-xl bg-white border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="px-6 py-5 text-left uppercase text-xs font-medium text-gray-500 tracking-[0.0375em] border-b border-gray-200">
                  Transações recentes
                </th>

                <th className="border-b border-gray-200 w-40"></th>

                <th className="text-right border-b border-gray-200 w-44">
                  <Link
                    to="/transactions"
                    className="px-6 py-5 inline-flex items-center gap-1 text-sm font-medium text-brand-base hover:text-brand-dark transition-colors"
                  >
                    Ver todas
                    <ChevronRight className="size-5" />
                  </Link>
                </th>
              </tr>
            </thead>

            <tbody>
              {recentTransactions.map(transaction => {
                const Icon =
                  CATEGORY_ICONS[transaction.category.icon] || Utensils

                return (
                  <tr key={transaction.id}>
                    <td className="px-6 py-5 border-b border-gray-100 last:border-0">
                      <div className="flex items-center gap-4">
                        <CategoryIcon
                          icon={Icon}
                          variant={transaction.category.color as any}
                        />

                        <div className="flex flex-col gap-0.5">
                          <span className="font-medium text-gray-800">
                            {transaction.description}
                          </span>

                          <span className="text-sm text-gray-600">
                            {new Intl.DateTimeFormat('pt-BR').format(
                              new Date(transaction.transactedAt)
                            )}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-center border-b border-gray-100 last:border-0">
                      <Tag variant={transaction.category.color as any}>
                        {transaction.category.title}
                      </Tag>
                    </td>

                    <td className="px-6 py-5 border-b border-gray-100 last:border-0">
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-sm font-semibold text-gray-800">
                          {transaction.type === 'income' ? '+' : '-'}{' '}
                          {formatCurrency(transaction.amount)}
                        </span>

                        {transaction.type === 'income' ? (
                          <CircleArrowUp className="size-4 text-brand-base" />
                        ) : (
                          <CircleArrowDown className="size-4 text-red-base" />
                        )}
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>

            <tfoot>
              <tr>
                <td
                  colSpan={3}
                  className="text-center px-6 border-t border-gray-200"
                >
                  <div className="flex justify-center py-5">
                    <NewTransactionModal>
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 text-sm font-medium text-brand-base hover:text-brand-dark transition-colors cursor-pointer"
                      >
                        <Plus className="size-5" />
                        Nova transação
                      </button>
                    </NewTransactionModal>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div>
          <table className="w-full border border-gray-200 rounded-xl bg-white border-separate border-spacing-0">
            <thead>
              <tr>
                <th
                  colSpan={2}
                  className="px-6 py-5 text-left uppercase text-xs font-medium text-gray-500 tracking-[0.0375em] border-b border-gray-200"
                >
                  Categorias
                </th>

                <th className="text-right border-b border-gray-200 w-22.5">
                  <Link
                    to="/categories"
                    className="px-6 py-5 inline-flex items-center gap-1 text-sm font-medium text-brand-base hover:text-brand-dark transition-colors"
                  >
                    Gerenciar
                    <ChevronRight className="size-5" />
                  </Link>
                </th>
              </tr>
            </thead>

            <tbody>
              {categoriesWithAmount.map(category => (
                <tr key={category.id}>
                  <td className="pl-6 py-5 border-b border-gray-100 last:border-0">
                    <Tag variant={category.color as any}>{category.title}</Tag>
                  </td>

                  <td className="px-1 py-5 text-right text-gray-600 text-sm border-b border-gray-100 last:border-0">
                    {category.countTransactions}{' '}
                    {category.countTransactions === 1 ? 'item' : 'itens'}
                  </td>

                  <td className="pr-6 py-5 text-right font-bold text-gray-800 text-sm border-b border-gray-100 last:border-0">
                    {formatCurrency(category.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
