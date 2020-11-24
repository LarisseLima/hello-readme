import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../Styles/Pages/home.css';
import Nav from '../../src/Components/Nav/Nav'

function Home() {
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
          < FiArrowRight size={26}
            color="rgba(0, 0 , 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Home;