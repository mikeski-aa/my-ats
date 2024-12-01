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
      <div>Hello world</div>
      <InputComponent apps={apps} setApps={setApps} />
      <div className="itemHeaders">
        <div className="itemInfo">Company Name</div>
        <div className="itemInfo">Applied date</div>
        <div className="itemInfo">Response date</div>
        <div className="itemInfo">Comments</div>
        <div className="itemInfo">Location</div>
        <div className="itemInfo">Status</div>
      </div>
      {apps.map((item, index) => (
        <IndividualItem application={item} key={index} />
      ))}
    </div>
  );
}

export default App;
