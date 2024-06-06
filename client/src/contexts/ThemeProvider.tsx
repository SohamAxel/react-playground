import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createContext, ReactNode } from "react";

type Ttheme = "light" | "dark";

type ContextProvider = {
  theme: Ttheme;
  setTheme: (theme: Ttheme) => void;
  setSystemTheme: () => void;
};

export const Context = createContext<ContextProvider | null>(null);
const getSystemTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useLocalStorage<Ttheme>("THEME", getSystemTheme);

  const changeTheme = (theme: Ttheme) => {
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
