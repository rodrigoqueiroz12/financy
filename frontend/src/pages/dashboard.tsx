import {
  BriefcaseBusiness,
  ChevronRight,
  CircleArrowDown,
  CircleArrowUp,
  Plus,
  Wallet
} from 'lucide-react'
import { Logo } from '../components/logo'

export function Dashboard() {
  return (
    <main className="min-h-dvh">
      <header className="py-4 border-b border-gray-200">
        <div className="flex items-center justify-between max-w-296 mx-auto">
          <Logo className="w-auto h-6" />

          <nav>
            <ul className="flex items-center gap-5">
              <li>
                <a href="#" className="font-semibold text-sm text-brand-base">
                  Dashboard
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-brand-base transition-colors"
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

      <div className="max-w-296 mx-auto pt-12 space-y-6">
        <section className="grid grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Wallet className="size-5 text-purple-base" />
              <h2 className="text-xs text-gray-500 font-medium tracking-[0.0375em] uppercase">
                Saldo total
              </h2>
            </div>

            <strong className="text-[1.75rem] leading-8 font-bold text-gray-800">
              R$ 12.000,00
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
              R$ 12.000,00
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
              R$ 12.000,00
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
                    <a
                      href="#"
                      className="px-6 py-5 inline-flex items-center gap-1 text-sm text-medium text-brand-base hover:text-brand-dark transition-colors"
                    >
                      Ver todas
                      <ChevronRight className="size-5" />
                    </a>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="size-10 flex items-center justify-center bg-green-light text-green-base rounded-lg">
                        <BriefcaseBusiness className="size-4" />
                      </div>

                      <div className="flex flex-col gap-0.5">
                        <span className="font-medium text-gray-800">
                          Pagamento de salário
                        </span>

                        <span className="text-sm text-gray-600">01/12/26</span>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-5 text-center">
                    <span className="px-3 py-1 rounded-full bg-green-light text-sm font-medium text-green-dark">
                      Receita
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-sm font-semibold text-gray-800">
                        + R$ 12.000,00
                      </span>

                      <CircleArrowUp className="size-4 text-brand-base" />
                    </div>
                  </td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <td
                    colSpan={3}
                    className="text-center px-6 border-t border-gray-200"
                  >
                    <div className="flex justify-center py-5">
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 text-sm font-medium text-brand-base hover:text-brand-dark transition-colors"
                      >
                        <Plus className="size-5" />
                        Nova transação
                      </a>
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
                    <a
                      href="#"
                      className="px-6 py-5 inline-flex items-center gap-1 text-sm font-medium text-brand-base hover:text-brand-dark transition-colors"
                    >
                      Gerenciar
                      <ChevronRight className="size-5" />
                    </a>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="pl-6 py-5">
                    <span className="px-3 py-1 rounded-full bg-blue-light text-sm font-medium text-blue-dark">
                      Alimentação
                    </span>
                  </td>

                  <td className="px-1 py-5 text-right text-gray-600 text-sm">
                    12 itens
                  </td>

                  <td className="pr-6 py-5 text-right font-bold text-gray-800 text-sm">
                    R$ 542,30
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}
