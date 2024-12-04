import { Dispatch, SetStateAction } from "react";

function DetailsInput({
  setShowEdit,
}: {
  setShowEdit: Dispatch<SetStateAction<boolean>>;
}) {
  const handleSaveClick = () => {
    setShowEdit(false);
  };
  return (
    <div className="details">
      <input type="email" placeholder="email"></input>
      <input type="tel" placeholder="phone number"></input>
      <input type="text" placeholder="LinkedIn"></input>
      <input type="text" placeholder="portfolio"></input>
      <input type="text" placeholder="github"></input>
      <button onClick={handleSaveClick}>Save</button>
    </div>
  );
}

export default DetailsInput;
