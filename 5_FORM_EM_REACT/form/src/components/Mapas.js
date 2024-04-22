import React, { useState } from 'react'

const Mapas = () => {

const [mapas,setMapas] = useState(['purgatório', 'bermuda', 'nova terra','kalahari'])

const handleMapa = () => {
    let novoMapa = [...mapas]
    novoMapa[0] = 'novo mapa'

    setMapas(novoMapa)

}




  return (
    <div>
       <h1>Mapas free fire:</h1>

       <p>{mapas.map((mapa, index) => (<p key={index}>{mapa}</p>))}</p>

        <button onClick={handleMapa}>Mudar mapa</button>

    </div>
  )
}

export default Mapas