import React, { useState } from "react";
import "./Alunos.css";
import Card from "../../components/Card/Card";

export default function Alunos() {
  const [turmaSelecionada, setTurmaSelecionada] = useState("Todas"); // Inicialmente, todas as turmas são exibidas

  // Array de turmas
  const turmas = ["Turma 1", "Turma 2", "Turma 3", "Todas"];

  // Array de alunos (você pode obter esses dados de onde preferir)
  const alunos = [
    { nome: "Aluno 1", turma: "Turma 1" },
    { nome: "Aluno 2", turma: "Turma 2" },
    { nome: "Aluno 3", turma: "Turma 1" },
    { nome: "Aluno 4", turma: "Turma 3" },
    { nome: "Aluno 5", turma: "Turma 2" },
  ];

  // Função para renderizar os alunos com base na turma selecionada
  const renderAlunos = () => {
    if (turmaSelecionada === "Todas") {
      return alunos.map((aluno, index) => (
        <Card key={index} nome={aluno.nome} />
      ));
    } else {
      const alunosFiltrados = alunos.filter(
        (aluno) => aluno.turma === turmaSelecionada
      );
      return alunosFiltrados.map((aluno, index) => (
        <Card key={index} nome={aluno.nome} />
      ));
    }
  };

  return (
    <div className="Alunos-contents">
      <h1 className="titulo-page">ALUNOS DA TURMA</h1>
      <h4>
        <select
          value={turmaSelecionada}
          onChange={(e) => setTurmaSelecionada(e.target.value)}
        >
          {turmas.map((turma, index) => (
            <option key={index} value={turma}>
              {turma}
            </option>
          ))}
        </select>
      </h4>
      {renderAlunos()}
    </div>
  );
}
