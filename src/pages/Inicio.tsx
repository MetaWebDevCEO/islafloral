import React from 'react';
import Hero from '../components/hero';

// Simple SVG Icons components for a cleaner aesthetic
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#F2527D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const PlaneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#F2527D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2L11 13"></path>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const SnowflakeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-800 mb-4 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="22"></line>
    <line x1="12" y1="8" x2="12" y2="8"></line>
    <path d="M20 10l-2.5-1.5M4 10l2.5-1.5M20 14l-2.5 1.5M4 14l2.5 1.5"></path>
    <path d="M10 4l1 2.5M14 4l-1 2.5M10 20l1-2.5M14 20l-1-2.5"></path>
  </svg>
);

const DropletIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-800 mb-4 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-800 mb-4 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const BoxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-800 mb-4 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

export default function Inicio() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-white text-gray-800 selection:bg-[#F2527D] selection:text-white">
      <Hero />
      
      {/* Section 1: Registros y Certificaciones (White Background) */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900 mb-4 tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>Registros y Certificaciones</h2>
            <div className="w-24 h-1 bg-[#F2527D] mx-auto opacity-80"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Nacional */}
            <div className="group p-8 md:p-10 rounded-xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
              <h3 className="text-2xl font-serif mb-8 text-gray-800 pb-4 border-b border-gray-100 flex items-center justify-between" style={{ fontFamily: 'var(--font-playfair)' }}>
                <span>Registro Nacional</span>
                <span className="text-xs font-sans tracking-widest text-gray-400 uppercase">México</span>
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                  <div className="mt-1"><CheckIcon /></div>
                  <div>
                    <strong className="block text-gray-900 font-medium mb-1">Secretaría de Economía</strong>
                    <span className="text-gray-500 text-sm font-light leading-relaxed">Autorización de uso de denominación o razón social.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group-hover:transform group-hover:translate-x-1 transition-transform duration-300 delay-75">
                  <div className="mt-1"><CheckIcon /></div>
                  <div>
                    <strong className="block text-gray-900 font-medium mb-1">SAT</strong>
                    <span className="text-gray-500 text-sm font-light leading-relaxed">Inscripción en el RFC para emisión de CFDI.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group-hover:transform group-hover:translate-x-1 transition-transform duration-300 delay-100">
                  <div className="mt-1"><CheckIcon /></div>
                  <div>
                    <strong className="block text-gray-900 font-medium mb-1">Registro Público</strong>
                    <span className="text-gray-500 text-sm font-light leading-relaxed">Constitución legal de la sociedad.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Internacional */}
            <div className="group p-8 md:p-10 rounded-xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
              <h3 className="text-2xl font-serif mb-8 text-gray-800 pb-4 border-b border-gray-100 flex items-center justify-between" style={{ fontFamily: 'var(--font-playfair)' }}>
                <span>Registro Internacional</span>
                <span className="text-xs font-sans tracking-widest text-gray-400 uppercase">USA</span>
              </h3>
              
              <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-100 text-center">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] block mb-2">Partner</span>
                <p className="text-xl font-serif text-gray-900" style={{ fontFamily: 'var(--font-playfair)' }}>Midwest Flower Exchange</p>
                <p className="text-sm text-gray-500 mt-1">Chicago, Illinois</p>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start gap-4 group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                  <div className="mt-1"><PlaneIcon /></div>
                  <div>
                    <strong className="block text-gray-900 font-medium mb-1">Padrón de Exportadores</strong>
                    <span className="text-gray-500 text-sm font-light leading-relaxed">Trámite sectorial agrícola ante el SAT.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group-hover:transform group-hover:translate-x-1 transition-transform duration-300 delay-75">
                  <div className="mt-1"><PlaneIcon /></div>
                  <div>
                    <strong className="block text-gray-900 font-medium mb-1">SENASICA / SAGARPA</strong>
                    <span className="text-gray-500 text-sm font-light leading-relaxed">Certificado Fitosanitario Internacional.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Estándares Logísticos (Pink Background) */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg')] bg-cover bg-center bg-fixed"></div>
        <div className="absolute inset-0 bg-[#F2527D]/90 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>Estándares de Calidad</h2>
            <div className="w-24 h-1 bg-white mx-auto opacity-50"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500 group">
              <div className="transform group-hover:scale-110 transition-transform duration-500 text-white">
                <SnowflakeIcon />
              </div>
              <h4 className="font-serif text-xl mb-3 text-white" style={{ fontFamily: 'var(--font-playfair)' }}>Cadena de Frío</h4>
              <p className="text-sm text-white/90 font-light leading-relaxed">Temperatura constante entre 2°C y 4°C para preservar frescura.</p>
            </div>
            <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500 group">
              <div className="transform group-hover:scale-110 transition-transform duration-500 text-white">
                <DropletIcon />
              </div>
              <h4 className="font-serif text-xl mb-3 text-white" style={{ fontFamily: 'var(--font-playfair)' }}>Humedad</h4>
              <p className="text-sm text-white/90 font-light leading-relaxed">Control estricto entre 90% y 95% para evitar deshidratación.</p>
            </div>
            <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500 group">
              <div className="transform group-hover:scale-110 transition-transform duration-500 text-white">
                <ShieldIcon />
              </div>
              <h4 className="font-serif text-xl mb-3 text-white" style={{ fontFamily: 'var(--font-playfair)' }}>Sanidad</h4>
              <p className="text-sm text-white/90 font-light leading-relaxed">Inspección rigurosa. Libre de plagas, insectos y tierra.</p>
            </div>
            <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500 group">
              <div className="transform group-hover:scale-110 transition-transform duration-500 text-white">
                <BoxIcon />
              </div>
              <h4 className="font-serif text-xl mb-3 text-white" style={{ fontFamily: 'var(--font-playfair)' }}>Embalaje</h4>
              <p className="text-sm text-white/90 font-light leading-relaxed">Pallets aéreos con fajas de seguridad y film microperforado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Normativa (Light Gradient Background) */}
      <section className="py-24 bg-gradient-to-b from-white to-[#fff0f3]">
        <div className="max-w-6xl mx-auto px-6">
           <div className="bg-white rounded-2xl p-8 lg:p-16 overflow-hidden relative shadow-sm border border-gray-100">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F2527D] opacity-5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F2600C] opacity-5 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-3xl font-serif text-gray-900 mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>Normativa y Cumplimiento</h2>
                <p className="text-gray-600 mb-8 font-light text-lg leading-relaxed">
                  Cada flor exportada cumple con las más estrictas Normas Oficiales Mexicanas y estándares internacionales.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 flex items-center justify-center bg-white border border-gray-100 rounded-full text-xs font-bold text-[#F2527D]">NOM</div>
                    <div>
                      <strong className="block text-gray-900 text-sm">NOM-144-SEMARNAT</strong>
                      <span className="text-gray-500 text-xs">Regulación para embalaje de madera.</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 flex items-center justify-center bg-white border border-gray-100 rounded-full text-xs font-bold text-[#F2527D]">ISO</div>
                    <div>
                      <strong className="block text-gray-900 text-sm">ISO-780</strong>
                      <span className="text-gray-500 text-xs">Símbolos gráficos de manejo.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-800 text-white">
                <div className="text-center mb-8 pb-4 border-b border-gray-800">
                  <span className="text-xs tracking-[0.3em] uppercase text-[#F2527D]">Etiqueta de Exportación</span>
                </div>
                <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                  <div>
                    <span className="block text-gray-500 text-[10px] uppercase tracking-wider mb-1">Producto</span>
                    <strong className="text-white font-serif text-lg">Flor de Corte</strong>
                  </div>
                  <div className="text-right">
                    <span className="block text-gray-500 text-[10px] uppercase tracking-wider mb-1">Origen</span>
                    <strong className="text-white font-serif text-lg">México</strong>
                  </div>
                  <div>
                    <span className="block text-gray-500 text-[10px] uppercase tracking-wider mb-1">Destino</span>
                    <strong className="text-white font-serif text-lg">USA (ORD)</strong>
                  </div>
                  <div className="text-right">
                    <span className="block text-gray-500 text-[10px] uppercase tracking-wider mb-1">Cuidados</span>
                    <div className="flex justify-end gap-3 text-white">
                       {/* Simple unicode icons for label */}
                      <span title="Hacia arriba">⬆️</span>
                      <span title="Frágil">🍷</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-dashed border-gray-800 text-center">
                  <div className="inline-block border border-gray-700 px-4 py-1 text-xs text-gray-400 rounded-full">
                    Certified Export Quality
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Proceso (Orange Background) */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/33045/lion-s-mouth-flower-yellow-orange.jpg')] bg-cover bg-center bg-fixed"></div>
        <div className="absolute inset-0 bg-[#F2600C]/90 backdrop-blur-[1px]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>Proceso de Exportación</h2>
            <div className="w-24 h-1 bg-white mx-auto opacity-50"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative p-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="absolute top-6 right-6 text-6xl font-serif text-gray-100 group-hover:text-[#F2600C]/10 transition-colors" style={{ fontFamily: 'var(--font-playfair)' }}>1</div>
              <h3 className="font-serif text-xl mb-4 text-[#F2600C] relative z-10" style={{ fontFamily: 'var(--font-playfair)' }}>Tratamiento</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed relative z-10">
                Aplicación especializada de soluciones hidratantes y conservantes post-cosecha para maximizar la vida útil.
              </p>
            </div>
            <div className="relative p-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="absolute top-6 right-6 text-6xl font-serif text-gray-100 group-hover:text-[#F2600C]/10 transition-colors" style={{ fontFamily: 'var(--font-playfair)' }}>2</div>
              <h3 className="font-serif text-xl mb-4 text-[#F2600C] relative z-10" style={{ fontFamily: 'var(--font-playfair)' }}>Pre-enfriamiento</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed relative z-10">
                Reducción acelerada de temperatura a 4°C en menos de 4 horas para estabilizar el metabolismo floral.
              </p>
            </div>
            <div className="relative p-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="absolute top-6 right-6 text-6xl font-serif text-gray-100 group-hover:text-[#F2600C]/10 transition-colors" style={{ fontFamily: 'var(--font-playfair)' }}>3</div>
              <h3 className="font-serif text-xl mb-4 text-[#F2600C] relative z-10" style={{ fontFamily: 'var(--font-playfair)' }}>Protección</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed relative z-10">
                Implementación de capuchones y mangas microperforadas para asegurar la integridad física de cada botón.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
