import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import logo from './imagens/logo.svg';
import lupa from './imagens/lupa.svg';
import './App.css';
import './App-header.css';
import './App-footer.css'

import Home from './containers/P1_Home/Home';
import Login from './containers/P2_Login/Login'
import Bibliotecario from './containers/Perfis/Bibliotecario';
import Aluno from './containers/Perfis/Aluno'
import Catalogo from './containers/Catalogo/Catalogo';
import Cadastro from './containers/Cadastro/Cadastro';
import {Orientacao1, Orientacao2, Orientacao3} from './containers/P7_Orientacoes/Orientacoes'


function App() {
  return (
    <div className="App">
      <BrowserRouter> {/* Mova o BrowserRouter para envolver toda a aplicação */}
        <header className="App-header">
          <Link to="/"> {/* Adicione o Link aqui */}
            <img src={logo} className="App-header-logo" alt="logo" />
          </Link>
          <div className='Header-inputs'>
            <div className='App-header-entrar'>
              <Link to="/login" className='Custom-link-button'>
                Entrar
              </Link>
            </div>
            <input placeholder='Pesquisar por...' className='App-header-barraDePesquisa'></input>
            <img src={lupa} className='App-header-lupa' />
          </div>
        </header>

        <div className="Pages_Container">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/perfil" element={<Bibliotecario />} />
              <Route path="/perfilAluno" element={<Aluno />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/Orientacao1" element={<Orientacao1 />} />
              <Route path="/Orientacao2" element={<Orientacao2 />} />
              <Route path="/Orientacao3" element={<Orientacao3 />} />
            </Route>
          </Routes>
        </div>

        <footer className="App-footer">
          <img src={logo} className="App-footer-logo" alt="logo"></img>
        </footer>
      </BrowserRouter> {/* Feche o BrowserRouter aqui */}
    </div>
  );
}

export default App;
