import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";
import LayoutAnimation from "../../components/layout-animation";

interface ErrorPage404Props {}

export const ErrorPage404: React.FC<ErrorPage404Props> = (props) => {
  return (
    <LayoutAnimation>
      <div className="bg-white w-full rounded p-10 md:px-10 md:py-20">
        <div className="flex justify-center">
          <span className="px-4 py-2 rounded text-gray-600 duration-300 uppercase text-3xl font-semibold">
            Không tồn tại trang!
          </span>
        </div>
        <div className="flex justify-center">
          <img src="/assets/error-404.png" alt="not found" className="h-96" />
        </div>
        <div className="flex justify-center">
          <Link
            to="/"
            className="px-4 py-2 rounded bg-skin-base font-medium text-gray-50 duration-300 "
          >
            Về trang chủ
          </Link>
        </div>
      </div>
    </LayoutAnimation>
  );
};
