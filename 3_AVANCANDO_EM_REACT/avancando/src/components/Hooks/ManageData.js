import React from 'react'
import { useState } from 'react';

const ManageData = () => {
    let someData = 10;

    //vendo sem alteração do state
    console.log(someData)

    const [number, setNumber] = useState(15)

    //vendo com alteração do state
    console.log(number)
  return (
    <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData)}>Mudar variável</button>
        <p>Valor de Number : {number}</p>
        <button onClick={() => setNumber(25)}>Mudar o State</button>
    </div>
  )
}

export default ManageData