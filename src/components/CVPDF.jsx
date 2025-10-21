import React, { forwardRef } from "react";
import avatar from "../assets/avatar.jpg";
import qr from "../assets/qr.png";

const CVPDF = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-white w-[850px] h-[1100px] mx-auto grid grid-cols-3 font-sans text-zinc-900"
    >
      {/* === PANEL IZQUIERDO === */}
      <aside className="bg-zinc-900 text-white flex flex-col justify-between p-8">
        <div>
          {/* Avatar + Nombre */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={avatar}
              alt="Salvador Trenado"
              className="w-28 h-32 object-cover rounded-md ring-4 ring-white mb-3"
            />
            <h1 className="text-xl font-bold text-center leading-tight">
              Salvador Trenado
            </h1>
            <p className="text-xs font-semibold text-zinc-400 tracking-widest mt-1">
              DESARROLLADOR WEB
            </p>
          </div>

          {/* Contacto */}
          <section className="mb-6">
            <h3 className="text-sm font-semibold mb-2 border-b border-zinc-700 pb-1">
              CONTACTO
            </h3>
            <ul className="text-sm leading-6 space-y-1">
              <li>📞 +52 421 105 9838</li>
              <li>📍 Tarandacuao, Gto., México</li>
              <li>✉️ trenadohernadezsalvador@gmail.com</li>
              <li>🐙 github.com/tore234</li>
              <li>🔗 linkedin.com/in/salvador-trenado-hernández</li>
            </ul>
          </section>

          {/* Educación */}
          <section>
            <h3 className="text-sm font-semibold mb-2 border-b border-zinc-700 pb-1">
              EDUCACIÓN
            </h3>
            <div className="text-sm space-y-3 leading-6">
              <div>
                <p className="font-semibold text-white">2024–Presente</p>
                <p>Ingeniería en Desarrollo y Gestión de Software</p>
                <p className="text-zinc-400">UTOM</p>
              </div>
              <div>
                <p className="font-semibold text-white">2022–2024</p>
                <p>TSU en Desarrollo de Software Multiplataforma</p>
                <p className="text-zinc-400 italic">
                  Proyecto final: Emonical (chatbot + PWA + módulos AR)
                </p>
              </div>
            </div>
          </section>

          {/* Idiomas */}
          <section className="mt-6">
            <h3 className="text-sm font-semibold mb-2 border-b border-zinc-700 pb-1">
              IDIOMAS
            </h3>
            <ul className="text-sm space-y-1">
              <li>🇲🇽 Español — Nativo</li>
              <li>🇬🇧 Inglés — Intermedio (lectura técnica y comunicación laboral)</li>
            </ul>
          </section>
        </div>

        {/* QR Portafolio */}
        <div className="flex flex-col items-center mt-6">
          <img
            src={qr}
            alt="QR"
            className="w-28 h-28 bg-white p-1 rounded-md ring-1 ring-zinc-400 shadow-sm object-contain"
          />
          <p className="text-[10px] mt-2 text-zinc-400 text-center break-all">
            https://portafolio-react-sth.vercel.app/contacto
          </p>
        </div>
      </aside>

      {/* === PANEL DERECHO === */}
      <main className="col-span-2 p-10 space-y-8">
        {/* Acerca de mí */}
        <section>
          <h2 className="bg-violet-700 text-white px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">
            PERFIL PROFESIONAL
          </h2>
          <p className="text-sm leading-6">
            Soy un <b>desarrollador web front-end</b> apasionado por crear interfaces limpias, 
            accesibles y centradas en el usuario. Domino tecnologías modernas como 
            <b> React, TailwindCSS y Vite</b>, aplicando principios de <b>UX/UI</b> 
            y metodologías ágiles. Mi objetivo es desarrollar software que combine 
            <b> estética, funcionalidad y propósito</b>.
          </p>
        </section>

        {/* Experiencia laboral */}
        <section>
          <h2 className="bg-violet-700 text-white px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">
            EXPERIENCIA LABORAL
          </h2>

          <article className="mb-4">
            <p className="text-[11px] text-zinc-500">2024 (abr–ago)</p>
            <h3 className="font-semibold">Desarrollador Web — Estadías</h3>
            <p className="text-sm">
              Softim Devs (Remoto / Maravatío) ·{" "}
              <a
                href="https://setecmaravatio.com"
                className="underline text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                SETEC Maravatío
              </a>
            </p>
            <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
              <li>Maquetación responsive e integración de formularios dinámicos.</li>
              <li>Configuración de dominio, SSL y despliegue en producción.</li>
              <li>Optimización de rendimiento (90+ en Lighthouse).</li>
              <li>Documentación técnica y control de versiones con GitHub.</li>
            </ul>
          </article>

          <article>
            <p className="text-[11px] text-zinc-500">2023–2024</p>
            <h3 className="font-semibold">Front-End Developer — Proyecto académico</h3>
            <p className="text-sm italic">Emonical · PWA de apoyo emocional con AR</p>
            <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
              <li>Diseño e implementación de interfaz adaptativa.</li>
              <li>Integración de escenas AR y chatbot emocional.</li>
              <li>Desarrollo offline mediante service workers y APIs REST.</li>
            </ul>
          </article>
        </section>

        {/* Habilidades técnicas */}
        <section>
          <h2 className="bg-violet-700 text-white px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">
            HABILIDADES TÉCNICAS
          </h2>
          <div className="grid grid-cols-2 gap-x-6 text-sm leading-6">
            <div>
              <p><b>Front-End:</b> React, Angular, Vite, TailwindCSS, Framer Motion</p>
              <p><b>UX/UI:</b> Figma, Design Thinking, WCAG, usabilidad</p>
            </div>
            <div>
              <p><b>Back-End:</b> Laravel, Django, Node.js básico</p>
              <p><b>Herramientas:</b> Git, GitHub, Postman, Vercel</p>
            </div>
          </div>
        </section>

        {/* Intereses */}
        <section>
          <h2 className="bg-violet-700 text-white px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">
            INTERESES
          </h2>
          <p className="text-sm leading-6">
            Me apasiona la integración de <b>inteligencia artificial</b> y 
            <b>realidad aumentada</b> en aplicaciones web, buscando unir 
            tecnología, creatividad y bienestar digital. También disfruto explorar 
            <b>desarrollo multiplataforma</b> y herramientas DevOps.
          </p>
        </section>
      </main>
    </div>
  );
});

export default CVPDF;
