import { forwardRef, useImperativeHandle, useRef } from 'react'

import Modal, { ModalHandles } from '../Modal'
import { Container } from './styles'

const ModalMessage = forwardRef((_props, ref) => {
  const modalRef = useRef<ModalHandles>(null)

  function openModal() {
    modalRef.current?.openModal()
  }

  useImperativeHandle(ref, () => ({
    openModal
  }))

  return (
    <Modal ref={modalRef} titleModal="Mensagem enviada com sucesso!">
      <Container>
        <p>
          <b>Obrigado pela sua mensagem!</b>
          <br />
          Fico muito feliz por você ter entrado em contato. Assim que possível,
          responderei diretamente no seu e-mail. Sua mensagem é muito importante
          para mim, e estou ansioso para conversar com você!
        </p>
      </Container>
    </Modal>
  )
})

export default ModalMessage
