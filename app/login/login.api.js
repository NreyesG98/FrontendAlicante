export async function fetchData() {
  const token = localStorage.getItem('token'); // O sessionStorage.getItem('token');
  
  const response = await fetch('http://localhost:4000/api/data', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Error en la solicitud');
  }

  const data = await response.json();
  return data;
}


export async function getCursos() {
  const data = await fetch("http://localhost:4000/api/cursos", {
    cache: "no-store",
  });
  
  return await data.json();
}


export async function getPagos() {
  const data = await fetch("http://localhost:4000/api/pagos", {
    cache: "no-store",
  });
  
  return await data.json();
}

