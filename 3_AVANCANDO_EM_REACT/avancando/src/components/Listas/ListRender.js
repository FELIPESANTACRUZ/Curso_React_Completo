import React from 'react'
import { useState } from 'react'

const ListRender = () => {

    const [users, setUsers] = useState([
      {id:1, nome:"Felipe", idade:19},
      {id:2, nome:"Jaqueline", idade:22},
      {id:3, nome:"lizabete", idade:26},
    ])

    const deleteRandom = () =>{
      const randomNumber = Math.floor(Math.random() * 4)

      setUsers((prevUsers) => {
        console.log(prevUsers)
        return prevUsers.filter((user) => randomNumber !== user.id)
      })
    }

  return (
    <div>
        <ul>
         {users.map((user) => (
          <li key={user.id}>
            {user.nome - user.idade}
          </li>
         ))}
        </ul>
        <button onclick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender