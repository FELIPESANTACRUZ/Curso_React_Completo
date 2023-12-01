const Challenge = () => {

const number1 = 10
const number2 = 20

const soma = () =>{
    const Soma = number1 + number2
    console.log(Soma)
}

    return (
        <div>
            <p>Número1 =  {number1}</p>
            <p>Número2 =  {number2}</p>
            <button onClick={soma}>Soma</button>

            <h2>A soma de {number1} + {number2} = {number1 + number2}</h2>

            
        </div>
    )
}

export default Challenge