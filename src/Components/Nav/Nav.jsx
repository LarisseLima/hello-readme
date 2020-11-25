import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Components/nav.css'

export default function Nav() {
  return (
    <div>
      <nav className="nav__container">
        <ul className='nav__links'>
          <li>
            <Link
              // to="sobre" 
              className="link" >
              Sobre
                </Link>
          </li>
          <li>
            <Link
              //  to="dicas"
              className="link">
              Dicas
                </Link>
          </li>
          <li>
            <Link
              // to="link"
              className="link"
            >
              Links
                </Link>
          </li>
        </ul>
      </nav>

    </div>
  )
}

