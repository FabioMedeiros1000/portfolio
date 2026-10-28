import { forwardRef, ReactNode, useImperativeHandle, useRef } from 'react'

import { CloseButton, Dialog, Header } from './styles'
import close from '../../assets/close.svg'

type ModalProps = {
  titleModal: string
  children: ReactNode
}

export type ModalHandles = {
  openModal: () => void
  closeModal: () => void
}

const Modal = forwardRef<ModalHandles, ModalProps>(
  ({ titleModal, children }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null)

    function openModal() {
      dialogRef.current?.showModal()
      setTimeout(() => {
        const activeElement = document.activeElement as HTMLElement
        if (dialogRef.current?.contains(activeElement)) {
          activeElement.blur()
        }
      }, 0)
    }

    function closeModal() {
      dialogRef.current?.close()
    }

    useImperativeHandle(ref, () => ({
      openModal,
      closeModal
    }))

    return (
      <Dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal()
        }}
      >
        <Header>{titleModal}</Header>
        <CloseButton type="button" aria-label="Fechar" onClick={closeModal}>
          <img src={close} alt="" />
        </CloseButton>
        {children}
      </Dialog>
    )
  }
)

export default Modal
