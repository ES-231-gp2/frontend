import './Card.css'

export default function(props) {
    return (
        <div className='Turma'>
            <p className='Nome-turma'>{props.nome}</p>
            <div className='Botao-excluir'>
                X
            </div>
        </div>
    );
}