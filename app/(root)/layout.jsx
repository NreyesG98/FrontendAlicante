import React from 'react'
import Header from '@/components/Header';

const Layout = ({ children }) => {
  return (
    <main className="root-container">
      {/* TODO: clase para indicar el tamaño del Container (todo lo que se contendra)*/}
      <div className="mx-auto max-w-7xl">
        <Header />

        <div className="mt-20 pb-20">
          {children}
        </div>
      </div>
    </main>
  )
}

export default Layout;
