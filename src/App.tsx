import { useState } from "react";
import "./App.css";
import IndividualItem from "./components/IndividualItem";
import InputComponent from "./components/InputComponent";
import { applications } from "./utils/tempData";
import { IStagedata } from "./interface";

function App() {
  const [apps, setApps] = useState<IStagedata[]>(applications);

  return (
    <div className="mainContent">
      <div>Hello world</div>
      <InputComponent apps={apps} setApps={setApps} />
      {apps.map((item, index) => (
        <IndividualItem application={item} key={index} />
      ))}
    </div>
  );
}

export default App;
