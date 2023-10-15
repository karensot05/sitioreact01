import logo from './logo.svg';
import './App.css';
import C01componente from './components/C01componente';
import Variable from './components/C04variable';


function App() {
  return (
    <div>
     <C01componente/>
     <Variable xVariable = "Hola"/>
    </div>
  );
}

export default App;