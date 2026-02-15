import type { ComponentProps } from 'react'
import { createContext, useContext } from 'react'
import { tv, type VariantProps } from 'tailwind-variants/lite'

const input = tv({
  slots: {
    root: 'group flex w-full flex-col gap-2',
    label:
      'text-sm font-medium transition-colors group-focus-within:text-brand-base w-fit',
    control:
      'flex w-full items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 h-12 transition-colors focus-within:[&>svg]:text-brand-base focus-within:border-brand-base',
    field:
      'flex-1 bg-transparent p-0 text-gray-800 placeholder-gray-400 outline-none focus:ring-0 sm:text-sm sm:leading-6',
    helper: 'text-xs text-gray-500'
  },
  variants: {
    error: {
      true: {
        label: 'text-danger group-focus-within:text-danger',
        control: '[&>svg]:text-danger'
      },
      false: {
        label: 'text-gray-700'
      }
    },
    disabled: {
      true: {
        control: 'cursor-not-allowed opacity-50'
      }
    }
  },
  defaultVariants: {
    error: false
  }
})

type InputVariants = VariantProps<typeof input>

const InputContext = createContext<{ slots: any } | null>(null)

function Root({
  className,
  error,
  disabled,
  ...props
}: ComponentProps<'div'> & InputVariants) {
  const slots = input({ error, disabled })
  return (
    <InputContext.Provider value={{ slots }}>
      <div className={slots.root({ className })} {...props} />
    </InputContext.Provider>
  )
}

function Label({ className, ...props }: ComponentProps<'label'>) {
  const context = useContext(InputContext)
  const styles = context?.slots?.label({ className })

  return <label className={styles} {...props} />
}

function Control({ className, ...props }: ComponentProps<'div'>) {
  const context = useContext(InputContext)
  const styles = context?.slots?.control({ className })

  return <div className={styles} {...props} />
}

function Field({ className, ...props }: ComponentProps<'input'>) {
  const context = useContext(InputContext)
  const styles = context?.slots?.field({ className })

  return <input className={styles} {...props} />
}

function Helper({ className, ...props }: ComponentProps<'span'>) {
  const context = useContext(InputContext)
  const styles = context?.slots?.helper({ className })

  return <span className={styles} {...props} />
}

export const Input = {
  Root,
  Label,
  Control,
  Field,
  Helper
}
