import React, { useContext } from "react";
import { ThemeContext } from "./ContextParent";

function ContextGrandChild() {
  const { isDarkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={() => setDarkMode((d) => !d)}>
        Toggle {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default ContextGrandChild;
