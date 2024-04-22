import React, { useState } from "react";

const MyForm = ({ user }) => {
  // Gerenciamento de estado para os campos do formulário
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [bio, setBio] = useState(user ? user.bio : '');

  // Função para lidar com a mudança no campo de nome
  const handleName = (e) => {
    setName(e.target.value);
  }

  const [role,setRole] = useState(user ? user.role : '')

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Enviando o formulário');
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Bio:', bio);
    console.log('Role:', role);

    // Limpar os campos do formulário após o envio
    setName('');
    setEmail('');
    setBio('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          onChange={handleName}
          value={name}
        />
        <p>Nome: {name}</p>
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <p>Email: {email}</p>
      </div>

      <div>
        <label htmlFor="bio">Bio</label>
        <textarea
          name="bio"
          placeholder="Descrição do usuário"
          onChange={(e) => setBio(e.target.value)}
          value={bio}
        />
      </div>

      {/* 9 - selected */}
      <label>
        <span>Função no sistema</span>
        <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
          <option value="user">Usuário</option>
          <option value="editor">Editor</option>
          <option value="admin">Administrador</option>
        </select>
      </label>

      <input type="submit" value="Enviar" />
    </form>
  );
};

export default MyForm;
