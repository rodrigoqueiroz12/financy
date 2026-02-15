import {
  BriefcaseBusiness,
  Car,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  House,
  Landmark,
  Pencil,
  Plus,
  Search,
  ShoppingCart,
  Trash,
  Utensils
} from 'lucide-react'
import { IconButton } from '@/components/icon-button'
import { Input } from '@/components/input'
import { LabelButton } from '@/components/label-button'
import { PaginationButton } from '@/components/pagination-button'
import { Select } from '@/components/select'
import { Tag } from '@/components/tag'
import { Type } from '@/components/type'
import { NewTransactionModal } from '../components/new-transaction-modal'

export function Transactions() {
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
            <tr className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="size-10 flex items-center justify-center bg-blue-light text-blue-base rounded-lg">
                    <Utensils className="size-4" />
                  </div>
                  <span className="font-medium text-gray-800">
                    Jantar no Restaurante
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600 text-center">
                30/11/25
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-center">
                <Tag variant="blue">Alimentação</Tag>
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <Type variant="outcome">Saída</Type>
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-right">
                <span className="text-sm font-bold text-gray-800">
                  - R$ 89,50
                </span>
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-end gap-2">
                  <IconButton variant="danger">
                    <Trash className="size-4" />
                  </IconButton>
                  <IconButton>
                    <Pencil className="size-4" />
                  </IconButton>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="size-10 flex items-center justify-center bg-purple-light text-purple-base rounded-lg">
                    <Car className="size-4" />
                  </div>
                  <span className="font-medium text-gray-800">
                    Posto de Gasolina
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600 text-center">
                29/11/25
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-center">
                <Tag variant="purple">Transporte</Tag>
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <Type variant="outcome">Saída</Type>
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-right">
                <span className="text-sm font-bold text-gray-800">
                  - R$ 100,00
                </span>
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-end gap-2">
                  <IconButton variant="danger">
                    <Trash className="size-4" />
                  </IconButton>
                  <IconButton>
                    <Pencil className="size-4" />
                  </IconButton>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="size-10 flex items-center justify-center bg-orange-light text-orange-base rounded-lg">
                    <ShoppingCart className="size-4" />
                  </div>
                  <span className="font-medium text-gray-800">
                    Compras no Mercado
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600 text-center">
                28/11/25
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-center">
                <Tag variant="orange">Mercado</Tag>
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <Type variant="outcome">Saída</Type>
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-right">
                <span className="text-sm font-bold text-gray-800">
                  - R$ 156,80
                </span>
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-end gap-2">
                  <IconButton variant="danger">
                    <Trash className="size-4" />
                  </IconButton>
                  <IconButton>
                    <Pencil className="size-4" />
                  </IconButton>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="size-10 flex items-center justify-center bg-green-light text-green-base rounded-lg">
                    <Landmark className="size-4" />
                  </div>
                  <span className="font-medium text-gray-800">
                    Retorno de Investimento
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600 text-center">
                26/11/25
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-center">
                <Tag variant="green">Investimento</Tag>
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <Type variant="income">Entrada</Type>
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-right">
                <span className="text-sm font-bold text-gray-800">
                  + R$ 340,25
                </span>
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-end gap-2">
                  <IconButton variant="danger">
                    <Trash className="size-4" />
                  </IconButton>
                  <IconButton>
                    <Pencil className="size-4" />
                  </IconButton>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="size-10 flex items-center justify-center bg-yellow-light text-yellow-base rounded-lg">
                    <House className="size-4" />
                  </div>
                  <span className="font-medium text-gray-800">Aluguel</span>
                </div>
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600 text-center">
                26/11/25
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-center">
                <Tag variant="yellow">Utilidades</Tag>
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <Type variant="outcome">Saída</Type>
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-right">
                <span className="text-sm font-bold text-gray-800">
                  - R$ 1.700,00
                </span>
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-end gap-2">
                  <IconButton variant="danger">
                    <Trash className="size-4" />
                  </IconButton>
                  <IconButton>
                    <Pencil className="size-4" />
                  </IconButton>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="size-10 flex items-center justify-center bg-green-light text-green-base rounded-lg">
                    <BriefcaseBusiness className="size-4" />
                  </div>
                  <span className="font-medium text-gray-800">Freelance</span>
                </div>
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600 text-center">
                24/11/25
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-center">
                <span className="px-3 py-1 rounded-full bg-green-light text-sm font-medium text-green-dark">
                  Salário
                </span>
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <Type variant="income">Entrada</Type>
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-right">
                <span className="text-sm font-bold text-gray-800">
                  + R$ 2.500,00
                </span>
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-end gap-2">
                  <IconButton variant="danger">
                    <Trash className="size-4" />
                  </IconButton>
                  <IconButton>
                    <Pencil className="size-4" />
                  </IconButton>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="size-10 flex items-center justify-center bg-orange-light text-orange-base rounded-lg">
                    <ShoppingCart className="size-4" />
                  </div>
                  <span className="font-medium text-gray-800">
                    Compras Jantar
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600 text-center">
                22/11/25
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-center">
                <Tag variant="orange">Mercado</Tag>
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <Type variant="outcome">Saída</Type>
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-right">
                <span className="text-sm font-bold text-gray-800">
                  - R$ 150,00
                </span>
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-end gap-2">
                  <IconButton variant="danger">
                    <Trash className="size-4" />
                  </IconButton>
                  <IconButton>
                    <Pencil className="size-4" />
                  </IconButton>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="size-10 flex items-center justify-center bg-pink-light text-pink-base rounded-lg">
                    <Clapperboard className="size-4" />
                  </div>
                  <span className="font-medium text-gray-800">Cinema</span>
                </div>
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-600 text-center">
                18/12/25
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-center">
                <Tag variant="pink">Entretenimento</Tag>
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <Type variant="outcome">Saída</Type>
              </td>
              <td className="px-6 py-4 border-b border-gray-200 text-right">
                <span className="text-sm font-bold text-gray-800">
                  - R$ 88,00
                </span>
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-end gap-2">
                  <IconButton variant="danger">
                    <Trash />
                  </IconButton>

                  <IconButton>
                    <Pencil />
                  </IconButton>
                </div>
              </td>
            </tr>
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
