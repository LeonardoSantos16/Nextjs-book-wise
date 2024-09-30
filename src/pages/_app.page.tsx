import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { MainLayout } from '@/layouts/MainLayout'
globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

/*
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { MainLayout } from '@/layouts/MainLayout'
import { useRouter } from 'next/router'
globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isLoginPage = router.pathname === '/'
  return (
    <>
      {!isLoginPage ? (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
    */
