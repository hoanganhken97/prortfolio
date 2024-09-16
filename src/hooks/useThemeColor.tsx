import { useState, useEffect } from "react";

export type ColorTheme = "" | "yellow" | "purple" | "orange";

// Hàm hỗ trợ để kiểm tra và trả về màu hiện tại hoặc mặc định
function getInitialColor(): ColorTheme {
  const storedColor = localStorage.getItem("colorTheme");
  return storedColor === "" ||
    storedColor === "yellow" ||
    storedColor === "purple" ||
    storedColor === "orange"
    ? (storedColor as ColorTheme)
    : ""; // Màu mặc định
}

export default function useColorTheme(): [
  ColorTheme,
  React.Dispatch<React.SetStateAction<ColorTheme>>
] {
  const [color, setColor] = useState<ColorTheme>(getInitialColor); // Sử dụng hàm để lấy màu ban đầu

  useEffect(() => {
    const root = window.document.documentElement;
    // // Xóa các class màu sắc trước đó
    // root.classList.remove("", "yellow", "purple", "orange");
    // if (color) root.classList.add(color); // Thêm class màu sắc mới nếu không phải là giá trị mặc định ""

    // Điều chỉnh cách lưu trữ màu sắc trong localStorage
    if (color) localStorage.setItem("colorTheme", color);
    else localStorage.removeItem("colorTheme"); // Xóa nếu màu sắc là giá trị mặc định
  }, [color]);

  return [color, setColor];
}
