import React from 'react';
import './Modal.css'; // Importe o arquivo de estilização do modal

export default function ModalBook(book) {

    const [cadastroSucesso, setCadastroSucesso] = useState(false);

    
    return (
        <div>
          {isOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={onCancel}>&times;</span>
                <h2>Confirmação de Cadastro</h2>
                <div className="book-preview">
                  <h3>{book.title}</h3>
                  <p>Autor: {book.author}</p>
                  {/* Adicione outras informações do livro que deseja exibir no modal */}
                  <img src={book.imageUrl} alt={book.title} />
                </div>
                <div className="modal-buttons">
                  <button onClick={onCancel}>Cancelar</button>
                  <button onClick={onConfirm}>Confirmar</button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
};


        