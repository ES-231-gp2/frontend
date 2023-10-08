import './Orientacoes.css'

function Orientacao1() {
    return (
        <div className='Orientacao-content'>

            <h1>Saiba como reservar um livro ou entrar para a fila de espera</h1>
            <h4>Blog com instruções sobre como fazer a reserva do livro pelo site.</h4>

            <img src='/children-bookshell.png'></img>

            <h4>Blog com instruções sobre como entrar para a fila de reserva de um livro que já está reservado.</h4>
            <h4>Texto descritivo, usando imagens se necessário para ilustrar algum passo a passo.</h4>

        </div>
    )
}

function Orientacao2() {
    return (
        <div className='Orientacao-content'>
            <h1>Saiba como fazer o pedido ou sugerir um livro</h1>
            <h4>Blog com instruções sobre como fazer pedidos ou sugestões de novos livros para o acervo da biblioteca.</h4>
            <img src="/childrens_with_books1.png" />
            <h4>Texto descritivo, usando imagens se necessário para ilustrar algum passo a passo.</h4>

        </div>
    )
}

function Orientacao3() {
    return (
        <div className='Orientacao-content'>
            <h1>Como funciona nossos prazos de entrega e cuidados com o livro</h1>
            <h4>Blog com instruções sobre prazos de entrega e como o aluno pode ser notificado.</h4>
            <img src="./childrens_with_books2.png" />
            <h4>Texto explicativo de como o aluno deve cuidar do livro e dicas de cuidado.</h4>
            <h4>Texto descritivo, usando imagens se necessário para ilustrar algum passo a passo.</h4>

        </div>
    )
}

export {Orientacao1, Orientacao2, Orientacao3};