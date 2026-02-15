import {
  ArrowUpDown,
  BriefcaseBusiness,
  Car,
  Heart,
  Pencil,
  PiggyBank,
  Plus,
  ShoppingCart,
  Tags,
  Ticket,
  Trash,
  Utensils,
  Zap
} from 'lucide-react'
import { LabelButton } from '@/components/label-button'
import { Tag } from '@/components/tag'
import { NewCategoryModal } from '../components/new-category-modal'

export function Categories() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-0.5">
            Categorias
          </h1>

          <p className="text-gray-600">
            Organize suas transações por categorias
          </p>
        </div>

        <NewCategoryModal>
          <LabelButton type="button" size="sm">
            <Plus />
            Nova categoria
          </LabelButton>
        </NewCategoryModal>
      </div>

      <section className="grid grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4">
          <div className="size-8 flex items-center justify-center">
            <Tags className="size-6 text-gray-700" />
          </div>

          <div>
            <strong className="text-[1.75rem] leading-8 font-bold text-gray-800 block mb-2">
              8
            </strong>

            <span className="text-xs leading-4 font-medium text-gray-500 uppercase tracking-[0.0375em] block">
              Total de categorias
            </span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4">
          <div className="size-8 flex items-center justify-center">
            <ArrowUpDown className="size-6 text-purple-base" />
          </div>

          <div>
            <strong className="text-[1.75rem] leading-8 font-bold text-gray-800 block mb-2">
              27
            </strong>

            <span className="text-xs leading-4 font-medium text-gray-500 uppercase tracking-[0.0375em] block">
              Total de transações
            </span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4">
          <div className="size-8 flex items-center justify-center">
            <Utensils className="size-6 text-blue-base" />
          </div>

          <div>
            <strong className="text-[1.75rem] leading-8 font-bold text-gray-800 block mb-2">
              Alimentação
            </strong>

            <span className="text-xs leading-4 font-medium text-gray-500 uppercase tracking-[0.0375em] block">
              Categoria mais utilizada
            </span>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-4 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-5">
          <div className="flex items-start justify-between">
            <div className="size-10 flex items-center justify-center bg-blue-light text-blue-base rounded-lg">
              <Utensils className="size-4" />
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-danger hover:bg-gray-50 hover:text-danger/80 transition-colors"
              >
                <Trash className="size-4" />
              </button>

              <button
                type="button"
                className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors"
              >
                <Pencil className="size-4" />
              </button>
            </div>
          </div>

          <div>
            <strong className="block font-semibold text-gray-800">
              Alimentação
            </strong>

            <p className="text-sm text-gray-600 line-clamp-2 h-10">
              Restaurantes, delivery e refeições
            </p>
          </div>

          <div className="flex items-center justify-between">
            <Tag variant="blue">Alimentação</Tag>

            <span className="text-sm text-gray-600">12 itens</span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-5">
          <div className="flex items-start justify-between">
            <div className="size-10 flex items-center justify-center bg-pink-light text-pink-base rounded-lg">
              <Ticket className="size-4" />
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-danger hover:bg-gray-50 hover:text-danger/80 transition-colors"
              >
                <Trash className="size-4" />
              </button>
              <button
                type="button"
                className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors"
              >
                <Pencil className="size-4" />
              </button>
            </div>
          </div>

          <div>
            <strong className="block font-semibold text-gray-800">
              Entretenimento
            </strong>
            <p className="text-sm text-gray-600 line-clamp-2 h-10">
              Cinema, jogos e lazer
            </p>
          </div>

          <div className="flex items-center justify-between">
            <Tag variant="pink">Entretenimento</Tag>
            <span className="text-sm text-gray-600">2 itens</span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-5">
          <div className="flex items-start justify-between">
            <div className="size-10 flex items-center justify-center bg-green-light text-green-base rounded-lg">
              <PiggyBank className="size-4" />
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-danger hover:bg-gray-50 hover:text-danger/80 transition-colors"
              >
                <Trash className="size-4" />
              </button>
              <button
                type="button"
                className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors"
              >
                <Pencil className="size-4" />
              </button>
            </div>
          </div>

          <div>
            <strong className="block font-semibold text-gray-800">
              Investimento
            </strong>
            <p className="text-sm text-gray-600 line-clamp-2 h-10">
              Aplicações e retornos financeiros
            </p>
          </div>

          <div className="flex items-center justify-between">
            <Tag variant="green">Investimento</Tag>
            <span className="text-sm text-gray-600">1 item</span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-5">
          <div className="flex items-start justify-between">
            <div className="size-10 flex items-center justify-center bg-orange-light text-orange-base rounded-lg">
              <ShoppingCart className="size-4" />
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-danger hover:bg-gray-50 hover:text-danger/80 transition-colors"
              >
                <Trash className="size-4" />
              </button>
              <button
                type="button"
                className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors"
              >
                <Pencil className="size-4" />
              </button>
            </div>
          </div>

          <div>
            <strong className="block font-semibold text-gray-800">
              Mercado
            </strong>
            <p className="text-sm text-gray-600 line-clamp-2 h-10">
              Compras de supermercado e mantimentos
            </p>
          </div>

          <div className="flex items-center justify-between">
            <Tag variant="orange">Mercado</Tag>
            <span className="text-sm text-gray-600">3 itens</span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-5">
          <div className="flex items-start justify-between">
            <div className="size-10 flex items-center justify-center bg-green-light text-green-base rounded-lg">
              <BriefcaseBusiness className="size-4" />
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-danger hover:bg-gray-50 hover:text-danger/80 transition-colors"
              >
                <Trash className="size-4" />
              </button>
              <button
                type="button"
                className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors"
              >
                <Pencil className="size-4" />
              </button>
            </div>
          </div>

          <div>
            <strong className="block font-semibold text-gray-800">
              Salário
            </strong>
            <p className="text-sm text-gray-600 line-clamp-2 h-10">
              Renda mensal e bonificações
            </p>
          </div>

          <div className="flex items-center justify-between">
            <Tag variant="green">Salário</Tag>
            <span className="text-sm text-gray-600">3 itens</span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-5">
          <div className="flex items-start justify-between">
            <div className="size-10 flex items-center justify-center bg-red-50 text-red-500 rounded-lg">
              <Heart className="size-4" />
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-danger hover:bg-gray-50 hover:text-danger/80 transition-colors"
              >
                <Trash className="size-4" />
              </button>
              <button
                type="button"
                className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors"
              >
                <Pencil className="size-4" />
              </button>
            </div>
          </div>

          <div>
            <strong className="block font-semibold text-gray-800">Saúde</strong>
            <p className="text-sm text-gray-600 line-clamp-2 h-10">
              Medicamentos, consultas e exames
            </p>
          </div>

          <div className="flex items-center justify-between">
            <Tag variant="red">Saúde</Tag>
            <span className="text-sm text-gray-600">0 itens</span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-5">
          <div className="flex items-start justify-between">
            <div className="size-10 flex items-center justify-center bg-purple-light text-purple-base rounded-lg">
              <Car className="size-4" />
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-danger hover:bg-gray-50 hover:text-danger/80 transition-colors"
              >
                <Trash className="size-4" />
              </button>
              <button
                type="button"
                className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors"
              >
                <Pencil className="size-4" />
              </button>
            </div>
          </div>

          <div>
            <strong className="block font-semibold text-gray-800">
              Transporte
            </strong>
            <p className="text-sm text-gray-600 line-clamp-2 h-10">
              Gasolina, transporte público e viagens
            </p>
          </div>

          <div className="flex items-center justify-between">
            <Tag variant="purple">Transporte</Tag>
            <span className="text-sm text-gray-600">8 itens</span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-5">
          <div className="flex items-start justify-between">
            <div className="size-10 flex items-center justify-center bg-yellow-light text-yellow-base rounded-lg">
              <Zap className="size-4" />
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-danger hover:bg-gray-50 hover:text-danger/80 transition-colors"
              >
                <Trash className="size-4" />
              </button>
              <button
                type="button"
                className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors"
              >
                <Pencil className="size-4" />
              </button>
            </div>
          </div>

          <div>
            <strong className="block font-semibold text-gray-800">
              Utilidades
            </strong>
            <p className="text-sm text-gray-600 line-clamp-2 h-10">
              Energia, água, internet e telefone
            </p>
          </div>

          <div className="flex items-center justify-between">
            <Tag variant="yellow">Utilidades</Tag>
            <span className="text-sm text-gray-600">7 itens</span>
          </div>
        </div>
      </section>
    </div>
  )
}
