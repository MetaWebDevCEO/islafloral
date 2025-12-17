import React from 'react';

export default function Inicio() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center justify-center p-8 h-[calc(100vh-40px)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="text-4xl font-bold text-center sm:text-left">
            Bienvenido a Isla Floral
          </h1>
          <p className="text-lg text-center sm:text-left max-w-2xl">
            Descubre nuestra colección de flores exóticas y arreglos únicos.
          </p>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
              Ver Catálogo
            </button>
            <button className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
              Contáctanos
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
