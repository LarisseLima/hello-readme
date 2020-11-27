import React from 'react';
import { ImSearch } from 'react-icons/im';
import { Link } from 'react-router-dom';
import '../Styles/Pages/home.css';
import '../Styles/global.css';
import Nav from '../Components/Nav/Nav'

export default function Home() {
  return (
    <div id="home-page">
      <div className="content-wrapper">
        <main>
          <Nav />
          <h1>Hello Readme</h1>
          <p> Vamos ajudar desenvolvedores a construir seu Readme bonitão?!</p>

        </main>
        <Link to="/links" className="enter-app">
          < ImSearch size={26}
            color="rgba(0, 0 , 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}
