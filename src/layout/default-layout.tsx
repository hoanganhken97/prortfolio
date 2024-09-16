import React, { useState } from "react";
import SideBar from "./sidebar";
import RightItem from "./right-item";

interface DefaultLayoutProps {
  children?: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  const [color, setColor] = useState("");

  return (
    <div className={`${color} flex-1 bg-gray-50 dark:bg-black`}>
      <SideBar />

      <div className="p-4 sm:ml-64">
        <RightItem
          color={color}
          onChangeColor={(value: string) => setColor(value)}
        />
        <div className="mx-auto overflow-hidden">{props.children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
