import React, { useState } from "react";
import "./UploadCard.css";

const UploadCard = ({ setParsedData }) => {
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const [parsed, setParsed] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setParsed(false);
    if (selectedFile) setFileURL(URL.createObjectURL(selectedFile));
  };

  const handleParse = async () => {
    if (!file) return;
    setLoading(true);
    setParsed(false);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://creditcard-parser-backend.onrender.com/upload/", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setParsedData(data);
      setParsed(true);
    } catch (err) {
      console.error(err);
      alert("Parsing failed. Make sure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setFileURL(null);
    setParsed(false);
    setLoading(false);
    setParsedData(null);
  };

  return (
    <div className="upload-card">
      {file && (
        <button className="back-btn" onClick={handleReset}>
          &#8592;
        </button>
      )}

      {!file && (
        <div className="button-group">
          <label htmlFor="fileUpload" className="btn">
            Upload PDF
            <input
              id="fileUpload"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
            />
          </label>
          <button className="btn" disabled>
            Parse Statement
          </button>
        </div>
      )}

      {file && (
        <div className="pdf-layout">
          <label htmlFor="fileUpload" className="btn top-btn">
            Upload PDF
            <input
              id="fileUpload"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
            />
          </label>

          <div className="pdf-preview">
            <iframe src={fileURL} title="PDF Preview" width="100%" height="300px" />
          </div>

          <button
            className="btn"
            onClick={handleParse}
            disabled={loading}
          >
            {loading ? "Parsing..." : "Parse Statement"}
          </button>

          {parsed && <div className="success-text">✅ Parsed Successfully!</div>}
        </div>
      )}
    </div>
  );
};

export default UploadCard;
