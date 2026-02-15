import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants/lite'

const labelButton = tv({
  base: 'flex items-center justify-center gap-2 rounded-lg font-medium transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    variant: {
      primary: 'bg-brand-base text-white hover:bg-brand-dark',
      secondary:
        'bg-white border border-gray-300 text-gray-700 hover:bg-gray-200'
    },
    size: {
      md: 'h-12 px-4 [&>svg]:size-4.5',
      sm: 'h-9 px-3 text-sm [&>svg]:size-4'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})

type LabelButtonProps = ComponentProps<'button'> &
  VariantProps<typeof labelButton>

export function LabelButton({
  className,
  variant,
  size,
  ...props
}: LabelButtonProps) {
  return (
    <button className={labelButton({ variant, size, className })} {...props} />
  )
}
