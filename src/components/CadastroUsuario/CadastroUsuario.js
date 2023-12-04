// src/components/CadastroUsuario/CadastroUsuario.js
import React, { useState } from 'react';
import './CadastroUsuario.css';


const CadastroUsuario = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  // Função para lidar com a alteração nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer a chamada para a API de cadastro de usuário
    console.log('Dados do formulário:', formData);
    // Lembre-se de adicionar a lógica para chamar a API aqui
  };

  return (
    <div className="cadastro-usuario">
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Senha:
          <input type="password" name="senha" value={formData.senha} onChange={handleChange} />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroUsuario;
