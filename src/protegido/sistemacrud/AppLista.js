import React, { useEffect, useState } from 'react'
import AppForm from './AppForm';
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../conexion/firebase';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
 
const AppLista = (props) => {
  
  

  ////// Lectura fnRead ///////////
  const [docBD, setDocBD] = useState([]);
  const fnRead = () => {
    const xColeccionConQuery = query(collection(db, 'persona'));        // Dato de BD
    const unsubcribe = onSnapshot(xColeccionConQuery, (xDatosBD) => {
      const xDoc = [];                            // Variable para organizar datos
      xDatosBD.forEach((doc) => {                 // Recorriendo datos fon bucle
        xDoc.push({id:doc.id, ...doc.data()});    // Juntando id y coleccion
      });
      setDocBD(xDoc);                             // Pasando datos a "docBD"
    });
  }
  //fnRead();                                     // Prueba sin useEffect
  useEffect(()=>{ fnRead(); }, [props.idActual]);
  //console.log(docBD); 

  ////// Delete ////////////////////
  const [idActual, setIdActual] = useState("");   // Variable para id de c/coleccion
  const fnDelete = async (xId) => {               // 
    if(window.confirm("Confirme para eliminar")){ // Ventana para confirmar
      await deleteDoc(doc(db, "persona", xId));   // Elimina en BD
    }
    toast("Se eliminado con éxito", { type: 'success', autoClose: 2000})
    //alert("Se ELIMINO con éxito..."); 
  }
  
  return (
    
    <div className='container text-center'>
      <div className='card bs-secondary p-3 mt-3'> 

        <ToastContainer />

        <div className='col-md-12 p-2'>
          <div className='card mb-1'>
            <AppForm {...{idActual, setIdActual}} />
          </div>
        </div>

        <div className='col-md-12 p-2'>
          <div className='card mb-1'>
            <h2>Lista de clientes (AppLista.js)</h2>
          </div>
        </div>

        <div className='col-md-12 p-2'>
          {
            docBD.map((row, index) =>  
              <div className='card mb-1' key={row.id} >
                <div className='card-body'>
                  <div className='d-flex justify-content-between'>
                    <h4>No. {index+1}. {row.nombre}</h4>
                    <div>
                      <i className='material-icons text-danger' 
                        onClick={() => fnDelete(row.id)}>close</i>
                        ...
                        <i className='material-icons text-warning' 
                          onClick={() => setIdActual(row.id)}>create</i>
                    </div>
                  </div>
                  <div className="d-flex justify-content">

                    <span>Edad: {row.edad} </span> ...
                    <a href='#'>Genero: {row.genero} </a>
                  </div>
                </div>
              </div>
            )
         }
        </div>
      </div>
    </div>
  )
}

export default AppLista;