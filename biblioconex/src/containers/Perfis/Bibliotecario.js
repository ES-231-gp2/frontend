import "./bibliotecario.css"

function Bibliotecario() {
    return (
        <div className='Bibliotecario-contents'>
            <h2>Cadastrar livros</h2>
            <div className='Contents-perfis'>
                <input placeholder="ISBN"></input>
                <div className='botao'>Cadastrar</div>
            </div>

            <h2>Turma</h2>
            <div className='Contents-perfis'>
                <div className='botao'>Cadastrar turma</div>
                <div className='botao'>Alunos por turma</div>
                <div className='botao'>Alterar dados</div>
            </div>

            <h2>Aluno</h2>
            <div className='Contents-perfis'>
                <div className='botao'>Cadastrar aluno</div>
                <div className='botao'>Dados do aluno</div>
                <div className='botao'>Livros emprestados</div>
            </div>

            <h2>Professor</h2>
            <div className='Contents-perfis'>
            <div className='botao'>Cadastrar professor</div>
            </div>
        </div >
    );
}

export default Bibliotecario;