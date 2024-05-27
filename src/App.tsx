import "./styles.css";
import Calendar from "./Components/Calendar";
import { CalendarContextProvider } from "./context/CalendarEventContext";

function App() {
  return (
    <CalendarContextProvider>
      <Calendar />
    </CalendarContextProvider>
  );
}

export default App;
