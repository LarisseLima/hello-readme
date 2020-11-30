import React from 'react';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer/Footer';
import PageTitle from '../Components/PageTitle/PageTitle';
import '../Styles/Pages/tips.css';

export default function Tips() {
  return (
    <div id="tips-page">
      <Sidebar />
      <div class="tips-page-header">
        <PageTitle
          pageTitle='Dicas'
        />
        <h3>O que é README?</h3>
        <p>README.md é um arquivo com extensão .md (Markdown). README é uma palavra em inglês que traduzida fica LEIAME.</p>
        <p>É o “primeiro passo” ao abrir um novo projeto, seja pra ver a documentação, dicas essenciais que precisa saber para rodar o projeto, descrição de seu projeto, etc. Tudo isso pode e deve ser adicionado no README!</p>

        <h3>Estrutura básica de um README</h3>
        <h3> Titulo e descrição do projeto:</h3>
        <p>Título, coloque um  nome curto do projeto <br></br>
          Descrição: Uma breve descrição do objetivo do projeto.</p>

        <h3>Tabela de Conteúdos</h3>
        <p>É ótimo colocar os índices de conteúdos, que é tabela onde a pessoa clica e vai para o tópico específico.</p>

        <h3>Status do projeto</h3>
        <p>Indica se o projeto está em desenvolvimento ou já foi concluído.</p>

        <h3>Tecnologias Utilizadas</h3>
        <p>Listar as tecnologias e colocar os links para o seus respectivos sites é um plus no README.</p>

        <h3>Pré-requisitos e como rodar a aplicação</h3>
        <p>Você tem que mostrar os passos de como instalar e usar a lib, se for um projeto backend | web | mobile | desktop descreva os passos de como fazer para rodar na máquina.</p>

        <h3>Licença</h3>
        <p>A maioria dos devs utilizam a licença MIT que permite as pessoas baixarem o projeto e modificar e você não será responsabilizado por nada.
        Muito simples escolher uma licença, o github te ajuda com isso te dando um template.
        Geralmente você cria um arquivo LICENSE.</p>


      </div>
      <Footer />
    </div>
  );
}
