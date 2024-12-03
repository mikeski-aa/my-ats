import { useEffect, useState } from "react";
import "./App.css";
import IndividualItem from "./components/IndividualItem";
import InputComponent from "./components/InputComponent";
import { IStagedata } from "./interface";
import { getAllAppData } from "./services/appCalls";
import MoonIcon from "../src/assets/moon.svg?react";
import SunIcon from "../src/assets/sun.svg?react";

function App() {
  enum Theme {
    Light = "light",
    Dark = "dark",
  }

  const [apps, setApps] = useState<IStagedata[]>([]);
  const [rerun, setRerun] = useState<number>(0);
  const [theme, setTheme] = useState<string>();

  useEffect(() => {
    const getData = async () => {
      const newData: IStagedata[] = await getAllAppData();
      setApps(newData);
    };

    getData();
  }, [rerun]);

  // get from localstorage else set as default light
  useEffect(() => {
    const item = localStorage.getItem("theme");
    if (item) {
      setTheme(item);
    } else {
      setTheme(Theme.Light);
    }
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  // set setting in localstorage
  const handleThemeSwitch = () => {
    if (theme === Theme.Light) {
      setTheme(Theme.Dark);
      localStorage.setItem("theme", Theme.Dark);
    } else {
      setTheme(Theme.Light);
      localStorage.setItem("theme", Theme.Light);
    }
  };

  return (
    <div className="mainContent">
      <button className="themeSwitch" onClick={handleThemeSwitch}>
        {theme === Theme.Light ? (
          <MoonIcon className="iconSvg" />
        ) : (
          <SunIcon className="iconSvg" />
        )}
      </button>
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
