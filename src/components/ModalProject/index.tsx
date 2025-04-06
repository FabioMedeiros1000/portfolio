import { forwardRef, useImperativeHandle, useRef } from 'react'
import { useTranslation } from 'react-i18next'

import Button from '../Button'
import Modal, { ModalHandles } from '../Modal'

import { Container, Skills } from './styles'
import SkillGroup from '../SkillGroup'

export type ModalProps = {
  titleCard: string
  text: string
  stacks: string[]
  links: {
    github: string
    demo: string
  }
}

const ModalProject = forwardRef<ModalHandles, ModalProps>(
  ({ titleCard, text, stacks, links }, ref) => {
    const modalRef = useRef<ModalHandles>(null)
    const { t } = useTranslation()

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
      <Modal ref={modalRef} titleModal={titleCard}>
        <Container>
          <p>{text}</p>
          <h3>{t('modalProject.links')}</h3>
          <a href={links.github} target="_blank" tabIndex={-1}>
            <Button bgColor="white">{t('modalProject.button.github')}</Button>
          </a>
          <a href={links.demo} target="_blank" tabIndex={-1}>
            <Button bgColor="white">{t('modalProject.button.demo')}</Button>
          </a>
          <Skills>
            {stacks.map((stack, index) => (
              <SkillGroup key={index} logo={stack} size="40px" />
            ))}
          </Skills>
        </Container>
      </Modal>
    )
  }
)

export default ModalProject
