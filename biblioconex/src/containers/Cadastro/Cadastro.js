import React, { useState } from 'react';
import './Cadastro.css';
import config from "../../config.js"

import axios from "axios";
import { json } from 'react-router-dom';

const baseUrl = config.baseUrl;

const instance = axios.create({
  baseURL: baseUrl,
});

export default function () {
    const [userData, setUserData] = useState({
        nome: '',
        tipoUsuario: '',
        turma: '',
        email: '',
        senha: '',
    });

    const [cadastroSucesso, setCadastroSucesso] = useState(false); 
    const [redirectToLogin, setRedirectToLogin] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    function handleCadastroClick() {
        // Lógica de cadastro simulada
        
        if (userData.tipoUsuario == "aluno") {
            
            instance.post('http://localhost:8080/api/alunos', userData).then((response) => {
                setCadastroSucesso(true);
                setRedirectToLogin(true);
            }).catch((error) => {
                alert(error);
            });
        }
        
        setUserData({
            nome: '',
            tipoUsuario: '',
            turma: '',
            email: '',
            senha: '',
        });

    };

    if (redirectToLogin) {
        setTimeout(() => {
        window.location.href = '/login';
        }, 2500);
    }

    return (
        <div className='Cadastro-contents'>
            <h1>FAÇA PARTE DA NOSSA <span className='biblioteca-rosa'>BIBLIOTECA</span></h1>
            <div className='Form-contents-cadastro'>
                {cadastroSucesso && (
                    <div className='mensagem-sucesso'>
                        Cadastro realizado com sucesso!
                    </div>
                )}
                <input
                    type="text"
                    name="nome"
                    placeholder='Nome Completo'
                    value={userData.nome}
                    onChange={handleInputChange}
                />
                <select
                    name="tipoUsuario"
                    value={userData.tipoUsuario}
                    onChange={handleInputChange}
                >
                    <option value="">Selecione o Tipo de Usuário</option>
                    <option value="aluno">Aluno</option>
                    <option value="professor">Professor</option>
                </select>
                <select
                    name="turma"
                    value={userData.turma}
                    onChange={handleInputChange}
                >
                    <option value="">Selecione a Turma</option>
                    <option value="1">1</option>
                </select>
                <input
                    type="email"
                    name="email"
                    placeholder='E-mail'
                    value={userData.email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="senha"
                    placeholder='Senha'
                    value={userData.senha}
                    onChange={handleInputChange}
                />
                <div className='botao-cadastro' onClick={handleCadastroClick}>
                    Cadastrar
                </div>
                
            </div>
        </div>
    );
}