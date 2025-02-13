import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button"; 
import Text from "../components/Text"; 
import { useSearchParams } from "react-router-dom";
import { toJpeg } from "html-to-image"; // ✅ Use html-to-image instead of react-component-export-image

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeref = useRef(null);

  const addText = () => {
    setCount(count + 1);
  };

  // ✅ New save function using html-to-image
  const saveMeme = () => {
    if (!memeref.current) return;

    toJpeg(memeref.current, { quality: 0.95 }) // Convert div to JPEG
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "meme.jpeg";
        link.click();
      })
      .catch((err) => console.error("Error saving image:", err));
  };

  return (
    <div ref={memeref} className="meme mt-5 mb-5" style={{ display: "flex", flexDirection: "column" }}> 
      <img src={params.get("url")} alt="Meme" width="250px" />
      <Button style={{ width: "150px", margin: "50px" }} onClick={addText}>
        Add Text
      </Button>

      {Array(count).fill(0).map((_, index) => (
        <Text key={index} />
      ))}

      {/* ✅ New Save Button */}
      <Button 
        style={{ width: "150px", margin: "50px" }} 
        variant="success" 
        onClick={saveMeme}
      >
        Save
      </Button>
    </div>
  );
};

export default EditPage;
