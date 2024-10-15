import { ButtonLogin } from '@/components/ButtonLogin/Index'
import {
  ContainerLogin,
  LoginContent,
  TitleLogin,
  OptionsLogin,
} from './styles'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { buildNextAuthOptions } from '../api/auth/[...nextauth].api'
import { unstable_getServerSession } from 'next-auth'
export default function Login() {
  const session = useSession()
  const router = useRouter()
  async function handleConnectGoogle() {
    await signIn('google')
  }
  async function handleConnectGithub() {
    await signIn('github')
  }
  useEffect(() => {
    if (session.status === 'authenticated') {
      router.push(`/home/`)
    }
  }, [session.status])

  async function handleConnectVisitor() {
    router.push('/home')
  }
  return (
    <ContainerLogin>
      <Image
        src="/images/books/Imagelogin.svg"
        alt="BookWise"
        width={598}
        height={912}
      />
      <LoginContent>
        <TitleLogin>
          <h1>Boas vindas!</h1>
          <p>Faça seu login ou acesse como visitante.</p>
        </TitleLogin>
        <OptionsLogin>
          <ButtonLogin
            image="/images/icons_github.svg"
            alt="icon github"
            text="Entrar com github"
            onClick={handleConnectGithub}
          />
          <ButtonLogin
            image="/images/google-icon.svg"
            alt="icon google"
            text="Entrar com Google"
            onClick={handleConnectGoogle}
          />
          <ButtonLogin
            image="/images/RocketLaunch.svg"
            alt="Rocket"
            text="Entrar como visitante"
            onClick={handleConnectVisitor}
          />
        </OptionsLogin>
      </LoginContent>
    </ContainerLogin>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  params,
}) => {
  const session = await unstable_getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )
  return {
    props: {
      session,
    },
  }
}
