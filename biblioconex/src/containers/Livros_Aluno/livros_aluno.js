import './livros_aluno.css';
import Livro_Box from '../../components/Livro_Box/Livro_Box';
import { useEffect, useState } from "react";
import axios from "axios";

export default function LivrosAluno() {
    const [livros_aluno, setLivros] = useState({});

    useEffect(() => {
        axios.get('https://www.biblioconex.com/livros_aluno?id=123')
        .then(response => {
          setLivros(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    return (
        <div className='Catalogo-contents'>
            <h1 className='titulo-livros-aluno'>LIVROS</h1>
            <div className='info'>Nome do aluno</div>
            {Object.keys(livros_aluno).map((key) => (
                <Livro_Box
                    titulo={livros_aluno[key].titulo}
                    imgSrc={livros_aluno[key].imgSrc}
                    imgAlt={livros_aluno[key].imgAlt}
                    sinopse={livros_aluno[key].sinopse}
                    showDevolverButton={true}
                    botao1='Devolver'
                    showResenhaButton={true}
                    botao2='Resenha'
                />
                ))
            }
        </div>
    );
}
