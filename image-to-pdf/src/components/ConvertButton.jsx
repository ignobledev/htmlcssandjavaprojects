import jsPDF from "jspdf";

function ConvertButton({ images }) {
  const convertToPDF = () => {
    if (images.length === 0) return;

    const pdf = new jsPDF();

    images.forEach((img, index) => {
      if (index !== 0) {
        pdf.addPage();
      }

      pdf.addImage(img.url, "JPEG", 10, 10, 180, 160);
    });

    pdf.save("converted.pdf");
  };

  return (
    <button onClick={convertToPDF}>
      Convert to PDF
    </button>
  );
}

export default ConvertButton;