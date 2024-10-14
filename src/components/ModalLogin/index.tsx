import { X } from "phosphor-react"
import { ButtonLogin } from "../ButtonLogin/Index"
import { signIn } from "next-auth/react"
import { Container, IconStyled, OptionsLogin, ContentModaL } from "./styles"
export function ModalLogin(){

    async function handleConnectGoogle() {
        await signIn('google')
      }
      async function handleConnectGithub() {
        await signIn('github')
      }
    return(
        <Container>
            <ContentModaL>
            <IconStyled>
                <X size={24} />
            </IconStyled>
            <h2>Faça login para deixar sua avaliação</h2>
            <OptionsLogin>
                <ButtonLogin 
                     image="/images/google-icon.svg"
                     alt="icon google"
                     text="Entrar com Google"
                     onClick={handleConnectGoogle}
                />
                <ButtonLogin
                    image="/images/icons_github.svg"
                    alt="icon github"
                    text="Entrar com github"
                    onClick={handleConnectGithub}
                />
            </OptionsLogin>
            </ContentModaL>
        </Container>  
    )

}