import "./App.css";
import Button from "./components/Button";
import CounterContext from "./components/CounterContext";

function App() {
  return (
    <>
      <Button>ABC</Button>
      <Button As="a" href="/">
        ABC
      </Button>
      <CounterContext />
    </>
  );
}

export default App;
