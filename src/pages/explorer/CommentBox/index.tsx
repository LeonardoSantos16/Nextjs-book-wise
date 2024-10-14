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
import { GetServerSideProps } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
export function CommentBox({bookId}) {
  const session = useSession()
  const user_id = session.data?.user.id
  const [description, setDescription] = useState('')
  const [rate, setRate] = useState(1)
  const buttonDisabled = description.length === 0 
  async function handlePostReview(){
    console.log('1')
    const response = await fetch('/api/book/review/postReview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ bookId, rate, description, user_id }),
    });
    console.log('2')

  }
  return (
    <ContainerComment>
      <ProfileComment>
        <ImageAvatar
          src={session.data?.user.image}
          alt={session.data?.user.name}
          width={40}
          height={40}
        />
        <Username>{session.data?.user.name}</Username>
        <Rating stars={1} size={28} />
      </ProfileComment>
      <TextArea
        name="comment"
        id="comment"
        placeholder="Escreva sua avaliação"
        onChange={(e) => setDescription(e.target.value)}
      />
      <ButtonArea>
        <ButtonConfirm>
          <ButtonDelete>
            <X size={24} />
          </ButtonDelete>
        </ButtonConfirm>
        <ButtonConfirm>
          <ButtonAcept disabled={buttonDisabled} onClick={handlePostReview}>
            <Check size={24} />
          </ButtonAcept>
        </ButtonConfirm>
      </ButtonArea>
    </ContainerComment>
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