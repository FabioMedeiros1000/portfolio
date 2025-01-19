import { forwardRef, useImperativeHandle, useRef } from 'react'
import { useTranslation } from 'react-i18next'

import Button from '../Button'
import Modal, { ModalHandles } from '../Modal'

import { Container, Skills } from './styles'
import SkillGroup from '../SkillGroup'

type Props = {
  title: string
  text: string
  stacks: string[]
  githubLink: string
  demoLink: string
}

const ModalProject = forwardRef(
  ({ title, text, stacks, githubLink, demoLink }: Props, ref) => {
    const modalRef = useRef<ModalHandles>(null)
    const { t } = useTranslation()

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
          <h3>{t('modalProject.links')}</h3>
          <a href={githubLink} target="_blank" tabIndex={-1}>
            <Button bgColor="white">{t('modalProject.button.github')}</Button>
          </a>
          <a href={demoLink} target="_blank" tabIndex={-1}>
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
