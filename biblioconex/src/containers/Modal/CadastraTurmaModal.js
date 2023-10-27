import React from 'react';
import './CadastraTurma.css';

function CadastroTurmaModal({ closeModal, cadastrarTurma }) {
  // Lógica para controlar o estado dos campos do formulário

  const handleCadastroTurma = () => {
    // Execute a lógica para cadastrar a turma e chame a função cadastrarTurma
    // Você pode acessar os dados do formulário aqui

    // Após o cadastro, feche o modal
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2 className='h2'>Cadastrar Turma</h2>
        <input type="text" placeholder="Série" />
        <input type="text" placeholder="Professor" />
        <button className='button' onClick={handleCadastroTurma}>Cadastrar</button>
      </div>
    </div>
  );
}

export default CadastroTurmaModal;
