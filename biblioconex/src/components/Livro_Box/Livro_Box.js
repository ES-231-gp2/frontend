import React from "react";
import "./Livro_Box.css"

export default function LivroBox(props) {
    return (
        <div className='Contents-livros'>
            <p className='Titulo'>{props.titulo}</p>
            <div>
                <div className='Livro-img-sinopse'>
                    <img className='Livro' src={props.imgSrc} alt={props.imgAlt} />
                    <p className='Sinopse'>{props.sinopse}</p>
                </div>
                {props.showDevolverButton && <div className='Botao-reserva'>{props.botao1}</div>}
                {props.showResenhaButton && <div className='Botao-reserva'>{props.botao2}</div>}
            </div>
            <div className='Linha-inferior'>
                <p>{props.pageNumbers}</p>
                <img className='Botao-seta' src={props.setaImgSrc} alt={props.setaImgAlt} />
            </div>
        </div>
    );
}
