import './App.css';
import Cars from './components/Cars';

function App() {

  
const myCars = [
  {name:"ferrari", km:20, color:'branca'},
  {name:"lamborghini", km:10, color:'cinza'},
  {name:"honda", km:5, color:'verde'},
]

  return (
    <div className="App">

   <h2 style={{ color:'red' }}>Cars</h2>

      <div className='.styled_cars'>
      {myCars.map((car) => (
                <Cars car={car} />
            ))}
      </div>


      
    </div>
  );
}

export default App;
