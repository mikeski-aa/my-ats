import { IStagedata } from "../interface";
import "../styles/individualItem.css";

function IndividualItem({ application }: { application: IStagedata }) {
  // converting dates to dd/mm/yy
  const convertDate = (input: Date | null): string => {
    // checking to make sure input isn't null
    if (input != null) {
      const day = String(input.getDate()).padStart(2, "0");
      const month = String(input.getMonth() + 1).padStart(2, "0");
      const year = input.getFullYear();

      return `${day}/${month}/${year}`;
    } else {
      return `Awaiting response`;
    }
  };

  return (
    <div className="individualItem">
      <div className="itemInfo">{application.companyName}</div>
      <div className="itemInfo">{convertDate(application.applyDate)}</div>
      <div className="itemInfo">{convertDate(application.endDate)}</div>
      <div className="comments">Comments go here</div>
      <div className="itemInfo">{application.location}</div>
      <div className="itemInfo">
        <select>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </div>
    </div>
  );
}

export default IndividualItem;
