import React from 'react';
import { ImSearch } from 'react-icons/im';
import { Link } from 'react-router-dom';
import '../Styles/Pages/home.css';
import Nav from '../../src/Components/Nav/Nav'

export default function Home() {
  return (
    <div id="home-page">
      <div className="content-wrapper">
        <Nav />
        <main>
          <h1>Hello Readme</h1>
          <p> Olá vamos construir seu Readme bonitão?!</p>

        </main>
        <Link
          // to="/filmes"
          className="enter-app">
          < ImSearch size={26}
            color="rgba(0, 0 , 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}
