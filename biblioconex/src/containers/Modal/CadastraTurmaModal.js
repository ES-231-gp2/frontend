import React, { useState } from 'react';
import './CadastraTurma.css';
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
});

function CadastroTurmaModal({ closeModal }) {
  // Lógica para controlar o estado dos campos do formulário
  const [turmaData, setTurmaData] = useState({
    serie: '',
    professor_id: ''
  });

  const handleInput = (event) => {
    setTurmaData({ ...turmaData, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault();
    instance.post("/api/turmas", turmaData)
    .then(function (response) {
      if (response.status === 201) {
        console.log("sucess, class created!");
      }
    })
    .catch(function (error) {
      console.log(turmaData.serie)
      console.log(turmaData.professor_id)
      console.log("ERROR POST NEW TURMA VEY: ", error);
    });    
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2 className='h2'>Cadastrar Turma</h2>
        <input type="text" placeholder="Série" onChange={handleInput} name="serie" />
        <input type="text" placeholder="Professor" onChange={handleInput} name="professor_id" />
        <button className='button' onClick={handleSubmit}>Cadastrar</button>
      </div>
    </div>
  );
}

export default CadastroTurmaModal;
