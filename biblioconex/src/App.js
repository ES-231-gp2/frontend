import { BrowserRouter, Routes, Route } from 'react-router-dom';

import logo from './imagens/logo.svg';
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
        <div className='Header-inputs'>
          <button className='App-header-entrar'>Entrar</button>
        <input placeholder='Pesquisar por...' className='App-header-barraDePesquisa'></input>
        <img src={lupa} className='App-header-lupa'/>
        </div> 
        
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
        <img src={logo} className="App-footer-logo" alt="logo"></img> 
      </footer>
    </div>
  );
}

export default App;
