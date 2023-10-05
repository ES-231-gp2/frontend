import './Catalogo.css'

export default function () {
    return (
        <div className='Catalogo-contents'>
            <h1>ESTANTE VIRTUAL</h1>
            <div>
                <div className='Categoria'>
                    CATEGORIA 1
                </div>
                <div className='Contents-livros'>
                    <p className='Titulo'>Titulo do livro</p>
                    <div>
                        <div className='Livro-img-sinopse'>
                            <img className='Livro'></img>
                            <p className='Sinopse'>
                                A jovem estudante Dolores Dreier é a única suspeita do
                                brutal assassinato de sua melhor amiga.
                                Cercada pela mídia e encurralada pelas provas, ela deve
                                enfrentar suas próprias dúvidas sobre o que realmente aconteceu.
                            </p>
                        </div>
                        <div className='Botao-reserva'> Reservar</div>
                    </div>
                    <div className='Linha-inferior'>
                        <p>1 2 3 4 5 ...</p><img className='Botao-seta' src='seta.svg'></img>
                    </div>
                </div>
            </div>
            <div>
                <div className='Categoria'>
                    CATEGORIA 2
                </div>
                <div className='Contents-livros'>
                    <p className='Titulo'>Titulo do livro</p>
                    <div>
                        <div className='Livro-img-sinopse'>
                            <img className='Livro'></img>
                            <p className='Sinopse'>
                                A jovem estudante Dolores Dreier é a única suspeita do
                                brutal assassinato de sua melhor amiga.
                                Cercada pela mídia e encurralada pelas provas, ela deve
                                enfrentar suas próprias dúvidas sobre o que realmente aconteceu.
                            </p>
                        </div>
                        <div className='Botao-reserva'> Reservar</div>
                    </div>
                    <div className='Linha-inferior'>
                        <p>1 2 3 4 5 ...</p><img className='Botao-seta' src='seta.svg'></img>
                    </div>
                </div>
            </div>

        </div>

    )
}