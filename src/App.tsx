import { useRef } from "react";
import "./styles.css";
import {
  ALLOWED_POSITIONS,
  ToastMessageProvider,
} from "./contexts/ToastMessageProvider";
import { useToast } from "./hooks/useToast";

function App() {
  const { addToast, removeToast } = useToast();
  const toastMessageRef = useRef<HTMLInputElement>(null);
  const toastMessagePosition = useRef<HTMLSelectElement>(null);
  const handleClick = () => {
    if (toastMessagePosition == undefined || toastMessageRef == undefined)
      return;
    const id = addToast(toastMessageRef.current?.value ?? "", {
      position: ALLOWED_POSITIONS[0],
    });
  };
  return (
    <div className="form">
      {/* <Button>ABC</Button>
      <Button As="a" href="/">
        ABC
      </Button>
      <CounterContext /> */}
      <input
        type="text"
        name="toast_message"
        id="toast_message"
        ref={toastMessageRef}
      />
      <select
        name="toast_position"
        id="toast_position"
        defaultValue={ALLOWED_POSITIONS[0]}
        ref={toastMessagePosition}
      >
        {ALLOWED_POSITIONS.map((position) => (
          <option key={position} value={position}>
            {position}
          </option>
        ))}
      </select>
      <button onClick={handleClick}>Add Toast</button>
    </div>
  );
}

export default App;
