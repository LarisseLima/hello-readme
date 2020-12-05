import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.svg'
import './nav.css'

export default function Nav() {
  const path = useLocation().pathname;
  return (
    <div class="nav__wrapper">
      { path !== '/' && <img className="nav__logo" src={Logo} alt="Logo da barra de navegação" />}
      <nav className="nav__container">
        <ul className='nav__links'>
          <li>
            <Link to="/"
              className="link">
              Home
              </Link>
          </li>
          <li>
            <Link to="tips"
              className={path === '/tips' ? 'selected-link link' : 'link'} >
              Dicas
              </Link>
          </li>
          <li>
            <Link to="links"
              className={path === '/links' ? 'selected-link link' : 'link'} >
              Links
                </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

