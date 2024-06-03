import Child from "./Components/Child";
import ChildReducerExample from "./Components/ChildReducerExample";
import CustomButton from "./Components/CustomButton";
import ZodLearn from "./Components/ZodLearn";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Child name="John" age={20}>
        <p>John is 20Yr's old</p>
        <CustomButton>My Button</CustomButton>
        <ChildReducerExample />
      </Child>
      <br />
      <br />
      <br />
      <br />
      <ZodLearn />
    </>
  );
}

export default App;
