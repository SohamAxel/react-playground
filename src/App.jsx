// import "./App.css";
import Child from "./components/Child";
import styles from "./parent.module.css";

function App() {
  return (
    <>
      <p className={styles.header}>Hello</p>
      <Child />
    </>
  );
}

export default App;
