import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './professor.css';
import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_ENV
})

function Professor() {

    const [turmasProfessor, setTurmasProfessor] = useState([]);
    const [turmaSelecionada, setTurmaSelecionada] = useState('');
    const [nomeProfessor, setNomeProfessor] = useState('Professor Fulano da Silva');

    const handleTurmaChange = (event) => {
        setTurmaSelecionada(event.target.value);
    };

    useEffect(() => {
        getNomeProfessor(setNomeProfessor);
        getTurmasProfessor(setTurmasProfessor);
    }, []);


    return (
        <div className="Professor">
            <h1>MEU PERFIL</h1>
            <h4 className="info">{nomeProfessor}</h4>

            <h4>
                <Link to="/turmas" className="info-turma">
                    CLIQUE PARA TER ACESSO A TODAS AS SUAS TURMAS
                </Link>
            </h4>

            <div className="Professor-contents">
                <h2>REGISTRAR TEXTO</h2>
                <div className="Contents-card">
                    <input placeholder="Nome do texto"></input>

                    {/* Dropdown de seleção para turmas do professor */}
                    <select value={turmaSelecionada} onChange={handleTurmaChange}>
                        <option value="">Selecione uma turma</option>
                        {turmasProfessor.map((turma, index) => (
                            <option key={index} value={turma}>
                                {turma}
                            </option>
                        ))}
                    </select>

                    <input placeholder="Descrição"></input>
                    <input placeholder="Link para o texto"></input>
                    <div className="botao-salvar">Salvar</div>
                </div>
            </div>
        </div>
    );
}

function getNomeProfessor(setNomeProfessor) {
    instance.get('/api/professores/' + localStorage.getItem("idUsuario")).then((response) => {
        setNomeProfessor(response.data.nome);
    }).catch((error) => {
        console.log('ERROR: GET PROFESSOR: ', error);
    });
}

function getTurmasProfessor(setTurmasProfessor) {
    instance.get('/api/professores/' + localStorage.getItem("idUsuario") + '/turma').then((response) => {
        setTurmasProfessor(response.data);
    }).catch((error) => {
        console.log('ERROR: GET TURMAS PROFESSOR: ', error);
    });
}


export default Professor;
