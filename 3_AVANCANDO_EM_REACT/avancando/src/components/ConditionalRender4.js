import { useState } from "react"

const ConditionalRender4 = () => {


    const [empresas, setEmpresas] = useState([
        {id: 123 , name: "Cielo", segment:"financeiro"},
        {id: 4231, name: "Funcional Health Tech", segment:"Farmaco"}
    ])

    const mudarIdEmpresa = () => {

        const updateEmpresas = [...empresas]

        updateEmpresas[1].id = 574
        updateEmpresas[1].name = "Outra empresa"
        

        setEmpresas(updateEmpresas)
    }


    return (
        <div>
           {empresas.map(empresa => (
            <p key={empresa.id}>
            {empresa.name}
            </p> 
           ))}

           <button onClick={() => mudarIdEmpresa()}>Mudar nome de Empresa</button>

           {empresas.map(empresa => (
            <p key={empresa.id}>
            {empresa.id}
            {empresa.name}
            </p> 
           ))}
            
           {empresas[1].id === 4231 ?  (
            <div>
                <p>comparação de do ternário de empresa deu verdadeiro</p>
            </div>) : (
                <div>
                    <p>comparação de do ternário de empresa deu falso</p>
                </div>
            )}

        </div>

    )
}

export default ConditionalRender4