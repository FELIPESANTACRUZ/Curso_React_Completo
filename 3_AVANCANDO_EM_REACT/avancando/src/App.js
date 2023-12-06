import './App.css';
import Freefire1 from './assets/freefire1.png'
import ManageData from './components/ManageData';

function App() {
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
    </div>
  );
}

export default App;
