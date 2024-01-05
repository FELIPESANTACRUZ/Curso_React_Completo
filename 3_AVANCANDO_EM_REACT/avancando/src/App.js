import './App.css';
import Freefire1 from './assets/freefire1.png'
import ListRender from './components/Listas/ListRender';
import ManageData from './components/Hooks/ManageData';
import TesteHook from './components/Hooks/TesteHook';
import TesteHook2 from './components/Hooks/TesteHook2';
import TesteHook3 from './components/Hooks/TesteHook3';
import TesteHook4 from './components/Hooks/testeHook4';
import Lista1 from './components/Listas/Lista1';
import Lista3 from './components/Listas/Lista3';
import Lista4comKey from './components/Listas/Lista4comKey';
import Lista5 from './components/Listas/Lista5';
import ConditionalRender from './components/ConditionalRender';
import ConditionalRender2 from './components/ConditionalRender2';
import ConditionalRender3 from './components/ConditionalRender3';
import ConditionalRender4 from './components/ConditionalRender4';
import ShowUserName from './components/Props/ShowUserName';
import { useState } from 'react';


function App() {

const name = "jaqueline"
const [userName] = useState("Maria")

  return (
    <div className="App">
      <h1>Avançando em React</h1>

      {/* {imagem em public} */}
      <div>
        <img src="/freefire2.png" alt="free fire 2" />
      </div>

    {/* {imagem em assets} */}
    <div>
      <img src={Freefire1} alt="free fire 1" />
    </div>
   <ManageData />
   <TesteHook />
   <TesteHook2 />
   <TesteHook3 />
   <TesteHook4/>
   <ListRender/>
   <Lista1 />
   <Lista3 />
   <Lista4comKey />
   <Lista5 />
   <ConditionalRender />
   <ConditionalRender2 />
   <ConditionalRender3 />
   <ConditionalRender4 />
   <ShowUserName name={userName}/>
  </div>
  );
}

export default App;
