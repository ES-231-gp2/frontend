import "./bibliotecario.css"

function Bibliotecario() {
    return (
        <div className='Bibliotecario-contents'>

            <h1>Cadastrar livros</h1>
            <div className='Contents-perfis'>
                <input placeholder="ISBN"></input>
                <div className='botao'>Cadastrar</div>
            </div>

            <h1>Turma</h1>
            <div className='Contents-perfis'>
                <div className='botao'>Cadastrar turma</div>
                <div className='botao'>Alunos por turma</div>
                <div className='botao'>Alterar dados</div>
            </div>

            <h1>Aluno</h1>
            <div className='Contents-perfis'>
                <div className='botao'>Cadastrar aluno</div>
                <div className='botao'>Dados do aluno</div>
                <div className='botao'>Livros emprestados</div>
            </div>

            <h1>Professor</h1>
            <div className='Contents-perfis'>
            <div className='botao'>Cadastrar professor</div>
            </div>
        </div >
    );
}

export default Bibliotecario;