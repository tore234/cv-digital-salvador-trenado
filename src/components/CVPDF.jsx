import React, { forwardRef } from "react";
import avatar from "../assets/avatar.jpg";
import qr from "../assets/qr.png";

const CVPDF = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="cv-container bg-white mx-auto grid grid-cols-[280px_minmax(0,1fr)] overflow-hidden"
    >
      <aside className="bg-zinc-950 text-white p-8 flex flex-col justify-between">
        <div>
          <div className="flex flex-col items-center text-center mb-8">
            <img
              src={avatar}
              alt="Salvador Trenado"
              className="w-28 h-28 rounded-3xl object-cover ring-4 ring-violet-500 mb-4"
            />
            <h1 className="text-2xl font-semibold tracking-tight">Salvador Trenado</h1>
            <p className="mt-2 text-[11px] uppercase tracking-[0.4em] text-zinc-400 font-semibold">
              DESARROLLADOR WEB
            </p>
          </div>

          <section className="mb-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400 mb-4">
              Contacto
            </h3>
            <ul className="text-sm leading-7 space-y-2 text-zinc-200">
              <li>📞 +52 421 105 9838</li>
              <li>📍 Tarandacuao, Gto., México</li>
              <li>✉️ trenadohernadezsalvador@gmail.com</li>
              <li>🐙 github.com/tore234</li>
              <li>🔗 linkedin.com/in/salvador-trenado-hernández</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400 mb-4">
              Educación
            </h3>
            <div className="space-y-5 text-sm leading-6 text-zinc-200">
              <div>
                <p className="font-semibold text-white">2024 – Presente</p>
                <p>Ingeniería en Desarrollo y Gestión de Software</p>
                <p className="text-zinc-500">UTOM</p>
              </div>
              <div>
                <p className="font-semibold text-white">2022 – 2024</p>
                <p>TSU en Desarrollo de Software Multiplataforma</p>
                <p className="text-zinc-500 italic">Proyecto final: Emonical (chatbot + PWA + AR)</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400 mb-4">
              Idiomas
            </h3>
            <ul className="text-sm leading-7 text-zinc-200">
              <li>🇲🇽 Español — Nativo</li>
              <li>🇬🇧 Inglés — Intermedio (lectura técnica y comunicación laboral)</li>
            </ul>
          </section>
        </div>

        <div className="pt-6 border-t border-zinc-800">
          <div className="flex flex-col items-center">
            <img
              src={qr}
              alt="QR Portafolio"
              className="w-28 h-28 rounded-3xl bg-white p-2 object-contain"
            />
            <p className="mt-3 text-[10px] text-zinc-400 text-center leading-5">
              https://portafolio-react-sth.vercel.app/contacto
            </p>
          </div>
        </div>
      </aside>

      <main className="p-10 text-zinc-900">
        <header className="mb-8 flex flex-col gap-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-violet-700 font-semibold">
                Perfil profesional
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight">
                Desarrollo web pensado para personas.
              </h2>
            </div>
            <div className="rounded-full border border-violet-700 px-4 py-2 text-xs font-semibold uppercase text-violet-700">
              React · Tailwind · Vite
            </div>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-zinc-700">
            Soy un desarrollador front-end enfocado en crear experiencias digitales accesibles, estéticas y de alta calidad. Combino lógica limpia, UI moderna y rendimiento para entregar proyectos que comunican bien y funcionan con confianza.
          </p>
        </header>

        <section className="mb-8">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-700">
              Experiencia laboral
            </h3>
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-400">2023 – Actual</span>
          </div>

          <article className="mb-6 rounded-3xl bg-zinc-100 p-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-2">2024 (abr – ago)</p>
            <h4 className="text-lg font-semibold text-zinc-900">Desarrollador Web — Estadías</h4>
            <p className="text-sm text-zinc-700 mb-3">
              Softim Devs · Remoto / Maravatío · <a className="text-violet-700 underline" href="https://setecmaravatio.com" target="_blank" rel="noreferrer">SETEC Maravatío</a>
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
              <li>Maquetación responsive, integración de formularios y validaciones dinámicas.</li>
              <li>Configuración de dominio, SSL y despliegue con enfoque en performance.</li>
              <li>Mejora de velocidad y accesibilidad; resultados +90 en Lighthouse.</li>
              <li>Control de versiones con GitHub y documentación técnica para equipo.</li>
            </ul>
          </article>

          <article className="rounded-3xl bg-zinc-100 p-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-2">2023 – 2024</p>
            <h4 className="text-lg font-semibold text-zinc-900">Front-End Developer — Proyecto académico</h4>
            <p className="text-sm italic text-zinc-700 mb-3">Emonical — PWA de apoyo emocional con AR</p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
              <li>Diseño de interacción y experiencia adaptativa para usuarios.</li>
              <li>Integración de realidad aumentada y chatbot contextual.</li>
              <li>Implementación offline con service workers y APIs REST eficientes.</li>
            </ul>
          </article>
        </section>

        <section className="grid gap-4 lg:grid-cols-2 mb-8">
          <div className="rounded-3xl bg-zinc-100 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-700 mb-4">
              Tecnologías clave
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "TailwindCSS",
                "Vite",
                "JavaScript",
                "HTML",
                "CSS",
                "Figma",
                "Git",
                "REST APIs",
              ].map((tech) => (
                <span key={tech} className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-[11px] text-zinc-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-zinc-100 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-700 mb-4">
              Proyectos destacados
            </h3>
            <ul className="space-y-3 text-sm leading-7 text-zinc-700">
              <li>
                <span className="font-semibold">Emonical:</span> PWA emocional con chatbot y AR para apoyo psicológico.
              </li>
              <li>
                <span className="font-semibold">Sitio profesional:</span> despliegue con dominio personalizado, hosting y optimización web.
              </li>
            </ul>
          </div>
        </section>

        <section className="rounded-3xl bg-zinc-100 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-700 mb-4">
            Intereses
          </h3>
          <p className="text-sm leading-7 text-zinc-700">
            Me interesa la unión entre diseño y tecnología: IA aplicada a interfaces, realidad aumentada para experiencias inmersivas y prácticas DevOps que mejoren la entrega. Busco aprender continuamente y construir soluciones con propósito.
          </p>
        </section>
      </main>
    </div>
  );
});

export default CVPDF;
