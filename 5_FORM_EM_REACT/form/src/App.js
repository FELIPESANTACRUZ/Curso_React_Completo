
import './App.css';
// import Mapas from './components/Mapas';
//import Empresas from './components/Empresas';
import Myform from './components/Myform';
// import Translate from './components/Translate';
// import Alunos from './components/Alunos';
// import Carros from './components/Carros';
// import Nomes from './components/Nomes';
// import Cores from './components/Cores';
// import Livros from './components/Livros';
// import Professores from './components/Professores';
// import Professores2 from './components/Professores2';

function App() {
  return (
    <div className="App">
     <h2>Forms</h2>
     <Myform user={{ name:'felipe', email:'felipesimao@gmail.com', bio: "Sou estudante", role:"admin"}} />
     {/* <Alunos /> */}
     {/* <Professores />
     <Professores2 /> */}
     {/* <Carros />
     <Nomes />
     < Cores />
     <Livros /> */}
     {/* <Empresas /> */}
     {/* <Mapas />
     <Translate /> */}
    </div>
  );
}

export default App;
