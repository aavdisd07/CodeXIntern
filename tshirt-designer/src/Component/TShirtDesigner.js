import React, { useState } from "react";
import { toPng } from "html-to-image";

function TShirtDesigner() {
  const [design, setDesign] = useState(null);
  const [position, setPosition] = useState({ top: 100, left: 75 });
  const [size, setSize] = useState(150);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setDesign(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    const tshirtElement = document.getElementById("tshirt-preview");
    toPng(tshirtElement, { backgroundColor: "white" })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "tshirt-design.png";
        link.click();
      })
      .catch((err) => console.error("Error downloading image:", err));
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Design Your T-shirt</h2>
      <input type="file" onChange={handleUpload} accept="image/*" />

      {/* T-shirt mockup with overlayed design */}
      <div
        id="tshirt-preview"
        style={{
          width: "300px",
          height: "400px",
          margin: "20px auto",
          position: "relative",
          backgroundImage: "url('/tshirt-mockup.png')", // Sample T-shirt mockup as background
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "1px solid #ddd",
        }}
      >
        {design && (
          <img
            src={design}
            alt="Design Preview"
            style={{
              position: "absolute",
              top: `${position.top}px`,
              left: `${position.left}px`,
              width: `${size}px`,
              height: "auto",
              cursor: "move",
            }}
            draggable="true"
            onDrag={(e) => {
              setPosition({
                top: e.clientY - e.target.height / 2,
                left: e.clientX - e.target.width / 2,
              });
            }}
          />
        )}
      </div>

      {/* Controls for resizing and downloading */}
      <div style={{ marginTop: "10px" }}>
        {design && (
          <>
            <button onClick={() => setSize(size + 10)}>Increase Size</button>
            <button onClick={() => setSize(size - 10)} style={{ marginLeft: "10px" }}>
              Decrease Size
            </button>
            <button
              onClick={handleDownload}
              style={{
                padding: "10px 20px",
                marginTop: "10px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginLeft: "10px",
              }}
            >
              Download Preview
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TShirtDesigner;
