import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {

const n = 15

const [name, setName] = useState("felipee")

const redTitle = true


  return (
    <div className="App">

      {/* CSS global */}
      <h1>React com CSS</h1>
      <h2>teste</h2>


      {/* CSS de componente */}
      <MyComponent />

      <p>este paragrafo e do app.js</p>

      <p style={{ color:'blue', padding:'25px', border: '2px solid red'}}>este elemento foi estilizado com css inline</p>

      {/* CSS inline dinâmico */}
      <h2 style={n > 10 ? ({color:'purple'}) : ({color:'pink'})}>CSS Dinâmico</h2>
      
      <h2 style={name === "felipe" ? ({color:'green'}) : ({color:"red"})}>{name}</h2>

    <button onClick={() => {setName("fulano")}}>Mudar nome</button>

    <p>{name}</p>
    {/* CSS inline dinâmico */}


    {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>este titulo vai ter uma classe dinâmica</h2>
     {/* Classe dinâmica */}


    </div>
  );
}

export default App;
