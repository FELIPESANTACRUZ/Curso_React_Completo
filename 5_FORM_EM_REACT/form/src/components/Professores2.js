import React from 'react'

const Professores2 = () => {

    const nomes = ["teste1", "teste2","teste3", "teste4"]
  return (
    <div>
        <p>professores2</p>

        <p>
            {nomes.map((nome)=> <p>{nome}</p>)}
        </p>
    </div>
  )
}

export default Professores2