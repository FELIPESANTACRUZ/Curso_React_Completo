import React, { useState } from 'react'

const ConditionalRender2 = () => {

    const [marca, setName] = useState("lamborghini")

  return (
    <div>
        ----- Marca -----
        {marca === "ferrari" ? (
            <div>
                <p>
                    Nome do Carro corretamente igual do state 
                </p>
            </div>
        ) : (
            <div>
            <p>
                Nome do Carro não encontrado!
            </p>
        </div>
        )}
        <button onClick={ () => setName("ferrari")}>Mudar Estado</button>
        <button onClick={ () => setName("veiculo desconhecido")}>voltar estado de veiculo desconhecido</button>
    </div>
  )
}

export default ConditionalRender2