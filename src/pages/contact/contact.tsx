import { motion } from "framer-motion";
import React from "react";
import LayoutAnimation from "../../components/layout-animation";

interface ContactPageProps {}

export const ContactPage: React.FC<ContactPageProps> = (props) => {
  return (
    <LayoutAnimation>
      <div className="md:flex md:mt-40">
        <div className="p-8">
          {/* <div className=" tracking-wide font-semibold text-xl md:text-2xl  text-black dark:text-white">
          Hello, my name is{" "}
          <span className="font-dancing-script">Hoàng Anh Ken</span>
        </div>
        <p className="text-2xl md:text-3xl my-4 font-bold text-black dark:text-white">
          I'm a{" "}
          <ReactTyped
            className="text-red-600"
            strings={[
              "Mobile App Developer",
              "Website Developer",
              "Website Design",
              "Developer React Native",
              "Developer ReactJs",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </p> */}
          <p className="mt-2 text-slate-500">
            I'm a app, web Developer with experience for over 5 years. My
            expertise is to create and App, website design,and many more...
          </p>
          <div className="mt-10">
            <button className="inline px-5 py-2  cursor-pointer bg-red-600 text-white font-medium rounded-3xl">
              More About Me
            </button>
          </div>
        </div>
        {/* <div className="md:shrink-0 md:pr-28">
        <div className="relative px-6 py-6 items-center justify-center">
          <div className="absolute top-0 right-0 h-20 w-20 border-red-600 border-t-8 border-r-8" />
          <div className="absolute bottom-0 left-0 h-20 w-20 border-red-600 border-b-8 border-l-8" />

          <img
            className="h-4/5 w-full object-cover md:h-full md:w-80 rounded-md"
            src={require("../../assets/images/info.jpg")}
            alt="Modern building architecture"
          />
        </div>
      </div> */}
      </div>
    </LayoutAnimation>
  );
};
