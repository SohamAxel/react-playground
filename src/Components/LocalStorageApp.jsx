import { useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

function LocalStorageApp() {
  const [key, setKey] = useState("FIRST_NAME");
  const [firstName, setFirstName] = useLocalStorage(key, "");
  console.log(firstName);

  const [lastName, setLastName] = useLocalStorage("LAST_NAME", () => {
    return "Default";
  });

  const [hobbies, setHobbies] = useLocalStorage("HOBBIES", [
    "Programming",
    "Weight Lifting",
  ]);

  return (
    <>
      <label>
        <input
          type="radio"
          checked={key === "FIRST_NAME"}
          onChange={() => setKey("FIRST_NAME")}
        />
        First Name
      </label>
      <label>
        <input
          type="radio"
          checked={key === "LAST_NAME"}
          onChange={() => setKey("LAST_NAME")}
        />
        Last Name
      </label>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <label>{key}</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div>{hobbies.join(", ")}</div>
      <button
        onClick={() =>
          setHobbies((currentHobbies) => [...currentHobbies, "New Hobby"])
        }
      >
        Add Hobby
      </button>
    </>
  );
}

export default LocalStorageApp;
