// components
import FirstComponent from './components/FirtsComponent';
import TemplateExpressions from './components/TemplateExpressions';

// styles / CSS
import './App.css';
import MyComponnet from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos</h1>
      <FirstComponent />
      <TemplateExpressions/>
      <MyComponnet/>
      <Events/>
      <Challenge/>
    </div>
  );
}

export default App;
