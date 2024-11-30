import "./App.css";
import IndividualItem from "./components/IndividualItem";
import { applications } from "./utils/tempData";

function App() {
  return (
    <div className="mainContent">
      <div>Hello world</div>
      {applications.map((item, index) => (
        <IndividualItem application={item} key={index} />
      ))}
    </div>
  );
}

export default App;
