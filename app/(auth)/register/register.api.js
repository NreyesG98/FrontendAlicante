export async function register() {
    const data = await fetch("${process.env.NEXT_PUBLIC_API_URL}/register", {
      cache: "no-store",
    });
    return await data.json();
  };

