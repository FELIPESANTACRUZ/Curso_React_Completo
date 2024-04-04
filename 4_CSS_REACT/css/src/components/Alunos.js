import React from 'react';

function Alunos({ aln, setCurso }) {
  return (
    <div style={{ background: 'white', color: 'black' }}>
      <p>Alunos</p>
      <p>{aln.nome}</p>
      <p>{aln.idade}</p>
      <p>{aln.curso}</p>
      <p></p>

      <button onClick={() => setCurso('Novo Curso')}>
        Mudar curso
      </button>

    <p>{aln.curso}</p>

    </div>
  );
}

export default Alunos;
