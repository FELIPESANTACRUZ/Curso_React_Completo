import React from 'react'
import { useState } from 'react'


const TesteHook = () => {

    const [numero, setNumber] = useState(20);

  return (
    <div>
        <p>Valor do número : {numero}</p>
        <button onClick={() => setNumber(0)}>Mudar Estado</button>
    </div>
    
  )
}

export default TesteHook