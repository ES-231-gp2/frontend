import React, { useState } from "react";
import "./Alunos.css";
import Card from "../../components/Card/Card";

export default function Alunos() {
  const [turmaSelecionada, setTurmaSelecionada] = useState("Todas"); // Inicialmente, todas as turmas são exibidas

  // Array de turmas
  const turmas = ["Turma 1", "Turma 2", "Turma 3", "Todas"];

  // Array de alunos (você pode obter esses dados de onde preferir)
  const alunos = [
    { nome: "Aluno 1", tipo: "aluno", turma: "Turma 1" },
    { nome: "Aluno 2", tipo: "aluno", turma: "Turma 2" },
    { nome: "Aluno 3", tipo: "aluno", turma: "Turma 1" },
    { nome: "Aluno 4", tipo: "aluno", turma: "Turma 3" },
    { nome: "Aluno 5", tipo: "aluno", turma: "Turma 2" },
    { nome: "Turma 1", tipo: "turma" },
    { nome: "Turma 2", tipo: "turma" },
    { nome: "Turma 3", tipo: "turma" },
  ];

  // Função para renderizar os alunos com base na turma selecionada
  const renderAlunos = () => {
    if (turmaSelecionada === "Todas") {
      // Se "Todas" estiver selecionada, renderize todos os alunos
      return alunos
        .filter((aluno) => aluno.tipo === "aluno")
        .map((aluno, index) => (
          <Card key={index} nome={aluno.nome} tipo={aluno.tipo} onDelete={() => handleDeleteAluno(aluno.nome)} />
        ));
    } else {
      // Filtrar e renderizar somente alunos da turma selecionada
      const alunosDaTurmaSelecionada = alunos.filter(
        (aluno) => aluno.turma === turmaSelecionada && aluno.tipo === "aluno"
      );
      return alunosDaTurmaSelecionada.map((aluno, index) => (
        <Card key={index} nome={aluno.nome} tipo={aluno.tipo} onDelete={() => handleDeleteAluno(aluno.nome)} />
      ));
    }
  };

  // Função para lidar com a exclusão de alunos
  const handleDeleteAluno = (nomeAluno) => {
    // Implemente a lógica para excluir o aluno com base no nome
    console.log(`Excluir aluno: ${nomeAluno}`);
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
