import React, { useState } from 'react';
import './Card.css';

export default function Card(props) {
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    const handleDeleteClick = () => {
        setShowDeleteConfirmation(true);
    };

    const handleConfirmDelete = () => {
        // Chame a função onDelete passada como prop para lidar com a exclusão
        if (props.onDelete) {
            props.onDelete(props.nome);
        }
    };

    return (
        <div className='Turma'>
            {showDeleteConfirmation && (
                <div className='Exclusao-confirmacao'>
                    <p>Tem certeza de que deseja excluir a turma "{props.nome}"?</p>
                    <button onClick={handleConfirmDelete}>Sim</button>
                    <button onClick={() => setShowDeleteConfirmation(false)}>Cancelar</button>
                </div>
            )}
            {!showDeleteConfirmation && (
                <>
                    <p className='Nome-turma'>{props.nome}</p>
                    <div className='Botao-excluir' onClick={handleDeleteClick}>
                        X
                    </div>
                </>
            )}
        </div>
    );
}
