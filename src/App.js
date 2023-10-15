import logo from './logo.svg';
import './App.css';
import Componente from './components/C01componente';
import Contador from './components/C02estado';
import Contador2 from './components/C03dobleestado';
import Variable from './components/C04variable';
import Matriz from './components/C06matriz';
import MatrizOperaciones from './components/C07matrizOperaciones';


function App() {
  return (
    <div className="App">
      <h1>Practicas... React</h1>
      <Componente />
      <hr/>
      <Contador />
      <hr/>
      <Contador2 />
      <hr/>
      <Variable xVariable = "Lectura a variables" />
      <hr/>
      <Matriz />
      <hr/>
      <MatrizOperaciones />
    </div>
  );
}

export default App;