import { IStagedata } from "../interface";
import Papa from "papaparse";
import { CSVLink } from "react-csv";

function DownloadCSV({ apps }: { apps: IStagedata[] }) {
  const csvData = Papa.unparse(apps);

  return (
    <div className="csvDownloadHolder">
      <CSVLink data={csvData} filename="myApplications.csv">
        Download Table
      </CSVLink>
    </div>
  );
}

export default DownloadCSV;
