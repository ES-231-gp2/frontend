import './Cadastro.css'

export default function () {
    return (
        <div className='Cadastro-contents'>
            <h1>FAÇA PARTE DA NOSSA <span className='biblioteca-rosa'>BIBLIOTECA</span></h1>
            <div className='Form-contents-cadastro'>
                <input placeholder='Nome Completo'></input>
                <input placeholder='Tipo de Usuário'></input>
                <input placeholder='Turma do Aluno'></input>
                <input placeholder='E-mail'></input>
                <input placeholder='Senha'></input>
                <div className='botao-cadastro'>
                    Cadastrar
                </div>
            </div>
        </div>
    )
    //TODO: Criar alguma ação para o botão de cadastro, aparecer uma mensagem ou algo do tipo
}