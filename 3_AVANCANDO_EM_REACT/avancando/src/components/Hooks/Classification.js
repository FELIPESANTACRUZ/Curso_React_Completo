import React, { useState } from 'react'

const Classification = () => {

    const times = [
        {nome:"man city", ano:1987},
        {nome :"chelsea", ano:1964},
        {nome:"arsenal", ano:2008}
    ]


    const [time, setTime] = useState("Real Madrid") 

  return (
    <div>
        <h1>Estados usando Times</h1>

        <p>{time}</p>

        <button onClick={() => {setTime("Liverpool")}}>Mudar time</button>

        <ul>
        {times.map((t, index) => (
          <li key={index}>
            Nome: {t.nome}, Ano: {t.ano}
          </li>
        ))}
      </ul>

      ----- TIME -----
        {time === "Liverpool" ? (
            <div>
                <p>
                    é o Liverpool
                </p>
            </div>
        ) : (
            <div>
            <p>
                outro time
            </p>
        </div>
        )}
    </div> 
  )
}

export default Classification