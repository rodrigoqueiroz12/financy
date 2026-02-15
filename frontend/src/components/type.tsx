import { CircleArrowDown, CircleArrowUp } from 'lucide-react'
import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants/lite'

const type = tv({
  slots: {
    base: 'flex items-center justify-center gap-2 text-sm font-medium leading-5 cursor-default select-none',
    icon: 'size-4'
  },
  variants: {
    variant: {
      income: {
        base: 'text-green-dark',
        icon: 'text-green-base'
      },
      outcome: {
        base: 'text-red-dark',
        icon: 'text-red-base'
      }
    }
  },
  defaultVariants: {
    variant: 'income'
  }
})

type TypeProps = ComponentProps<'div'> & VariantProps<typeof type>

export function Type({ className, variant, children, ...props }: TypeProps) {
  const { base, icon } = type({ variant })
  const Icon = variant === 'income' ? CircleArrowUp : CircleArrowDown

  return (
    <div className={base({ className })} {...props}>
      <Icon className={icon()} />
      {children}
    </div>
  )
}
