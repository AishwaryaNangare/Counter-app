import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const useDarkMode = () => {
  const saveDarkMode = Cookies.get("darkMode");
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (saveDarkMode) {
      setDarkMode(saveDarkMode === "true");
    }
  }, []);

  useEffect(() => {
    Cookies.set("darkMode", darkMode.toString());
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
export default useDarkMode;
