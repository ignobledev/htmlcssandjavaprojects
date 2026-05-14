function ImageUploader({ images, setImages }) {
  const handleChange = (e) => {
    const files = Array.from(e.target.files);

    const imageUrls = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setImages([...images, ...imageUrls]);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleChange}
      />
    </div>
  );
}

export default ImageUploader;