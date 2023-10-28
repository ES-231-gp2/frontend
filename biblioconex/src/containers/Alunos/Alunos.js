import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./Alunos.css";

const instance = axios.create({
  baseURL: process.env.REACT_APP_ENV
})

export default function Alunos() {
  const [turmaSelecionada, setTurmaSelecionada] = useState(0);
  const [turmas, setTurmas] = useState([{ "id": 0, "serie": "Todas" }]);
  const [alunos, setAlunos] = useState([]);

  async function getTurmas() {
    try {
      const { data } = await instance.get('/turmas')
      setTurmas([...turmas, ...data])
    } catch (error) {
      console.log('ERROR: GET TURMAS: ', error)
    }
  }

  async function getAlunos() {
    try {
      if (turmaSelecionada == 0) {
        const { data } = await instance.get('/alunos')
        setAlunos(data)
      } else {
        const { data } = await instance.get('/turmas/' + turmaSelecionada + '/alunos')
        setAlunos(data)
      }
    } catch (error) {
      console.log('ERROR: GET ALUNOS: ', error)
    }
  }

  useEffect(() => {
    getTurmas();
  }, []);

  useEffect(() => {
    getAlunos();
  }, [turmaSelecionada]);

  return (
    <div className="Alunos-contents">
      <h1 className="titulo-page">ALUNOS DA TURMA</h1>
      <h4>
        <select
          value={turmas.find((turma) => turma.id === turmaSelecionada)}
          onChange={(e) => setTurmaSelecionada(e.target.value)}
        >
          {turmas.map((turma) => (
            <option value={turma.id}>
              {turma.serie}
            </option>
          ))}
        </select>
      </h4>
      {alunos.filter((aluno) => aluno.tipo_usuario === "ALUNO")
        .map((aluno) => (
          <Card id={aluno.id} nome={aluno.nome} tipo_usuario={aluno.tipo_usuario} />
        ))}
    </div>
  );
}
