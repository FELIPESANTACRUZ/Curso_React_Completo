import React, { useState } from 'react'

const Cores = () => {

    const [cor,setCor] = useState("vermelho")

    const handleCor = () => {
        const novaCor = document.getElementById('mudarCor').value; //pega o valor digitado do input que tem o id='mudarCor'
        setCor(novaCor);
    }

  return (
    <div>
        <h1>Cores</h1>

        <p>Cor : {cor}</p>

        <input type="text" id='mudarCor'/>

        <button onClick={handleCor}>Mudar Cor</button>
    </div>
  )
}

export default Cores