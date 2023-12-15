import React, { useState } from 'react';
import { useAuth } from '../ruteo/AuthContext';
import { useNavigate } from 'react-router-dom';

// Para verificar que no registre con el mismo correo
import { getDoc, doc } from 'firebase/firestore';
import { auth, db } from '../conexion/firebase';

import AppLista from '../protegido/sistemacrud/AppLista.js'
import { ToastContainer, toast } from 'react-toastify';

function RegisterForm() {

  const { register } = useAuth();         // Registra usuario
  //const { registerUser } = useAuth();   // Registra previa verificación 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async(e) => {
    e.preventDefault();

    try {
      await register(email, password);
      //await registerUser(email, password);    // Verifica correo ya registrado
      navigate('/iniciarsesion'); // Redirigir a ruta /iniciarsesion
      console.log("Se registro usuario...xxx");
      toast("Se registro usuario", { type: 'success', autoClose: 2000})
    } catch (error) {
      console.error('Error al registrar usuario:', error.message);
      toast("Error al registrar usuario", { type: 'error', autoClose: 2000})
    }
  }

  return (
    <div  id='public' style={{ background:"green", }}>
      <h2>REGISTRAR</h2>
      <ToastContainer/>
      <form  className='card card-body' onSubmit={handleRegister}>
        <div className='form-group input-group'>
        <i className='material-icons input-group-text bd-light'>star_half</i>
          <input className='form-control float-start' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='form-group input-group'>
        <i className='material-icons input-group-text bd-light'>star_half</i>
          <input className='form-control float-start' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className='btn btn-primary btn-block' type="submit">Registrarse</button>
      </form>

    </div>
  );
}

export default RegisterForm;