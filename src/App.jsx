import ContextParent from "./Components/ContextParent";
import CounterReducer from "./Components/CounterReducer";
import CounterState from "./Components/CounterState";

function App() {
  return (
    <>
      <h3>Counter using state - </h3>
      <CounterState />
      <h3>Counter using reducer - </h3>
      <CounterReducer />
      <h3>useContext hook implementation</h3>
      <ContextParent />
    </>
  );
}

export default App;
