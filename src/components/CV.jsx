import React, { useRef, useState } from "react";
import avatar from "../assets/avatar.jpg";
import qr from "../assets/qr.png";
import { generatePDFBlob } from "../utils/pdfGenerator";
import PDFPreview from "./PDFPreview";

// ── Componentes reutilizados en el layout de escritorio y en el PDF ───────────

const CVSidebar = () => (
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

      <section className="mb-6">
        <h3 className="text-sm font-semibold border-b border-gray-700 pb-1 mb-2">
          CONTACTO
        </h3>
        <ul className="text-sm leading-6 space-y-1 text-gray-200">
          <li>📞 +52 421 105 9836</li>
          <li>📍 Tarandacuao, Gto., México C.P. 38789</li>
          <li>✉️ trenadohernadezsalvador@gmail.com</li>
          <li>🐙 github.com/tore234</li>
          <li>🔗 www.linkedin.com/in/sth10</li>
        </ul>
      </section>

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
            <p className="text-gray-400">UTOM</p>
            <p className="text-gray-400 italic">
              Proyecto: Armony (chatbot + módulos AR)
            </p>
          </div>
        </div>
      </section>
    </div>

    <div className="flex flex-col items-center mt-6">
      <img
        src={qr}
        alt="QR Portafolio"
        className="w-24 h-24 bg-white p-1 rounded-sm border border-gray-300 object-contain"
      />
      <p className="text-[9px] mt-2 text-gray-400 text-center">
        https://portafolio-reac-sth.vercel.app
      </p>
    </div>
  </aside>
);

const CVMain = () => (
  <main className="col-span-2 p-8 space-y-5 text-gray-800">
    <section>
      <h2 className="text-sm font-semibold text-violet-700 mb-2 border-b border-gray-200 pb-1">
        ACERCA DE MÍ
      </h2>
      <p className="text-sm leading-6">
        Desarrollador web especializado en <b>front-end</b> con pasión por la{" "}
        <b>experiencia de usuario</b>, el diseño visual y el desarrollo ágil.
        Busco construir interfaces intuitivas, funcionales y eficientes, donde
        la tecnología sea <b>simple y accesible</b>.
      </p>
    </section>

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
        <p className="text-sm italic">Armony · de apoyo emocional con AR</p>
        <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
          <li>UI/UX del chatbot y flujo de interacción.</li>
          <li>Integración AR con Three.js.</li>
        </ul>
      </article>
    </section>

    <section>
      <h2 className="text-sm font-semibold text-violet-700 mb-2 border-b border-gray-200 pb-1">
        HABILIDADES TÉCNICAS
      </h2>
      <div className="grid grid-cols-2 gap-x-8 text-sm leading-6">
        <div>
          <p><b>Front-End:</b> React, Angular, Vite, TailwindCSS</p>
          <p><b>UX/UI:</b> Figma, Design Thinking, WCAG</p>
        </div>
        <div>
          <p><b>Back-End:</b> Laravel, Django, Node.js básico</p>
          <p><b>Herramientas:</b> Git, GitHub, Vercel, Postman</p>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-sm font-semibold text-violet-700 mb-2 border-b border-gray-200 pb-1">
        HABILIDADES BLANDAS
      </h2>
      <ul className="list-disc pl-5 text-sm space-y-1">
        <li>Adaptabilidad y aprendizaje continuo.</li>
        <li>Comunicación efectiva y trabajo en equipo.</li>
        <li>Resolución de problemas con pensamiento crítico.</li>
        <li>Gestión del tiempo y responsabilidad.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-sm font-semibold text-violet-700 mb-2 border-b border-gray-200 pb-1">
        IDIOMAS
      </h2>
      <ul className="list-disc pl-5 text-sm space-y-1">
        <li>Español — Nativo</li>
        <li>Inglés — Intermedio (lectura técnica y laboral)</li>
      </ul>
    </section>

    <section>
      <h2 className="text-sm font-semibold text-violet-700 mb-2 border-b border-gray-200 pb-1">
        INTERESES
      </h2>
      <p className="text-sm leading-6">
        Apasionado por las <b>tecnologías emergentes</b>, el{" "}
        <b>software accesible</b> que promueva bienestar digital y desarrollo
        humano. Interesado en proyectos que unan tecnología con{" "}
        <b>impacto social.</b>
      </p>
    </section>
  </main>
);

