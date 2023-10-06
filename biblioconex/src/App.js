import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import logo from './imagens/logo.svg';
import lupa from './imagens/lupa.svg';
import './App.css';
import './App-header.css';
import './App-footer.css'

import Home from './containers/P1_Home/Home';
import Login from './containers/P2_Login/Login'
import Bibliotecario from './containers/Perfis/Bibliotecario';
import Catalogo from './containers/Catalogo/Catalogo';

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
              <Route path="/catalogo" element={<Catalogo />} />
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
