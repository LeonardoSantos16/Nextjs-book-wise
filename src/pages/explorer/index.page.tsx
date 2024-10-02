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
import { useState } from 'react'
export default function Explorer() {
  const tags = ['Tudo', 'Tudo', 'ada', 'Tudaaao']
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev) // Alterna a visibilidade do modal
  }
  return (
    <ContainerExplorer>
      <ExplorerHeader>
        <PageTitle icon={<Binoculars size={32} />} text="Explorar" />
        <Input />
      </ExplorerHeader>
      <SectionTags>
        {tags.map((tagValue, index) => (
          <Tag key={index} value={tagValue} />
        ))}
      </SectionTags>
      <SectionBooks onClick={toggleModal}>
        <CardPopularBooks />
        <CardPopularBooks />
        <CardPopularBooks /> <CardPopularBooks /> <CardPopularBooks />
        <CardPopularBooks /> <CardPopularBooks /> <CardPopularBooks />{' '}
        <CardPopularBooks />
        <CardPopularBooks /> <CardPopularBooks /> <CardPopularBooks />{' '}
        <CardPopularBooks /> <CardPopularBooks />
        <CardPopularBooks /> <CardPopularBooks /> <CardPopularBooks />
      </SectionBooks>
      {isModalOpen && <CommentModal onClose={toggleModal} />}
    </ContainerExplorer>
  )
}
