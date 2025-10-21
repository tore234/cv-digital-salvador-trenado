import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import CVPDF from "./CVPDF";

const DownloadPDF = () => {
  const pdfRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: pdfRef,
    documentTitle: "Salvador Trenado — CV",
    pageStyle: `
      @page { size: Letter; margin: 0; }
      body {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      .no-print { display: none !important; }
    `,
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-100 py-10">
      <CVPDF ref={pdfRef} />

      <button
        onClick={handlePrint}
        className="no-print mt-8 px-6 py-2 bg-violet-600 text-white font-medium rounded-md shadow-md 
        hover:bg-violet-700 hover:scale-[1.03] active:scale-95 transition-all duration-150"
      >
        Descargar PDF
      </button>
    </div>
  );
};

export default DownloadPDF;
