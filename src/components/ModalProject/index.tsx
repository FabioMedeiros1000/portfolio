import { forwardRef, useImperativeHandle, useRef } from 'react'

import Button from '../Button'
import Modal, { ModalHandles } from '../Modal'

import { Container } from './styles'

type Props = {
  title: string
  text: string
}

const ModalProject = forwardRef(({ title, text }: Props, ref) => {
  const modalRef = useRef<ModalHandles>(null)

  function openModal() {
    modalRef.current?.openModal()
  }

  function closeModal() {
    modalRef.current?.closeModal()
  }

  useImperativeHandle(ref, () => ({
    openModal,
    closeModal
  }))

  return (
    <Modal ref={modalRef} titleModal={title}>
      <Container>
        <p>{text}</p>
        <h3>Links úteis</h3>
        <Button bgColor="white">Projeto no Github</Button>
        <Button bgColor="white">Demonstração do projeto</Button>
      </Container>
    </Modal>
  )
})

export default ModalProject
