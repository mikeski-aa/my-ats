function InputComponent() {
  return (
    <div className="inputDiv">
      <div className="inputHolder">
        <label>Company name</label>
        <input type="text" minLength={1} maxLength={30}></input>
      </div>
      <div className="inputHolder">
        <label>Location</label>
        <input type="text" minLength={1} maxLength={30}></input>
      </div>
    </div>
  );
}
