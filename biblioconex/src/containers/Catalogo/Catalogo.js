import './Catalogo.css'
import { useEffect, useState } from "react";
import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/'
})

export default function () {
    const [ficcao, setFiccao] = useState([]);
    const [romance, setRomance] = useState([]);
    const [computers, setComputers] = useState([]);

    async function getLivrosFiction() {
        try {
            const {data} = await instance.get('http://localhost:8080/api/livros/generos?generos=Fiction')
            setFiccao(data)
        } catch (error) {
            console.log('ERROR: GET FICTION: ', error)   
        }
    }
    
    async function getLivrosRomance() {
        try {
            const {data} = await instance.get('http://localhost:8080/api/livros/generos?generos=Romance')
            setRomance(data)
        } catch (error) {
            console.log('ERROR: GET ROMANCE: ', error)   
        }
    }

    async function getLivrosComputadores() {
        try {
            const {data} = await instance.get('http://localhost:8080/api/livros/generos?generos=Computers')
            setComputers(data)
        } catch (error) {
            console.log('ERROR: GET ROMANCE: ', error)   
        }
    }

    useEffect(() => {
        getLivrosFiction();
        getLivrosComputadores();
    }, []);
    
        return (
            <div className='Catalogo-contents'>
                <h1>ESTANTE VIRTUAL</h1>
                <div>
                    <div className='Categoria'>
                        Ficção
                    </div>
                        {formatBooks(ficcao)}
                </div>
                <div>
                    <div className='Categoria'>
                        Computadores
                    </div>
                        {formatBooks(computers)}
                </div>
            </div>
        )
    }
    

function formatBooks(livros) {
    return livros.map((livro, index) => (
        <div key={index} className='Contents-livros'>
            <p className='Titulo-livro'>{livro.titulo}</p>
            <div>
                <div className='Livro-img-sinopse'>
                    <img className='Livro' src={livro.capa}></img>
                    <p className='Sinopse'>
                        {livro.descricao}
                    </p>
                </div>
                <div className='Botao-reserva'> Reservar</div>
            </div>
            <div className='Linha-inferior'>
                <p>1 2 3 4 5 ...</p><img className='Botao-seta' src='seta.svg'></img>
            </div>
        </div>
    )
    )
}