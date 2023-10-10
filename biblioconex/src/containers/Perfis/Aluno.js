import { Link } from 'react-router-dom'
import "./aluno.css"

function Aluno() {
    return (
        <div className='Aluno-contents'>
            <h2 class='info titulo-secao-aluno'>Meu Perfil</h2>
            <h4 class='info'>Nome completo</h4>
            <h4 class='info'>Série/ano e turma</h4>
            <h4 class='info'>Turno</h4>
                
            <h2 className='titulo-secao-aluno'>TEXTO DA TURMA</h2>
            <div className='Contents-perfis'>
                <div class='info-livro'>
                    <h4 class='info'>Título </h4>
                    <p class='info'>resumo do texto e onde tá </p>
                    <p class='info'>disponível </p>
                </div>
            </div>

            <h2 className='titulo-secao-aluno'>HISTÓRICO</h2>
            <div className='Contents-perfis'>
                <div class='info-livro'>
                    <h4 className='info'>Título 1</h4>
                    <p className='info'>Data da reserva: 05/05/2023</p>
                    <p className='info'>Data da entrega: 12/05/2023</p>
                    <p className='info'>Status: Entregue</p>
                </div>
                <div class='info-livro'>
                    <h4 className='info'>Título 2</h4>
                    <p className='info'>Data da reserva: 05/05/2023</p>
                    <p className='info'>Data da entrega: 12/05/2023</p>
                    <p className='info'>Status: Entregue</p>
                </div>

                <div className='Linha-inferior'>
                    <p>1 2 3 4 5 ...</p><img className='Botao-seta' src='seta.svg'></img>
                </div>

                    {/* falta o sistema de páginas */}
            </div>

            <h2 className='titulo-secao-aluno'>FILA DE ESPERA</h2>
            <div className='Contents-perfis'>
                <div class='info-livro'>
                    <h4 className='info'>Título 1</h4>
                    <p className='info'>status: Reservado</p>
                    <p className='info'>Previsão de entrega: 22/06/2023</p>
                </div>

                <div className='Linha-inferior'>
                    <p>1 2 3 4 5 ...</p><img className='Botao-seta' src='seta.svg'></img>
                </div>
                {/* falta o sistema de páginas */}
            </div>
                
            <h2 className='titulo-secao-aluno'>RESENHAS</h2>
            <div className='Contents-perfis'>
                <div class='info-livro'>
                    <h4 className='info'>Título 1</h4>
                    <p className='info'>"comentário escrito pelo aluno do que achou/aprendeu/refletiu sobre a obra"</p>
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