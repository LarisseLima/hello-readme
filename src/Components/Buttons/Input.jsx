import React from 'react';
import Button from './Button'
import '../../Styles/Components/input.css';


const Input = ({ type, onChange, placeholder, value, onClick, refresh }) => {
    return (
        <div className="inputContainer">

            <div >
                <input type={type} onChange={onChange} placeholder={placeholder} value={value}></input>
            </div>

            <div>
                <Button onClick={refresh} btnText="Ver todos" />
                <Button onClick={onClick} btnText="Buscar" />
            </div>

        </div>

    )
}

export default Input;