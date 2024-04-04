import {React, useState} from "react";

const Alunos = () => {

    let [aluno, setAluno] = useState('felipe')

    const variosAlunos = ["maria","joão","fulano","ciclana"]


return(
    <div>
        <p>Alunos</p>

        <ul>
            {variosAlunos.map((umAluno)=> <li>{umAluno}</li>)}
        </ul>

        <div>
            <p> {aluno}</p>
       

        <button onClick={() => setAluno('mudou')}>Mudar nome</button>   
        </div>
       


    </div>
)

}

export default Alunos