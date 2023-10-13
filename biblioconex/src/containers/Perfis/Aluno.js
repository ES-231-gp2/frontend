import { useEffect, useState } from "react";
import axios from "axios";
import "./aluno.css";

function Aluno() {

    const [historico_request, setHistorico] = useState({});
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
        axios.get('https://www.biblioconex.com/historico_aluno?id=123')
        .then(response => {
          setHistorico(response.data);
        })
        .catch(error => {
          console.log(error);
        });
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
        <div className='botao' style={{ alignSelf: "center", background: "#FFC107", marginBottom: '50px' }} onClick={handleSaveClick}>Salvar</div>
      ) : (
        <div className='botao' style={{ alignSelf: "center", background: "#FFC107", marginBottom: '50px' }} onClick={handleEditClick}>Alterar dados</div>
      )}
            
                
            <h2 className='titulo-secao-aluno'>TEXTO DA TURMA</h2>
            <div className='Contents-perfis'>
                <div class='info-livro'>
                    <h4>Título </h4>
                    <p>resumo do texto e onde tá </p>
                    <p>disponível </p>
                </div>
            </div>

            <h2 className='titulo-secao-aluno'>HISTÓRICO</h2>
            <div className='Contents-perfis'>
                {Object.values(historico_request).map((historico_item) => (
                    <div class='info-livro'>
                        <h4 >{historico_item.titulo}</h4>
                        <p >Data da reserva: {historico_item.dataReserva}</p>
                        <p >Data da entrega: {historico_item.dataEntrega}</p>
                        <p >Status: {historico_item.status}</p>
                    </div>
                ))
                }

                <div className='Linha-inferior'>
                    <p>1 2 3 4 5 ...</p><img className='Botao-seta' src='seta.svg'></img>
                </div>

                    {/* falta o sistema de páginas */}
            </div>

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
            <div className='Contents-perfis'>
                <div class='info-livro'>
                    <h4 >Título 1</h4>
                    <p >"comentário escrito pelo aluno do que achou/aprendeu/refletiu sobre a obra"</p>
                </div>

                <div className='Linha-inferior'>
                    <p>1 2 3 4 5 ...</p><img className='Botao-seta' src='seta.svg'></img>
                </div>
                {/* falta o sistema de páginas */}
            </div>

            
        </div>
    );
}

export default Aluno;