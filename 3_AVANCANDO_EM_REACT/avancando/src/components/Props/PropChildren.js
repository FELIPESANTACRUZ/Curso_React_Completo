import React from 'react'

const PropChildren = ({children, myValue}) => {
  return (
    <div>
        <p>
            conteudo vindo da PropChildren filha
            {children}
            <p>o Valor é: {myValue}</p>
        </p> 
    </div>
  )
}

export default PropChildren