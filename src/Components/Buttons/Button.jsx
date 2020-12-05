import React from 'react';
import { Link } from 'react-router-dom'
import './button.css';

const Button = ({ path, btnText, onClick }) => {
    return (

        <Link to={path}>
            <button onClick={onClick}>
                <span className='btn-span'>{btnText}</span>
            </button>
        </Link>
    )
}

export default Button;
