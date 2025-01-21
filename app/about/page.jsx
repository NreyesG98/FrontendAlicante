"use client";
import React, { useState } from 'react';

function App() {
  const [id_apoderado,setidApoderado] = useState('');
  const [nombreApo, setNombreApo] = useState('');
  const [apellidoApo, setApellidoApo] = useState('');
  const [telefonoApo, setTelefonoApo] = useState('');
  const [correoApo, setCorreoApo] = useState('');
  const [contrasenaApo, setContrasenaApo] = useState('');
  const [direccionApo, setDireccionApo] = useState('');
  const [tipoApo, setTipoApo] = useState('');
  const [token, setToken] = useState('');
  const [reuniones, setReuniones] = useState([]);

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
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        correo_apo: correoApo,
        contrasena_apo: contrasenaApo,
      }),
    });

    const data = await response.json();
    console.log(data);
    if (data.token) {
      alert('Inicio de sesión exitoso');
      setToken(data.token);
      localStorage.setItem('token', data.token);
    } else {
      alert(data.message);
    }
  };

  const handleGetReuniones = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:4000/api/reuniones', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();
    console.log(data);
    setReuniones(data);
  };

  return (
    <div>
      <h1>Gestión Escolar</h1>

      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <input type="nuneric" value={id_apoderado} onChange={(e) => setidApoderado(e.target.value)} placeholder="rut" required />
        <input type="text" value={nombreApo} onChange={(e) => setNombreApo(e.target.value)} placeholder="Nombre" required />
        <input type="text" value={apellidoApo} onChange={(e) => setApellidoApo(e.target.value)} placeholder="Apellido" required />
        <input type="text" value={telefonoApo} onChange={(e) => setTelefonoApo(e.target.value)} placeholder="Teléfono" />
        <input type="email" value={correoApo} onChange={(e) => setCorreoApo(e.target.value)} placeholder="Correo" required />
        <input type="password" value={contrasenaApo} onChange={(e) => setContrasenaApo(e.target.value)} placeholder="Contraseña" required />
        <input type="text" value={direccionApo} onChange={(e) => setDireccionApo(e.target.value)} placeholder="Dirección" />
        <input type="text" value={tipoApo} onChange={(e) => setTipoApo(e.target.value)} placeholder="Tipo (admin/apoderado)" required />
        <button type="submit">Registrar</button>
      </form>

      <h2>Inicio de Sesión</h2>
      <form onSubmit={handleLogin}>
        <input type="email" value={correoApo} onChange={(e) => setCorreoApo(e.target.value)} placeholder="Correo" required />
        <input type="password" value={contrasenaApo} onChange={(e) => setContrasenaApo(e.target.value)} placeholder="Contraseña" required />
        <button type="submit">Iniciar Sesión</button>
      </form>

      <h2>Reuniones</h2>
      <button onClick={handleGetReuniones}>Obtener Reuniones</button>
      <div>
        {reuniones.map((reunion) => (
          <div key={reunion.id_reunion}>
            Reunión: {reunion.tema_reu} - {reunion.fecha_reu} {reunion.hora_reu}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;