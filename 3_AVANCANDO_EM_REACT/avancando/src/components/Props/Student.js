import React from 'react'

const Student = ({matricula, nome, curso}) => { //o destructuring precisa ser na mesma ordem em que esta setado as propriedades no componente
  return (
    <div>
        <h2>
             Studentds:
        </h2>

        <ul>
           <li>{matricula}</li>
        </ul>

        <ul>
           <li>{nome}</li>
        </ul>


        <ul>
           <li>{curso}</li>
        </ul>
       


    </div>
  )
}

export default Student