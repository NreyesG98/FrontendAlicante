"use client";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el inicio de sesión
    console.log("Formulario enviado");
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <div style={styles.loginContainer}>
        <h1 style={styles.title}>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label htmlFor="username" style={styles.label}>Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Ingresa tu usuario"
            style={styles.input}
            required
          />

          <label htmlFor="password" style={styles.label}>Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>Ingresar</button>
        </form>
        <div style={styles.footer}>
          <p>¿Olvidaste tu contraseña? <a href="/recover-password">Recupérala aquí</a></p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
    backgroundImage: 'url("https://your-image-link.com/colegio.jpg")', // Reemplaza con la URL de tu imagen de fondo
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Oscurece el fondo para mayor contraste
    zIndex: 1,
  },
  loginContainer: {
    zIndex: 2, // Asegura que el formulario esté sobre la capa oscurecida
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    color: '#555555',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #cccccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  footer: {
    textAlign: 'center',
    marginTop: '15px',
    fontSize: '14px',
    color: '#777777',
  },
};

export default App;
