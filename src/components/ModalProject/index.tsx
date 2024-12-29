import { forwardRef, useImperativeHandle, useRef } from 'react'

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
          <a href={githubLink} target="_blank">
            <Button bgColor="white">Projeto no Github</Button>
          </a>
          <a href={demoLink} target="_blank">
            <Button bgColor="white">Demonstração do projeto</Button>
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
