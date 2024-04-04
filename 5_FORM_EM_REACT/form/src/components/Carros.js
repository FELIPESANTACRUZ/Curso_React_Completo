import React, { useState } from 'react'

const Carros = () => {

    const [marcas,setMarcas] = useState( ["ferrari", "lamborghini", "maserati"])

    const mudarMarca = () => {
        // Copiando o array original
        const novasMarcas = [...marcas];
        // Mudando o nome da marca na posição 0
        novasMarcas[0] = "Nova Marca";
        // Atualizando o estado com o novo array
        setMarcas(novasMarcas);
    };
  return (
    <div>
        <p>Carros</p>

        

        <p>marcas: {marcas.map((marca, index) => <p key={index}>{marca}</p>)}</p>

        <button onClick={mudarMarca}>Mudar marca</button>

        


    </div>
  )
}

export default Carros