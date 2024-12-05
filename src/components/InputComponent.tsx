import React, {
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useState,
} from "react";
import "../styles/inputComponent.css";
import { postNewApp } from "../services/appCalls";
import { IStagedata } from "../interface";

function InputComponent({
  rerun,
  setRerun,
  devMode,
  apps,
  setApps,
}: {
  rerun: number;
  setRerun: Dispatch<SetStateAction<number>>;
  devMode: boolean;
  apps: IStagedata[];
  setApps: Dispatch<SetStateAction<IStagedata[]>>;
}) {
  const [nameInput, setNameInput] = useState<string>("");
  const [locationInput, setLocationInput] = useState<string>("");

  const handleNameInput = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setNameInput(target.value);
  };

  const handleLocationInput = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setLocationInput(target.value);
  };

  const handleAddClick = async () => {
    if (nameInput === "" || locationInput === "") {
      return;
    }

    // no devmode version does not use database hence we just update state
    if (devMode) {
      await postNewApp(nameInput, locationInput);
      setRerun(rerun + 1);
      setNameInput("");
      setLocationInput("");
    } else {
      const newApp: IStagedata = {
        companyName: nameInput,
        location: locationInput,
        applyDate: new Date(),
        endDate: null,
        status: "Applied",
        comment: null,
      };

      const shallowCopy = [...apps];
      shallowCopy.push(newApp);
      setApps(shallowCopy);
      setNameInput("");
      setLocationInput("");
    }
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      await handleAddClick();
    }
  };

  return (
    <div className="inputDiv">
      <div className="inputHolder">
        <label>Company name</label>
        <input
          type="text"
          minLength={1}
          maxLength={30}
          onKeyDown={(e) => handleKeyDown(e)}
          value={nameInput}
          onChange={(e) => handleNameInput(e)}
        ></input>
      </div>
      <div className="inputHolder">
        <label>Location</label>
        <input
          type="text"
          minLength={1}
          maxLength={30}
          value={locationInput}
          onKeyDown={(e) => handleKeyDown(e)}
          onChange={(e) => handleLocationInput(e)}
        ></input>
      </div>
      <button onClick={handleAddClick} className="addButton">
        Add
      </button>
    </div>
  );
}

export default InputComponent;
