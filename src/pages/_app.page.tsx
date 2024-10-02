import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { MainLayout } from '@/layouts/MainLayout'
import { SessionProvider } from 'next-auth/react'

/*
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
   */

import { useRouter } from 'next/router'
globalStyles()
globalStyles()
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter()
  const isLoginPage = router.pathname === '/login' || router.pathname === '/'
  return (
    <SessionProvider session={session}>
      {!isLoginPage ? (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  )
}
