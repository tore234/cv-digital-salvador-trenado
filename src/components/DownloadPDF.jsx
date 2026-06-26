import React from "react";
import pdfUrl from "../assets/cv/SalvadorTrenadoHernandez_CV.pdf?url";

const DownloadPDF = () => {
  return (
    <div className="min-h-screen dark-bg px-4 py-10 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 mb-6">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 font-semibold">Perfil Profesional</p>
              <h1 className="text-lg sm:text-xl font-bold mt-1">Salvador Trenado</h1>
            </div>
            <div className="hidden sm:flex gap-3">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-zinc-900/70 text-white text-sm font-semibold hover:opacity-90 transition"
              >
                Abrir PDF
              </a>
              <a
                href={pdfUrl}
                download="SalvadorTrenadoHernandez_CV.pdf"
                className="px-4 py-2 rounded-full neon-btn text-sm font-semibold"
              >
                Descargar
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-3">
          <aside className="lg:col-span-1 space-y-4">
            <div className="neon-card">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-violet-100 mb-3">
                <img src="/src/assets/avatar.jpg" alt="avatar" className="w-12 h-12 rounded-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold">Salvador Trenado</h3>
              <p className="text-sm text-zinc-300">Desarrollador Web • Front-end</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-4">
              <h4 className="text-sm font-semibold text-zinc-200 mb-2">Contacto</h4>
              <p className="text-sm text-zinc-300">📧 trenadohernadezsalvador@gmail.com</p>
              <p className="text-sm text-zinc-300">📱 +52 421 105 9838</p>
              <p className="text-sm text-zinc-300">📍 Tarandacuao, Gto., México</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-4">
              <h4 className="text-sm font-semibold text-zinc-200 mb-2">Interesado?</h4>
              <p className="text-sm text-zinc-300 mb-3">Escríbeme para recibir más información, proyectos o propuestas de colaboración.</p>
              <a href="mailto:trenadohernadezsalvador@gmail.com" className="inline-block w-full text-center px-4 py-2 rounded-full neon-btn">Contactar</a>
            </div>
          </aside>

          <section className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-white/5 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-violet-300 font-semibold">Curriculum Vitae</p>
                  <h2 className="text-2xl font-bold">Vista previa y descarga</h2>
                </div>
                <div className="flex gap-3">
                  <a href={pdfUrl} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full ghost-btn">Abrir</a>
                  <a href={pdfUrl} download className="px-4 py-2 rounded-full neon-btn">Descargar</a>
                </div>
              </div>

              <p className="text-sm text-zinc-300 mb-4">Revisa tu CV antes de compartirlo. El documento está optimizado para formato carta y para impresión.</p>

              <div className="rounded-xl overflow-hidden border border-zinc-800">
                <iframe src={pdfUrl} className="w-full h-[60vh] sm:h-[70vh] lg:h-[80vh]" title="CV PDF preview" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="neon-card">
                <h3 className="font-semibold">Experiencia</h3>
                <p className="text-sm text-zinc-300">Front-end developer con experiencia en React, Tailwind y proyectos PWA.</p>
              </div>
              <div className="neon-card">
                <h3 className="font-semibold">Habilidades</h3>
                <p className="text-sm text-zinc-300">React, JavaScript, CSS, Tailwind, Figma, Git.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="mt-12 text-center text-sm text-zinc-400">© 2026 Salvador Trenado</footer>
    </div>
  );
};

export default DownloadPDF;
