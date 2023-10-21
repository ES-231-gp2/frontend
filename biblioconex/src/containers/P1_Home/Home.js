
import { Link } from 'react-router-dom';
import Box from '../../components/Box/Box';
import './Home.css';

export default function () {
    return (
        <div className='Home-contents'>
            <img src="/childrens-lecture.png" className="Image-childrens"></img>
            <div className='Horarios'>Horário: De segunda a sexta, das 00h00 às 00h00</div>
            <div className='Button-contents'>
                <div className='Button'>
                    <Link to="/catalogo" className='Custom-link-button'>
                        Catálogo de livros
                    </Link></div>
                <div className='Button'>
                    <Link to="/destaques" className='Custom-link-button'>
                        Livros em Destaque
                    </Link></div>         
            </div>   
                <div className='Box-contents'>
            <Box
    image="/box1.png"
    text="Quer reservar algum livro ou entrar na fila de espera?"
    buttonText="Saiba mais"
    linkTo="/Orientacao1"
/>

<Box
    image="/childrens_with_books1.png"
    text="Sentiu falta de algum livro? Nos faça uma sugestão!"
    buttonText="Saiba mais"
    linkTo="/Orientacao2"
/>

<Box
    image="/childrens_with_books2.png"
    text="Fique por dentro dos prazos de entrega e cuidados com os livros!"
    buttonText="Saiba mais"
    linkTo="/Orientacao3"
/>


            </div>

        </div>
    )
}