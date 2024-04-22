import React, { useState } from 'react'

const Translate = () => {

    const [palavras, setPalavras] = useState(['this','forget'])

    const handlePalavra = () => {
        const novasPalavras = [...palavras]
        novasPalavras[0] = 'teste'

        setPalavras(novasPalavras)
    }

    
    
  return (
    <div>
        <h1>Translate</h1>

        <p>{palavras.map((plvr,index ) => (<p key={index}>{plvr} </p>))}</p>

        <button onClick={handlePalavra}>Mudar Nome</button>
    </div>
  )
}

export default Translate