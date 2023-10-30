import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const instance = axios.create({
    baseURL: process.env.REACT_APP_ENV,
});

function Login() {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    return (
        <div className='Login-contents'>
            <h1>ACESSO À <span className='biblioteca-amarelo'>BIBLIOTECA</span></h1>
            <div className='Form-contents'>
                <input
                    placeholder='E-mail'
                    id="login"
                />
                <input
                    type='password'
                    placeholder='Senha'
                    id="senha"
                />
                <div className='botao-login' onClick={() => {handleLogin(setError, navigate)}}>
                    <button className='Custom-link-button'>
                        Entrar
                    </button>
                </div>
                {error && <p className='error-message'>{error}</p>}
            </div>
        </div>
    );
}

function handleLogin(setError, navigate) {
    console.log("efetuando login...");
    const email = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    instance.get(`/login?login=${email.replace("@", "%40")}&senha=${senha}`).then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("idUsuario", response.data.id);

        if (response.data.tipo_usuario === "BIBLIOTECARIO") {
            navigate('/bibliotecario');
        } else {
            navigate('/catalogo');
        }
    }).catch((error) => {
        console.log(error);
        setError("Credenciais inválidas. Tente novamente.")
    })    
    
};

export default Login;
