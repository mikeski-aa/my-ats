import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";
import { IDetails } from "../interface";

function DetailsInput({
  setShowEdit,
}: {
  setShowEdit: Dispatch<SetStateAction<boolean>>;
}) {
  const [details, setDetails] = useState<IDetails>({
    email: "",
    phoneNumber: "",
    linkedin: "",
    portfolio: "",
    github: "",
  });

  const handleSaveClick = () => {
    setShowEdit(false);
  };

  const handleInputType = (e: SyntheticEvent, inputid: number) => {
    const target = e.target as HTMLInputElement;

    switch (inputid) {
      case 0:
        setDetails((prevDetails) => ({ ...prevDetails, email: target.value }));
        break;
      case 1:
        setDetails((prevDetails) => ({
          ...prevDetails,
          phoneNumber: target.value,
        }));
        break;
      case 2:
        setDetails((prevDetails) => ({
          ...prevDetails,
          linkedin: target.value,
        }));
        break;
      case 3:
        setDetails((prevDetails) => ({
          ...prevDetails,
          portfolio: target.value,
        }));
        break;
      case 4:
        setDetails((prevDetails) => ({ ...prevDetails, github: target.value }));
        break;
    }
  };

  return (
    <div className="details">
      <input
        type="email"
        placeholder="email"
        value={details.email}
        onChange={(e) => handleInputType(e, 0)}
      ></input>
      <input
        type="text"
        placeholder="phone number"
        value={details.phoneNumber}
        onChange={(e) => handleInputType(e, 1)}
      ></input>
      <input
        type="text"
        placeholder="LinkedIn"
        value={details.linkedin}
        onChange={(e) => handleInputType(e, 2)}
      ></input>
      <input
        type="text"
        placeholder="portfolio"
        value={details.portfolio}
        onChange={(e) => handleInputType(e, 3)}
      ></input>
      <input
        type="text"
        placeholder="github"
        value={details.github}
        onChange={(e) => handleInputType(e, 4)}
      ></input>
      <button onClick={handleSaveClick}>Save</button>
    </div>
  );
}

export default DetailsInput;
