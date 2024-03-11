import React, { useState } from 'react'

// const [cor,setCor] = useState = "vermelho"



// const PraticandoEstados = () => {
//   return (
//     <div>
//         <h1>Praticandoestados</h1>

//         <p>{cor}</p>

//         <button onClick={() => 
// setCor("azul")} >mundando cor</button>


//     </div>
//   )
// }

const PraticandoEstados = () => {

let [nome, setNome] = useState("Felipe")

    return(

<div>
<div>Teste Hook2</div>
    <p>Nome : {nome}</p>
    <button onClick={() => setNome("liminha")}>Apelido</button>
</div>
   

    )
    
}

export default PraticandoEstados