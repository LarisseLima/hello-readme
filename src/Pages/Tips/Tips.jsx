import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Footer from '../../Components/Footer/Footer';
import PageTitle from '../../Components/PageTitle/PageTitle';
import Imgno from '../../assets/dicas/nome.png'
import Imgdes from '../../assets/dicas/descricao.png'
import Imgta from '../../assets/dicas/tabela.png'
import Imgsta from '../../assets/dicas/status.png'
import Imgtec from '../../assets/dicas/tecnologias.png'
import Imgreq from '../../assets/dicas/requisitos.png'
import Imgli from '../../assets/dicas/licenca.png'
import './tips.css';

export default function Tips() {
  return (
    <div id="tips__page">
      <Sidebar />
      <main class="tips__page-header">
        <PageTitle
          pageTitle='Dicas'
        />
        <h2>O que é README?</h2>
        <p>README.md é um arquivo com extensão .md (Markdown). README é uma palavra em inglês que traduzida fica LEIAME.</p>
        <p>É o “primeiro passo” ao abrir um novo projeto, seja pra ver a documentação, dicas essenciais que precisa saber para rodar o projeto, descrição de seu projeto, etc. Tudo isso pode e deve ser adicionado no README!</p>
        <h2>Estrutura básica de um README</h2>
        <h3> Titulo e descrição do projeto</h3>
        <p>Título, coloque um  nome curto do projeto</p>
        <img className="img-di" src={Imgno} alt="Código título do Readme" />
        <p> Descrição: Uma breve descrição do objetivo do projeto.</p>
        <img className="img-di" src={Imgdes} alt="Código descrição do Readme" />

        <h3>Tabela de Conteúdos</h3>
        <p>É ótimo colocar os índices de conteúdos, que é tabela onde a pessoa clica e vai para o tópico específico.</p>
        <img className="img-di" src={Imgta} alt="Código tabela de conteúdos do Readme" />


        <h3>Status do projeto</h3>
        <p>Indica se o projeto está em desenvolvimento ou já foi concluído.</p>
        <img className="img-di" src={Imgsta} alt="Código status do Readme" />

        <h3>Tecnologias Utilizadas</h3>
        <p>Listar as tecnologias e colocar os links para o seus respectivos sites é um plus no README.</p>
        <img className="img-di" src={Imgtec} alt="Código tecnologias utilizadas do Readme" />

        <h3>Pré-requisitos e como rodar a aplicação</h3>
        <p>Você tem que mostrar os passos de como instalar e usar a lib, se for um projeto backend | web | mobile | desktop descreva os passos de como fazer para rodar na máquina.</p>
        <img className="img-di" src={Imgreq} alt="Código como rodar do Readme" />

        <h3>Licença</h3>
        <p>A maioria dos devs utilizam a licença MIT que permite as pessoas baixarem o projeto e modificar e você não será responsabilizado por nada.
        Muito simples escolher uma licença, o github te ajuda com isso te dando um template.
        Geralmente você cria um arquivo LICENSE.</p>
        <img className="img-di" src={Imgli} alt="Código licença do Readme" />

        <p>Hey Dev, ainda temos mais conteúdo para te ajudar, artigos,vídeos e templates prontos , vá para a página de
        <span className='span-link'><Link to='/links'> Links! </Link></span>
        </p>
      </main>
      <Footer />
    </div>
  );
}
