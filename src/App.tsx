import { useEffect, useState } from "react";
import "./App.css";
import IndividualItem from "./components/IndividualItem";
import InputComponent from "./components/InputComponent";
import { IStagedata } from "./interface";
import { getAllCodingApps, getAllRecApps } from "./services/appCalls";
import MoonIcon from "../src/assets/moon.svg?react";
import SunIcon from "../src/assets/sun.svg?react";
import ContactDetailsHolder from "./components/ContactDetailsHolder";
import DownloadCSV from "./components/CSVDownload";
import CSVParser from "./components/CSVParser";
import TutorialModal from "./components/TutorialModal";

function App() {
  const [apps, setApps] = useState<IStagedata[]>([]);
  const [rerun, setRerun] = useState<number>(0);
  const [theme, setTheme] = useState<string>();
  const [modal, setModal] = useState<boolean>(false);
  // true === coding, false == rec
  const [appMode, setAppMode] = useState<boolean>(true);

  // devMode - dev mode means using local psql db and other functionality that doesnt work for non-local users
  // the devmode
  const devMode = true;

  enum Theme {
    Light = "light",
    Dark = "dark",
  }

  useEffect(() => {
    if (devMode) {
      if (appMode) {
        const getData = async () => {
          const newData: IStagedata[] = await getAllCodingApps();
          setApps(newData);
        };
        getData();
      } else {
        const getData = async () => {
          const newData: IStagedata[] = await getAllRecApps();
          setApps(newData);
        };
        getData();
      }
    }
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

  const handleModalTutorial = () => {
    setModal(true);
  };

  const handleModeToggle = () => {
    setAppMode(!appMode);
    setRerun(rerun + 1);
  };

  return (
    <div className="mainContent">
      <button className="themeSwitch" onClick={handleThemeSwitch}>
        {theme === Theme.Light ? (
          <MoonIcon className="iconSvg" />
        ) : (
          <SunIcon className="iconSvg sun" />
        )}
      </button>
      <div className="buttonHolderTop">
        <DownloadCSV apps={apps} />
        <CSVParser setApps={setApps} />
        <button className="toggleMode" onClick={handleModeToggle}>
          {appMode ? "Frontend roles" : "Recruitment roles"}
        </button>
      </div>
      {devMode ? null : (
        <button className="howItWorksBtn" onClick={handleModalTutorial}>
          How to use the tracker
        </button>
      )}
      <InputComponent
        rerun={rerun}
        setRerun={setRerun}
        devMode={devMode}
        apps={apps}
        setApps={setApps}
        appMode={appMode}
      />

      {modal ? <TutorialModal setModal={setModal} /> : null}
      {devMode ? <ContactDetailsHolder /> : null}
      <div className="itemHeaders">
        <div className="itemHeaderInfo name">Company Name</div>
        <div className="itemHeaderInfo">Applied date</div>
        <div className="itemHeaderInfo">Response date</div>
        <div className="itemHeaderInfo">Days elapsed</div>
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
            apps={apps}
            setApps={setApps}
            devMode={devMode}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
