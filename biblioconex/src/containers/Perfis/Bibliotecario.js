import { Link } from 'react-router-dom'
import "./bibliotecario.css"
import { useEffect, useState } from "react";
import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080', 
    headers: {
        'Content-Type': 'application/json'
      }
  });

function Bibliotecario() {
    return (
        <div className='Bibliotecario-contents'>
            <h2>Cadastrar livros</h2>
            <div className='Contents-perfis'>
                <input placeholder="ISBN" id='ISBN'></input>
                <div className='botao-cadastro' onClick={() => cadastrarLivro(document.getElementById('ISBN').value)}>Cadastrar</div>
            </div>

            <h2>Turma</h2>
            <div className='Contents-perfis'>
                <div className='botoes-usuarios'>Cadastrar turma</div>
                <div className='botoes-usuarios'>
                    <Link to="/alunos" className='Custom-link-button'>
                        Alunos por turma
                    </Link>
                </div>
                <div className='botoes-usuarios'>Alterar dados</div>
            </div>

            <h2>Aluno</h2>
            <div className='Contents-perfis'>
                <div className='botoes-usuarios'>
                    <Link to="/cadastro" className='Custom-link-button'>
                        Cadastrar aluno
                    </Link>
                </div>
                <div className='botoes-usuarios'>Dados do aluno</div>
                <div className='botoes-usuarios'>
                    <Link to="/livros_por_aluno" className='Custom-link-button'>Livros emprestados</Link>
                
                </div>
            </div>

            <h2>Professor</h2>
            <div className='Contents-perfis'>
            <div className='botoes-usuarios'>
                    <Link to="/cadastro" className='Custom-link-button'>
                        Cadastrar professor
                    </Link>
            </div>
            </div>
        </div >
    );
}

function obterLivroPorISBN(ISBN) {
    
    
    
}

function cadastrarLivro(ISBN) {
    console.log(ISBN);

    let livro;

    instance.get("/api/livros/isbn/" + ISBN).then(function (response) {
        livro = response.data;
        
    }).catch(function (error) {
        console.log(error);
    }).then(function () {

        
        const livroDTO = {
            isbn: livro.isbn,
            titulo: livro.titulo,
            autores: livro.autores,
            editora: livro.editora,
            ano: livro.ano,
            paginas: livro.paginas,
            edicao: livro.edicao,
            descricao: livro.descricao,
            capa: livro.capa
        };

        console.log(JSON.stringify(livroDTO));

        const livroDTOSTR = JSON.stringify(livroDTO);

        instance.post('/api/livros', livroDTOSTR, 
        {
            params: {
                numeroExemplares: 1
            }
        }).then(function (response) {
            if (response.status === 201) {
                console.log("success");
            } else {
                console.log("Error: Response status is not 201");
            }
        }).catch(function (error) {
            console.log(error);
        });
    })


    


    
}

export default Bibliotecario;