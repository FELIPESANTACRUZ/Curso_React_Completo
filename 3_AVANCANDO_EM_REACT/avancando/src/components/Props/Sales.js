import React from 'react'

const Sales = (props) => {
  return (
    <div>
        <h2>DADOS DA CONTA</h2> 

        <p>Nome Titular {props.nomeTitular}</p>
        <p>Número da conta: {props.numeroConta}</p>
        <p>Saldo: {props.saldo}</p>

    </div>
  )
}

export default Sales