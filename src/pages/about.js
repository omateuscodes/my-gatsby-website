import React from "react"
import Layout from "../components/Layout"
import AboutStyles from '../styles/About.module.scss'
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <Layout>
      <div className={AboutStyles.content}>
      <Helmet>
                <title>Sobre | Mateus S. Souza</title>
            </Helmet>
        <h2>
          Sobre mim
        </h2>
        <p>
          Olá, meu nome é Mateus, tenho 23 anos. Terminei recentemente meu bacharelado em
          <a
            rel="noreferrer"
            target='_blank'
            href='https://pt.wikipedia.org/wiki/Engenharia_de_controle_e_automa%C3%A7%C3%A3o'
          >Engenharia de Controle e Automação,</a>o que me torna capacitado para atuar em diversas
           áreas, tais como: mecânica, elétrica, eletrônica, automação, robótica, redes de
            computadores, instrumentação, e etc. Além disso sou autodidata e proficiente no
            desenvolvimento de aplicações web e mobile utilizando Javascript,
            ReactJS, React Native, Firebase e Java.
        </p>
        <h2>
          Programação de computadores
        </h2>
        <p>
          Sempre me interessei por computadores, robôs e programação. Minhas primeiras linhas
          de código foram escritas ainda no ensino médio. Comecei com a linguagem Java,
          aprendendo sozinho através de vídeo aulas e fóruns da internet. Naquela época eu já
          era capaz de fazer pequenas aplicações e jogos simples. O que eu aprendi foi suficiente
          para que eu tivesse bastante facilidade nas disciplinas da faculdade  que envolviam
          lógica e programação.
        </p>
        <p>
          Atualmente, domino os conceitos básicos da programação, o que me permite aprender qualquer
          linguagem ou tecnologia com extrema facilidade. Possuo conhecimentos avançados nas linguagens
          Java, C, Javascript e Ladder e conhecimentos intermediários em Python e C++.
        </p>
        <h2>
          Graduação
        </h2>
        <p>
          Comecei o curso em janeiro de 2015 e concluí em dezembro de 2019 sem nunca ter sido reprovado
          em uma disciplina.
        </p>
        <p>
          Já no primeiro semestre, aprendi a criar e programar robôs utilizando o Arduino e a linguagem C.
          Nos semestres seguintes, como integrante da equipe<a rel="noreferrer" target='_blank' href='https://www.robocore.net/modules.php?name=GR_Equipes&equipe=670'>Expert Robots,</a>competi e ganhei premios em
          competições baianas de sumô de robôs.
        </p>
        <p>
          Sempre gostei de ensinar tanto quanto de aprender então, durante um ano fui monitor voluntário da
          disciplina de fenômenos Oscilatórios e Termodinâmica ( Fisica II ). Nesse período também ministrei
          aulas particulares desta e de outras matérias relacionadas.
        </p>
        <p>
          Outra experiência marcante e que vale a pena ressaltar foi a minha participação durante um ano como
         coordenador de IES pelo<a rel="noreferrer" target='_blank' href='https://www.instagram.com/creajrba/'>CREAjr-BA.</a>
         Neste período, valores como liderança e trabalho em equipe foram constantemente aperfeiçoados.
        </p>
        <p>
          A graduação me proporcionou, ainda, ser um pesquisador, tendo por duas vezes sendo convocado como bolsista
          do programa de Iniciação científica e tecnológica. Essas experiências geraram dois projetos: o primeiro,
          em resumo, foi um braço robótico com forma idêntica à um braço humano que era controlado a distância por
          meio de uma luva equipada com sensores. O segundo se tratou de um estudo sobre formas de se reutilizar
          resíduos de poliuretano gerados pelo laboratório de usinagem da instituição.
        </p>
        <p>
          Não poderia falar da minha graduação sem mencionar meus dois estágios: o primeiro, como um convite da então
          coordenadora da faculdade para o desenvolvimento de um sistema automatizado para as salas de aula. O projeto
          foi feito mas infelizmente nunca foi implementado. O segundo estágio foi como professor e monitor dos<a target='_blank'
            href='https://integralweb.com.br/projetos/espaco-maker/' rel="noreferrer">laboratórios maker</a>do colégio Integral. Lá, eram
           desenvolvidos projetos e experimentos para despertar o interesse dos jovens por disciplinas como: programação,
            física e robótica.
        </p>
        <p>
          Por fim, no meu trabalho de conclusão de curso eu projetei e implementei um sistema automatizado de manufatura
          utilizando plantas didáticas da festo e um robô KUKA. O processo foi todo otimizado na fase de projeto utilizando
          Redes de Petri.
        </p>
      </div>

    </Layout>
  )
}
