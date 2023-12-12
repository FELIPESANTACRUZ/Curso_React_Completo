import { useState } from "react"

const Lista3 = () => {

    let [modelosDeCarro] = useState(["ferarri","lamborguini","Gt3"])

    return(
        <div style={{alignItens: 'left'}}>
            <ul>
                {modelosDeCarro.map((item) =>
                 <li>{item}</li>
                )}
            </ul>
        </div>
    )
}

export default Lista3