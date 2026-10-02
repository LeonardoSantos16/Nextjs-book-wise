import { useNavigation } from '@/hooks/useNavigation'
import { ContainerBottomNav, NavItem } from './styles'

export function BottomNav() {
  const { items } = useNavigation()

  return (
    <ContainerBottomNav>
      {items.map(({ label, href, icon: Icon, active }) => (
        <NavItem key={label} href={href} active={active} aria-current={active ? 'page' : undefined}>
          <Icon size={24} weight={active ? 'bold' : 'regular'} />
          {label}
        </NavItem>
      ))}
    </ContainerBottomNav>
  )
}
