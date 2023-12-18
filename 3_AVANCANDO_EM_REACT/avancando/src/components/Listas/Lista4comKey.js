import { useState } from "react"

const Lista4comKey = () => {

    const [alunos] = useState(["Felipe","Soraya"])

    const [users] = useState([
        {id:1, nome:"Felipe", age: 17},
        {id:2, nome:"Soraya", age: 28}
    ])


    return(
        <div>
            <ul>
                {alunos.map((item, i) => 
                <li key={i}>
                    {item}
                </li>)}
            </ul>
            <ul>
                {users.map((user) => (
                <li key={user.id}>
                    {user.nome} - {user.age}
                </li>
                ))}
            </ul>
        </div>
      
    )
}

export default Lista4comKey