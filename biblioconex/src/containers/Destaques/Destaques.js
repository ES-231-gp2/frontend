import './Destaques.css'
import { useEffect, useState } from "react";
import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/'
})

export default function () {

    const [livro_Do_Mes, setLivroDoMes] = useState({});

    useEffect(() => {
        instance.get('http://localhost:8080/api/livros/livro-do-mes')
        .then(response => {
          setLivroDoMes(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    return (
        <div className='Destaque-contents'>
            <h1>Livros do Mês</h1>
            <div className='Contents-livros'>
                <p className='Titulo-livro'>Titulo do livro</p>
                <div>
                    <div className='Livro-img-sinopse'>
                        <img className='Livro-destaque'></img>
                        <p className='Sinopse'>
                            A jovem estudante Dolores Dreier é a única suspeita do
                            brutal assassinato de sua melhor amiga.
                            Cercada pela mídia e encurralada pelas provas, ela deve
                            enfrentar suas próprias dúvidas sobre o que realmente aconteceu.
                        </p>
                    </div>
                    <div className='Botao-reserva'>Visualizar</div>
                </div>
            </div>

            <h1>Horário Nobre</h1>
            <div className='Contents-livros'>
                <p className='Titulo-livro'>Titulo do livro</p>
                <div>
                    <div className='Livro-img-sinopse'>
                        <img className='Livro-destaque'></img>
                        <p className='Sinopse'>
                            A jovem estudante Dolores Dreier é a única suspeita do
                            brutal assassinato de sua melhor amiga.
                            Cercada pela mídia e encurralada pelas provas, ela deve
                            enfrentar suas próprias dúvidas sobre o que realmente aconteceu.
                        </p>
                    </div>
                    <div className='Botao-reserva'>Visualizar</div>
                </div>
            </div>

            <h1>LIVROS MAIS LIDOS</h1>
            <div className='Contents-livros'>
                <p className='Titulo'>Titulo do livro</p>
                <div>
                    <div className='Livro-img-sinopse'>
                        <img className='Livro-destaque'></img>
                        <p className='Sinopse'>
                            A jovem estudante Dolores Dreier é a única suspeita do
                            brutal assassinato de sua melhor amiga.
                            Cercada pela mídia e encurralada pelas provas, ela deve
                            enfrentar suas próprias dúvidas sobre o que realmente aconteceu.
                        </p>
                    </div>
                    <div className='Botao-reserva'> Visualizar</div>
                </div>
                <div className='Linha-inferior'>
                    <p>1 2 3 4 5 ...</p><img className='Botao-seta' src='seta.svg'></img>
                </div>
            </div>
        </div>
    )
}