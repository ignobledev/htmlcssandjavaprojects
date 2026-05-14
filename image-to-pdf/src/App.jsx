
import { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import PreviewList from "./components/PreviewList";
import ConvertButton from "./components/ConvertButton";

import './App.css'

function App() {
const[images,setImages] = useState([]);

  return (
    <>
  

  
    <div className="container">
      <h1>Image to PDF Converter</h1>

      <ImageUploader images={images} setImages={setImages} />

      <PreviewList images={images} />

      <ConvertButton images={images} />
    </div>


    </>
  );
}

export default App
