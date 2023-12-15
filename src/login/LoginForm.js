import React, { useState } from 'react';
import { useAuth } from '../ruteo/AuthContext'; // (7). Importando contexto
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  
  const { signIn } = useAuth();                 // (7). Usando el contexto

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor, completa ambos campos.');
      return;
    }

    try {
      await signIn(email, password);
      // Inicio de sesión exitoso: limpiar el error
      setError(null);
      navigate('/sistema-crud'); // Redirigir a ruta /sistema-crud
    } catch (error) {
      setError('Error al iniciar sesión: ' + error.message);
    }
  }

  return (
    <div id='public' style={{ background:"green", }}>
      <h2>INICIAR SESION</h2>

      <form className='card card-body' onSubmit={handleSignIn}>

        <div className='form-group input-group'>
          <div className='input-group-text bd-light'>
          <i className='material-icons'>group_add</i>
        </div>
        <input className='form-control float-start' placeholder='Usuario...'  
          type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className='form-group input-group'>
          <div className='input-group-text bd-light'>
          <i className='material-icons'>star_half</i>
        </div>

        <input className='form-control float-start' placeholder='Contraseña...'  
          type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>

      <button className='btn btn-primary btn-block'>
        Iniciar Sesion
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
      </button>

    </form>
    
  </div>
  );
}

export default LoginForm;



