import { Link } from 'react-router-dom'
import './Login.css'

export default function () {
    return (
        
        <div className='Login-contents'>
            <h1>ACESSO À BIBLIOTECA</h1>
            <div className='Form-contents'>
                <input placeholder='E-mail'></input>
                <input placeholder='Senha'></input>
                <div className='botao'>
                    <Link to="/perfil" className='Custom-link-button'>
                        Entrar
                    </Link>
                </div>
            </div>
        </div>

    )
}