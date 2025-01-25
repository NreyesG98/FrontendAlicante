// FILE: app/blog/api.js
export async function getPagos() {
  const data = await fetch("${process.env.NEXT_PUBLIC_API_URL}/pagos", {
    cache: "no-store",
  });
  
  return await data.json();
}

export async function createPago() {
  const data = await fetch("${process.env.NEXT_PUBLIC_API_URL}/pagos", {
    cache: "no-store",
  });
  
  return await data.json();
}


export async function getUsers() {
    const response = await fetch('${process.env.NEXT_PUBLIC_API_URL}/users', {
        cache: 'no-store',
    });
    if (!response.ok) {
        throw new Error('Error al obtener los apoderados');
    }
    return await response.json();
}

export async function createApoderado(apoderado) {
    const response = await fetch('${process.env.NEXT_PUBLIC_API_URL}/apoderados', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(apoderado),
    });
    if (!response.ok) {
        throw new Error('Error al crear el apoderado');
    }
    return await response.json();
}

export async function updateApoderado(id, apoderado) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/apoderados/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(apoderado),
    });
    if (!response.ok) {
        throw new Error('Error al actualizar el apoderado');
    }
    return await response.json();
}

export async function deleteApoderado(id) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/apoderados/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Error al eliminar el apoderado');
    }
}

