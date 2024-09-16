import React, { useState } from "react";
import SwitcherDarkModel from "../components/switcher-dark";
import { IoIosSettings } from "react-icons/io";
import { motion } from "framer-motion";

interface ThemeCircleProps {
  color: string;
  bg: string;
  value: string;
  setTheme: (value: string) => void;
}
interface RightItem {
  color: string;
  onChangeColor: (value: string) => void;
}
const ThemeCircle = (props: ThemeCircleProps) => {
  return (
    <div
      className={`h-9 w-9 mr-1 rounded-full cursor-pointer flex justify-center items-center ${
        props.color === props.value ? "border-2 border-skin-base" : ""
      }`}
    >
      <div
        className={`h-7 w-7 rounded-full ${props.bg}`}
        onClick={() => props.setTheme(props.value)}
      />
    </div>
  );
};

export const RightItem = ({ color, onChangeColor }: RightItem) => {
  const [isVisible, setIsVisible] = useState(false);

  const onSetTheme = (value: string) => {
    onChangeColor(value);
  };

  const variants = {
    hidden: { x: "100vw", transition: { stiffness: 80 } },
    visible: {
      x: 0,
      opacity: 1,
      transition: { stiffness: 80, duration: 0.1 },
    },
  };

  return (
    <div className="fixed z-30 right-2 sm:right-10  top-32 flex justify-center items-center">
      <div>
        <motion.div
          className="mb-2 w-10 h-10 p-1 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-black shadow justify-center items-center flex-row"
          whileHover={{ rotate: 90 }}
          whileTap={{ rotate: -90, borderRadius: "100%" }}
          onClick={() => setIsVisible(!isVisible)}
        >
          <IoIosSettings size={30} className="text-black dark:text-white " />
        </motion.div>
        <div>
          <SwitcherDarkModel />
        </div>
      </div>

      {isVisible && (
        <motion.div
          className="p-2 border rounded-md ml-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-black shadow"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          <label className="text-black dark:text-white font-semibold ">
            Theme Color
          </label>
          <div className="mt-2 flex items-center justify-center">
            <ThemeCircle
              color={color}
              value=""
              setTheme={onSetTheme}
              bg="bg-red-600"
            />
            <ThemeCircle
              color={color}
              value="theme-yellow"
              setTheme={onSetTheme}
              bg="bg-yellow-500"
            />

            <ThemeCircle
              color={color}
              value="theme-orange"
              setTheme={onSetTheme}
              bg="bg-orange-500"
            />
            <ThemeCircle
              color={color}
              value="theme-purple"
              setTheme={onSetTheme}
              bg="bg-purple-500"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default RightItem;
