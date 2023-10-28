import React, { useState } from 'react';
import './Cadastro.css';

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

    const handleCadastroClick = () => {
        // Lógica de cadastro simulada
        setTimeout(() => {
            setCadastroSucesso(true);
            setRedirectToLogin(true);
            setUserData({
                nome: '',
                tipoUsuario: '',
                turma: '',
                email: '',
                senha: '',
            });
        }, 2500);
    };

    if (redirectToLogin) {
        window.location.href = '/login';
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
                    <option value="Turma A">Turma A</option>
                    <option value="Turma B">Turma B</option>
                    <option value="Turma C">Turma C</option>
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
