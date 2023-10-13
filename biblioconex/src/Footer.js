import React from 'react';
import "./App-footer.css"
import logo from './imagens/logo.svg';

function Footer() {
  return (
    <footer className="App-footer">
        <img src={logo} className="App-footer-logo" alt="logo"></img>
    </footer>
  );
}

export default Footer;
