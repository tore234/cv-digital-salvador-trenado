import React, { useEffect, useState } from "react";

const PDFPreview = ({ pdfBlob, isLoading }) => {
  const [objectUrl, setObjectUrl] = useState(null);

  useEffect(() => {
    if (!pdfBlob) return;
    const url = URL.createObjectURL(pdfBlob);
    setObjectUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [pdfBlob]);

  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-4 text-center">
        <div className="animate-pulse text-gray-500">
          Generando previsualización...
        </div>
      </div>
    );
  }

  if (!objectUrl) return null;

  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-2 text-center">
        Previsualización del PDF
      </h2>
      <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={objectUrl}
          title="Previsualización PDF"
          className="w-full"
          style={{ height: "1100px" }}
        />
      </div>
    </div>
  );
};

export default PDFPreview;
