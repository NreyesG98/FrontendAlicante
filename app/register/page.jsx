"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './register.module.css';

function App() {
  const [id_apoderado, setIdApoderado] = useState('');
  const [nombreApo, setNombreApo] = useState('');
  const [apellidoApo, setApellidoApo] = useState('');
  const [telefonoApo, setTelefonoApo] = useState('');
  const [correoApo, setCorreoApo] = useState('');
  const [contrasenaApo, setContrasenaApo] = useState('');
  const [direccionApo, setDireccionApo] = useState('');
  const [tipoApo, setTipoApo] = useState('');
  const [token, setToken] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:4000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_apoderado: id_apoderado,
        nombre_apo: nombreApo,
        apellido_apo: apellidoApo,
        telefono_apo: telefonoApo,
        correo_apo: correoApo,
        contrasena_apo: contrasenaApo,
        direccion_apo: direccionApo,
        tipo_apo: tipoApo,
      }),
    });

    const data = await response.json();
    console.log(data);
    alert(data.message);

    // Reiniciar los campos del formulario
    setIdApoderado('');
    setNombreApo('');
    setApellidoApo('');
    setTelefonoApo('');
    setCorreoApo('');
    setContrasenaApo('');
    setDireccionApo('');
    setTipoApo('');
  };

  const handleLoginRedirect = () => {
    router.push('/login');
  };
  


   
  return (
    <div className={styles.registerContainer}>
      <div>
        <h1>Colegio Alicante </h1>

        <h2>Registraste Aca Abajo!</h2>
        <form onSubmit={handleRegister}>
          <input type="text" value={id_apoderado} onChange={(e) => setIdApoderado(e.target.value)} placeholder="RUT" required />
          <input type="text" value={nombreApo} onChange={(e) => setNombreApo(e.target.value)} placeholder="Nombre" required />
          <input type="text" value={apellidoApo} onChange={(e) => setApellidoApo(e.target.value)} placeholder="Apellido" required />
          <input type="text" value={telefonoApo} onChange={(e) => setTelefonoApo(e.target.value)} placeholder="Teléfono" />
          <input type="email" value={correoApo} onChange={(e) => setCorreoApo(e.target.value)} placeholder="Correo" required />
          <input type="password" value={contrasenaApo} onChange={(e) => setContrasenaApo(e.target.value)} placeholder="Contraseña" required />
          <input type="text" value={direccionApo} onChange={(e) => setDireccionApo(e.target.value)} placeholder="Dirección" />
          <input type="text" value={tipoApo} onChange={(e) => setTipoApo(e.target.value)} placeholder="Tipo apoderado" required />
          <button type="submit">Registrar</button>
        </form>
        <button onClick={handleLoginRedirect}>Apreta Aqui Para loguearte</button>
      </div>
    </div>
  );
}

export default App;