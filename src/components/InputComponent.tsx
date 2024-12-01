import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";
import "../styles/inputComponent.css";
import { IStagedata } from "../interface";

function InputComponent({
  apps,
  setApps,
}: {
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

  const createNewAppObject = () => {
    const newApp: IStagedata = {
      companyName: nameInput,
      applyDate: new Date(),
      endDate: null,
      stage: "Applied",
      comment: null,
      location: locationInput,
    };

    return newApp;
  };

  const handleAddClick = () => {
    const shallowCopy = [...apps];
    shallowCopy.push(createNewAppObject());

    setApps(shallowCopy);
    setNameInput("");
    setLocationInput("");
  };

  return (
    <div className="inputDiv">
      <div className="inputHolder">
        <label>Company name</label>
        <input
          type="text"
          minLength={1}
          maxLength={30}
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
          onChange={(e) => handleLocationInput(e)}
        ></input>
      </div>
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}

export default InputComponent;
