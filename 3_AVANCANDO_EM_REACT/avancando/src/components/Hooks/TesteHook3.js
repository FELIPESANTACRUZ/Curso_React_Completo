import { useState } from "react"

const TesteHook3 = () => {

    const [modeloCarro, setModelo] = useState('Fluence')


    return(
        <div>

        <p>Modelo Carro : {modeloCarro}</p>

        <button onClick={() => setModelo('Ferrari')}>Mudar Modelo de Carro</button>


        </div>
    )

}

export default TesteHook3