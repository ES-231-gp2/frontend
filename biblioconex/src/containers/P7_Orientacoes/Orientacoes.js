import './Orientacoes.css';

function Orientacao1() {
    return (
        <div className='Orientacao-content'>
            <h1>Saiba como <span className='detalhe-rosa'>reservar um livro</span> ou entrar para a <span className='detalhe-amarelo'>fila de espera</span></h1>
            <img className='Orientacao-img' src='/children-lendo.png' alt='Duas crianças lendo livros ao lado de uma estante de livros enquanto uma escolhe um para ler' />
            <p className='Orientacao-text'>Neste guia, explicaremos como você pode reservar um livro na nossa biblioteca online. Siga os passos abaixo para garantir que você possa acessar o livro desejado.</p>
            <p className='Orientacao-text'><strong>Passo 1: Acesse a Biblioteca Online</strong><br />
                Abra seu navegador e acesse o site da nossa biblioteca online. Certifique-se de estar logado na sua conta ou crie uma se você ainda não a tiver.</p>
            <p className='Orientacao-text'><strong>Passo 2: Navegue pelo Catálogo</strong><br />
                Explore o catálogo de livros disponíveis. Você pode pesquisar por título, autor, assunto ou palavras-chave para encontrar o livro que deseja reservar.</p>
            <p className='Orientacao-text'><strong>Passo 3: Encontre o Livro Desejado</strong><br />
                Localize o livro que você deseja reservar. Clique no título do livro para obter mais informações sobre ele.</p>
            <p className='Orientacao-text'><strong>Passo 4: Verifique a Disponibilidade</strong><br />
                Verifique se o livro está disponível para reserva. Em nossa plataforma, você verá um botão "Reservar" ou "Entrar na Fila de Espera" ao lado do livro desejado. Se o livro estiver disponível, prossiga com a reserva.</p>
            <p className='Orientacao-text'><strong>Passo 5: Conclua a Reserva</strong><br />
                Após selecionar a opção de reserva, dirija-se à biblioteca para finalizar seu empréstimo.</p>
            <p className='Orientacao-text'>Agora você está pronto para desfrutar da leitura do livro reservado. Lembre-se de cumprir as políticas da biblioteca online em relação à devolução e ao uso responsável dos materiais.</p>
        </div>
    );
}



function Orientacao2() {
    return (
        <div className='Orientacao-content'>
            <h1>Saiba como <span className='detalhe-rosa'>fazer pedidos</span> ou  <span className='detalhe-amarelo'>sugerir um livro</span></h1>
            <img className='Orientacao-img' src="/childrens_with_books1.png" alt="Crianças com livros" />
            <p className='Orientacao-text'>Neste guia, explicaremos como você pode fazer pedidos ou sugerir livros para o acervo da biblioteca. Siga os passos abaixo para compartilhar suas sugestões pessoalmente:</p>
            <p className='Orientacao-text'><strong>Passo 1: Visite a Biblioteca</strong><br />
                Dirija-se pessoalmente à biblioteca da nossa instituição durante o horário de funcionamento.</p>
            <p className='Orientacao-text'><strong>Passo 2: Procure o Balcão de Atendimento</strong><br />
                Ao chegar à biblioteca, vá até o balcão de atendimento, onde nossa equipe estará pronta para ajudá-lo.</p>
            <p className='Orientacao-text'><strong>Passo 3: Compartilhe suas Sugestões</strong><br />
                Fale com um dos bibliotecários e compartilhe suas sugestões de livros. Eles estarão disponíveis para registrar suas recomendações.</p>
            <p className='Orientacao-text'><strong>Passo 4: Receba Confirmação</strong><br />
                Após registrar suas sugestões, você receberá uma confirmação por escrito ou digital, para que possa acompanhar o status das suas sugestões.</p>
            <p className='Orientacao-text'>Agradecemos seu interesse em contribuir para o acervo da biblioteca. Suas sugestões são valiosas para nós.</p>
        </div>
    );
}

function Orientacao3() {
    return (
        <div className='Orientacao-content'>
            <h1>Saiba como funcionam <span className='detalhe-rosa'>nossos prazos de entrega</span> e <span className='detalhe-amarelo'>cuidados com os livros</span></h1>
            <img className='Orientacao-img' src="./childrens_with_books2.png" alt="Crianças com livros" />
            <p className='Orientacao-text'>Neste guia, explicaremos como funcionam os prazos de entrega na biblioteca e como você deve cuidar dos livros que emprestar. Siga os passos abaixo para garantir uma experiência positiva:</p>
            <p className='Orientacao-text'><strong>Passo 1: Confira o Prazo de Entrega</strong><br />
                Após reservar ou retirar um livro na biblioteca, verifique a data de entrega. Certifique-se de devolvê-lo a tempo.</p>
            <p className='Orientacao-text'><strong>Passo 2: Cuidado com os Livros</strong><br />
                Trate os livros com cuidado. Evite rasuras, dobrar páginas ou derramar líquidos sobre eles. Use marcadores de páginas apropriados.</p>
            <p className='Orientacao-text'><strong>Passo 3: Evite Danos</strong><br />
                Mantenha os livros afastados de animais de estimação, alimentos e locais úmidos. Proteja-os de danos acidentais.</p>
            <p className='Orientacao-text'><strong>Passo 4: Devolução Pontual</strong><br />
                Devolva os livros na data especificada. Isso ajuda outros alunos a acessarem o material a tempo.</p>
            <p className='Orientacao-text'><strong>Passo 5: Aprecie a Leitura</strong><br />
                Aproveite a leitura dos livros que você emprestar, mas lembre-se de cuidar deles como se fossem seus.</p>
        </div>
    );
}


export { Orientacao1, Orientacao2, Orientacao3 };
