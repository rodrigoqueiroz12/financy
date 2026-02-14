import { Link, type LinkProps, useLocation } from 'react-router'
import { tv } from 'tailwind-variants/lite'

export type HeaderLinkProps = LinkProps

const headerLink = tv({
  base: 'text-sm font-medium transition-colors',
  variants: {
    active: {
      true: 'text-brand-base',
      false: 'text-gray-600 hover:text-brand-base'
    }
  },
  defaultVariants: {
    active: false
  }
})

export function HeaderLink(props: HeaderLinkProps) {
  const { pathname } = useLocation()
  const isActive = pathname === props.to

  return <Link {...props} className={headerLink({ active: isActive })} />
}
