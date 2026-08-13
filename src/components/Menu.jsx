import React, { useState } from 'react';
import './Menu.css';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-logo">MeuSite</div>
      
      {/* Botão do Menu Hambúrguer */}
      <button className="hamburger-icon" onClick={toggleMenu} aria-label="Abrir menu">
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
      </button>

      {/* Lista de Navegação */}
      <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#home" onClick={toggleMenu}>Início</a>
        <a href="#about" onClick={toggleMenu}>Sobre</a>
        <a href="#services" onClick={toggleMenu}>Serviços</a>
        <a href="#contact" onClick={toggleMenu}>Contato</a>
      </nav>
    </header>
  );
}