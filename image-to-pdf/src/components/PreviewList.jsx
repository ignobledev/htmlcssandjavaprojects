function PreviewList({ images }) {
  return (
    <div className="preview-container">
      {images.map((img, index) => (
        <img
          key={index}
          src={img.url}
          alt="preview"
          className="preview-image"
        />
      ))}
    </div>
  );
}

export default PreviewList;