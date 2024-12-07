import { Dispatch, SetStateAction, SyntheticEvent } from "react";
import { IStagedata } from "../interface";
import { deleteItem, updateStage } from "../services/appCalls";
import "../styles/individualItem.css";

function IndividualItem({
  application,
  rerun,
  setRerun,
  apps,
  setApps,
  devMode,
}: {
  application: IStagedata;
  rerun: number;
  setRerun: Dispatch<SetStateAction<number>>;
  apps: IStagedata[];
  setApps: Dispatch<SetStateAction<IStagedata[]>>;
  devMode: boolean;
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
      return `Waiting`;
    }
  };

  const handleDeleteClick = async () => {
    if (devMode) {
      if (application.id) {
        await deleteItem(application.id);

        setRerun(rerun + 1);
      }
    } else {
      const shallowCopy: IStagedata[] = [...apps];
      const filteredCopy = shallowCopy.filter(
        (item) => item.companyName != application.companyName
      );

      setApps(filteredCopy);
    }
  };

  const handleSelectChange = async (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;

    if (devMode) {
      if (application.id) {
        await updateStage(application.id, target.value, application.endDate);
        setRerun(rerun + 1);
      }
    } else {
      if (target.value === "Applied") {
        const shallowCopy = apps.map((item) =>
          item.companyName === application.companyName
            ? { ...item, endDate: null, status: target.value }
            : item
        );

        setApps(shallowCopy);
      } else {
        const shallowCopy = apps.map((item) =>
          item.companyName === application.companyName
            ? { ...item, endDate: new Date(), status: target.value }
            : item
        );

        console.log("hello");
        console.log(target.value);

        console.log(shallowCopy);

        setApps(shallowCopy);
      }
    }
  };

  const getDaysElapsed = () => {
    const applyConvert = new Date(application.applyDate);

    if (application.endDate != null) {
      let endConvert = new Date(application.endDate);

      if (convertDate(application.endDate) != "Waiting") {
      } else {
        endConvert = new Date();
      }

      const timedifference = endConvert.getTime() - applyConvert.getTime();
      const millisecondsPerDay = 1000 * 60 * 60 * 24;
      return Math.floor(timedifference / millisecondsPerDay);
    } else {
      const endConvert = new Date();
      const timedifference = endConvert.getTime() - applyConvert.getTime();
      const millisecondsPerDay = 1000 * 60 * 60 * 24;
      return Math.floor(timedifference / millisecondsPerDay);
    }
  };

  return (
    <div className="individualItem">
      <div className="itemInfo name">{application.companyName}</div>
      <div className="itemInfo">{convertDate(application.applyDate)}</div>
      <div className="itemInfo">{convertDate(application.endDate)}</div>
      <div className="itemInfo">{getDaysElapsed()}</div>
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
