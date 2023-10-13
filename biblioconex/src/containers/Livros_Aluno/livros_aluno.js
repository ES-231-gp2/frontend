import './livros_aluno.css';
import Livro_Box from '../../components/Livro_Box/Livro_Box';

export default function LivrosAluno() {
    return (
        <div className='Catalogo-contents'>
            <h1 className='titulo-livros-aluno'>LIVROS</h1>
            <div className='info'>Nome do aluno</div>
            <Livro_Box
                titulo="Magalice no país das melancias"
                imgSrc="/Capa _Magalice.png"
                imgAlt="Descrição da imagem"
                sinopse="Texto da sinopse do livro..."
                showDevolverButton={true}
                botao1='Devolver'
                showResenhaButton={true}
                botao2='Resenha'
            />
            <Livro_Box
                titulo="Livro da BiblioConex ;)"
                imgSrc="/childrens_with_books2.png"
                imgAlt="Descrição da imagem"
                sinopse="Texto da sinopse do livro..."
                showDevolverButton={true}
                botao1='Devolver'
                showResenhaButton={true}
                botao2='Resenha'
            />
        </div>
    );
}
