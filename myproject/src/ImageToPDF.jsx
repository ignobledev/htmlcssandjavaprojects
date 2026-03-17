


import { useState } from "react";
import { jsPDF } from "jspdf";

export default function ImageToPDF() {
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);
  const [pdfUrl, setPdfUrl] = useState("");

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setPreview(previews);
  };

  const convertToPDF = async () => {
    if (images.length === 0) {
      alert("Please upload at least one image!");
      return;
    }

    const pdf = new jsPDF();

    for (let i = 0; i < images.length; i++) {
      const file = images[i];
      const imgData = await toBase64(file);

      if (i !== 0) pdf.addPage();
      pdf.addImage(imgData, "JPEG", 10, 10, 180, 160);
    }

    const blob = pdf.output("blob");
    const url = URL.createObjectURL(blob);
    setPdfUrl(url);
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 w-full max-w-xl border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          📄 Image to PDF Converter
        </h1>

        {/* Upload Box */}
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-blue-400 rounded-xl cursor-pointer hover:bg-blue-50 transition mb-4">
          <span className="text-blue-600 font-medium">
            Click or Drag Images Here
          </span>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="hidden"
          />
        </label>

        {/* Preview */}
        {preview.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
            {preview.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="preview"
                className="w-full h-24 object-cover rounded-lg shadow-md hover:scale-105 transition"
              />
            ))}
          </div>
        )}

        {/* Convert Button */}
        <button
          onClick={convertToPDF}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold text-lg hover:scale-105 transition duration-300 shadow-lg"
        >
          Convert to PDF
        </button>

        {/* Download */}
        {pdfUrl && (
          <a
            href={pdfUrl}
            download="converted.pdf"
            className="block mt-5 text-center bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600 transition"
          >
            ⬇ Download PDF
          </a>
        )}
      </div>
    </div>
  );
}

