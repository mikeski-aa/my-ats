import { useEffect, useState } from "react";
import "./App.css";
import IndividualItem from "./components/IndividualItem";
import InputComponent from "./components/InputComponent";
import { applications } from "./utils/tempData";
import { IStagedata } from "./interface";
import { getAllAppData } from "./services/appCalls";

function App() {
  enum Theme {
    Light = "light",
    Dark = "dark",
  }

  const [apps, setApps] = useState<IStagedata[]>([]);
  const [rerun, setRerun] = useState<number>(0);
  const [theme, setTheme] = useState<string>(Theme.Light);

  useEffect(() => {
    const getData = async () => {
      const newData: IStagedata[] = await getAllAppData();
      setApps(newData);
    };

    getData();
  }, [rerun]);

  useEffect(() => {
    const item = localStorage.getItem("theme");
    console.log(item);
  }, []);

  return (
    <div className="mainContent">
      <InputComponent rerun={rerun} setRerun={setRerun} />
      <div className="itemHeaders">
        <div className="itemHeaderInfo name">Company Name</div>
        <div className="itemHeaderInfo">Applied date</div>
        <div className="itemHeaderInfo">Response date</div>
        <div className="itemHeaderInfo">Location</div>
        <div className="itemHeaderInfo">Status</div>
        <div className="itemHeaderInfo">Remove</div>
      </div>
      <div className="appHolder">
        {apps.map((item, index) => (
          <IndividualItem
            application={item}
            key={index}
            rerun={rerun}
            setRerun={setRerun}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
