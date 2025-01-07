import { forwardRef, useImperativeHandle, useRef } from 'react'

import Modal, { ModalHandles } from '../Modal'
import { Container } from './styles'

type Props = {
  isSendSuccess: boolean | null
  onClose: () => void
}

const ModalMessage = forwardRef<ModalHandles, Props>(
  ({ isSendSuccess, onClose }, ref) => {
    const modalRef = useRef<ModalHandles>(null)

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
            ? 'Mensagem enviada com sucesso!'
            : isSendSuccess === false
              ? 'Algo deu errado ao enviar a mensagem!'
              : ''
        }
      >
        <Container>
          {isSendSuccess === true && (
            <p>
              <b>Mensagem enviada com sucesso!</b>
              <br />
              Fico muito feliz por você ter entrado em contato! Assim que
              possível, responderei diretamente no seu e-mail!
            </p>
          )}
          {isSendSuccess === false && (
            <p>
              <b>
                Infelizmente, não conseguimos enviar sua mensagem neste momento!
              </b>
              <br />
              Isso pode ter ocorrido devido a um erro no servidor ou problemas
              de conexão. Por favor: Verifique se os campos do formulário estão
              preenchidos corretamente e tente enviar a mensagem novamente. Se o
              problema persistir, entre em contato diretamente através do
              e-mail: fabio.leandro.medeiros@gmail.com.
              <br />
              Obrigado pela paciência!
            </p>
          )}
        </Container>
      </Modal>
    )
  }
)

export default ModalMessage
