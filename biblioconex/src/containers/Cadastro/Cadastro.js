import React, { useEffect,useState } from 'react';
import './Cadastro.css';
import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_ENV,
  });


export default function () {
    const [userData, setUserData] = useState({
        nome: '',
        tipoUsuario: '',
        turma: '',
        email: '',
        senha: '',
    });

    const [turmas, setTurmas] = useState([])
    const [cadastroSucesso, setCadastroSucesso] = useState(false);
    const [redirectToLogin, setRedirectToLogin] = useState(false);

    async function getTurmas() {
        try {
            const { data } = await instance.get('http://34.125.199.225:8081/api/turmas')
            setTurmas(data);
            console.log(data);
        } catch (error) {
            console.log('ERROR: GET TURMAS: ', error)
        }
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const registrarCadastroSucesso = () => { 
        setCadastroSucesso(true);
        setRedirectToLogin(true);
    }

    const handleCadastroClick = () => {
         let api = "";

         switch (userData.tipoUsuario) {
             case 'aluno':
                 api = "alunos";
                 break;
             case 'professor':
                 api = "professores";
                 userData.turmas_ids = []
                 break;
             
         }
         
         instance.post(api, userData).then((response) => {
            const user = localStorage.getItem("user");
            console.log(user);
            instance.post("/login/cadastrar?loginBibliotecario=" + user.email + "&senhaBibliotecario=" + user.senha).then((response) => {

                registrarCadastroSucesso();
            }).catch((error) => {
                console.log(error);
            });
         }).catch((error) => {
             alert(error);
         });

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

    useEffect(() => {
        getTurmas();
    }, []);

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
                    {formataTurmas(turmas)}
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

function formataTurmas(turmas) {
    return turmas.map((turma, index) => (
        <option key={index} value={turma.id}>{turma.serie}</option>
    ))
}