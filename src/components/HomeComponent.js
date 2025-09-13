import React from 'react';
import { Link } from 'react-router-dom';
import './HomeComponent.css';

const HomeComponent = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <header className="home-header">
          <h1> Gerenciamento de Produtos e Usuários. </h1>
        </header>

        <main className="home-menu">
          <Link to="/products" className="home-button">📦 Gerenciar Produtos</Link>
          <Link to="/add-product" className="home-button">➕ Adicionar Produto</Link>
          <Link to="/users" className="home-button">👤 Gerenciar Usuários</Link>
          <Link to="/add-user" className="home-button">➕ Adicionar Usuário</Link>
        </main>

        <footer className="home-footer">
          <p>© 2025 MoviTech</p>
        </footer>
      </div>
    </div>
  );
};

export default HomeComponent;
