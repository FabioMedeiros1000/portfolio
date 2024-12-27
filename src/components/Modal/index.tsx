import { forwardRef, ReactNode, useImperativeHandle, useRef } from 'react'

import { Dialog, Header } from './styles'
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
    }

    function closeModal() {
      dialogRef.current?.close()
    }

    useImperativeHandle(ref, () => ({
      openModal,
      closeModal
    }))

    return (
      <Dialog ref={dialogRef}>
        <Header>{titleModal}</Header>
        <img src={close} onClick={closeModal} />
        {children}
      </Dialog>
    )
  }
)

export default Modal
