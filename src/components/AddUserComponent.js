import React, { useState } from 'react';
import UserService from '../UserService';
import { useNavigate } from 'react-router-dom';

const AddUserComponent = () => {
  const [user, setUser] = useState({ nome: '', email: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const saveUser = (e) => {
    e.preventDefault();
    UserService.createUser(user).then(() => {
      navigate('/users');
    });
  };

  return (
    <div className="container">
      <h2>Adicionar Usuário</h2>
      <form onSubmit={saveUser}>
        <div className="mb-3">
          <label>Nome:</label>
          <input type="text" className="form-control" name="nome" value={user.nome} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" name="email" value={user.email} onChange={handleChange} required />
        </div>
        <button className="btn btn-success" type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default AddUserComponent;
