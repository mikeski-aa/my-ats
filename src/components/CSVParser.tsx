import Papa from "papaparse";
import { ChangeEvent } from "react";
import "../styles/csvParser.css";

function CSVParser() {
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e?.target.files[0];

      Papa.parse(file, {
        complete: (results) => {
          console.log(results.data);
        },
      });
    }
  };
  return (
    <div className="parserHolder">
      <label htmlFor="parserInput">Upload</label>
      <input
        type="file"
        accept=".csv"
        className="fileInput"
        onChange={(e) => handleFileUpload(e)}
      ></input>
    </div>
  );
}

export default CSVParser;
