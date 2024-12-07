import { Dispatch, SetStateAction } from "react";
import "../styles/modal.css";

function TutorialModal({
  setModal,
}: {
  setModal: Dispatch<SetStateAction<boolean>>;
}) {
  const handleModalClose = () => {
    setModal(false);
  };

  return (
    <div className="modal">
      <div className="modalContent">
        <div className="buttonContainer">
          <button className="closeModalBtn" onClick={handleModalClose}>
            Close
          </button>
        </div>
        <div className="textContainer">
          <h3>How to use the tracker</h3>
          <ul>
            <li>Add comapny name and location as you apply</li>
            <li>Date is automatically set as today</li>
            <li>
              The date is not saved automatically, to save your date, click
              "Download Table" to download the data as CSV
            </li>
            <li>
              On subsequent visits you can re-open your saved CSV by clicking
              upload CSV
            </li>
            <li>
              Updating the status of application will also update the response
              date. If you accidentally change the status and want to reset the
              response date, change the status to "Applied".
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TutorialModal;
