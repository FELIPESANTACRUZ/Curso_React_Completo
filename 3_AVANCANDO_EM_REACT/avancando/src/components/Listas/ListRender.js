import React from 'react'
import { useState } from 'react'

const ListRender = () => {

    const [list] = useState(["Matheus","Ana","Soraya"])
  return (
    <div>
        <ul>
           {list.map((item) => (
            <li>{item}</li>
           ))}
        </ul>
    </div>
  )
}

export default ListRender