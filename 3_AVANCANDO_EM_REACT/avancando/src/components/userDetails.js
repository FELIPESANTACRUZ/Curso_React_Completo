import React from 'react'

const userDetails = ({nome,idade,profissao}) => {


  return (
    <div>
        <h2>userDetails</h2>

        <p>NOME: {nome}</p>
        <p>IDADE: {idade}</p>
        <p>PROFISSÃO: {profissao}</p>

        {idade >= 18 ? (
                <div>
                <p>pode tirar carta</p>
                </div>) : (
                <div>
                <p>não pode tirar carta</p>
                </div>)}
       

    </div>
  )
}

export default userDetails