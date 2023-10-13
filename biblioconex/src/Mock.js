import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);


const livros_request = {
    "Magalice no país das melancias": {
        "titulo": "Magalice no país das melancias",
        "imgSrc": "/Capa _Magalice.png",
        "imgAlt": "Descrição da imagem",
        "sinopse": "Texto da sinopse do livro..."
    },
    "Título 2": {
        "titulo": "Tutorial de React",
        "imgSrc": "/logo192.svg",
        "imgAlt": "Descrição da imagem",
        "sinopse": "Como programar em React..."
    },
}

const historico_request = {
    "Título 1": {
        "titulo":"Título 1",
        "dataReserva":"10/05/2023",
        "dataEntrega":"25/05/2023",
        "status":"Entregue"
    },
    "Título 2": {
        "titulo":"Título 2",
        "dataReserva":"5/05/2023",
        "dataEntrega":"12/05/2023",
        "status":"Entregue"
    }
}

mock.onGet('https://www.biblioconex.com/historico_aluno?id=123').reply(200, historico_request);
mock.onGet('https://www.biblioconex.com/livros_aluno?id=123').reply(200, livros_request);