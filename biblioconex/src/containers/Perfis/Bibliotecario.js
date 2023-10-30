import { Link } from "react-router-dom";
import "./bibliotecario.css";

import axios from "axios";
import { useEffect, useState } from "react";
import CadastroTurmaModal from "../Modal/CadastraTurmaModal";

const instance = axios.create({
  baseURL: process.env.REACT_APP_ENV,
});

function Bibliotecario() {

  const [isTurmaModalOpen, setIsTurmaModalOpen] = useState(false);

  // Resto do código...

  const openTurmaModal = () => {
    setIsTurmaModalOpen(true);
  };

  const closeTurmaModal = () => {
    setIsTurmaModalOpen(false);
  };

  const cadastrarTurma = (dadosTurma) => {
    // Execute a lógica para cadastrar a turma com os dados recebidos
  };

  return (
    <div className="Bibliotecario-contents">
      <h2>Cadastrar livros</h2>
      <div className="Contents-perfis">
        <input placeholder="ISBN" id="ISBN"></input>
        <input placeholder="Número de Exemplares" id="num_exemplares"></input>
        <div
          className="botao-cadastro"
          onClick={() =>
            cadastrarLivro(
              document.getElementById("ISBN").value,
              document.getElementById("num_exemplares").value
            )
          }
        >
          Cadastrar
        </div>
      </div>

      <h2>Alterar livro do mês</h2>
      <div className="Contents-perfis">
        <input placeholder="ISBN" id="idLivroDoMes"></input>
        <div
          className="botao-cadastro"
          onClick={() => {
            alterarLivroDoMes(document.getElementById("idLivroDoMes").value);
          }}
        >
          Alterar
        </div>
      </div>

      <h2>Turma</h2>
      <div className="Contents-perfis">
        <div className="botoes-usuarios" onClick={openTurmaModal}>Cadastrar turma</div>
        <div className="botoes-usuarios">
          <Link to="/alunos" className="Custom-link-button">
            Alunos por turma
          </Link>
        </div>
        <div className="botoes-usuarios">
          <Link to="/turmas" className="Custom-link-button">
            Alterar dados
          </Link>
        </div>
      </div>

      {isTurmaModalOpen && <CadastroTurmaModal closeModal={closeTurmaModal} cadastrarTurma={cadastrarTurma} />}


      <h2>Cadastrar usuários</h2>
      <div className="Contents-perfis">
        <div className="botoes-usuarios">
          <Link to="/cadastro" className="Custom-link-button">
            Cadastrar aluno
          </Link>
        </div>
        <div className="botoes-usuarios">
          <Link to="/cadastro" className="Custom-link-button">
            Cadastrar professor
          </Link>
        </div>
      </div>
    </div>
  );
}

function alterarLivroDoMes(id) {
  instance
    .put("/livros/livro-do-mes/" + id)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

function cadastrarLivro(ISBN, num_exemplares) {
  let livro;

  instance
    .get("/livros/isbn/" + ISBN)
    .then(function (response) {
      livro = response.data;
      // Boa parte dos livros não estão vindo com edição
      if (livro.edicao == null) {
        livro.edicao = -1;
      }
    })
    .catch(function (error) {
      console.log("ERROR GET BOOK THROUGH ISBN: ", error);
    })
    .then(function () {
      instance
        .post("/livros", livro, {
          params: {
            numeroExemplares: num_exemplares,
          },
        })
        .then(function (response) {
          if (response.status === 201) {
            console.log("success, book registered");
          }
        })
        .catch(function (error) {
          console.log("ERROR POST NEW BOOK: ", error);
        });
    });
}

export default Bibliotecario;
