import logo from './logo.svg';
import './App.css';
//import Componente from './components/C01componente';
//import Contador from './components/C02estado';
//import Contador2 from './components/C03dobleestado';
//import Variable from './components/C04variable';
//import Matriz from './components/C06matriz';
//import MatrizOperaciones from './components/C07matrizOperaciones';
import AppForm from './components/AppForm';
import { db } from "./firebase/firebase";

function App() {
  return (
    <div style={{background:"yellow",
    width:"350px", 
    padding:"10px",textAlign:"center"}}>
      <h1>App.js</h1>
      
      <AppForm />
      <i class="large material-icons">insert_chart</i>

      <p>1. Juan Manuel 23 Masculino-------------x-----A</p>
      <p>2. Rosa Maria  25 Femenino---------------x-----A</p>
      <p>3. Luis Miguel 40 Masculino--------------x-----A</p>
    </div>
  );
}

export default App;