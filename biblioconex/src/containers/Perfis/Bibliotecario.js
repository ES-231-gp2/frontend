import { Link } from 'react-router-dom'
import "./bibliotecario.css"

import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/'
})

function Bibliotecario() {
    return (
        <div className='Bibliotecario-contents'>
            <h2>Cadastrar livros</h2>
            <div className='Contents-perfis'>
                <input placeholder="ISBN"></input>
                <div className='botao-cadastro'>Cadastrar</div>
            </div>
            
            <h2>Alterar livro do mês</h2>
            <div className='Contents-perfis'>
                <input placeholder="ID" id="idLivroDoMes"></input>
                <div className='botao-cadastro' onClick={() => {alterarLivroDoMes(document.getElementById("idLivroDoMes").value)}}>Alterar</div>
            </div>

            <h2>Turma</h2>
            <div className='Contents-perfis'>
                <div className='botoes-usuarios'>Cadastrar turma</div>
                <div className='botoes-usuarios'>
                    <Link to="/alunos" className='Custom-link-button'>
                        Alunos por turma
                    </Link>
                </div>
                <div className='botoes-usuarios'>Alterar dados</div>
            </div>

            <h2>Aluno</h2>
            <div className='Contents-perfis'>
                <div className='botoes-usuarios'>
                    <Link to="/cadastro" className='Custom-link-button'>
                        Cadastrar aluno
                    </Link>
                </div>
                <div className='botoes-usuarios'>Dados do aluno</div>
                <div className='botoes-usuarios'>
                    <Link to="/livros_por_aluno" className='Custom-link-button'>Livros emprestados</Link>
                
                </div>
            </div>

            <h2>Professor</h2>
            <div className='Contents-perfis'>
            <div className='botoes-usuarios'>
                    <Link to="/cadastro" className='Custom-link-button'>
                        Cadastrar professor
                    </Link>
            </div>
            </div>
        </div >
    );
}

function alterarLivroDoMes(id) {
    instance.put( "http://localhost:8080/api/livros/livro-do-mes/" + id).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
}

export default Bibliotecario;