import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Binoculars, ChartLineUp, Icon, User } from 'phosphor-react'

interface NavItem {
  label: string
  href: string
  icon: Icon
  active: boolean
}

export function useNavigation() {
  const session = useSession()
  const router = useRouter()
  const isAuthenticated = session.status === 'authenticated'

  const items: NavItem[] = [
    {
      label: 'Início',
      href: '/home',
      icon: ChartLineUp,
      active: router.pathname.startsWith('/home'),
    },
    {
      label: 'Explorar',
      href: '/explorer',
      icon: Binoculars,
      active: router.pathname.startsWith('/explorer'),
    },
  ]

  if (isAuthenticated) {
    items.push({
      label: 'Perfil',
      href: `/profile?userId=${session.data.user.id}`,
      icon: User,
      active: router.pathname.startsWith('/profile'),
    })
  }

  return { items, session, isAuthenticated }
}
