import React, { createContext, useState, useEffect, useContext } from "react";

interface ColorThemeProviderProps {
  children: React.ReactNode;
}
const DEFAULT_COLOR = "";
const ColorThemeContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>] | undefined
>(undefined);

const ColorThemeProvider: React.FC<ColorThemeProviderProps> = ({
  children,
}) => {
  const [color, setColor] = useState<string>(() => {
    const savedColor = localStorage.getItem("colorTheme");
    return savedColor || DEFAULT_COLOR;
  });

  useEffect(() => {
    localStorage.setItem("colorTheme", color);
  }, [color]);

  return (
    <ColorThemeContext.Provider value={[color, setColor]}>
      {children}
    </ColorThemeContext.Provider>
  );
};
const useColorTheme = () => {
  const context = useContext(ColorThemeContext);
  if (!context) {
    throw new Error("useColorTheme must be used within a ColorThemeProvider");
  }
  return context; // Trả về [color, setColor]
};

export { ColorThemeProvider, ColorThemeContext };

export default useColorTheme;
