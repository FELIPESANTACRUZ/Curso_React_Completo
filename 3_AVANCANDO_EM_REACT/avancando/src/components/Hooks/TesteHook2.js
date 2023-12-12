import { useState } from "react"

const TesteHook2 = () => {

let [nome, setNome] = useState("Felipe")

    return(

<div>
<div>Teste Hook2</div>
    <p>Nome : {nome}</p>
    <button onClick={() => setNome("liminha")}>Apelido</button>
</div>
   

    )
    
}

export default TesteHook2