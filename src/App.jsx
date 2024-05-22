import { useState } from "react";
import CallbackRef from "./Components/CallbackRef";
import CustomDatePicker from "./Components/CustomDatePicker";
import CustomModal from "./Components/CustomModal";
import ForwardRefComponent from "./Components/ForwardRefComponent";
import PortalComponent from "./Components/PortalComponent";
import CallbackRefElementChanges from "./Components/CallbackRefElementChanges";

function App() {
  const [showElement, setShowElement] = useState(true);
  return (
    <>
      {/* <h1>Hello</h1>
      <PortalComponent />
      <ForwardRefComponent />
      <CustomModal />
      <CustomDatePicker /> */}
      <button onClick={() => setShowElement((d) => !d)}>Toggle Element</button>
      {showElement && <CallbackRef />}
      <CallbackRefElementChanges />
    </>
  );
}

export default App;
