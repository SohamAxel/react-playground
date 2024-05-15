import ContextParent from "./Components/ContextParent";
import CounterReducer from "./Components/CounterReducer";
import CounterState from "./Components/CounterState";
import TodoMain from "./Components/TodoMain";

function App() {
  // console.log(import.meta.env.VITE_URL)
  return (
    <>
      <h3>Counter using state - </h3>
      <CounterState />
      <h3>Counter using reducer - </h3>
      <CounterReducer />
      <h3>useContext hook implementation</h3>
      <ContextParent />
      <h3>Todo project</h3>
      <TodoMain />
    </>
  );
}

export default App;
