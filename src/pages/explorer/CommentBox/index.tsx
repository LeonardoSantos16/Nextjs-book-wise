import Image from 'next/image'
import {
  ContainerComment,
  ProfileComment,
  ImageAvatar,
  Username,
  TextArea,
  ButtonArea,
  ButtonConfirm,
  ButtonDelete,
  ButtonAcept,
} from './styles'
import { X, Check } from 'phosphor-react'
export function CommentBox() {
  return (
    <ContainerComment>
      <ProfileComment>
        <ImageAvatar
          src="/images/Avatar.svg"
          alt="avatar"
          width={40}
          height={40}
        />
        <Username>Cristofer Rosser</Username>
        <Image src="/images/Rating.svg" alt="rating" width={152} height={28} />
      </ProfileComment>
      <TextArea
        name="comment"
        id="comment"
        placeholder="Escreva sua avaliação"
      />
      <ButtonArea>
        <ButtonConfirm>
          <ButtonDelete>
            <X size={24} />
          </ButtonDelete>
        </ButtonConfirm>
        <ButtonConfirm>
          <ButtonAcept>
            <Check size={24} />
          </ButtonAcept>
        </ButtonConfirm>
      </ButtonArea>
    </ContainerComment>
  )
}
