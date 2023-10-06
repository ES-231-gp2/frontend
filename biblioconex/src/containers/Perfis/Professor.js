import { Link } from 'react-router-dom'
import "./professor.css"

function Professor() {
    return (
        <div class='Professor'>
            <h2 class='info'>Meu Perfil</h2>
            <h4 class='info'>Nome completo do professor</h4>
            {/* transformar Turmas em link para página de turmas*/}
            <h4 class='info'>Turmas</h4>
                
            <div className='Professor-contents'>
                <h2>REGISTRA TEXTO</h2>
                <div className='Contents-perfis'>
                    <input placeholder="Nome do texto"></input>
                    <input placeholder="Turma do texto"></input>
                    <div className='botao'>Salvar</div>
                </div>

                <div className='botao' style={{flex: "right"}}>Alterar dados</div>

            </div >
        </div>
    );
}

export default Aluno;