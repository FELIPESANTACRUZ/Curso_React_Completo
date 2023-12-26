import  React, { useState } from 'react'

const ConditionalRender = () => {

const [x] = useState(true)

const  [name] = useState("João")

  return (
    <div>
    Isso será exibido?
    {x && <p>Se for true, sim!</p>}
    {name === "João" ? (
    <div>
        <p>O nome é joão</p>
    </div>
    ):(
        <div>
        <p>Nome não encontrado!</p>
    </div>
    )}
    </div>
  )
}

export default ConditionalRender