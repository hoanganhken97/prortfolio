import React from "react";
import { motion } from "framer-motion";
import { Variants, Transition } from "../../utils/animation";

interface LayoutAnimationProps {
  children?: React.ReactNode;
}

export const LayoutAnimation: React.FC<LayoutAnimationProps> = (props) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {props.children}
    </motion.div>
  );
};

export default LayoutAnimation;
