import { PageTitle } from '@/components/PageTitle'
import {
  ContainerExplorer,
  ExplorerHeader,
  SectionTags,
  SectionBooks,
} from './styles'
import { Binoculars } from 'phosphor-react'
import { Input } from '@/components/Input'
import { Tag } from '@/components/Tag'
import { CardPopularBooks } from '@/components/CardPopularBooks'
import { CommentModal } from './CommentModal'
import { useEffect, useState } from 'react'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

interface Book {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  // outros campos, se houver
}
export default function Explorer() {
  const tags = ['Tudo', 'Tudo', 'ada', 'Tudaaao']
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [test, setTest] = useState<Book[]>([])
  const search = ''
  const tag = ''
  /*
  const fetchBook = async () => {
    const response = await api.get(`/book/getSearch`, {
      params: { search, tag },
    })
    console.log(response.data)
    return response.data
  }
  fetchBook()
*/
  const {
    data: books,
    isLoading,
    error,
  } = useQuery(['books', search, tag], async () => {
    const response = await api.get(`/book/getSearch`, {
      params: { search, tag },
    })
    console.log(response.data.books)
    setTest(response.data.books)
    return response.data // Retorna os dados dos livros
  })
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev) // Alterna a visibilidade do modal
  }
  return (
    <ContainerExplorer>
      <ExplorerHeader>
        <PageTitle icon={<Binoculars size={32} />} text="Explorar" />
        <Input placeholder="digite author ou nome do filme" />
      </ExplorerHeader>
      <SectionTags>
        {tags.map((tagValue, index) => (
          <Tag key={index} value={tagValue} />
        ))}
      </SectionTags>
      <SectionBooks onClick={toggleModal}>
        {test?.map((book, index) => (
          <CardPopularBooks
            key={index}
            name={book.name}
            author={book.author}
            coverurl={book.cover_url}
          />
        ))}
      </SectionBooks>
      {isModalOpen && <CommentModal onClose={toggleModal} />}
    </ContainerExplorer>
  )
}
