import type { LucideIcon } from 'lucide-react'
import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants/lite'

const categoryIcon = tv({
  base: 'flex size-10 shrink-0 items-center justify-center rounded-lg',
  variants: {
    variant: {
      gray: 'bg-gray-100 text-gray-500',
      blue: 'bg-blue-light text-blue-base',
      purple: 'bg-purple-light text-purple-base',
      pink: 'bg-pink-light text-pink-base',
      red: 'bg-red-light text-red-base',
      orange: 'bg-orange-light text-orange-base',
      yellow: 'bg-yellow-light text-yellow-base',
      green: 'bg-green-light text-green-base'
    }
  },
  defaultVariants: {
    variant: 'gray'
  }
})

interface CategoryIconProps
  extends ComponentProps<'div'>,
    VariantProps<typeof categoryIcon> {
  icon: LucideIcon
}

export function CategoryIcon({
  className,
  variant,
  icon: Icon,
  ...props
}: CategoryIconProps) {
  return (
    <div className={categoryIcon({ variant, className })} {...props}>
      <Icon className="size-4" />
    </div>
  )
}
