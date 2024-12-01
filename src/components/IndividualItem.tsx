import { Dispatch, SetStateAction } from "react";
import { IStagedata } from "../interface";
import { deleteItem, getAllAppData } from "../services/appCalls";
import "../styles/individualItem.css";

function IndividualItem({
  application,
  rerun,
  setRerun,
}: {
  application: IStagedata;
  rerun: number;
  setRerun: Dispatch<SetStateAction<number>>;
}) {
  // converting dates to dd/mm/yy
  const convertDate = (input: Date | null): string => {
    // checking to make sure input isn't null
    if (input != null) {
      console.log(input);

      const dateFormat = new Date(input);
      const day = String(dateFormat.getDate()).padStart(2, "0");
      const month = String(dateFormat.getMonth() + 1).padStart(2, "0");
      const year = dateFormat.getFullYear();

      return `${day}/${month}/${year}`;
    } else {
      return `Awaiting response`;
    }
  };

  const handleDeleteClick = async () => {
    if (application.id) {
      await deleteItem(application.id);

      setRerun(rerun + 1);
    }
  };

  return (
    <div className="individualItem">
      <div className="itemInfo">{application.companyName}</div>
      <div className="itemInfo">{convertDate(application.applyDate)}</div>
      <div className="itemInfo">{convertDate(application.endDate)}</div>
      <div className="itemInfo">Comments go here</div>
      <div className="itemInfo">{application.location}</div>
      <div className="itemInfo">
        <select>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </div>
      <button className="itemInfo" onClick={handleDeleteClick}>
        Remove
      </button>
    </div>
  );
}

export default IndividualItem;
