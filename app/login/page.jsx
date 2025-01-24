"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function LoginPage() {
  const [correoApo, setCorreoApo] = useState('');
  const [contrasenaApo, setContrasenaApo] = useState('');
  const router = useRouter();

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

    if (response.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('tipo_apo', data.tipo);
      console.log("aqui esta el tipo",data.tipo);
      alert('Login exitoso');
      // Redirigir a la página de blog
      router.push('/blog');
    } else {
      alert(data.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={correoApo}
          onChange={(e) => setCorreoApo(e.target.value)}
          placeholder="Correo"
          required
        />
        <input
          type="password"
          value={contrasenaApo}
          onChange={(e) => setContrasenaApo(e.target.value)}
          placeholder="Contraseña"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;