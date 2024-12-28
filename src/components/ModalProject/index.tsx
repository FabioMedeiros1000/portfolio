import { forwardRef, useImperativeHandle, useRef } from 'react'

import Button from '../Button'
import Modal, { ModalHandles } from '../Modal'

import { Container, Skills } from './styles'
import SkillGroup from '../SkillGroup'

type Props = {
  title: string
  text: string
  stacks: string[]
}

const ModalProject = forwardRef(({ title, text, stacks }: Props, ref) => {
  const modalRef = useRef<ModalHandles>(null)

  function openModal() {
    modalRef.current?.openModal()
  }

  useImperativeHandle(ref, () => ({
    openModal
  }))

  return (
    <Modal ref={modalRef} titleModal={title}>
      <Container>
        <p>{text}</p>
        <h3>Links úteis</h3>
        <Button bgColor="white">Projeto no Github</Button>
        <Button bgColor="white">Demonstração do projeto</Button>
        <Skills>
          {stacks.map((stack, index) => (
            <SkillGroup key={index} logo={stack} size="40px" />
          ))}
        </Skills>
      </Container>
    </Modal>
  )
})

export default ModalProject
