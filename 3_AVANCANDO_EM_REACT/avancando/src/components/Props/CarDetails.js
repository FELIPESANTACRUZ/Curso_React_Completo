import React from 'react'

const CarDetails = ({brand, color, km}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <li>Marca: {brand}</li>
        <li>Cor: {color}</li>
        <li>KM: {km}</li>
    </div>
  )
}

export default CarDetails