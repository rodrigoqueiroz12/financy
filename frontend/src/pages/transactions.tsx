import {
  BriefcaseBusiness,
  Car,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleArrowDown,
  CircleArrowUp,
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
import { Logo } from '../components/logo'

export function Transactions() {
  return (
    <main className="min-h-dvh space-y-12">
      <header className="py-4 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between max-w-296 mx-auto">
          <Logo className="w-auto h-6" />

          <nav>
            <ul className="flex items-center gap-5">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-brand-base transition-colors"
                >
                  Dashboard
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="font-semibold text-sm text-brand-base hover:text-brand-base transition-colors"
                >
                  Transações
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-brand-base transition-colors"
                >
                  Categorias
                </a>
              </li>
            </ul>
          </nav>

          <div className="size-9 rounded-full text-sm font-medium text-gray-800 uppercase flex items-center justify-center bg-gray-300">
            CT
          </div>
        </div>
      </header>

      <div className="max-w-296 mx-auto space-y-8 pb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-0.5">
              Transações
            </h1>

            <p className="text-gray-600">
              Gerencie todas as suas transações financeiras
            </p>
          </div>

          <button className="bg-brand-base text-white rounded-lg px-3 py-2 flex items-center gap-2 text-sm font-medium hover:bg-brand-dark transition-colors">
            <Plus className="size-4" />
            Nova transação
          </button>
        </div>

        <section className="bg-white border border-gray-200 rounded-xl px-6 pt-5 pb-6 grid grid-cols-4 gap-4">
          <div className="space-y-2">
            <label
              htmlFor="search"
              className="text-sm font-medium text-gray-700 block"
            >
              Buscar
            </label>

            <div className="relative">
              <input
                id="search"
                type="text"
                placeholder="Buscar por descrição"
                className="w-full pl-10 pr-3 py-3.5 border border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:border-brand-base focus:ring-1 focus:ring-brand-base"
              />
              <Search className="size-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="type"
              className="text-sm font-medium text-gray-700 block"
            >
              Tipo
            </label>

            <div className="relative">
              <select
                id="type"
                className="w-full appearance-none pl-3 pr-10 py-3.5 border border-gray-200 rounded-lg text-sm text-gray-800 bg-white focus:outline-none focus:border-brand-base focus:ring-1 focus:ring-brand-base"
              >
                <option>Todos</option>
                <option>Entrada</option>
                <option>Saída</option>
              </select>

              <ChevronDown className="size-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="category"
              className="text-sm font-medium text-gray-700 block"
            >
              Categoria
            </label>

            <div className="relative">
              <select
                id="category"
                className="w-full appearance-none pl-3 pr-10 py-3.5 border border-gray-200 rounded-lg text-sm text-gray-800 bg-white focus:outline-none focus:border-brand-base focus:ring-1 focus:ring-brand-base"
              >
                <option>Todas</option>
                <option>Alimentação</option>
                <option>Transporte</option>
                <option>Mercado</option>
                <option>Salário</option>
              </select>

              <ChevronDown className="size-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="period"
              className="text-sm font-medium text-gray-700 block"
            >
              Período
            </label>

            <div className="relative">
              <select
                id="period"
                className="w-full appearance-none pl-3 pr-10 py-3.5 border border-gray-200 rounded-lg text-sm text-gray-800 bg-white focus:outline-none focus:border-brand-base focus:ring-1 focus:ring-brand-base"
              >
                <option>Novembro / 2025</option>
                <option>Dezembro / 2025</option>
              </select>

              <ChevronDown className="size-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
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
                  <span className="px-3 py-1 rounded-full bg-blue-light text-sm font-medium text-blue-dark">
                    Alimentação
                  </span>
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-center gap-2">
                    <CircleArrowDown className="size-4 text-red-base" />
                    <span className="text-sm font-medium text-red-dark">
                      Saída
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-right">
                  <span className="text-sm font-bold text-gray-800">
                    - R$ 89,50
                  </span>
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-end gap-2">
                    <button className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-danger hover:bg-gray-50 hover:text-danger/80 transition-colors">
                      <Trash className="size-4" />
                    </button>
                    <button className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors">
                      <Pencil className="size-4" />
                    </button>
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
                  <span className="px-3 py-1 rounded-full bg-purple-light text-sm font-medium text-purple-dark">
                    Transporte
                  </span>
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-center gap-2">
                    <CircleArrowDown className="size-4 text-red-base" />
                    <span className="text-sm font-medium text-red-dark">
                      Saída
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-right">
                  <span className="text-sm font-bold text-gray-800">
                    - R$ 100,00
                  </span>
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-end gap-2">
                    <button className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-danger hover:bg-gray-50 hover:text-danger/80 transition-colors">
                      <Trash className="size-4" />
                    </button>
                    <button className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors">
                      <Pencil className="size-4" />
                    </button>
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
                  <span className="px-3 py-1 rounded-full bg-orange-light text-sm font-medium text-orange-dark">
                    Mercado
                  </span>
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-center gap-2">
                    <CircleArrowDown className="size-4 text-red-base" />
                    <span className="text-sm font-medium text-red-dark">
                      Saída
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-right">
                  <span className="text-sm font-bold text-gray-800">
                    - R$ 156,80
                  </span>
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-end gap-2">
                    <button className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-danger hover:bg-gray-50 hover:text-danger/80 transition-colors">
                      <Trash className="size-4" />
                    </button>
                    <button className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors">
                      <Pencil className="size-4" />
                    </button>
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
                  <span className="px-3 py-1 rounded-full bg-green-light text-sm font-medium text-green-dark">
                    Investimento
                  </span>
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-center gap-2">
                    <CircleArrowUp className="size-4 text-green-base" />
                    <span className="text-sm font-medium text-green-dark">
                      Entrada
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-right">
                  <span className="text-sm font-bold text-gray-800">
                    + R$ 340,25
                  </span>
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-end gap-2">
                    <button className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-danger hover:bg-gray-50 hover:text-danger/80 transition-colors">
                      <Trash className="size-4" />
                    </button>
                    <button className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors">
                      <Pencil className="size-4" />
                    </button>
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
                  <span className="px-3 py-1 rounded-full bg-yellow-light text-sm font-medium text-yellow-dark">
                    Utilidades
                  </span>
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-center gap-2">
                    <CircleArrowDown className="size-4 text-red-base" />
                    <span className="text-sm font-medium text-red-dark">
                      Saída
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-right">
                  <span className="text-sm font-bold text-gray-800">
                    - R$ 1.700,00
                  </span>
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-end gap-2">
                    <button className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-danger hover:bg-gray-50 hover:text-danger/80 transition-colors">
                      <Trash className="size-4" />
                    </button>
                    <button className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors">
                      <Pencil className="size-4" />
                    </button>
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
                  <div className="flex items-center justify-center gap-2">
                    <CircleArrowUp className="size-4 text-green-base" />
                    <span className="text-sm font-medium text-green-dark">
                      Entrada
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-right">
                  <span className="text-sm font-bold text-gray-800">
                    + R$ 2.500,00
                  </span>
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-end gap-2">
                    <button className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-danger hover:bg-gray-50 hover:text-danger/80 transition-colors">
                      <Trash className="size-4" />
                    </button>
                    <button className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors">
                      <Pencil className="size-4" />
                    </button>
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
                  <span className="px-3 py-1 rounded-full bg-orange-light text-sm font-medium text-orange-dark">
                    Mercado
                  </span>
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-center gap-2">
                    <CircleArrowDown className="size-4 text-red-base" />
                    <span className="text-sm font-medium text-red-dark">
                      Saída
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-right">
                  <span className="text-sm font-bold text-gray-800">
                    - R$ 150,00
                  </span>
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-end gap-2">
                    <button className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-danger hover:bg-gray-50 hover:text-danger/80 transition-colors">
                      <Trash className="size-4" />
                    </button>
                    <button className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors">
                      <Pencil className="size-4" />
                    </button>
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
                  <span className="px-3 py-1 rounded-full bg-pink-light text-sm font-medium text-pink-dark">
                    Entretenimento
                  </span>
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-center gap-2">
                    <CircleArrowDown className="size-4 text-red-base" />
                    <span className="text-sm font-medium text-red-dark">
                      Saída
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-right">
                  <span className="text-sm font-bold text-gray-800">
                    - R$ 88,00
                  </span>
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-end gap-2">
                    <button className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-danger hover:bg-gray-50 hover:text-danger/80 transition-colors">
                      <Trash className="size-4" />
                    </button>

                    <button className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors">
                      <Pencil className="size-4" />
                    </button>
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
                      <button
                        className="size-8 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled
                      >
                        <ChevronLeft className="size-4" />
                      </button>
                      <button className="size-8 flex items-center justify-center bg-brand-base text-white rounded-lg text-sm font-medium hover:bg-brand-dark transition-colors">
                        1
                      </button>
                      <button className="size-8 flex items-center justify-center border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors">
                        2
                      </button>
                      <button className="size-8 flex items-center justify-center border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50 hover:text-gray-800 transition-colors">
                        3
                      </button>
                      <button className="size-8 flex items-center justify-center border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-gray-800 transition-colors">
                        <ChevronRight className="size-4" />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </section>
      </div>
    </main>
  )
}
