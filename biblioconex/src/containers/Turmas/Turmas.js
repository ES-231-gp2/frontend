import './Turmas.css'
import Card from '../../components/Card/Card'

// TODO: fazer algum aviso de certificação de exclusão de turma
export default function () {
    return (
        <div className='Turmas-contents'>
            <h1>TURMAS</h1>
            <Card nome='Turma 1'></Card>
            <Card nome='Turma 2'></Card>
            <Card nome='Turma 3'></Card>
        </div>
    )
}