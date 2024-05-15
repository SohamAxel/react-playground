import CounterReducer from "./Components/CounterReducer";
import CounterState from "./Components/CounterState";

function App() {
  return (
    <>
      <h3>Counter using state - </h3>
      <CounterState />
      <h3>Counter using reducer - </h3>
      <CounterReducer />
    </>
  );
}

export default App;
