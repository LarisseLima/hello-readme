import React from 'react';
import '../Styles/Components/input.css';


const Input = ({ type, onChange, placeholder, value, onClick, refresh }) => {
    return (
        <div className="inputContainer">

            <div >
                <input type={type} onChange={onChange} placeholder={placeholder} value={value}></input>
            </div>

            <div>
                <input onClick={refresh} btnText="Ver todos" />
                <input onClick={onClick} btnText="Buscar" />
            </div>

        </div>

    )
}

export default Input;