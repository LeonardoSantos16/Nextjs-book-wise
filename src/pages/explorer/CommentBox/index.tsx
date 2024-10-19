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
import { Dispatch, SetStateAction, useState } from 'react'

interface Comment {
  bookId: string
  setIsVisible: Dispatch<SetStateAction<boolean>>
  newPost: Dispatch<SetStateAction<boolean>>
}
export function CommentBox({bookId, setIsVisible, newPost} : Comment) {
  const session = useSession()
  const user_id = session.data?.user.id
  const [description, setDescription] = useState('')
  const [rating, setRating] = useState(0);
  const buttonDisabled = description.length === 0 
  async function handlePostReview(){
    const response = await fetch('/api/book/review/postReview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ bookId, rate: rating, description, user_id }),
    });
    if (response.ok) { 
      setIsVisible(false); 
      newPost(true)
    } else {
      console.error('Erro ao postar a avaliação:', response.statusText);
    }
  }

  return (
    <ContainerComment>
      <ProfileComment>
        <ImageAvatar
          src={session.data?.user.avatar_url}
          alt={session.data?.user.name}
          width={40}
          height={40}
        />
        <Username>{session.data?.user.name}</Username>
          
        <Rating stars={rating} size={28} onClick={setRating} />
      </ProfileComment>
      <TextArea
        name="comment"
        id="comment"
        placeholder="Escreva sua avaliação"
        onChange={(e) => setDescription(e.target.value)}
      />
      <ButtonArea>
          <ButtonDelete onClick={() => setIsVisible(false)}>
            <X size={24} />
          </ButtonDelete>
          <ButtonAcept disabled={buttonDisabled} onClick={handlePostReview}>
            <Check size={24} />
          </ButtonAcept>
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