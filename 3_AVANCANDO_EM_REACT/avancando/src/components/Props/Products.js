import React from 'react'

const Products = ({nome, type, price}) => {
  return (
    <div>
        <p>Products</p>

    <li>NOME: {nome}</li>
    <li>SEGMENTO: {type}</li>
    <li>PREÇO: {price}</li>
        
    </div>
  )
}

export default Products