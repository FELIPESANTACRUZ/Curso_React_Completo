import React, { useState } from 'react'

const Livros = () => {

const [livro,setLivro]= useState('livro1')

const handleLivro = () => {

    let newLivro = document.getElementById('livro').value
    setLivro(newLivro)
}

  return (
    <div style={{padding: '15px'}}>
        <h1>Livros</h1>

        <p>Livro: {livro}</p>

        <input type="text" placeholder='Digite o nome do livro' id='livro'/>

        <button onClick={handleLivro}>Mudar Livro</button>

       
    </div>
  )
}

export default Livros