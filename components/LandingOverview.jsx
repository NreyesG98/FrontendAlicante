import React from 'react'
import Link from "next/link";
import { Button } from "@/components/ui/button";

const LandingOverview = () => {
  return (
    <section className="book-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1>Bienvenido a Colegio Alicante</h1>

        <h2 className="font-bebas-neue text-4xl text-light-100">
          Inicia sesión o regístrate para comenzar
        </h2>

        <div className="space-x-4">
          <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="bg-green-400 hover:bg-green-600 text-white px-4 py-2 rounded-md">
            <Link href="/register">Register</Link>
          </Button>
        </div>

      </div>
    </section>
  )
}

export default LandingOverview

    // <div>
    //   <div className="text-center">
    //     <h1 className="text-6xl font-bold mb-4">Bienvenido a Colegio Alicante</h1>
        // <p className="text-lg mb-8">Inicia sesión o regístrate para comenzar</p>
        // <div className="space-x-4">
        //   <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
        //     {/* <Link to="/login">
        //       <MailOpen />Iniciar Sesion
        //     </Link> */}
        //     <Link href="/login">Login</Link>
        //   </Button>
        //   <Button asChild className="bg-green-400 hover:bg-green-600 text-white px-4 py-2 rounded-md">
        //     <Link href="/register">Register</Link>
        //   </Button>
        // </div>
    //   </div>
    // </div>