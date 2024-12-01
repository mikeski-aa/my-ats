import { useEffect, useState } from "react";
import "./App.css";
import IndividualItem from "./components/IndividualItem";
import InputComponent from "./components/InputComponent";
import { applications } from "./utils/tempData";
import { IStagedata } from "./interface";
import { getAllAppData } from "./services/appCalls";

function App() {
  const [apps, setApps] = useState<IStagedata[]>(applications);

  useEffect(() => {
    const getData = async () => {
      const newData: IStagedata[] = await getAllAppData();

      setApps(newData);
    };

    getData();
  }, []);

  return (
    <div className="mainContent">
      <InputComponent apps={apps} setApps={setApps} />
      <div className="itemHeaders">
        <div className="itemHeaderInfo">Company Name</div>
        <div className="itemHeaderInfo">Applied date</div>
        <div className="itemHeaderInfo">Response date</div>
        <div className="itemHeaderInfo">Comments</div>
        <div className="itemHeaderInfo">Location</div>
        <div className="itemHeaderInfo">Status</div>
        <div className="itemHeaderInfo">Remove</div>
      </div>
      {apps.map((item, index) => (
        <IndividualItem application={item} key={index} />
      ))}
    </div>
  );
}

export default App;
