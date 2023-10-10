import React from "react";
import "./Livro_Box.css"


export default function(props) {
    return(
       
        <div className='Contents-livros'>
            <p className='Titulo'>{props.titulo}</p>
            <div>
                <div className='Livro-img-sinopse'>
                    <img className='Livro' src={props.img_src}></img>
                    <p className='Sinopse'>
                    {props.sinopse}
                    </p>
                </div>
                <div className='Botao-reserva'> Devolver</div>
                <div className='Botao-reserva'> Resenha</div>
            </div>
            <div className='Linha-inferior'>
                <p>1 2 3 4 5 ...</p><img className='Botao-seta' src='seta.svg'></img>
            </div>
        </div>
    
        
    )
}