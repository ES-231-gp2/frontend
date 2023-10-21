import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './imagens/logo.svg';
import lupa from './imagens/lupa.svg';
import './App.css';
import './App-header.css';

import Home from './containers/P1_Home/Home';
import Login from './containers/P2_Login/Login';
import Bibliotecario from './containers/Perfis/Bibliotecario';
import Aluno from './containers/Perfis/Aluno';
import Catalogo from './containers/Catalogo/Catalogo';
import Livros_Aluno from './containers/Livros_Aluno/livros_aluno';
import Cadastro from './containers/Cadastro/Cadastro';
import { Orientacao1, Orientacao2, Orientacao3 } from './containers/P7_Orientacoes/Orientacoes';
import Turmas from './containers/Turmas/Turmas';
import Alunos from './containers/Alunos/Alunos';
import Professor from './containers/Perfis/Professor';
import Destaques from './containers/Destaques/Destaques';
import "./Mock.js"

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  // Função para rolar para o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Rolagem suave
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-header-logo" alt="logo" />
          </Link>
          <div className="Header-inputs">
            <div className="App-header-entrar">
              <Link to="/login" className="Custom-link-button">
                Entrar
              </Link>
            </div>
            <input placeholder="Pesquisar por..." className="App-header-barraDePesquisa" />
            <img src={lupa} className="App-header-lupa" alt="Lupa" />
          </div>
        </header>

        <div className="Pages_Container">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/perfil" element={<Bibliotecario />} />
              <Route path="/aluno" element={<Aluno />} />
              <Route path="/turmas" element={<Turmas />} />
              <Route path="/alunos" element={<Alunos />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/livros_aluno" element={<Livros_Aluno />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/professor" element={<Professor />} />
              <Route path="/Orientacao1" element={<Orientacao1 />} />
              <Route path="/Orientacao2" element={<Orientacao2 />} />
              <Route path="/Orientacao3" element={<Orientacao3 />} />
              <Route path="/livros_por_aluno" element={<Livros_Aluno />} />
              <Route path="/destaques" element={<Destaques />} />
            </Route>
          </Routes>
        </div>

        {showScrollButton && (
          <button class="scrollToTopButton" onClick={scrollToTop}><img src="ScrollTop.svg"/></button>
        )}

      </BrowserRouter>
    </div>
  );
}

export default App;
