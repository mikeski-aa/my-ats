import { RefObject, useRef, useState } from "react";
import { details } from "../../data.ts";
import "../styles/contactDetails.css";
import DetailsInput from "./DetailsInput.tsx";
import { IDetails } from "../interface.ts";

function ContactDetails() {
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [currentDetails, setCurrentDetails] = useState<IDetails>(details);
  const divZero: RefObject<HTMLDivElement> = useRef(null);
  const divOne: RefObject<HTMLDivElement> = useRef(null);
  const divTwo: RefObject<HTMLDivElement> = useRef(null);
  const divThree: RefObject<HTMLDivElement> = useRef(null);
  const divFour: RefObject<HTMLDivElement> = useRef(null);

  const handleOnClickCopy = (id: number) => {
    let textCopy: string | undefined;
    switch (id) {
      case 0:
        textCopy = divZero.current?.innerText;
        if (textCopy) {
          navigator.clipboard.writeText(currentDetails.email);
        }
        break;
      case 1:
        textCopy = divOne.current?.innerText;
        if (textCopy) {
          navigator.clipboard.writeText(currentDetails.number);
        }
        break;
      case 2:
        textCopy = divTwo.current?.innerText;
        if (textCopy) {
          navigator.clipboard.writeText(currentDetails.linkedin);
        }
        break;
      case 3:
        textCopy = divThree.current?.innerText;
        if (textCopy) {
          navigator.clipboard.writeText(currentDetails.portfolio);
        }
        break;
      case 4:
        textCopy = divFour.current?.innerText;
        if (textCopy) {
          navigator.clipboard.writeText(currentDetails.github);
        }
        break;
    }
  };

  const handleEditClick = () => {
    setShowEdit(true);
  };

  return (
    <div className="detailsHolder">
      {showEdit ? (
        <DetailsInput
          setShowEdit={setShowEdit}
          currentDetails={currentDetails}
          setCurrentDetails={setCurrentDetails}
        />
      ) : (
        <div className="details">
          <div
            className="detailItem"
            ref={divZero}
            onClick={() => handleOnClickCopy(0)}
          >
            Email
          </div>
          <div
            className="detailItem"
            ref={divOne}
            onClick={() => handleOnClickCopy(1)}
          >
            Phone number
          </div>
          <div
            className="detailItem"
            ref={divTwo}
            onClick={() => handleOnClickCopy(2)}
          >
            LinkedIn
          </div>
          <div
            className="detailItem"
            ref={divThree}
            onClick={() => handleOnClickCopy(3)}
          >
            Portfolio
          </div>
          <div
            className="detailItem"
            ref={divFour}
            onClick={() => handleOnClickCopy(4)}
          >
            Github
          </div>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default ContactDetails;
