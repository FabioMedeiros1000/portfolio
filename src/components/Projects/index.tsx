import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import Card, { CardProps } from '../Card'
import Section from '../Section'

import logos from '../../utils/logos'

import { Grid, GridTablet, ScrollbarContainer, Title } from './styles'

import { GlobalContainer } from '../../styles'
import { ModalHandles } from '../Modal'
import ModalProject from '../ModalProject'
import Scrollbars from 'react-custom-scrollbars-2'

type ModalState = {
  selectProject: string
  text: string
  stacks: string[]
  linkGithub: string
  linkDemo: string
}

const Projects = () => {
  const { t } = useTranslation()

  const items: CardProps[] = [
    {
      titleCard: t('projects.itemsCard.efood.titleCard'),
      text: t('projects.itemsCard.efood.text'),
      stacks: [
        logos.html,
        logos.css,
        logos.typescript,
        logos.react,
        logos.redux,
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
        logos.html,
        logos.css,
        logos.typescript,
        logos.react,
        logos.redux
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
        logos.html,
        logos.css,
        logos.javascript,
        logos.next,
        logos.react,
        logos.prisma,
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
        logos.html,
        logos.css,
        logos.typescript,
        logos.react,
        logos.redux
      ],
      links: {
        github: 'https://github.com/FabioMedeiros1000/todo-react',
        demo: 'https://todo-react-peach-three.vercel.app/'
      }
    },
    {
      titleCard: t('projects.itemsCard.imcCalculator.titleCard'),
      text: t('projects.itemsCard.imcCalculator.text'),
      stacks: [logos.html, logos.css, logos.javascript, logos.react],
      links: {
        github: 'https://github.com/FabioMedeiros1000/calculadora-imc',
        demo: 'https://calculadora-imc-flm.vercel.app/'
      }
    },
    {
      titleCard: t('projects.itemsCard.disneyClone.titleCard'),
      text: t('projects.itemsCard.disneyClone.text'),
      stacks: [logos.html, logos.css, logos.javascript],
      links: {
        github: 'https://github.com/FabioMedeiros1000/clone_disneyplus',
        demo: 'https://clone-disneyplus-two-gamma.vercel.app/'
      }
    },
    {
      titleCard: t('projects.itemsCard.quiz.titleCard'),
      text: t('projects.itemsCard.quiz.text'),
      stacks: [logos.html, logos.css, logos.javascript],
      links: {
        github:
          'https://github.com/FabioMedeiros1000/desafio-alura-gemini-quiz',
        demo: 'https://desafio-alura-gemini-quiz.vercel.app/'
      }
    },
    {
      titleCard: t('projects.itemsCard.filmeflix.titleCard'),
      text: t('projects.itemsCard.filmeflix.text'),
      stacks: [logos.html, logos.css, logos.javascript],
      links: {
        github: 'https://github.com/FabioMedeiros1000/filmeflix-homem-aranha',
        demo: 'https://filmeflix-homem-aranha.vercel.app/'
      }
    },
    {
      titleCard: t('projects.itemsCard.techbooks.titleCard'),
      text: t('projects.itemsCard.techbooks.text'),
      stacks: [logos.html, logos.css, logos.bootstrap],
      links: {
        github: 'https://github.com/FabioMedeiros1000/techbooks',
        demo: 'https://fabio-techbooks.vercel.app/'
      }
    }
  ]

  const [modalState, setModalState] = useState<ModalState>({
    selectProject: '',
    text: '',
    stacks: [],
    linkGithub: '',
    linkDemo: ''
  })

  const modalRef = useRef<ModalHandles>(null)

  function trimText(text: string, maxLength = 175) {
    return text.slice(0, maxLength - 3) + '...'
  }

  function handleCardClick(
    title: string,
    text: string,
    stacks: string[],
    linkGithub: string,
    linkDemo: string
  ) {
    setModalState({
      selectProject: title,
      stacks,
      text,
      linkGithub,
      linkDemo
    })
    modalRef.current?.openModal()
  }

  return (
    <Section backgroundColor="white" id="projects">
      <>
        <GlobalContainer>
          <Title>{t('projects.title')}</Title>
          <Grid>
            {items.map((item, index) => (
              <li key={index}>
                <Card
                  titleCard={item.titleCard}
                  text={trimText(item.text)}
                  title={`${t('projects.titleLabel')} ${item.titleCard}`}
                  onClick={() =>
                    handleCardClick(
                      item.titleCard,
                      item.text,
                      item.stacks!,
                      item.links?.github!,
                      item.links?.demo!
                    )
                  }
                />
              </li>
            ))}
          </Grid>
          <GridTablet>
            {items.map((item, index) => (
              <li key={index}>
                <Card
                  titleCard={item.titleCard}
                  text={trimText(item.text, 187)}
                  title={`Clique aqui para ver mais detalhes sobre o projeto ${item.titleCard}`}
                  onClick={() =>
                    handleCardClick(
                      item.titleCard,
                      item.text,
                      item.stacks!,
                      item.links?.github!,
                      item.links?.demo!
                    )
                  }
                />
              </li>
            ))}
          </GridTablet>
          <ScrollbarContainer>
            <Scrollbars style={{ height: 550 }}>
              {items.map((item, index) => (
                <li key={index}>
                  <Card
                    titleCard={item.titleCard}
                    text={trimText(item.text)}
                    title={`Clique aqui para ver mais detalhes sobre o projeto ${item.titleCard}`}
                    onClick={() =>
                      handleCardClick(
                        item.titleCard,
                        item.text,
                        item.stacks!,
                        item.links?.github!,
                        item.links?.demo!
                      )
                    }
                  />
                </li>
              ))}
            </Scrollbars>
          </ScrollbarContainer>
        </GlobalContainer>
        <ModalProject
          ref={modalRef}
          title={modalState.selectProject}
          text={modalState.text}
          stacks={modalState.stacks}
          githubLink={modalState.linkGithub}
          demoLink={modalState.linkDemo}
        />
      </>
    </Section>
  )
}

export default Projects
