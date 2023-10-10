import './livros_aluno.css'
import Livro_Box from '../../components/Livro_Box/Livro_Box';

export default function() {
    return (
        <div className='Catalogo-contents'>
            <Livro_Box img_src="Capa _Magalice.png" titulo="Magalice" sinopse="Livro da magali" />
            <Livro_Box img_src="childrens_with_books2.png" titulo="Livro da biblioconex ;)" sinopse="Como fazer um sistema de bibliotecas" />
        </div>
    )
}