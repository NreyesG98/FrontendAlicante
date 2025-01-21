// filepath: /path/to/your/frontend/app.js
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const nombre_apo = document.getElementById('nombre_apo').value;
    const apellido_apo = document.getElementById('apellido_apo').value;
    const telefono_apo = document.getElementById('telefono_apo').value;
    const correo_apo = document.getElementById('correo_apo').value;
    const contrasena_apo = document.getElementById('contrasena_apo').value;
    const direccion_apo = document.getElementById('direccion_apo').value;
    const tipo_apo = document.getElementById('tipo_apo').value;
  
    const response = await fetch('http://localhost:4000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre_apo,
        apellido_apo,
        telefono_apo,
        correo_apo,
        contrasena_apo,
        direccion_apo,
        tipo_apo,
      }),
    });
  
    const data = await response.json();
    console.log(data);
    alert(data.message);
  });
  
  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const correo_apo = document.getElementById('login_correo_apo').value;
    const contrasena_apo = document.getElementById('login_contrasena_apo').value;
  
    const response = await fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        correo_apo,
        contrasena_apo,
      }),
    });
  
    const data = await response.json();
    console.log(data);
    if (data.token) {
      alert('Inicio de sesión exitoso');
      // Guarda el token en el almacenamiento local para futuras solicitudes
      localStorage.setItem('token', data.token);
    } else {
      alert(data.message);
    }
  });
  
  document.getElementById('getReuniones').addEventListener('click', async () => {
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:4000/api/reuniones', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  
    const data = await response.json();
    console.log(data);
  
    const reunionesDiv = document.getElementById('reuniones');
    reunionesDiv.innerHTML = '';
    data.forEach(reunion => {
      const div = document.createElement('div');
      div.textContent = `Reunión: ${reunion.tema_reu} - ${reunion.fecha_reu} ${reunion.hora_reu}`;
      reunionesDiv.appendChild(div);
    });
  });