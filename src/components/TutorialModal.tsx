import { Dispatch, SetStateAction } from "react";

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
        <button className="closeModalBtn" onClick={handleModalClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default TutorialModal;
