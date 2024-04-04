import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';
import Alunos from './components/Alunos';

function App() {
  const [name, setName] = useState("felipee");
  const [linha, setLinha] = useState(0);
  const [curso, setCurso] = useState('');

  const redTitle = true;

  const alunos = [
    { nome: "felipe", idade: 22, curso: 't.i' },
    { nome: "fulana", idade: 26, curso: 'administração' },
    { nome: "ana", idade: 32, curso: 'fisioterapia' }
  ];

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <h2>teste</h2>

      <MyComponent />

      <p>Este parágrafo é do app.js</p>

      <p style={{ color: 'blue', padding: '25px', border: '2px solid red' }}>
        Este elemento foi estilizado com CSS inline
      </p>
{/* 
      <h2 style={n > 10 ? { color: 'purple' } : { color: 'pink' }}>
        CSS Dinâmico
      </h2> */}

      <h2 style={name === "felipe" ? { color: 'green' } : { color: "red" }}>
        {name}
      </h2>

      <button onClick={() => { setName("fulano") }}>Mudar nome</button>

      <p>{name}</p>

      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter uma classe dinâmica
      </h2>

      <p>{linha}</p>

      <button onClick={() => { setLinha(1) }}>Mudar Linha</button>

      <Title />
      <h2 className='my-title'>Testando</h2>

      {alunos.map((aln) => (
        <Alunos key={aln.nome} aln={aln} setCurso={setCurso} />
      ))}
    </div>
  );
}

export default App;
