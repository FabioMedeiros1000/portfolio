import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { CardProps } from '../Card'
import Section from '../Section'

import logos from '../../utils/logos'

import { Title } from './styles'

import { GlobalContainer } from '../../styles'
import { ModalHandles } from '../Modal'
import ModalProject, { ModalProps } from '../ModalProject'
import ProjectsList from '../ProjectsList'

const ProjectsSection = () => {
  const { t } = useTranslation()

  const items: CardProps[] = [
    {
      titleCard: t('projects.itemsCard.efood.titleCard'),
      text: t('projects.itemsCard.efood.text')
    },
    {
      titleCard: t('projects.itemsCard.contactList.titleCard'),
      text: t('projects.itemsCard.contactList.text')
    },
    {
      titleCard: t('projects.itemsCard.codeConnect.titleCard'),
      text: t('projects.itemsCard.codeConnect.text')
    },
    {
      titleCard: t('projects.itemsCard.todoList.titleCard'),
      text: t('projects.itemsCard.todoList.text')
    },
    {
      titleCard: t('projects.itemsCard.imcCalculator.titleCard'),
      text: t('projects.itemsCard.imcCalculator.text')
    },
    {
      titleCard: t('projects.itemsCard.disneyClone.titleCard'),
      text: t('projects.itemsCard.disneyClone.text')
    },
    {
      titleCard: t('projects.itemsCard.quiz.titleCard'),
      text: t('projects.itemsCard.quiz.text')
    },
    {
      titleCard: t('projects.itemsCard.filmeflix.titleCard'),
      text: t('projects.itemsCard.filmeflix.text')
    },
    {
      titleCard: t('projects.itemsCard.techbooks.titleCard'),
      text: t('projects.itemsCard.techbooks.text')
    }
  ]

  const modalItems: ModalProps[] = [
    {
      titleCard: t('projects.itemsCard.efood.titleCard'),
      text: t('projects.itemsCard.efood.text'),
      stacks: [
        logos.typescript,
        logos.react,
        logos.postgresql
      ],
      links: {
        github: 'https://github.com/FabioMedeiros1000/efood',
        demo: 'https://efood-flm.vercel.app/'
      }
    },
    {
      titleCard: t('projects.itemsCard.contactList.titleCard'),
      text: t('projects.itemsCard.contactList.text'),
      stacks: [
        logos.typescript,
        logos.react
      ],
      links: {
        github: 'https://github.com/FabioMedeiros1000/agenda-contatos-react',
        demo: 'https://agenda-contatos-react-sr13.vercel.app/'
      }
    },
    {
      titleCard: t('projects.itemsCard.codeConnect.titleCard'),
      text: t('projects.itemsCard.codeConnect.text'),
      stacks: [
        logos.javascript,
        logos.react,
        logos.postgresql,
        logos.docker
      ],
      links: {
        github:
          'https://github.com/FabioMedeiros1000/code-connect-next/tree/main',
        demo: 'https://code-connect-next-theta.vercel.app/'
      }
    },
    {
      titleCard: t('projects.itemsCard.todoList.titleCard'),
      text: t('projects.itemsCard.todoList.text'),
      stacks: [
        logos.typescript,
        logos.react
      ],
      links: {
        github: 'https://github.com/FabioMedeiros1000/todo-react',
        demo: 'https://todo-react-peach-three.vercel.app/'
      }
    },
    {
      titleCard: t('projects.itemsCard.imcCalculator.titleCard'),
      text: t('projects.itemsCard.imcCalculator.text'),
      stacks: [logos.javascript, logos.react],
      links: {
        github: 'https://github.com/FabioMedeiros1000/calculadora-imc',
        demo: 'https://calculadora-imc-flm.vercel.app/'
      }
    },
    {
      titleCard: t('projects.itemsCard.disneyClone.titleCard'),
      text: t('projects.itemsCard.disneyClone.text'),
      stacks: [logos.javascript],
      links: {
        github: 'https://github.com/FabioMedeiros1000/clone_disneyplus',
        demo: 'https://clone-disneyplus-two-gamma.vercel.app/'
      }
    },
    {
      titleCard: t('projects.itemsCard.quiz.titleCard'),
      text: t('projects.itemsCard.quiz.text'),
      stacks: [logos.javascript],
      links: {
        github:
          'https://github.com/FabioMedeiros1000/desafio-alura-gemini-quiz',
        demo: 'https://desafio-alura-gemini-quiz.vercel.app/'
      }
    },
    {
      titleCard: t('projects.itemsCard.filmeflix.titleCard'),
      text: t('projects.itemsCard.filmeflix.text'),
      stacks: [logos.javascript],
      links: {
        github: 'https://github.com/FabioMedeiros1000/filmeflix-homem-aranha',
        demo: 'https://filmeflix-homem-aranha.vercel.app/'
      }
    },
    {
      titleCard: t('projects.itemsCard.techbooks.titleCard'),
      text: t('projects.itemsCard.techbooks.text'),
      stacks: [],
      links: {
        github: 'https://github.com/FabioMedeiros1000/techbooks',
        demo: 'https://fabio-techbooks.vercel.app/'
      }
    }
  ]

  const [modalState, setModalState] = useState<ModalProps>()

  const modalRef = useRef<ModalHandles>(null)

  function trimText(text: string, maxLength = 175) {
    return text.slice(0, maxLength - 3) + '...'
  }

  function handleCardClick(itemTitle: string) {
    const modalItem = modalItems.find(
      (modalItem) => modalItem.titleCard === itemTitle
    )
    if (modalItem) {
      setModalState(modalItem)
    }
  }

  useEffect(() => {
    if (modalState) {
      modalRef.current?.openModal()
    }
  }, [modalState])

  return (
    <Section backgroundColor="white" id="projects">
      <>
        <GlobalContainer>
          <Title>{t('projects.title')}</Title>
          <ProjectsList
            items={items}
            trimText={trimText}
            handleCardClick={handleCardClick}
          />
        </GlobalContainer>
        {modalState && <ModalProject ref={modalRef} {...modalState} />}
      </>
    </Section>
  )
}

export default ProjectsSection
