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
import { ModalLogin } from '@/components/ModalLogin'
interface Book {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
}

interface Category {
  id: string
  name: string
}
export default function Explorer() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false)
  const [test, setTest] = useState<Book[]>([])
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState<Category[]>([])
  const [selectedTag, setSelectedTag] = useState('')
  const [detailsCard, setDetailsCard] = useState()
  const {
    data: books,
    isLoading,
    error,
  } = useQuery(['books', search, selectedTag], async () => {
    const response = await api.get(`/book/getSearch`, {
      params: { search, tag: selectedTag },
    })

    

    setTest(response.data.books)
    setTags(response.data.uniqueCategories)
    return response.data 
  })
 
  function handleCleanSearch(){
    setTags([])
    setSearch('')
    setSelectedTag('')
  }

  function handleModalLogin() {
    setIsModalLoginOpen(true);
  }
 
  async function handleModel (id){
  //  const response = await api.get(`/book`, {
   //   params: {bookId: id}
   // })
   // console.log(response.data.book)
    setDetailsCard(id)
    setIsModalOpen((prev) => !prev)
  }
  return (
    <ContainerExplorer>
      <ExplorerHeader>
        <PageTitle icon={<Binoculars size={32} />} text="Explorar" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Digite author ou nome do filme"
        />
      </ExplorerHeader>
      <SectionTags>
        <Tag value='Tudo' onClick={handleCleanSearch} />
      {tags.map((tag, index) => (
        <Tag key={index} value={tag} onClick={() => setSelectedTag(tag)} />
      ))}
      </SectionTags>
      <SectionBooks >
        {test?.map((book, index) => (
          <CardPopularBooks
            key={index}
            name={book.name}
            author={book.author}
            coverurl={book.cover_url}
            onClick={() => handleModel(book.id)}
          />
        ))}
      </SectionBooks>
      {isModalOpen && <CommentModal bookId={detailsCard} onClose={handleModel}  onLoginClick={handleModalLogin} />}
      {isModalLoginOpen && <ModalLogin />}
    </ContainerExplorer>
  )
}
