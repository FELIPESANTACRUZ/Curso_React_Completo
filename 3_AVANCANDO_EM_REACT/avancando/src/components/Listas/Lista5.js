import React, { useState } from 'react'

const Lista5 = () => {

const [passageiros] = useState([
    {id: 1, nome: "felipe", idade: 12},
    {id:2, nome: "jaqueline", idade: 22}
])

  return (
    <div>
        <ul>
             {passageiros.map((passageiro) => (
            <li key={passageiro.id}>
                {passageiro.nome} - {passageiro.idade}
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Lista5