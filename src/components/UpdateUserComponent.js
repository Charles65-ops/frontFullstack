import React, { useEffect, useState } from 'react';
import UserService from '../../src/services/UserService';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUserComponent = () => {
  const { id } = useParams();
  const userId = Number(id); // garante número
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await UserService.getUserById(userId);
        const user = res.data;
        setNome(user?.nome ?? '');
        setEmail(user?.email ?? '');
      } catch (err) {
        console.error('Falha ao carregar usuário:', err);
        setError('Não foi possível carregar os dados do usuário.');
      }
    })();
  }, [userId]);

  const updateUser = async (e) => {
    e.preventDefault();
    setError('');
    setSaving(true);

    try {
      const payload = {
        // ATENÇÃO: use os nomes que o backend espera.
        // Se o backend espera 'name', troque 'nome' por 'name'.
        nome: nome.trim(),
        email: email.trim(),
      };

      console.log('Enviando update:', { id: userId, payload });

      const res = await UserService.updateUser(userId, payload);
      console.log('Resposta da API:', res.status, res.data);

      navigate('/users'); // só navega se deu certo
    } catch (err) {
      console.error('Erro ao atualizar:', err?.response?.status, err?.response?.data || err.message);
      const msg =
        err?.response?.data?.message ||
        err?.response?.data?.erro ||
        'Falha ao atualizar. Verifique os dados e tente novamente.';
      setError(msg);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container">
      <h2>Editar Usuário</h2>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <form onSubmit={updateUser}>
        <div className="mb-3">
          <label>Nome:</label>
          <input
            type="text"
            className="form-control"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary" type="submit" disabled={saving}>
          {saving ? 'Salvando...' : 'Atualizar'}
        </button>
      </form>
    </div>
  );
};

export default UpdateUserComponent;
