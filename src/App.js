import React, { useState } from "react";
import UploadCard from "./components/UploadCard";
import ResultCard from "./components/ResultCard";
import "./App.css";

function App() {
  const [parsedData, setParsedData] = useState(null);
  const [fileURL, setFileURL] = useState(null); 

  return (
    <div className="app-container">
      <div className={`left-panel ${fileURL ? "has-pdf" : ""}`}>
        <UploadCard setParsedData={setParsedData} setFileURL={setFileURL} />
      </div>

      <div className="right-panel">
        {parsedData ? (
          <ResultCard data={parsedData} />
        ) : (
          <div className="placeholder">
            <p>Your parsed details will appear here after parsing.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
