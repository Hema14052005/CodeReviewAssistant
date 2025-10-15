import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [file, setFile] = useState(null);
  const [report, setReport] = useState("");

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:5000/api/review", {
        method: "POST",
        body: formData
      });

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();
      setReport(data.report);
    } catch (err) {
      console.error(err);
      alert("Error uploading file");
    }
  };

  return (
    <div className="container">
      <h1>Code Review Assistant</h1>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload & Review</button>

      {report && (
        <div className="report">
          <h2>AI Review Report:</h2>
          <pre>{report}</pre>
        </div>
      )}
    </div>
  );
}
