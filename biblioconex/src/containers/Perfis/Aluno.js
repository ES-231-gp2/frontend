import { Link } from 'react-router-dom'
import "./aluno.css"

function Aluno() {
    return (
        <div class='Aluno'>
            <h2 class='info'>Meu Perfil</h2>
            <h4 class='info'>Nome completo</h4>
            <h4 class='info'>Série/ano e turma</h4>
            <h4 class='info'>Turno</h4>
                
            <div className='Aluno-contents'>
                <h2>TEXTO DA TURMA</h2>
                <div className='Contents-perfis'>
                    <h4 class='info'>Título </h4>
                    <h4 class='info'>resumo do texto e onde tá </h4>
                    <h4 class='info'>disponível </h4>
                </div>

                <h2>HISTÓRICO</h2>
                <div className='Contents-perfis'>
                    <div class='info-livro'>
                        <h4 className='info'>Título 1</h4>
                        <h4 className='info'>Data da reserva: 05/05/2023</h4>
                        <h4 className='info'>Data da entrega: 12/05/2023</h4>
                        <h4 className='info'>Status: Entregue</h4>
                    </div>
                    <div class='info-livro'>
                        <h4 className='info'>Título 2</h4>
                        <h4 className='info'>Data da reserva: 05/05/2023</h4>
                        <h4 className='info'>Data da entrega: 12/05/2023</h4>
                        <h4 className='info'>Status: Entregue</h4>
                    </div>

                    {/* falta o sistema de páginas */}
                </div>

                <h2>FILA DE ESPERA</h2>
                <div className='Contents-perfis'>
                    <div class='info-livro'>
                        <h4 className='info'>Título 1</h4>
                        <h4 className='info'>status: Reservado</h4>
                        <h4 className='info'>Previsão de entrega: 22/06/2023</h4>
                    </div>

                    {/* falta o sistema de páginas */}
                </div>
                
                <h2>RESENHAS</h2>
                <div className='Contents-perfis'>
                    <div class='info-livro'>
                        <h4 className='info'>Título 1</h4>
                        <h4 className='info'>"comentário escrito pelo aluno do que achou/aprendeu/refletiu sobre a obra"</h4>
                    </div>

                    {/* falta o sistema de páginas */}
                </div>


            </div >
        </div>
    );
}

export default Aluno;