import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'
import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants/lite'

const select = tv({
  slots: {
    root: 'flex flex-col gap-2',
    label: 'text-sm font-medium transition-colors text-gray-700',
    trigger:
      'flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-3 h-12 text-gray-800 transition-colors focus:outline-none focus:border-brand-base disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-gray-400 [&>span]:flex [&>span]:items-center [&>span]:gap-2',
    content:
      'z-50 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg animate-in fade-in-80',
    viewport: 'px-3 py-3.5 flex flex-col gap-3',
    item: 'relative flex w-full cursor-default select-none items-center rounded-md pr-8 outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    itemIndicator:
      'absolute right-2 flex size-5 items-center justify-center text-brand-base'
  },
  variants: {
    error: {
      true: {
        label: 'text-danger',
        trigger: 'border-danger focus:border-danger focus:ring-danger'
      }
    }
  }
})

type SelectVariants = VariantProps<typeof select>

interface SelectProps
  extends ComponentProps<typeof SelectPrimitive.Root>,
    SelectVariants {
  className?: string
}

function Root({ className, error, children, ...props }: SelectProps) {
  const { root } = select({ error })

  return (
    <SelectPrimitive.Root {...props}>
      <div className={root({ className })}>{children}</div>
    </SelectPrimitive.Root>
  )
}

function Label({ className, ...props }: ComponentProps<'label'>) {
  const { label } = select()

  return <label className={label({ className })} {...props} />
}

function Trigger({
  className,
  children,
  ...props
}: ComponentProps<typeof SelectPrimitive.Trigger>) {
  const { trigger } = select()
  return (
    <SelectPrimitive.Trigger className={trigger({ className })} {...props}>
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="size-4 text-gray-700" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function Content({
  className,
  children,
  position = 'popper',
  sideOffset = 4,
  ...props
}: ComponentProps<typeof SelectPrimitive.Content>) {
  const { content, viewport } = select()
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={content({ className })}
        position={position}
        sideOffset={sideOffset}
        {...props}
      >
        <SelectPrimitive.Viewport className={viewport()}>
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function Item({
  className,
  children,
  ...props
}: ComponentProps<typeof SelectPrimitive.Item>) {
  const { item, itemIndicator } = select()
  return (
    <SelectPrimitive.Item className={item({ className })} {...props}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className={itemIndicator()}>
        <Check />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

export const Select = {
  Root,
  Label,
  Trigger,
  Value: SelectPrimitive.Value,
  Content,
  Item
}
