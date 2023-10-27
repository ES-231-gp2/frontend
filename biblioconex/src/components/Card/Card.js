import React, { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { FaUser, FaTrash } from "react-icons/fa";

export default function Card(props) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = () => {
    if (props.onDelete) {
      props.onDelete(props.nome);
    }
  };

  return (
    <div className="Card">
      {showDeleteConfirmation && (
        <div className="Exclusao-confirmacao">
          <p>
            Tem certeza de que deseja excluir{" "}
            {props.tipo === "aluno" ? "o aluno" : "a turma"} "{props.nome}"?
          </p>
          <button onClick={handleConfirmDelete}>Sim</button>
          <button onClick={() => setShowDeleteConfirmation(false)}>
            Cancelar
          </button>
        </div>
      )}
      {!showDeleteConfirmation && (
        <>
          {props.tipo === "aluno" && (
            <Link to={`/perfil-aluno/`} className="link-user-aluno">
              <div className="user-aluno">
                <FaUser />
              </div>
            </Link>
          )}
          <p className="Nome-turma">{props.nome}</p>
          <div className="Botao-excluir" onClick={handleDeleteClick}>
            <FaTrash />
          </div>
        </>
      )}
    </div>
  );
}
