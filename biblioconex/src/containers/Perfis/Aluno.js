import "./aluno.css"

function Aluno() {
    return (
        <div className='Aluno-contents'>
            <h1 class='titulo'>MEU PERFIL</h1>
            <div class='info'>
            <p>Nome completo</p>
            <p>Série/ano e turma</p>
            <p>Turno</p>
            </div>
            
                
            <h2 className='titulo-secao-aluno'>TEXTO DA TURMA</h2>
            <div className='Contents-perfis'>
                <div class='info-livro'>
                    <h4>Título </h4>
                    <p>resumo do texto e onde tá </p>
                    <p>disponível </p>
                </div>
            </div>

            <h2 className='titulo-secao-aluno'>HISTÓRICO</h2>
            <div className='Contents-perfis'>
                <div class='info-livro'>
                    <h4 >Título 1</h4>
                    <p >Data da reserva: 05/05/2023</p>
                    <p >Data da entrega: 12/05/2023</p>
                    <p >Status: Entregue</p>
                </div>
                <div class='info-livro'>
                    <h4 >Título 2</h4>
                    <p >Data da reserva: 05/05/2023</p>
                    <p >Data da entrega: 12/05/2023</p>
                    <p >Status: Entregue</p>
                </div>

                <div className='Linha-inferior'>
                    <p>1 2 3 4 5 ...</p><img className='Botao-seta' src='seta.svg'></img>
                </div>

                    {/* falta o sistema de páginas */}
            </div>

            <h2 className='titulo-secao-aluno'>FILA DE ESPERA</h2>
            <div className='Contents-perfis'>
                <div class='info-livro'>
                    <h4 >Título 1</h4>
                    <p >status: Reservado</p>
                    <p >Previsão de entrega: 22/06/2023</p>
                </div>

                <div className='Linha-inferior'>
                    <p>1 2 3 4 5 ...</p><img className='Botao-seta' src='seta.svg'></img>
                </div>
                {/* falta o sistema de páginas */}
            </div>
                
            <h2 className='titulo-secao-aluno'>RESENHAS</h2>
            <div className='Contents-perfis'>
                <div class='info-livro'>
                    <h4 >Título 1</h4>
                    <p >"comentário escrito pelo aluno do que achou/aprendeu/refletiu sobre a obra"</p>
                </div>

                <div className='Linha-inferior'>
                    <p>1 2 3 4 5 ...</p><img className='Botao-seta' src='seta.svg'></img>
                </div>
                {/* falta o sistema de páginas */}
            </div>
        </div>
    );
}

export default Aluno;