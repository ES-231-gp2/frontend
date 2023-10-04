
import Box from '../Box/Box';
import './Home.css';

export default function() {
    return(
        <div className='Home-contents'>
        <img src="/childrens-lecture.png" className="Image-childrens"></img> 
        <div className='Horarios'>Horário: De segunda a sexta, das 00h00 às 00h00</div>
        <div className='Button'> Catálogo de livros </div>
        <div className='Box-contents'>
            <Box></Box>
            <Box></Box>
            <Box></Box>
        </div>
        
        </div>
    )
}