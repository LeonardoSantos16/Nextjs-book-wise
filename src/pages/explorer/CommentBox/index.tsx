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
import { Rating } from '@/components/Rating'
export function CommentBox() {
  return (
    <ContainerComment>
      <ProfileComment>
        <ImageAvatar
          src="/images/books/Avatar.svg"
          alt="avatar"
          width={40}
          height={40}
        />
        <Username>Cristofer Rosser</Username>
        <Rating stars={1} size={28} />
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
