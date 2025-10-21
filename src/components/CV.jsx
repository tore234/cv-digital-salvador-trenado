import React, { useRef } from "react";
import avatar from "../assets/avatar.jpg";
import qr from "../assets/qr.png";
import html2pdf from "html2pdf.js";

const CV = () => {
  const cvRef = useRef();

  const handleDownloadPDF = () => {
    const element = cvRef.current;
    element.style.width = "816px";
    element.style.height = "1056px";
    element.style.margin = "0 auto";
    element.style.background = "#ffffff";

    const options = {
      margin: 0,
      filename: "Salvador-Trenado—CV.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 2.5,
        useCORS: true,
        scrollY: 0,
        windowWidth: 816,
        windowHeight: 1056,
      },
      jsPDF: {
        unit: "px",
        format: [816, 1056],
        orientation: "portrait",
      },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans text-gray-900 py-10">
      {/* === CONTENEDOR DEL CV === */}
      <div
        ref={cvRef}
        className="bg-white w-[816px] h-[1056px] max-w-full border border-gray-300 grid md:grid-cols-3 rounded-md overflow-hidden shadow-md"
      >
        {/* === PANEL IZQUIERDO === */}
        <aside className="bg-gray-900 text-white flex flex-col justify-between p-8">
          <div>
            <div className="flex flex-col items-center mb-6">
              <img
                src={avatar}
                alt="Salvador Trenado"
                className="w-28 h-32 object-cover rounded-md border-2 border-white mb-3"
              />
              <h1 className="text-lg font-semibold text-center leading-tight">
                Salvador Trenado
              </h1>
              <p className="text-[11px] tracking-widest text-gray-400 mt-1">
                DESARROLLADOR WEB
              </p>
            </div>

            {/* CONTACTO */}
            <section className="mb-6">
              <h3 className="text-sm font-semibold border-b border-gray-700 pb-1 mb-2">
                CONTACTO
              </h3>
              <ul className="text-sm leading-6 space-y-1 text-gray-200">
                <li>📞 +52 421 105 9838</li>
                <li>📍 Tarandacuao, Gto., México</li>
                <li>✉️ trenadohernadezsalvador@gmail.com</li>
                <li>🐙 github.com/tore234</li>
                <li>🔗 linkedin.com/in/salvador-trenado-hernández</li>
              </ul>
            </section>

            {/* EDUCACIÓN */}
            <section>
              <h3 className="text-sm font-semibold border-b border-gray-700 pb-1 mb-2">
                EDUCACIÓN
              </h3>
              <div className="text-sm space-y-3 leading-6">
                <div>
                  <p className="font-semibold text-white">2024–Presente</p>
                  <p>Ingeniería en Desarrollo y Gestión de Software</p>
                  <p className="text-gray-400">UTOM</p>
                </div>
                <div>
                  <p className="font-semibold text-white">2022–2024</p>
                  <p>TSU en Desarrollo de Software Multiplataforma</p>
                  <p className="text-gray-400 italic">
                    Proyecto: Emonical (chatbot + PWA + módulos AR)
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* QR */}
          <div className="flex flex-col items-center mt-6">
            <img
              src={qr}
              alt="QR Portafolio"
              className="w-24 h-24 bg-white p-1 rounded-sm border border-gray-300 object-contain"
            />
            <p className="text-[9px] mt-2 text-gray-400 text-center break-all">
              https://portafolio-react-sth.vercel.app/contacto
            </p>
          </div>
        </aside>

        {/* === PANEL PRINCIPAL === */}
        <main className="col-span-2 p-8 space-y-8 text-gray-800">
          {/* ACERCA DE MÍ */}
          <section>
            <h2 className="text-sm font-semibold text-violet-700 mb-2 border-b border-gray-200 pb-1">
              ACERCA DE MÍ
            </h2>
            <p className="text-sm leading-6">
              Desarrollador web especializado en <b>front-end</b> con pasión por la{" "}
              <b>experiencia de usuario</b>, el diseño visual y el desarrollo ágil.
              Busco construir interfaces intuitivas, funcionales y eficientes,
              donde la tecnología sea <b>simple y accesible</b>.
            </p>
          </section>

          {/* LAS SECCIONES DEBAJO SOLO SE VEN EN DESKTOP */}
          <div className="hidden md:block">
            {/* EXPERIENCIA */}
            <section>
              <h2 className="text-sm font-semibold text-violet-700 mb-2 border-b border-gray-200 pb-1">
                EXPERIENCIA LABORAL
              </h2>

              <article className="mb-4">
                <p className="text-[11px] text-gray-500">2024 (abr–ago)</p>
                <h3 className="font-semibold">Desarrollador Web — Estadías</h3>
                <p className="text-sm">
                  Softim Devs (Remoto/Maravatío) ·{" "}
                  <a
                    href="https://setecmaravatio.com"
                    className="text-violet-700 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SETEC Maravatío
                  </a>
                </p>
                <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
                  <li>Diseño responsivo e integración de formularios dinámicos.</li>
                  <li>Configuración de dominio, SSL, hosting y despliegue.</li>
                  <li>Optimización +90% en Lighthouse.</li>
                  <li>Documentación técnica y control con GitHub.</li>
                </ul>
              </article>

              <article>
                <p className="text-[11px] text-gray-500">2023–2024</p>
                <h3 className="font-semibold">Front-End Developer — Proyecto académico</h3>
                <p className="text-sm italic">
                  Emonical · PWA de apoyo emocional con AR
                </p>
                <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
                  <li>UI/UX del chatbot y flujo de interacción.</li>
                  <li>Integración AR con Three.js y ARCore.</li>
                  <li>Implementación offline mediante service workers.</li>
                </ul>
              </article>
            </section>

            {/* HABILIDADES */}
            <section>
              <h2 className="text-sm font-semibold text-violet-700 mb-2 border-b border-gray-200 pb-1">
                HABILIDADES TÉCNICAS
              </h2>
              <div className="grid grid-cols-2 gap-x-8 text-sm leading-6">
                <div>
                  <p>
                    <b>Front-End:</b> React, Angular, Vite, TailwindCSS
                  </p>
                  <p>
                    <b>UX/UI:</b> Figma, Design Thinking, WCAG
                  </p>
                </div>
                <div>
                  <p>
                    <b>Back-End:</b> Laravel, Django, Node.js básico
                  </p>
                  <p>
                    <b>Herramientas:</b> Git, GitHub, Vercel, Postman
                  </p>
                </div>
              </div>
            </section>

            {/* IDIOMAS */}
            <section>
              <h2 className="text-sm font-semibold text-violet-700 mb-2 border-b border-gray-200 pb-1">
                IDIOMAS
              </h2>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Español — Nativo</li>
                <li>Inglés — Intermedio (lectura técnica y laboral)</li>
              </ul>
            </section>

            {/* INTERESES */}
            <section>
              <h2 className="text-sm font-semibold text-violet-700 mb-2 border-b border-gray-200 pb-1">
                INTERESES
              </h2>
              <p className="text-sm leading-6">
                Apasionado por <b>IA aplicada</b>, <b>realidad aumentada</b> y{" "}
                <b>software accesible</b> que promueva bienestar digital y desarrollo humano.
              </p>
            </section>
          </div>
        </main>
      </div>

      {/* BOTÓN PDF */}
      <button
        onClick={handleDownloadPDF}
        className="no-print mt-8 px-6 py-2 bg-violet-700 text-white font-medium rounded-md shadow 
        hover:bg-violet-800 transition-all duration-150"
      >
        📄 Descargar CV completo en PDF
      </button>
    </div>
  );
};

export default CV;
