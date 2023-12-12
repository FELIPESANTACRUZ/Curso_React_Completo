import { useState } from "react"

const Lista1 = () => {

let [alunos] = useState(["Felipe","Soraya","Teste"])

    return(

        <div>
            <ul>
           {alunos.map((item) => (
            <li>{item}</li>
           ))}
        </ul>
        </div>

    )
}

export default Lista1