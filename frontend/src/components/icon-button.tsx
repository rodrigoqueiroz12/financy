import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants/lite'

const iconButton = tv({
  base: 'flex size-8 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-200 transition-colors enabled:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed [&>svg]:size-4',
  variants: {
    variant: {
      default: 'text-gray-700',
      danger: 'text-danger'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

type IconButtonProps = ComponentProps<'button'> &
  VariantProps<typeof iconButton>

export function IconButton({ className, variant, ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      className={iconButton({ variant, className })}
      {...props}
    />
  )
}
