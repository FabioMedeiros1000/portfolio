import { forwardRef, useImperativeHandle, useRef } from 'react'
import { useTranslation } from 'react-i18next'

import Modal, { ModalHandles } from '../Modal'
import { SendStatus } from '../../types/contact'
import { Container } from './styles'

type Props = {
  sendStatus: SendStatus | null
  onClose: () => void
}

const ModalMessage = forwardRef<ModalHandles, Props>(
  ({ sendStatus, onClose }, ref) => {
    const modalRef = useRef<ModalHandles>(null)
    const { t } = useTranslation()

    function openModal() {
      modalRef.current?.openModal()
    }

    function closeModal() {
      modalRef.current?.closeModal()
      onClose()
    }

    useImperativeHandle(ref, () => ({
      openModal,
      closeModal
    }))

    return (
      <Modal
        ref={modalRef}
        titleModal={sendStatus ? t(`modalMessage.title.${sendStatus}`) : ''}
      >
        <Container>
          {sendStatus && (
            <p
              dangerouslySetInnerHTML={{
                __html: t(`modalMessage.text.${sendStatus}`)
              }}
            />
          )}
        </Container>
      </Modal>
    )
  }
)

export default ModalMessage
