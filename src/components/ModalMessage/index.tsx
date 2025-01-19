import { forwardRef, useImperativeHandle, useRef } from 'react'
import { useTranslation } from 'react-i18next'

import Modal, { ModalHandles } from '../Modal'
import { Container } from './styles'

type Props = {
  isSendSuccess: boolean | null
  onClose: () => void
}

const ModalMessage = forwardRef<ModalHandles, Props>(
  ({ isSendSuccess, onClose }, ref) => {
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
        titleModal={
          isSendSuccess === true
            ? t('modalMessage.title.success')
            : isSendSuccess === false
              ? t('modalMessage.title.failure')
              : ''
        }
      >
        <Container>
          {isSendSuccess === true && (
            <p
              dangerouslySetInnerHTML={{
                __html: t('modalMessage.text.success')
              }}
            />
          )}
          {isSendSuccess === false && (
            <p
              dangerouslySetInnerHTML={{
                __html: t('modalMessage.text.failure')
              }}
            />
          )}
        </Container>
      </Modal>
    )
  }
)

export default ModalMessage
