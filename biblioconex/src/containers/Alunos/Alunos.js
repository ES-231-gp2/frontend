import './Alunos.css'
import Card from '../../components/Card/Card'

export default function () {
    return (
        <div className='Alunos-contents'>
            <h1 className="titulo-page">ALUNOS DA TURMA</h1>
            <h4>turma selecionada</h4>
            <Card nome='Nome do aluno'></Card>
            <Card nome='Nome do aluno'></Card>
            <Card nome='Nome do aluno'></Card>
            <Card nome='Nome do aluno'></Card>
        </div>
    )
}