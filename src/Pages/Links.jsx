import React from 'react';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer/Footer';
import '../Styles/Pages/links.css';
import data from '../Services/api.json';

export default function Links() {
  return (
    <div id="links-page">
      <Sidebar />
      <div class="links-page-api">
        <h1>Links</h1>
        <p>Alguns artigos,vídeos e templates de como construir Readme.</p>
        <ul>
          {data.map(({ type, title, link }) => <li> <a href={link}>{type} - {title}</a> </li>)}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
