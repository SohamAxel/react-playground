import { useState } from "react";

// helper function and static value can be added outside components.
const INITIAL_VALUE = ["A", "B", "C"];

const ArrayStateProject = () => {
  const [array, setArray] = useState(INITIAL_VALUE);
  const [userInput, setUserInput] = useState("");

  const removeFirstElement = () => {
    setArray(oldArray => {
      return oldArray.filter((val, index) => {
        return index != 0;
      });
    })
  }
  const removeSpecificElement = (element) => {
    setArray(oldArray => {
      return oldArray.filter((val, index) => {
        return val != element;
      });
    })
  }
  const updateSpecificElement = (element, replace) => {
    setArray(oldArray => {
      return oldArray.map((val) => {
        return val === element ? replace : val;
      });
    })
  }
  const addElementAtIndex = (element, at) => {
    setArray(oldArray => {
      return [
        ...oldArray.slice(0, at),
        element,
        ...oldArray.slice(at)
      ]
    })
  }
  const addElementAtEnd = (element) => {
    setArray(oldArray => {
      return [
        ...oldArray,
        element
      ]
    })
  }
  const addElementAtStart = (element) => {
    setArray(oldArray => {
      return [
        element,
        ...oldArray
      ]
    })
  }
  const resetArray = () => {
    setArray(INITIAL_VALUE)
  }
  const clearArray = () => {
    setArray([])
  }

  return (
    <div>
      <h1>{array.join(",")}</h1>
      <div id="actions">
        <button onClick={removeFirstElement}>Remove First Element</button>
        <button onClick={() => removeSpecificElement("B")}>Remove Specific Element</button>
        <button onClick={() => addElementAtStart("A")}>Add Element at Start</button>
        <button onClick={() => addElementAtEnd("B")}>Add Element at End</button>
        <button onClick={() => updateSpecificElement("A", "H")}>Update Specific Element</button>
        <button onClick={() => clearArray()}>Clear</button>
        <button onClick={() => resetArray()}>Reset</button>
      </div>
      <div>
        <input type="text" value={userInput} onChange={e => setUserInput(e.target.value)} />
        <button onClick={() => addElementAtStart(userInput)}>Add to Start</button>
        <button onClick={() => addElementAtIndex(userInput, 2)}>Add to 2nd Index</button>
      </div>
    </div>
  );
};

export default ArrayStateProject;
