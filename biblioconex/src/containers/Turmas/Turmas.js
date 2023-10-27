import React, { useEffect, useState } from 'react';
import './Turmas.css';
import Card from '../../components/Card/Card';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/',
});

export default function Turmas() {
    const [turmas, setTurmas] = useState([]);

    async function getTurmas() {
        try {
            const { data } = await instance.get('api/turmas');
            setTurmas(data);
        } catch (error) {
            console.log('ERROR: GET TURMAS: ', error);
        }
    }

    const handleDelete = (turmaNome) => {
        setTurmas((turmas) => {
            return turmas.filter((turma) => turma.serie !== turmaNome);
        });
    };

    useEffect(() => {
        getTurmas();
    }, []);

    return (
        <div className='Turmas-contents'>
            <h1 className='h1-turmas'>TURMAS</h1>
            {turmas.map((turma) => (
                <Card tipo="turma" key={turma.id} nome={turma.serie} onDelete={handleDelete} />
            ))}
        </div>
    );
}
