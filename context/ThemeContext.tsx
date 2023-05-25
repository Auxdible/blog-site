import { createContext, useEffect, useState } from "react"

const defaultState = {
    dark: true,
    toggleDark: () => {},
}
const ThemeContext = createContext(defaultState);
export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [dark, setDark] = useState(false);
    useEffect(() => {
      const storedDark = localStorage.getItem("dark");
      if (storedDark !== null) {
        setDark(JSON.parse(storedDark));
      }
    }, []);
    function toggleDark () {
      const d = document.documentElement;

      const themes = ["light", "dark"];
      
      if (dark) {
        d.classList.remove(...themes);
        d.classList.add("light");
      } else {
        d.setAttribute("class", "dark");
      }

      localStorage.setItem("dark", JSON.stringify(!dark));
      setDark(!dark);
    };

    return (
      <ThemeContext.Provider
         value={{
         dark,
         toggleDark,
       }}>
        {children}
      </ThemeContext.Provider>
      );
};
export default ThemeContext;