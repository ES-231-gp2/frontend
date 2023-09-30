import { BrowserRouter, Routes, Route } from 'react-router-dom';

import logo from './imagens/logo.svg';
import logoCinza from './imagens/logo-cinza.svg'
import lupa from './imagens/lupa.svg';
import './App.css';
import './App-header.css';
import './App-footer.css'

import Home from './containers/P1_Home/Home';
import Login from './containers/P2_Login/Login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-header-logo" alt="logo"></img> 
        <h1 className="App-header-title">Biblio Conex</h1>
        <button className='App-header-entrar'>Entrar</button>
        <input placeholder='Pesquisar por...' className='App-header-barraDePesquisa'></input>
        <img src={lupa} className='App-header-lupa'/>
      </header>

      <div class="Pages_Container">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />}/>
              <Route path="Login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>

      <footer className="App-footer">
        <img src={logoCinza} className="App-footer-logo" alt="logo"></img> 
        <h1 className="App-footer-title">Biblio Conex</h1>
      </footer>
    </div>
  );
}

export default App;
