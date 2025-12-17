import React from 'react';

export default function Shop() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center p-8">
        <main className="flex flex-col gap-8 items-center sm:items-start w-full max-w-6xl">
          <h1 className="text-4xl font-bold text-center sm:text-left">
            Nuestra Tienda
          </h1>
          <p className="text-lg text-center sm:text-left max-w-2xl">
            Explora nuestros productos exclusivos.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8">
            {/* Placeholder items */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="border rounded-lg p-4 flex flex-col gap-4 hover:shadow-lg transition-shadow bg-white dark:bg-white/5">
                <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-md w-full"></div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-lg">Producto {item}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Descripción breve del producto {item}.</p>
                  <span className="font-semibold mt-2">$29.99</span>
                </div>
                <button className="mt-auto rounded-full bg-foreground text-background py-2 px-4 hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors text-sm">
                  Añadir al carrito
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
