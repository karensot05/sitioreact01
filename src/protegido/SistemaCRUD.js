import React from 'react'
import { Outlet } from 'react-router-dom';

const SistemaCRUD = () => {
  return (
    <div id="sis" style={{ background:"pink", }}>
      <h1>SistemaCRUD</h1>
      <Outlet /> {/* Donde se renderizarán las rutas secundarias */}
      Sistema con operaciones CRUD en BD (Firestore)
    </div>
  )
}

export default SistemaCRUD
