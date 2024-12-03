import { Dispatch, SetStateAction, SyntheticEvent } from "react";
import { IStagedata } from "../interface";
import { deleteItem, updateStage } from "../services/appCalls";
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
  const convertDate = (input: Date | null | string): string => {
    // checking to make sure input isn't null
    if (input != null && input != `1999-12-31T23:00:00.000Z`) {
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

  const handleSelectChange = async (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;

    if (application.id) {
      await updateStage(application.id, target.value, application.endDate);
      setRerun(rerun + 1);
    }
  };

  return (
    <div className="individualItem">
      <div className="itemInfo name">{application.companyName}</div>
      <div className="itemInfo">{convertDate(application.applyDate)}</div>
      <div className="itemInfo">{convertDate(application.endDate)}</div>
      <div className="itemInfo">{application.location}</div>
      <div className="itemInfo">
        <select
          value={application.status}
          onChange={(e) => handleSelectChange(e)}
        >
          <option value={"Applied"}>Applied</option>
          <option value={"Interview"}>Interview</option>
          <option value={"Offer"}>Offer</option>
          <option value={"Rejected"}>Rejected</option>
        </select>
      </div>
      <button className="itemInfo" onClick={handleDeleteClick}>
        Remove
      </button>
    </div>
  );
}

export default IndividualItem;
