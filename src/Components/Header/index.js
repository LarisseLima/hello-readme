import React from 'react'
import './style.css'
import img from '../../assets/logo.svg'


const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__text">
          <h1>Hello Readme</h1>
          <p>Oi, vamos fazer nosso Readme Bonitão?!</p>

        </div>
        <div className="header__ilustration">
          <img src={img} alt="ilustraçao de uma mulher com livro lendo"></img>
        </div>
      </header>
    </>
  )
}

export default Header