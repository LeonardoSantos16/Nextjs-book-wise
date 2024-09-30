import { ButtonLogin } from '@/components/ButtonLogin/Index'
import {
  ContainerLogin,
  LoginContent,
  TitleLogin,
  OptionsLogin,
} from './styles'
import Image from 'next/image'

export function Login() {
  return (
    <ContainerLogin>
      <Image
        src="/images/Imagelogin.svg"
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
          />
          <ButtonLogin
            image="/images/google-icon.svg"
            alt="icon google"
            text="Entrar com Google"
          />
          <ButtonLogin
            image="/images/RocketLaunch.svg"
            alt="Rocket"
            text="Acessar como visitante"
          />
        </OptionsLogin>
      </LoginContent>
    </ContainerLogin>
  )
}
