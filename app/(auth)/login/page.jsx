"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label';
import { Progress } from "@/components/ui/progress";

const LoginPage = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [correoApo, setCorreoApo] = useState('');
  const [contrasenaApo, setContrasenaApo] = useState('');
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setProgress(20);

    try {
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

      setProgress(60);

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const result = await response.json();
      localStorage.setItem('token', result.token);
      localStorage.setItem('tipo_apo', result.tipo);
      console.log("aqui esta el tipo", result.tipo);

      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        router.push('/blog'); // Redirige al usuario después de iniciar sesión
      }, 500);

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-white">
        Bienvenido a Colegio Alicante
      </h1>
      <p className="text-light-100">
        Ingrese sus credenciales para obtener acceso.
      </p>

      <form onSubmit={handleLogin} className="space-y-6">
        <div className="grid gap-2">
          <Label className="mb-2 capitalize" htmlFor="email">Correo</Label>
          <Input
            id="email"
            className="form-input"
            type="email"
            value={correoApo}
            placeholder="m@example.com"
            required
            onChange={(e) => setCorreoApo(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label className="mb-2 capitalize" htmlFor="password">Contraseña</Label>
          <Input 
            id="password"
            className="form-input" 
            type="password" 
            required
            value={contrasenaApo}
            onChange={(e) => setContrasenaApo(e.target.value)}
          />
        </div>

        {isLoading && <Progress value={progress} className="w-full" />}

        <Button type="submit" className="form-btn" disabled={isLoading}>
          {isLoading ? 'Cargando...' : 'Login'}
        </Button>

        <p className="text-center text-base font-medium">
          Nuevo en Colegio Alicante? {" "}
          <Link
            href={"/register"}
            className="font-bold text-primary"
          >
            Crear una cuenta
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;