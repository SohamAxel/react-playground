// import "./App.css";
import Child from "./components/Child";
import UserDetails from "./components/UserDetails";
import styles from "./parent.module.css";

function App() {
  return (
    <>
      <p className={styles.header}>Hello</p>
      <Child />
      <UserDetails name="Claire" age="23" />
    </>
  );
}

export default App;
