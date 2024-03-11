import React from 'react'

const ChangeMessageState = ({handleMessage}) => {
    const messages = ["oi","olá","eai","tudo bem?"]
  return (
    <div>
        <p>ChangeMessageState</p>
        <button onClick={() => handleMessage(messages[0])}>1</button>
        <button onClick={() => handleMessage(messages[1])}>2</button>
        <button onClick={() => handleMessage(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMessageState