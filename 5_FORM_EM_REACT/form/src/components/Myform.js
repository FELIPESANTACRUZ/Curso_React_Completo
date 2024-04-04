import React, { useState } from "react";

const MyForm = () => {
  //3 - gerenciamento de dados
const [name, setName] = useState()
const [email, setEmail] = useState()

const handleName = (e) => {
  setName(e.target.value)
}

console.log(name)

  // const [nome, setNome] = useState("felipe");
  // const [valorDigitado, setValorDigitado] = useState("");

  // const handleNomeChange = (event) => {
  //   setValorDigitado(event.target.value); // Atualiza o valor digitado
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setNome(valorDigitado); // Atualiza o estado do nome com o valor digitado
  // };

  return (
    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <label htmlFor="name">Nome</label>
    //     <input
    //       type="text"
    //       name="name"
    //       placeholder="Digite seu nome"
    //       value={valorDigitado}
    //       onChange={handleNomeChange}
    //     />
    //   </div>

    //   {/* label envolvendo o input */}
    //   <label>
    //     <span>Email</span>
    //     <input type="email" name="email" placeholder="digite seu email" />
    //   </label>

    //   <input type="submit" value="enviar" />
    //   <p>NOME: {nome}</p>
    // </form>

    //<form onSubmit={handleSubmit}>
      <form >
    <div>
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        name="name"
        placeholder="Digite seu nome"
        //value={valorDigitado}
        //onChange={handleNomeChange}
        onChange={handleName}
      />
      <p>Nome:{name}</p>
      <p> Email:{email}</p>
      
     
    </div>

    {/* label envolvendo o input */}
    <label>
      <span>Email</span>
      <input type="email" name="email" placeholder="digite seu email" />
    </label>

    <input type="submit" value="enviar" />
    {/* <p>NOME: {nome}</p> */}
  </form>
  );
};

export default MyForm;
