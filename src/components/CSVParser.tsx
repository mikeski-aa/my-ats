import Papa from "papaparse";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import "../styles/csvParser.css";
import { ICSVData, IStagedata } from "../interface";

function CSVParser({
  setApps,
}: {
  setApps: Dispatch<SetStateAction<IStagedata[]>>;
}) {
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e?.target.files[0];

      Papa.parse<ICSVData>(file, {
        complete: (results) => {
          console.log(results);

          const convertedData: IStagedata[] = results.data.map(
            (item: ICSVData) => ({
              ...item,
              applyDate: new Date(item.applyDate),
              endDate: item.endDate ? new Date(item.endDate) : null,
              id: item.id ? +item.id : undefined,
            })
          );

          setApps(convertedData);
        },
        header: true,
      });
    }
  };
  return (
    <div className="parserHolder">
      <label htmlFor="parserInput" className="clickButtonUpload">
        Upload
      </label>
      <input
        id="parserInput"
        type="file"
        accept=".csv"
        className="fileInput"
        onChange={(e) => handleFileUpload(e)}
      ></input>
    </div>
  );
}

export default CSVParser;
