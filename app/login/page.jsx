"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from './Login.module.css';


export default function Login() {
  const [userType, setUserType] = useState("normal");  // Estado para el tipo de usuario
  const router = useRouter();

 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el inicio de sesión
    console.log("Formulario enviado");
    if (userType === "superusuario") {
      router.push("/blog");  // Redirigir al dashboard de superusuario
    } else {
      router.push("/about");  // Redirigir al dashboard de usuario normal
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.loginContainer}>
        <h1 className={styles.title}>Iniciar Sesión Apoderados</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="username" className={styles.label}>Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Ingresa tu usuario"
            className={styles.input}
            required
          />
          <label htmlFor="password" className={styles.label}>Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            className={styles.input}
            required
          />
          <label htmlFor="userType" className={styles.label}>Tipo de Usuario:</label>
          <select
            id="userType"
            name="userType"
            className={styles.input}
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <option value="normal">Apoderado</option>
            <option value="superusuario">Directiva</option>
          </select>
          <button type="submit" className={styles.button}>Ingresar</button>
        </form>
        <div className={styles.footer}>
          <p>¿Olvidaste tu contraseña? <a href="/register">Recupérala aquí</a></p>
          <p>¿No Tienes Cuenta? <a href="/register">¡Regístrate!</a></p>
        </div>
      </div>
    </div>
  );
}