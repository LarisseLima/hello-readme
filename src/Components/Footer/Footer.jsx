import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { useLocation } from 'react-router-dom'
import './footer.css';

export default function Footer() {
  const path = useLocation().pathname;
  return (
    <div className={path !== '/' ? 'footer__wrapper' : ''}>
      <footer className="footer__bio">
        <div className="autora"><p>2020 - Larisse Lima</p></div>
        <a href="https://www.linkedin.com/in/larisselima/" className="icone-redes-in"
          target="blank">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/LarisseLima/hello-readme" className="icone-redes-gi"
          target="blank">
          <AiFillGithub />
        </a>
        <a href="mailto:larisse.lima2@gmail.com" className="icone-redes-em"
          target="blank">
          <MdEmail />
        </a>
      </footer>
    </div >
  )
}