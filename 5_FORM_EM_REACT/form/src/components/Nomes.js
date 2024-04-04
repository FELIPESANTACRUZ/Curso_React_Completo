import React, { useState } from 'react'

const Nomes = () => {

    const [nomes,setNomes] = useState(["nome1","nome2","nome3","nome4"])

    const mudarNomes = () => {
        const novoNome = [...nomes]

         novoNome[0] = "novo nome"

         setNomes(novoNome)
    }
  return (
    <div>
        <h1>Nomes</h1>

        <p>Nomes: {nomes.map((nome, index) => <p key={index}>{nome}</p>)}</p>

        <button onClick={mudarNomes}>Mudar Nome</button>
    </div>
  )
}

export default Nomes