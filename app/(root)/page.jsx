import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LandingOverview from "@/components/LandingOverview";

const page = ({ children }) => {
  return (
    <>
      <LandingOverview />

      
    </>








    
    // <div className="bg-gray-900 min-h-screen flex items-center justify-center">
    // {/* <div className="text-white text-center"> */}


    // <div>
    //   <div className="text-center">
    //     <h1 className="text-6xl font-bold mb-4">Bienvenido a Colegio Alicante</h1>
    //     <p className="text-lg mb-8">Inicia sesión o regístrate para comenzar</p>
    //     <div className="space-x-4">
    //       <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
    //         {/* <Link to="/login">
    //           <MailOpen />Iniciar Sesion
    //         </Link> */}
    //         <Link href="/login">Login</Link>
    //       </Button>
    //       <Button asChild className="bg-green-400 hover:bg-green-600 text-white px-4 py-2 rounded-md">
    //         <Link href="/register">Register</Link>
    //       </Button>
    //     </div>
    //   </div>
    // </div>







    // <div className="flex flex-col items-center justify-center min-h-screen">
    //   <h1 className="text-2xl font-bold mb-4">Home</h1>

    //   <ul className="list-none p-0">
    //     <li className="mb-2">
    //       <Link href="/login">Login</Link>
    //     </li>
    //     <li className="mb-2">
    //       <Link href="/about">About Us</Link>
    //     </li>
    //     <li className="mb-2">
    //       <Link href="/home">Home</Link>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default page;
