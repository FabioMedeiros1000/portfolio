import Card, { CardProps } from '../Card'
import Section from '../Section'

import { Grid, Title } from './styles'

import { GlobalContainer } from '../../styles'

const items: CardProps[] = [
  {
    titleCard: 'EFOOD',
    text: 'eFood é uma aplicação de loja online onde usuários podem explorar restaurantes e seus pratos disponíveis. Ao acessar a página de um restaurante, é possível visualizar os pratos oferecidos e adicionar os itens desejados ao carrinho, além de ver informações detalhadas sobre cada prato.'
  },
  {
    titleCard: 'Agenda de contatos',
    text: 'A Agenda de Contatos é uma aplicação web intuitiva e funcional desenvolvida para facilitar o gerenciamento de seus contatos pessoais ou profissionais. Com ela, é possível cadastrar, visualizar, editar e excluir contatos, armazenando informações essenciais como nome, e-mail e número de telefone. A interface amigável torna a experiência de uso simples e eficiente, permitindo que você organize seus contatos de maneira rápida e prática.'
  },
  {
    titleCard: 'Todo-list',
    text: 'Este é um projeto de Todo List desenvolvido em React, criado utilizando o create-react-app. O objetivo deste projeto é gerenciar tarefas, permitindo criar, editar, remover e filtrar tarefas de acordo com diferentes critérios.'
  },
  {
    titleCard: 'Calculadora IMC',
    text: 'Este projeto é uma aplicação simples de calculadora de Índice de Massa Corporal (IMC), desenvolvida para ajudar a determinar a faixa de peso corporal com base na altura e peso do usuário.'
  },
  {
    titleCard: 'Clone do Disney+',
    text: 'Experimente uma recriação imersiva da interface do Disney Plus, com funcionalidades que simulam a experiência de navegação original. Este projeto destaca a integração de navegação, interatividade com JavaScript, e uso de tecnologias modernas de front-end.'
  },
  {
    titleCard: 'Quiz',
    text: 'Quiz Interativo, desenvolvido para o desafio promovido pela Imersão Dev da Alura em parceria com o Google Gemini. O projeto é um quiz dinâmico, onde os jogadores podem escolher categorias, responder perguntas e verificar a pontuação no final.'
  },
  {
    titleCard: 'FilmeFlix',
    text: 'Uma landing page interativa e visualmente atraente que exibe os filmes do Homem-Aranha com categorização por ator. Destaca-se pelo design criativo e funcionalidades de listagem e filtragem.'
  },
  {
    titleCard: 'TechBooks',
    text: 'TechBooks possui uma interface intuitiva e responsiva, onde os usuários podem navegar por categorias de produtos como smartphones, tablets, notebooks e PCs. A plataforma inclui um menu dinâmico e adaptável que facilita a busca por produtos específicos.'
  }
]

const Projects = () => {
  function trimText(text: string) {
    const maxLength = 175
    return text.slice(0, maxLength - 3) + '...'
  }

  return (
    <Section backgroundColor="white" id="projects">
      <GlobalContainer>
        <Title>Projetos</Title>
        <Grid>
          {items.map((item, index) => (
            <li key={index}>
              <Card
                titleCard={item.titleCard}
                text={trimText(item.text)}
                title={`Clique aqui para ver mais detalhes sobre o projeto ${item.titleCard}`}
              />
            </li>
          ))}
        </Grid>
      </GlobalContainer>
    </Section>
  )
}

export default Projects
