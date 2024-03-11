import React from 'react'

const ClubesDetails = ({nome, pais, idade}) => {
  return (
    <div>
        <p>ClubesDetails</p>

        <ul>
            <li>NOME: {nome === "Arsenal" ? "É O ARSENAL"  : "NÃO É O ARSENAL" + nome }</li>
            <li>PAÍS: {pais}</li>
            <li>IDADE: {idade}</li>
        </ul>
    </div>
  )
}

export default ClubesDetails