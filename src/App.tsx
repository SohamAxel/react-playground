import Child from "./Components/Child";
import CustomButton from "./Components/CustomButton";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Child name="John" age={20}>
        <p>John is 20Yr's old</p>
        <CustomButton>My Button</CustomButton>
      </Child>
    </>
  );
}

export default App;
