import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants/lite'

const tag = tv({
  base: 'inline-flex items-center justify-center rounded-full px-3 py-1 h-7 text-sm font-medium cursor-default select-none',
  variants: {
    variant: {
      gray: 'bg-gray-100 text-gray-500',
      blue: 'bg-blue-light text-blue-dark',
      purple: 'bg-purple-light text-purple-dark',
      pink: 'bg-pink-light text-pink-dark',
      red: 'bg-red-50 text-red-700',
      orange: 'bg-orange-light text-orange-dark',
      yellow: 'bg-yellow-light text-yellow-dark',
      green: 'bg-green-light text-green-dark'
    }
  },
  defaultVariants: {
    variant: 'gray'
  }
})

type TagProps = ComponentProps<'span'> & VariantProps<typeof tag>

export function Tag({ className, variant, ...props }: TagProps) {
  return <span className={tag({ variant, className })} {...props} />
}
