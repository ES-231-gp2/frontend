import { useEffect, useState } from "react";
import axios from "axios";
import "./aluno.css";

const instance = axios.create({
  baseURL: process.env.REACT_APP_ENV
})

function Aluno() {

    const [historico_request, setHistorico] = useState({});
    const [resenha_request, setResenha] = useState({});
    const [textoTurma, setTextoTurma] = useState({});
    const [isEditing, setEditing] = useState(false);
    const [name, setName] = useState('Fulano da Silva');
    const [classInfo, setClassInfo] = useState('7° ano B');
    const [shift, setShift] = useState('Tarde');

  
    const handleEditClick = () => {
      setEditing(true);
    };
  
    const handleSaveClick = () => {
      setEditing(false);
      // Você pode adicionar aqui a lógica para salvar as informações em algum lugar, como em um banco de dados.
    };

    useEffect(() => {
      getTextoTurma(setTextoTurma);
      getHistorico(setHistorico);
      getResenha(setResenha);
    }, []);

    return (
        <div className='Aluno-contents'>
            <h1 className='titulo'>{isEditing ? 'EDITAR PERFIL' : 'MEU PERFIL'}</h1>
      <div className='info'>
        {isEditing ? (
          <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" value={classInfo} onChange={(e) => setClassInfo(e.target.value)} />
            <input type="text" value={shift} onChange={(e) => setShift(e.target.value)} />
          </>
        ) : (
          <>
            <p>Nome completo: {name}</p>
            <p>Série/ano e turma: {classInfo}</p>
            <p>Turno: {shift}</p>
          </>
        )}
      </div>

      {isEditing ? (
        <div className="botao-perfil-aluno" style={{ alignSelf: "center", marginBottom: '50px' }} onClick={handleSaveClick}>Salvar</div>
      ) : (
        <div className="botao-perfil-aluno" style={{ alignSelf: "center", marginBottom: '50px' }} onClick={handleEditClick}>Alterar dados</div>
      )}
            
                
            <h2 className='titulo-secao-aluno'>TEXTO DA TURMA</h2>
            {formataTextoTurma(textoTurma)}

            <h2 className='titulo-secao-aluno'>HISTÓRICO</h2>
            {formataHistorico(historico_request)}
            

            <h2 className='titulo-secao-aluno'>FILA DE ESPERA</h2>
            <div className='Contents-perfis'>
                <div class='info-livro'>
                    <h4 >Título 1</h4>
                    <p >status: Reservado</p>
                    <p >Previsão de entrega: 22/06/2023</p>
                </div>

                <div className='Linha-inferior'>
                    <p>1 2 3 4 5 ...</p><img className='Botao-seta' src='seta.svg'></img>
                </div>
                {/* falta o sistema de páginas */}
            </div>
                
            <h2 className='titulo-secao-aluno'>RESENHAS</h2>
            {formataResenhas(resenha_request)}

            
        </div>
    );
}

function formataHistorico(historico_request) {
  return (
    <div className='Contents-perfis'>           
      {Object.values(historico_request).map((historico_item) => (
      <div class='info-livro'>
          <h4 >{historico_item.titulo}</h4>
          <p >Data da reserva: {historico_item.dataReserva}</p>
          <p >Data da entrega: {historico_item.dataEntrega}</p>
          <p >Status: {historico_item.status}</p>
      </div>
      ))}
      <div className='Linha-inferior'>
        <p>1 2 3 4 5 ...</p><img className='Botao-seta' src='seta.svg'></img>
      </div>
  </div>
  );
  

}

function formataResenhas(resenha_request) {
  
  return (
    <div className='Contents-perfis'>  
      {Object.values(resenha_request).map((resenha_item) => (
      
        <div class='info-livro'>
            <h4 >{resenha_item.livro.titulo}</h4>
            <p >{resenha_item.conteudo}</p>
        </div>

      ))}
      <div className='Linha-inferior'>
        <p>1 2 3 4 5 ...</p><img className='Botao-seta' src='seta.svg'></img>
      </div>
  </div>
  )
}

function formataTextoTurma(textoTurma) {
  return (
    <div className='Contents-perfis'>
      <div class='info-livro'>
          <h4>{textoTurma != undefined && textoTurma.nome}</h4>
          <p>{textoTurma != undefined && textoTurma.resumo}</p>
          <p>{textoTurma != undefined && "disponível"} </p> {/*"Arruamr isso aqui"*/}
      </div>
  </div>

  )
}

function getHistorico(setHistorico) {
  instance.get("./exemplares/historico/" + localStorage.getItem("idUsuario")).then((response) => {
      setHistorico(response.data);
  }).catch((error) => {
      console.log("ERRO GET HISTORICO: ", error);
  });
}

function getResenha(setResenha) {
  instance.get("./resenhas/aluno/" + localStorage.getItem("idUsuario")).then((response) => {
      setResenha(response.data);
  }).catch((error) => {
      console.log("ERRO GET RESENHAS: ", error);
  });
}

function getTextoTurma(setTextoTurma) {
  instance.get("./turmas/" + localStorage.getItem("idUsuario") + "/alunos").then((response) => {
      setTextoTurma(response.data.texto);
      console.log(response.data.texto);
  }).catch((error) => {
      console.log("ERRO GET TEXTO TURMA: ", error);
  });
}

export default Aluno;