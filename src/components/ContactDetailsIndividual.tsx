import { useRef, RefObject, Dispatch, SetStateAction, useState } from "react";
import { IDetails } from "../interface";

function ContactDetailsIndividual({
  setShowEdit,
  currentDetails,
}: {
  setShowEdit: Dispatch<SetStateAction<boolean>>;
  currentDetails: IDetails;
}) {
  const divZero: RefObject<HTMLDivElement> = useRef(null);
  const divOne: RefObject<HTMLDivElement> = useRef(null);
  const divTwo: RefObject<HTMLDivElement> = useRef(null);
  const divThree: RefObject<HTMLDivElement> = useRef(null);
  const divFour: RefObject<HTMLDivElement> = useRef(null);
  const [displayToast, setDisplayToast] = useState<number | null>(null);

  const handleOnClickCopy = (id: number) => {
    let textCopy: string | undefined;
    switch (id) {
      case 0:
        textCopy = divZero.current?.innerText;
        if (textCopy) {
          navigator.clipboard.writeText(currentDetails.email);
          setDisplayToast(0);
        }
        break;
      case 1:
        textCopy = divOne.current?.innerText;
        if (textCopy) {
          navigator.clipboard.writeText(currentDetails.number);
          setDisplayToast(1);
        }
        break;
      case 2:
        textCopy = divTwo.current?.innerText;
        if (textCopy) {
          navigator.clipboard.writeText(currentDetails.linkedin);
          setDisplayToast(2);
        }
        break;
      case 3:
        textCopy = divThree.current?.innerText;
        if (textCopy) {
          navigator.clipboard.writeText(currentDetails.portfolio);
          setDisplayToast(3);
        }
        break;
      case 4:
        textCopy = divFour.current?.innerText;
        if (textCopy) {
          navigator.clipboard.writeText(currentDetails.github);
          setDisplayToast(4);
        }
        break;
    }
  };

  const handleEditClick = () => {
    setShowEdit(true);
  };

  return (
    <div className="details">
      <div className="itemWithToast">
        <div
          className="detailItem"
          ref={divZero}
          onClick={() => handleOnClickCopy(0)}
        >
          Email
        </div>
        {displayToast === 0 ? (
          <div className="copiedToast show">Copied!</div>
        ) : (
          <div className="copiedToast hide">Copied!</div>
        )}
      </div>

      <div className="itemWithToast">
        <div
          className="detailItem"
          ref={divOne}
          onClick={() => handleOnClickCopy(1)}
        >
          Phone number
        </div>
        {displayToast === 1 ? (
          <div className="copiedToast show">Copied!</div>
        ) : (
          <div className="copiedToast hide">Copied!</div>
        )}
      </div>

      <div className="itemWithToast">
        <div
          className="detailItem"
          ref={divTwo}
          onClick={() => handleOnClickCopy(2)}
        >
          LinkedIn
        </div>
        {displayToast === 2 ? (
          <div className="copiedToast show">Copied!</div>
        ) : (
          <div className="copiedToast hide">Copied!</div>
        )}
      </div>

      <div className="itemWithToast">
        <div
          className="detailItem"
          ref={divThree}
          onClick={() => handleOnClickCopy(3)}
        >
          Portfolio
        </div>
        {displayToast === 3 ? (
          <div className="copiedToast show">Copied!</div>
        ) : (
          <div className="copiedToast hide">Copied!</div>
        )}
      </div>

      <div className="itemWithToast">
        <div
          className="detailItem"
          ref={divFour}
          onClick={() => handleOnClickCopy(4)}
        >
          Github
        </div>
        {displayToast === 4 ? (
          <div className="copiedToast show">Copied!</div>
        ) : (
          <div className="copiedToast hide">Copied!</div>
        )}
      </div>

      <button onClick={handleEditClick} className="editBtn">
        Edit
      </button>
    </div>
  );
}

export default ContactDetailsIndividual;
