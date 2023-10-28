import axios from "axios";
import { useEffect, useState } from "react";
import './Destaques.css';

const instance = axios.create({
    baseURL: process.env.REACT_APP_ENV
})

export default function () {

    const [livroDoMes, setLivroDoMes] = useState({});
    const [livrosMaisLidos, setLivrosMaisLidos] = useState([]);

    async function getLivroDoMes() {
        try {
            const { data } = await instance.get('/livros/livro-do-mes')
            setLivroDoMes(data)
        } catch (error) {
            console.log('ERROR: GET LIVROS DO MÊS: ', error)
        }
    }

    async function getLivrosMaisLidos() {
        try {
            const { data } = await instance.get('/livros/mais-lidos')
            setLivrosMaisLidos(data)
        } catch (error) {
            console.log('ERROR: GET LIVROS MAIS LIDOS: ', error)
        }
    }

    useEffect(() => {
        getLivroDoMes();
        getLivrosMaisLidos()
    }, []);

    return (
        <div className='Destaque-contents'>
            <h1 className='Destaque'>Livro do Mês</h1>
            <div className='Contents-destaques'>
                <p className='Titulo-livro'>{livroDoMes.titulo}</p>
                <div>
                    <div className='Livro-img-sinopse'>
                        <img src={livroDoMes.capa} className='Livro-destaque'></img>
                        <p className='Sinopse'>{livroDoMes.descricao}</p>
                    </div>
                    <div className='Botao-reserva'>Visualizar</div>
                </div>
            </div>

            <h1 className='Destaque'>Horário Nobre</h1>
            <div className='Contents-destaques'>
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

            <h1 className='Destaque'>Livros Mais Lidos</h1>
            <div className='Contents-destaques'>
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
