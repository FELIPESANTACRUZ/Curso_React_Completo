import React, { useState } from 'react'

const Empresas = () => {

    const [empresas,setEmpresas] = useState(['empresa1', 'empresa2','empresa3'])

    const handleEmpresa = () => {
        let novaEmpresa = [...empresas]
        novaEmpresa[0] = 'novaEmpresa' 

         setEmpresas(novaEmpresa)
    }

  return (
    <div>
        <h1>Empresas:</h1>

        <p>{empresas.map((empresa, index) => (
            <p key={index}>{empresa}</p>
        ))}</p>

        <button onClick={handleEmpresa}>Mudar empresa</button>


    </div>
  )
}

export default Empresas