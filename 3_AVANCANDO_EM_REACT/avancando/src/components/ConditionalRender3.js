import { useState } from "react";

const ConditionalRender3  = () => {

    //Com Objeto
const [users, setUser] = useState([
    {name:"Felipe",age:17},
    {name:"Elizabete",age:29}
])

const changeNameAndAge = () => {
    // Copia o array de usuários para evitar a mutação direta do estado
    const updatedUsers = [...users];

    // Modifica o nome e a idade do primeiro usuário
    updatedUsers[0].name = "NovoNome";
    updatedUsers[0].age = 18;

    // Atualiza o estado com o novo array de usuários
    setUser(updatedUsers);
  };


    //Com variável
    // const [users, setUser] = useState("felipe","elizabete")

    return (

        //Com objeto
        <div>
          {users.map(user => (
            <p key={user.name}>{`Name: ${user.name}, Age: ${user.age}`}</p>
          ))}

          <button onClick={() => changeNameAndAge()}>Mudar nome</button>

          <p>{users.map(user => (
            <p key={user.age}>{user.age}</p>

            
            ))}

            {/* teste ternário */}

{users[0].age === 18 ? (
                <div>
                <p>maior de idade</p>
                </div>) : (
                <div>
                <p>menor de idade</p>
                </div>)}
      
            
          </p>

          <p>teste</p>
          
        </div>

        //---------------------//

        //Com variável
        // <div>
        //     <p>{users.map}</p>
        //     <button onClick={ () => setUser("teste")}>Mudar nome e idade</button>
        //     <p>{users}</p>
        // </div>


    )

    
}

export default ConditionalRender3;


    