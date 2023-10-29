import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const instance = axios.create({
    baseURL: process.env.REACT_APP_ENV,
});

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const user = await instance.get(`/login?login=${email}&senha=${senha}`);
            localStorage.setItem("user", JSON.stringify(user));
            if (user.tipo_usuario === "BIBLIOTECARIO") {
                navigate('/bibliotecario');
            } else {
                navigate('/catalogo');
            }
        } catch (error) {
            setError("Credenciais inválidas. Tente novamente.")
        }
    };

    return (
        <div className='Login-contents'>
            <h1>ACESSO À <span className='biblioteca-amarelo'>BIBLIOTECA</span></h1>
            <div className='Form-contents'>
                <input
                    placeholder='E-mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='Senha'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <div className='botao-login'>
                    <button onClick={handleLogin} className='Custom-link-button'>
                        Entrar
                    </button>
                </div>
                {error && <p className='error-message'>{error}</p>}
            </div>
        </div>
    );
}

export default Login;
