import { useLocalStorage } from "@/hooks/useLocalStorage";
import React, { createContext } from "react";

export const Context = createContext(null);

const getSystemTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("THEME", getSystemTheme);

  const changeTheme = (theme) => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    setTheme(theme);
  };

  const setSystemTheme = () => {
    const theme = getSystemTheme();
    document.documentElement.classList.toggle("dark", theme === "dark");
    setTheme(theme);
  };

  return (
    <Context.Provider value={{ theme, setTheme: changeTheme, setSystemTheme }}>
      {children}
    </Context.Provider>
  );
};

export default ThemeProvider;
