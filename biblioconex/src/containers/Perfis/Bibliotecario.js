import { Link } from 'react-router-dom'
import "./bibliotecario.css"

function Bibliotecario() {
    return (
        <div className='Bibliotecario-contents'>
            <h2>Cadastrar livros</h2>
            <div className='Contents-perfis'>
                <input placeholder="ISBN"></input>
                <div className='botao-cadastro'>Cadastrar</div>
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

export default Bibliotecario;