import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { X } from 'lucide-react'
import { type ReactNode, useState } from 'react'
import { toast } from 'sonner'
import { useCategoriesStore } from '@/stores/categories.store'
import { CATEGORY_ICONS } from '@/utils/categories'
import { IconButton } from './icon-button'
import { Input } from './input'
import { LabelButton } from './label-button'

interface NewCategoryModalProps {
  children: ReactNode
}

export function NewCategoryModal({ children }: NewCategoryModalProps) {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [icon, setIcon] = useState('utensils')
  const [color, setColor] = useState('green')

  const createCategory = useCategoriesStore(state => state.createCategory)

  async function handleCreateCategory(event: React.SubmitEvent) {
    event.preventDefault()

    try {
      await createCategory({
        title,
        description: description || undefined,
        icon,
        color
      })

      setTitle('')
      setDescription('')
      setIcon('utensils')
      setColor('green')
      setOpen(false)
      toast.success('Categoria criada com sucesso')
    } catch (_error) {
      toast.error('Erro ao criar categoria')
      console.log('Erro ao criar categoria')
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
                Nova categoria
              </Dialog.Title>

              <Dialog.Description className="text-sm text-gray-600">
                Organize suas transações com categorias
              </Dialog.Description>
            </div>

            <Dialog.Close asChild>
              <IconButton type="button" aria-label="Fechar">
                <X />
              </IconButton>
            </Dialog.Close>
          </div>

          <form onSubmit={handleCreateCategory} className="flex flex-col gap-4">
            <Input.Root>
              <Input.Label htmlFor="title">Título</Input.Label>
              <Input.Control>
                <Input.Field
                  autoComplete="off"
                  id="title"
                  type="text"
                  placeholder="Ex. Alimentação"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  required
                />
              </Input.Control>
            </Input.Root>

            <Input.Root>
              <Input.Label htmlFor="description">Descrição</Input.Label>
              <Input.Control>
                <Input.Field
                  autoComplete="off"
                  id="description"
                  type="text"
                  placeholder="Descrição da categoria"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </Input.Control>
              <Input.Helper>Opcional</Input.Helper>
            </Input.Root>

            <div className="space-y-2">
              <span className="text-sm font-medium text-gray-700 block">
                Ícone
              </span>

              <RadioGroup.Root
                value={icon}
                onValueChange={setIcon}
                className="grid grid-cols-8 gap-2"
              >
                {Object.entries(CATEGORY_ICONS).map(([value, Icon]) => (
                  <RadioGroup.Item
                    key={value}
                    value={value}
                    className="size-10.5 flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 focus:outline-none data-[state=checked]:border-brand-base data-[state=checked]:text-brand-base data-[state=checked]:bg-gray-100 cursor-pointer transition-colors"
                  >
                    <Icon className="size-5" />
                  </RadioGroup.Item>
                ))}
              </RadioGroup.Root>
            </div>

            <div className="space-y-2">
              <span className="text-sm font-medium text-gray-700 block w-fit">
                Cor
              </span>

              <RadioGroup.Root
                value={color}
                onValueChange={setColor}
                className="flex gap-2"
              >
                {[
                  { value: 'green', colorCode: 'bg-green-base' },
                  { value: 'blue', colorCode: 'bg-blue-base' },
                  { value: 'purple', colorCode: 'bg-purple-base' },
                  { value: 'pink', colorCode: 'bg-pink-base' },
                  { value: 'red', colorCode: 'bg-red-base' },
                  { value: 'orange', colorCode: 'bg-orange-base' },
                  { value: 'yellow', colorCode: 'bg-yellow-base' }
                ].map(({ value: val, colorCode }) => (
                  <RadioGroup.Item
                    key={val}
                    value={val}
                    className="h-7.5 flex-1 rounded-lg p-1 focus:outline-none cursor-pointer bg-gray-100 border border-gray-300 data-[state=checked]:border-brand-base"
                  >
                    <div className={`size-full rounded-sm ${colorCode}`} />
                  </RadioGroup.Item>
                ))}
              </RadioGroup.Root>
            </div>

            <LabelButton type="submit" className="mt-2">
              Salvar
            </LabelButton>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
