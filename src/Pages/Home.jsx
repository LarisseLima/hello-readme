import React from 'react';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import '../Styles/Pages/home.css';
import '../Styles/global.css';


export default function Home() {
  return (
    <div id="home__page">
      <div className="content-wrapper">
        <main>
          <Nav />
          <h1>Hello Readme</h1>
          <p> Vamos ajudar desenvolvedores a construir seu Readme bonitão?!</p>
        </main>
        <Link to="/links" className="enter-app">Buscar Links</Link>
        <Footer />
      </div>
    </div>
  );
}
