import { useState } from "react"

const TesteHook4 = () => {


    const [idade, setIdade] = useState(10)

    return(
        <div>
            <p>TESTE4</p>

           

            <p> IDADE : {idade} </p>

            <button onClick={() => setIdade(20)}>Mudar Idade</button>

        </div>
    )
}

export default TesteHook4