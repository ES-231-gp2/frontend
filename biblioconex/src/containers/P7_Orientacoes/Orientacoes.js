import './Orientacoes.css'

function Orientacao1() {
    return (
        <div className='Orientacao-content'>

            <h1>Saiba como <span className='detalhe-rosa'>reservar um livro</span> ou entrar para a <span className='detalhe-amarelo'>fila de espera</span></h1>
            <p className='Orientacao-text'>Blog com instruções sobre como fazer a reserva do livro pelo site. Blog com instruções sobre como fazer a reserva do livro pelo site.</p>

            <img className='Orientacao-img' src='/children-lendo.png' alt='Duas crianças lendo livros ao lado de uma estante de livros enquanto uma escolhe um para ler'></img>

            <p className='Orientacao-text'>Blog com instruções sobre como entrar para a fila de reserva de um livro que já está reservado. Blog com instruções sobre como entrar para a fila de reserva de um livro que já está reservado.</p>
            <p className='Orientacao-text'>Texto descritivo, usando imagens se necessário para ilustrar algum passo a passo. Texto descritivo, usando imagens se necessário para ilustrar algum passo a passo.</p>
 
        </div>
    )
}

function Orientacao2() {
    return (
        <div className='Orientacao-content'>
            <h1>Saiba como fazer o pedido ou sugerir um livro</h1>
            <p className='Orientacao-text'>Blog com instruções sobre como fazer pedidos ou sugestões de novos livros para o acervo da biblioteca.</p>
            <img className='Orientacao-img' src="/childrens_with_books1.png" />
            <p className='Orientacao-text'>Texto descritivo, usando imagens se necessário para ilustrar algum passo a passo.</p>

        </div>
    )
}

function Orientacao3() {
    return (
        <div className='Orientacao-content'>
            <h1>Como funciona nossos prazos de entrega e cuidados com o livro</h1>
            <p className='Orientacao-text'>Blog com instruções sobre prazos de entrega e como o aluno pode ser notificado.</p>
            <img className='Orientacao-img' src="./childrens_with_books2.png" />
            <p className='Orientacao-text'>Texto explicativo de como o aluno deve cuidar do livro e dicas de cuidado. Texto explicativo de como o aluno deve cuidar do livro e dicas de cuidado. Texto explicativo de como o aluno deve cuidar do livro e dicas de cuidado.</p>
            <p className='Orientacao-text'>Texto descritivo, usando imagens se necessário para ilustrar algum passo a passo.</p>

        </div>
    )
}

export {Orientacao1, Orientacao2, Orientacao3};