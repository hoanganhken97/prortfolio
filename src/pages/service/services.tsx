import { motion } from "framer-motion";
import React from "react";
import LayoutAnimation from "../../components/layout-animation";

interface ServicesPageProps {}

export const ServicesPage: React.FC<ServicesPageProps> = (props) => {
  return (
    <LayoutAnimation>
      <div className="md:flex">
        <div className="p-8">
          <div className="mb-10">
            <h1 className="dark:text-white text-black text-4xl font-semibold">
              Services
            </h1>
            <div className="h-1 w-16 bg-skin-base mb-1 mt-2" />
            <div className="h-1 w-6 bg-skin-base" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-playfair">
            <div
              className="border rounded-lg border-secondary/20 p-4 flex justify-start items-center gap-4 hover:scale-105 hover:shadow-xl duration-200 cursor-pointer"
              style={{ opacity: 1, transform: "none", willChange: "auto" }}
            >
              <div
                className="w-10 h-10 rounded-md flex justify-center items-center"
                style={{
                  color: "rgb(0, 99, 255)",
                  backgroundColor: "rgba(0, 99, 255, 0.125)",
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path>
                </svg>
              </div>
              <p>Engineering</p>
            </div>

            <div
              className="border rounded-lg border-secondary/20 p-4 flex justify-start items-center gap-4 hover:scale-105 hover:shadow-xl duration-200 cursor-pointer"
              style={{ opacity: 1, transform: "none", willChange: "auto" }}
            >
              <div
                className="w-10 h-10 rounded-md flex justify-center items-center"
                style={{
                  color: "rgb(0, 201, 134)",
                  backgroundColor: "rgba(0, 201, 134, 0.125)",
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path>
                </svg>
              </div>
              <p>English</p>
            </div>
            <div
              className="border rounded-lg border-secondary/20 p-4 flex justify-start items-center gap-4 hover:scale-105 hover:shadow-xl duration-200 cursor-pointer"
              style={{ opacity: 1, transform: "none", willChange: "auto" }}
            >
              <div
                className="w-10 h-10 rounded-md flex justify-center items-center"
                style={{
                  color: "rgb(0, 99, 255)",
                  backgroundColor: "rgba(0, 99, 255, 0.125)",
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path>
                </svg>
              </div>
              <p>Engineering</p>
            </div>

            <div
              className="border rounded-lg border-secondary/20 p-4 flex justify-start items-center gap-4 hover:scale-105 hover:shadow-xl duration-200 cursor-pointer"
              style={{ opacity: 1, transform: "none", willChange: "auto" }}
            >
              <div
                className="w-10 h-10 rounded-md flex justify-center items-center"
                style={{
                  color: "rgb(0, 201, 134)",
                  backgroundColor: "rgba(0, 201, 134, 0.125)",
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path>
                </svg>
              </div>
              <p>English</p>
            </div>
            <div
              className="border rounded-lg border-secondary/20 p-4 flex justify-start items-center gap-4 hover:scale-105 hover:shadow-xl duration-200 cursor-pointer"
              style={{ opacity: 1, transform: "none", willChange: "auto" }}
            >
              <div
                className="w-10 h-10 rounded-md flex justify-center items-center"
                style={{
                  color: "rgb(0, 99, 255)",
                  backgroundColor: "rgba(0, 99, 255, 0.125)",
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path>
                </svg>
              </div>
              <p>Engineering</p>
            </div>

            <div
              className="border rounded-lg border-secondary/20 p-4 flex justify-start items-center gap-4 hover:scale-105 hover:shadow-xl duration-200 cursor-pointer"
              style={{ opacity: 1, transform: "none", willChange: "auto" }}
            >
              <div
                className="w-1/2 h-10 rounded-md flex justify-center items-center"
                style={{
                  color: "rgb(0, 201, 134)",
                  backgroundColor: "rgba(0, 201, 134, 0.125)",
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path>
                </svg>
              </div>
              <p>English</p>
            </div>
          </div>
        </div>
      </div>
    </LayoutAnimation>
  );
};
