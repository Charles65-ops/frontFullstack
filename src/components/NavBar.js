import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importe o CSS para a Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">MoviTech System</Link> {/* Adicionado um "brand" para o título */}
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/products" className="navbar-button">📦 Produtos</Link>
        </li>
        <li>
          <Link to="/add-product" className="navbar-button">➕ Add Produto</Link>
        </li>
        <li>
          <Link to="/users" className="navbar-button">👤 Usuários</Link>
        </li>
        <li>
          <Link to="/add-user" className="navbar-button">➕ Add Usuário</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;