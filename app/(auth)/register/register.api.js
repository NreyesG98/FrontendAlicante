export async function register() {
    const data = await fetch("http://localhost:4000/api/register", {
      cache: "no-store",
    });
    return await data.json();
  };

