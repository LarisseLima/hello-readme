import React, { useState, useEffect } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Footer from '../../Components/Footer/Footer';
import dataFromApi from '../../Services/api.json';
import PageTitle from '../../Components/PageTitle/PageTitle';
import './links.css';

export default function Links() {
  // Estado contendo os dados do conteúdo da página
  const [content, setContent] = useState(dataFromApi);
  // Estado contendo o valor pesquisado
  const [search, setSearch] = useState('');

  useEffect(() => {
    const contentWithFilter = dataFromApi.filter(content => {
      return content.title.toLocaleLowerCase()
        .includes(search.toLocaleLowerCase())
    })

    setContent(contentWithFilter);
  }, [search])

  const handleChange = (element) => {
    setSearch(element.target.value)
  }

  return (
    <div id="links__page">
      <Sidebar />
      <div className="links__page-api">
        <PageTitle
          pageTitle='Links'
        />
        <div>
          <input
            type="text"
            onChange={element => handleChange(element)}
            placeholder="Pesquise pelo nome do conteúdo"
            value={search}>
          </input>
        </div>
        <div id="container">
          <ul className="list__warper" >
            {content.map((item, index) => {
              return <li className="card" key={index}> <a target="_blank" href={item.link}>{item.type} - {item.title}</a> </li>
            })}
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  );
}