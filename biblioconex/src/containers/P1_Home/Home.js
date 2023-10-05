
import { Link } from 'react-router-dom';
import Box from '../../components/Box/Box';
import './Home.css';

export default function () {
    return (
        <div className='Home-contents'>
            <img src="/childrens-lecture.png" className="Image-childrens"></img>
            <div className='Horarios'>Horário: De segunda a sexta, das 00h00 às 00h00</div>
            <div className='Button'>
                <Link to="/catalogo" className='Custom-link-button'>
                    Catálogo de livros
                </Link></div>
            <div className='Box-contents'>
                <Box></Box>
                <Box></Box>
                <Box></Box>
            </div>

        </div>
    )
}