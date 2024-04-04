import React from "react";

const Professores = () => {

    const nomes = ["fulano","ciclano","beltrana"]

  return (
    <div>
      <p>Professores</p>

      <p>
        {nomes.map((nome)=> <p>{nome}</p>)}
      </p>
    </div>
  );
};

export default Professores;
