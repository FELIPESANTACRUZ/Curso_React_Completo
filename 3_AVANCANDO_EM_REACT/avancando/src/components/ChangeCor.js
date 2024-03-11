import React from 'react'

const ChangeCor = ({MudarCor}) => {

    const cor = ["azul","amarelho","verde"]

  return (
    <div>
        <p>ChangeCor</p>
        <button onClick={() => MudarCor(cor[0]) }>cor1</button>
        <button onClick={() => MudarCor(cor[1]) }>cor2</button>
        <button onClick={() => MudarCor(cor[2]) }>cor3</button>
    </div>
  )
}

export default ChangeCor