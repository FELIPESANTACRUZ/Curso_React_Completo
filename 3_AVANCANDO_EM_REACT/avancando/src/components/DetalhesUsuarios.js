import React from 'react'

const DetalhesUsuarios = (nome,idade,profissao) => {

const renderConditional = () => {
    if (idade >= 18){
        <p> Poe tirar carta</p>
    }else {
        <p>Não pode tirar carta</p>
    }
}

  return (
    <div>
        <h2>DetalhesUsuarios</h2> 

        <p>NOME: {nome}</p>
        <p>IDADE: {idade}</p>
        <p>PROFISSÃO: {profissao}</p>
        
        <p>{renderConditional()}</p>

    </div>
  )
}

export default DetalhesUsuarios