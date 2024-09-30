import { X } from 'phosphor-react'
import { ContainerModal, IconClose, OptionsLogin, ButtonLogin } from './styles'
import Image from 'next/image'
export function ModalLogin() {
  return (
    <ContainerModal>
      <IconClose>
        <X size={24} />
      </IconClose>
      <h3>Faça login para deixar sua avaliação</h3>
      <OptionsLogin>
        <ButtonLogin>
          <Image
            src="/images/google-icon.svg"
            alt="icon google"
            width={32}
            height={32}
          />
          <p>Entrar com Google</p>
        </ButtonLogin>
        <ButtonLogin>
          <Image
            src="/images/icons_github.svg"
            alt="icon github"
            width={32}
            height={32}
          />
          <p>Entrar com GitHub</p>
        </ButtonLogin>
      </OptionsLogin>
    </ContainerModal>
  )
}
