import React, { useState } from 'react';
import './Turmas.css';
import Card from '../../components/Card/Card';

export default function Turmas() {
    const [turmas, setTurmas] = useState([
        { id: 1, nome: 'Turma 1' },
        { id: 2, nome: 'Turma 2' },
        { id: 3, nome: 'Turma 3' },
    ]);

    const handleDelete = (turmaNome) => {
        setTurmas((turmas) => {
            return turmas.filter((turma) => turma.nome !== turmaNome);
        });
    };

    return (
        <div className='Turmas-contents'>
            <h1 className='h1-turmas'>TURMAS</h1>
            {turmas.map((turma) => (
                <Card key={turma.id} nome={turma.nome} onDelete={handleDelete} />
            ))}
        </div>
    );
}
