
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