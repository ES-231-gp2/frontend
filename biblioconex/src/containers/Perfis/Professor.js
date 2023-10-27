import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './professor.css';

function Professor() {
  // Suponha que você tenha a lista de turmas do professor
  const turmasDoProfessor = ['Turma A', 'Turma B', 'Turma C'];

  const [turmaSelecionada, setTurmaSelecionada] = useState('');

  const handleTurmaChange = (event) => {
    setTurmaSelecionada(event.target.value);
  };

  return (
    <div className="Professor">
      <h1>MEU PERFIL</h1>
      <h4 className="info">Nome completo do professor</h4>
      
      <h4>
        <Link to="/turmas" className="info-turma">
          CLIQUE PARA TER ACESSO A TODAS AS SUAS TURMAS
        </Link>
      </h4>

      <div className="Professor-contents">
        <h2>REGISTRAR TEXTO</h2>
        <div className="Contents-card">
          <input placeholder="Nome do texto"></input>
          
          {/* Dropdown de seleção para turmas do professor */}
          <select value={turmaSelecionada} onChange={handleTurmaChange}>
            <option value="">Selecione uma turma</option>
            {turmasDoProfessor.map((turma, index) => (
              <option key={index} value={turma}>
                {turma}
              </option>
            ))}
          </select>

          <input placeholder="Descrição"></input>
          <input placeholder="Link para o texto"></input>
          <div className="botao-salvar">Salvar</div>
        </div>
      </div>
    </div>
  );
}

export default Professor;
