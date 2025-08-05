import React, { useEffect, useState } from 'react';
import UserService from '../../src/services/UserService';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUserComponent = () => {
  const [user, setUser] = useState({ nome: '', email: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    UserService.getUserById(id).then(res => {
      setUser(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const updateUser = (e) => {
    e.preventDefault();
    UserService.updateUser(id, user).then(() => {
      navigate('/users');
    });
  };

  return (
    <div className="container">
      <h2>Editar Usuário</h2>
      <form onSubmit={updateUser}>
        <div className="mb-3">
          <label>Nome:</label>
          <input type="text" className="form-control" name="nome" value={user.nome} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" name="email" value={user.email} onChange={handleChange} required />
        </div>
        <button className="btn btn-primary" type="submit">Atualizar</button>
      </form>
    </div>
  );
};

export default UpdateUserComponent;