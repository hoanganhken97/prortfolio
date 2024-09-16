import { useState, useEffect } from "react";

type Theme = "dark" | "light";

// Hàm hỗ trợ để kiểm tra và trả về theme hiện tại hoặc mặc định
function getInitialTheme(): Theme {
  const storedTheme = localStorage.getItem("theme");
  return storedTheme === "dark" || storedTheme === "light"
    ? storedTheme
    : "light";
}

export default function useDarkSide(): [
  Theme,
  React.Dispatch<React.SetStateAction<Theme>>
] {
  const [theme, setTheme] = useState<Theme>(getInitialTheme); // Sử dụng hàm để lấy theme ban đầu
  const colorTheme: Theme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // Điều chỉnh cách lưu trữ theme trong localStorage
    if (theme === "dark") localStorage.setItem("theme", theme);
    else localStorage.removeItem("theme"); // Chỉ xóa khi theme không phải là 'dark'
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
