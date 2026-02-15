import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants/lite'

const paginationButton = tv({
  base: 'flex size-8 items-center justify-center rounded-lg text-sm leading-5 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 [&>svg]:size-4',
  variants: {
    active: {
      true: 'bg-brand-base text-white events-none',
      false:
        'bg-white border border-gray-300 text-gray-700 hover:bg-gray-200 cursor-pointer'
    }
  },
  defaultVariants: {
    active: false
  }
})

type PaginationButtonProps = ComponentProps<'button'> &
  VariantProps<typeof paginationButton>

export function PaginationButton({
  className,
  active,
  ...props
}: PaginationButtonProps) {
  return (
    <button
      type="button"
      className={paginationButton({ active, className })}
      {...props}
    />
  )
}