// ── Componente principal ──────────────────────────────────────────────────────

const CV = () => {
  const cvRef = useRef();
  const [pdfBlob, setPdfBlob] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGeneratePDF = async () => {
    if (isGenerating) return;
    setIsGenerating(true);
    try {
      const blob = await generatePDFBlob(cvRef.current);
      setPdfBlob(blob);
    } catch (error) {
      alert("Error al generar el PDF");
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadPDF = () => {
    if (!pdfBlob) return;
    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Salvador-Trenado-CV.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900">

      {/* ── PDF SOURCE: siempre 816×1056, fuera de pantalla ──────────────── */}
      <div
        ref={cvRef}
        aria-hidden="true"
        className="grid grid-cols-3 overflow-hidden bg-white"
        style={{ position: "fixed", left: "-9999px", top: 0, width: "816px", height: "1056px" }}
      >
        <CVSidebar />
        <CVMain />
      </div>

      {/* ── VISTA ESCRITORIO (≥ 1024px) ───────────────────────────────────── */}
      <div className="hidden lg:flex flex-col items-center py-10 px-4">
        <div className="bg-white w-[816px] h-[1056px] grid grid-cols-3 rounded-md overflow-hidden shadow-md border border-gray-200">
          <CVSidebar />
          <CVMain />
        </div>
      </div>

      {/* ── VISTA MÓVIL / TABLET (< 1024px) ──────────────────────────────── */}
      <div className="lg:hidden max-w-2xl mx-auto px-4 py-8 space-y-4">

        {/* Header */}
        <div className="bg-gray-900 text-white rounded-2xl p-5 flex gap-4 items-start shadow-md">
          <img
            src={avatar}
            alt="Salvador Trenado"
            className="w-20 h-24 object-cover rounded-xl border-2 border-white shrink-0"
          />
          <div className="min-w-0">
            <h1 className="text-xl font-bold">Salvador Trenado</h1>
            <p className="text-[11px] tracking-widest text-gray-400 mt-0.5">
              DESARROLLADOR WEB
            </p>
            <ul className="mt-3 text-sm space-y-1 text-gray-300">
              <li>📞 +52 421 105 9836</li>
              <li>📍 Tarandacuao, Gto., México</li>
              <li className="break-all text-xs">✉️ trenadohernadezsalvador@gmail.com</li>
              <li>🐙 github.com/tore234</li>
              <li>🔗 linkedin.com/in/sth10</li>
            </ul>
          </div>
        </div>

        {/* Acerca de mí */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
          <h2 className="text-xs font-bold text-violet-700 uppercase tracking-wide mb-2 border-b border-gray-100 pb-2">
            Acerca de mí
          </h2>
          <p className="text-sm leading-6 text-gray-700">
            Desarrollador web especializado en <b>front-end</b> con pasión por la{" "}
            <b>experiencia de usuario</b>, el diseño visual y el desarrollo ágil.
            Busco construir interfaces intuitivas, funcionales y eficientes,
            donde la tecnología sea <b>simple y accesible</b>.
          </p>
        </div>

        {/* Experiencia */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
          <h2 className="text-xs font-bold text-violet-700 uppercase tracking-wide mb-3 border-b border-gray-100 pb-2">
            Experiencia Laboral
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-[11px] text-gray-400">2024 (abr–ago)</p>
              <h3 className="font-semibold text-gray-800">Desarrollador Web — Estadías</h3>
              <p className="text-sm text-gray-500">Softim Devs · SETEC Maravatío</p>
              <ul className="list-disc pl-5 text-sm mt-1 space-y-0.5 text-gray-700">
                <li>Diseño responsivo e integración de formularios dinámicos.</li>
                <li>Configuración de dominio, SSL, hosting y despliegue.</li>
                <li>Optimización +90% en Lighthouse.</li>
                <li>Documentación técnica con GitHub.</li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] text-gray-400">2023–2024</p>
              <h3 className="font-semibold text-gray-800">Front-End Developer — Proyecto académico</h3>
              <p className="text-sm italic text-gray-500">Armony · apoyo emocional con AR</p>
              <ul className="list-disc pl-5 text-sm mt-1 space-y-0.5 text-gray-700">
                <li>UI/UX del chatbot y flujo de interacción.</li>
                <li>Integración AR con Three.js.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Educación */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
          <h2 className="text-xs font-bold text-violet-700 uppercase tracking-wide mb-3 border-b border-gray-100 pb-2">
            Educación
          </h2>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold text-gray-800">2024–Presente</p>
              <p className="text-gray-700">Ingeniería en Desarrollo y Gestión de Software</p>
              <p className="text-gray-400">UTOM</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">2022–2024</p>
              <p className="text-gray-700">TSU en Desarrollo de Software Multiplataforma</p>
              <p className="text-gray-400">UTOM</p>
              <p className="text-gray-400 italic">Proyecto: Armony (chatbot + módulos AR)</p>
            </div>
          </div>
        </div>

        {/* Habilidades técnicas */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
          <h2 className="text-xs font-bold text-violet-700 uppercase tracking-wide mb-3 border-b border-gray-100 pb-2">
            Habilidades Técnicas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            <div className="space-y-1">
              <p><b>Front-End:</b> React, Angular, Vite, TailwindCSS</p>
              <p><b>UX/UI:</b> Figma, Design Thinking, WCAG</p>
            </div>
            <div className="space-y-1">
              <p><b>Back-End:</b> Laravel, Django, Node.js</p>
              <p><b>Herramientas:</b> Git, GitHub, Vercel, Postman</p>
            </div>
          </div>
        </div>

        {/* Blandas + Idiomas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
            <h2 className="text-xs font-bold text-violet-700 uppercase tracking-wide mb-2 border-b border-gray-100 pb-2">
              Habilidades Blandas
            </h2>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
              <li>Adaptabilidad y aprendizaje continuo.</li>
              <li>Comunicación efectiva en equipo.</li>
              <li>Resolución de problemas.</li>
              <li>Gestión del tiempo.</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
            <h2 className="text-xs font-bold text-violet-700 uppercase tracking-wide mb-2 border-b border-gray-100 pb-2">
              Idiomas
            </h2>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
              <li>Español — Nativo</li>
              <li>Inglés — Intermedio</li>
            </ul>
          </div>
        </div>

        {/* Intereses */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
          <h2 className="text-xs font-bold text-violet-700 uppercase tracking-wide mb-2 border-b border-gray-100 pb-2">
            Intereses
          </h2>
          <p className="text-sm leading-6 text-gray-700">
            Apasionado por las <b>tecnologías emergentes</b>, el{" "}
            <b>software accesible</b> que promueva bienestar digital y desarrollo
            humano. Interesado en proyectos que unan tecnología con{" "}
            <b>impacto social.</b>
          </p>
        </div>

        {/* QR en móvil */}
        <div className="bg-gray-900 rounded-2xl p-5 flex flex-col items-center shadow-md">
          <img
            src={qr}
            alt="QR Portafolio"
            className="w-24 h-24 bg-white p-1 rounded-sm border border-gray-300 object-contain"
          />
          <p className="text-[10px] mt-2 text-gray-400 text-center">
            https://portafolio-reac-sth.vercel.app
          </p>
        </div>

      </div>

      {/* ── BOTONES Y PREVIEW (comunes para ambas vistas) ─────────────────── */}
      <div className="flex flex-col items-center pb-10 px-4 gap-4">
        <div className="flex gap-3 flex-wrap justify-center">
          <button
            onClick={handleGeneratePDF}
            disabled={isGenerating}
            className="px-5 py-2 bg-violet-700 text-white font-medium rounded-md shadow
              hover:bg-violet-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? "Generando..." : "👁️ Previsualizar PDF"}
          </button>
          {pdfBlob && (
            <button
              onClick={handleDownloadPDF}
              className="px-5 py-2 bg-gray-800 text-white font-medium rounded-md shadow
                hover:bg-gray-900 transition-all"
            >
              📄 Descargar PDF
            </button>
          )}
        </div>
        <PDFPreview pdfBlob={pdfBlob} isLoading={isGenerating} />
      </div>

    </div>
  );
};

export default CV;
