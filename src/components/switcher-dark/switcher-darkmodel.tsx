import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../../hooks/useDarkSide";

export default function SwitcherDarkModel() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState<boolean>(
    colorTheme === "dark" ? true : false
  );

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <div className="w-10 h-10 p-1 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-black shadow justify-center items-center flex-row">
      <DarkModeSwitch
        sunColor="white"
        moonColor="black"
        checked={darkSide}
        onChange={toggleDarkMode}
        size={30}
      />
    </div>
  );
}
