import { useState } from "react";
import { details } from "../../details.ts";
import "../styles/contactDetails.css";
import DetailsInput from "./DetailsInput.tsx";
import { IDetails } from "../interface.ts";
import ContactDetailsIndividual from "./ContactDetailsIndividual.tsx";

function ContactDetailsHolder() {
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [hideBox, setHideBox] = useState<boolean>(false);
  const [currentDetails, setCurrentDetails] = useState<IDetails>(details);

  const handleHideClick = () => {
    setHideBox(!hideBox);
  };

  if (hideBox) {
    return (
      <div className="detailsHolder">
        <button className="hideButton" onClick={handleHideClick}>
          {hideBox ? "Show details" : null}
        </button>
      </div>
    );
  }

  return (
    <div className="detailsHolder">
      {showEdit ? (
        <DetailsInput
          setShowEdit={setShowEdit}
          currentDetails={currentDetails}
          setCurrentDetails={setCurrentDetails}
        />
      ) : (
        <ContactDetailsIndividual
          setShowEdit={setShowEdit}
          currentDetails={currentDetails}
        />
      )}
      <button className="hideButton" onClick={handleHideClick}>
        {hideBox ? null : "Hide details"}
      </button>
    </div>
  );
}

export default ContactDetailsHolder;
