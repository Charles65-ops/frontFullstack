import React, { useEffect, useState } from 'react';
import UserService from '../../src/services/UserService';
import { Link } from 'react-router-dom';

const UserListComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserService.getUsers().then(res => {
      setUsers(res.data);
    });
  }, []);

  const deleteUser = (id) => {
    UserService.deleteUser(id).then(() => {
      setUsers(users.filter(user => user.id !== id));
    });
  };

  return (
    <div className="container">
      <h2>Lista de Usuários</h2>
      <Link to="/add-user" className="btn btn-primary mb-2">Adicionar Usuário</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.nome}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/update-user/${user.id}`} className="btn btn-warning me-2">Editar</Link>
                <button onClick={() => deleteUser(user.id)} className="btn btn-danger">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListComponent;
