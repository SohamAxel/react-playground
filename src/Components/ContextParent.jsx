import React, { createContext, useEffect, useState } from "react";
import ContextChild from "./ContextChild";

export const ThemeContext = createContext();

function ContextParent() {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.background = isDarkMode ? "#333" : "white";
    document.body.style.color = isDarkMode ? "white" : "#333";
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
      <ContextChild />
      <p>abcd</p>
    </ThemeContext.Provider>
  );
}

export default ContextParent;
