import { useRef, useState } from 'react'

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

const items: CardProps[] = [
  {
    titleCard: 'EFOOD',
    text: 'eFood é uma aplicação de loja online onde usuários podem explorar restaurantes e seus pratos disponíveis. Ao acessar a página de um restaurante, é possível visualizar os pratos oferecidos e adicionar os itens desejados ao carrinho, além de ver informações detalhadas sobre cada prato.',
    stacks: [logos.html, logos.css, logos.typescript, logos.react, logos.redux],
    links: {
      github: 'https://github.com/FabioMedeiros1000/efood',
      demo: 'https://efood-flm.vercel.app/'
    }
  },
  {
    titleCard: 'Agenda de contatos',
    text: 'A Agenda de Contatos é uma aplicação web intuitiva e funcional desenvolvida para facilitar o gerenciamento de seus contatos pessoais ou profissionais. Com ela, é possível cadastrar, visualizar, editar e excluir contatos, armazenando informações essenciais como nome, e-mail e número de telefone. A interface amigável torna a experiência de uso simples e eficiente, permitindo que você organize seus contatos de maneira rápida e prática.',
    stacks: [logos.html, logos.css, logos.typescript, logos.react, logos.redux],
    links: {
      github: 'https://github.com/FabioMedeiros1000/agenda-contatos-react',
      demo: 'https://agenda-contatos-react-sr13.vercel.app/'
    }
  },
  {
    titleCard: 'To-do list',
    text: 'Este é um projeto de to-do List desenvolvido em React, criado utilizando o create-react-app. O objetivo deste projeto é gerenciar tarefas, permitindo criar, editar, remover e filtrar tarefas de acordo com diferentes critérios.',
    stacks: [logos.html, logos.css, logos.typescript, logos.react, logos.redux],
    links: {
      github: 'https://github.com/FabioMedeiros1000/todo-react',
      demo: 'https://todo-react-peach-three.vercel.app/'
    }
  },
  {
    titleCard: 'Calculadora IMC',
    text: 'Este projeto é uma aplicação simples de calculadora de Índice de Massa Corporal (IMC), desenvolvida para ajudar a determinar a faixa de peso corporal com base na altura e peso do usuário.',
    stacks: [logos.html, logos.css, logos.javascript, logos.react],
    links: {
      github: 'https://github.com/FabioMedeiros1000/calculadora-imc',
      demo: 'https://calculadora-imc-flm.vercel.app/'
    }
  },
  {
    titleCard: 'Clone do Disney+',
    text: 'Experimente uma recriação imersiva da interface do Disney Plus, com funcionalidades que simulam a experiência de navegação original. Este projeto destaca a integração de navegação, interatividade com JavaScript, e uso de tecnologias modernas de front-end.',
    stacks: [logos.html, logos.css, logos.javascript],
    links: {
      github: 'https://github.com/FabioMedeiros1000/clone_disneyplus',
      demo: 'https://clone-disneyplus-two-gamma.vercel.app/'
    }
  },
  {
    titleCard: 'Quiz',
    text: 'Quiz Interativo, desenvolvido para o desafio promovido pela Imersão Dev da Alura em parceria com o Google Gemini. O projeto é um quiz dinâmico, onde os jogadores podem escolher categorias, responder perguntas e verificar a pontuação no final.',
    stacks: [logos.html, logos.css, logos.javascript],
    links: {
      github: 'https://github.com/FabioMedeiros1000/desafio-alura-gemini-quiz',
      demo: 'https://desafio-alura-gemini-quiz.vercel.app/'
    }
  },
  {
    titleCard: 'FilmeFlix',
    text: 'Uma landing page interativa e visualmente atraente que exibe os filmes do Homem-Aranha com categorização por ator. Destaca-se pelo design criativo e funcionalidades de listagem e filtragem.',
    stacks: [logos.html, logos.css, logos.javascript],
    links: {
      github: 'https://github.com/FabioMedeiros1000/filmeflix-homem-aranha',
      demo: 'https://filmeflix-homem-aranha.vercel.app/'
    }
  },
  {
    titleCard: 'TechBooks',
    text: 'TechBooks possui uma interface intuitiva e responsiva, onde os usuários podem navegar por categorias de produtos como smartphones, tablets, notebooks e PCs. A plataforma inclui um menu dinâmico e adaptável que facilita a busca por produtos específicos.',
    stacks: [logos.html, logos.css, logos.bootstrap],
    links: {
      github: 'https://github.com/FabioMedeiros1000/techbooks',
      demo: 'https://fabio-techbooks.vercel.app/'
    }
  }
]

const Projects = () => {
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
          <Title>Projetos</Title>
          <Grid>
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
