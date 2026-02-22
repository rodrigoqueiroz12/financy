import { ArrowUpDown, Pencil, Plus, Tags, Trash, Utensils } from 'lucide-react'
import { useEffect, useMemo } from 'react'
import { CategoryIcon } from '@/components/category-icon'
import { IconButton } from '@/components/icon-button'
import { LabelButton } from '@/components/label-button'
import { Tag } from '@/components/tag'
import { useCategoriesStore } from '@/stores/categories.store'
import { CATEGORY_ICONS } from '@/utils/categories'
import { NewCategoryModal } from '../components/new-category-modal'

export function Categories() {
  const { categories, fetchCategories, deleteCategory } = useCategoriesStore()

  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  const totalCategories = categories.length
  const totalTransactions = categories.reduce(
    (acc, cat) => acc + cat.countTransactions,
    0
  )
  const mostUsedCategory = useMemo(() => {
    if (categories.length === 0) return null
    return categories.reduce((prev, current) =>
      prev.countTransactions > current.countTransactions ? prev : current
    )
  }, [categories])

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
              {totalCategories}
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
              {totalTransactions}
            </strong>

            <span className="text-xs leading-4 font-medium text-gray-500 uppercase tracking-[0.0375em] block">
              Total de transações
            </span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-4">
          <div className="size-8 flex items-center justify-center">
            {mostUsedCategory ? (
              <CategoryIcon
                icon={CATEGORY_ICONS[mostUsedCategory.icon] || Utensils}
                variant={mostUsedCategory.color as any}
              />
            ) : (
              <Utensils className="size-6 text-blue-base" />
            )}
          </div>

          <div>
            <strong className="text-[1.75rem] leading-8 font-bold text-gray-800 block mb-2">
              {mostUsedCategory?.title || '-'}
            </strong>

            <span className="text-xs leading-4 font-medium text-gray-500 uppercase tracking-[0.0375em] block">
              Categoria mais utilizada
            </span>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-4 gap-4">
        {categories.map(category => {
          const Icon = CATEGORY_ICONS[category.icon] || Utensils

          return (
            <div
              key={category.id}
              className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-5"
            >
              <div className="flex items-start justify-between">
                <CategoryIcon icon={Icon} variant={category.color as any} />

                <div className="flex gap-2">
                  <IconButton
                    variant="danger"
                    onClick={() => deleteCategory(category.id)}
                  >
                    <Trash className="size-4" />
                  </IconButton>
                  <IconButton>
                    <Pencil className="size-4" />
                  </IconButton>
                </div>
              </div>

              <div>
                <strong className="block font-semibold text-gray-800">
                  {category.title}
                </strong>

                <p className="text-sm text-gray-600 line-clamp-2 h-10">
                  {category.description}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <Tag variant={category.color as any}>{category.title}</Tag>

                <span className="text-sm text-gray-600">
                  {category.countTransactions}{' '}
                  {category.countTransactions === 1 ? 'item' : 'itens'}
                </span>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}
