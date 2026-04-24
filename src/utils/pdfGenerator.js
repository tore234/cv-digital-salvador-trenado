import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const generatePDFBlob = async (element) => {
  try {
    // Captura el elemento con alta resolución
    const canvas = await html2canvas(element, {
      scale: 3, // Triplicamos la escala para mejor calidad
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      logging: false,
      windowWidth: 816,
      windowHeight: 1056,
    });

    // Dimensiones A4 en mm
    const imgWidth = 210; // A4 width en mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Crear PDF con dimensiones A4
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.95);
    pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);

    // Retornar como Blob para previsualización y descarga
    return pdf.output("blob");
  } catch (error) {
    console.error("Error al generar PDF:", error);
    throw error;
  }
};

export const downloadPDF = async (element, filename = "document.pdf") => {
  try {
    const blob = await generatePDFBlob(element);
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error al descargar PDF:", error);
  }
};
