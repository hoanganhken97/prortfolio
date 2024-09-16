import React from "react";
import LayoutAnimation from "../../components/layout-animation";
import { ReactTyped } from "react-typed";

interface AboutPageProps {}

export const AboutPage: React.FC<AboutPageProps> = (props) => {
  return (
    <LayoutAnimation>
      <div className="md:flex">
        <div className="p-8">
          <div className="mb-10">
            <h1 className="dark:text-white text-black text-4xl font-semibold">
              About Me
            </h1>
            <div className="h-1 w-16 bg-skin-base mb-1 mt-2" />
            <div className="h-1 w-6 bg-skin-base" />
          </div>
          <p className="mt-2 dark:text-white text-black text-2xl font-semibold">
            I'm Hoàng Anh Ken and{" "}
            <ReactTyped
              className="text-skin-base font-semibold"
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
          </p>
          <p className="dark:text-white text-black mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            aspernatur mollitia officia rem doloremque! Esse veniam vel repellat
            ipsa molestiae consequatur vitae! Quis vitae fuga, eos aperiam a
            officiis nobis? Esse veniam vel repellat ipsa molestiae consequatur
            vitae! Quis vita fuga, eos apeEsse veniam vel repellat ipsa
            molestiae consequatur vitae! Quis vitae fuga, eos ape
          </p>
          <div className="md:flex flex-row mt-10">
            <div className="basis-3/5  md:mr-10">
              <div className="md:flex flex-row">
                <div className="basis-1/2 md:mr-10">
                  <p className="dark:text-white text-black font-semibold border-b py-2 border-b-gray-500">
                    Birthday: <span className="font-normal">05 Oct 1997</span>
                  </p>
                  <p className="dark:text-white text-black font-semibold border-b py-2 border-b-gray-500">
                    Website:
                    <a
                      href="https://github.com/hoanganhken97"
                      className="font-normal"
                    >
                      github.com/hoanganhken97
                    </a>
                  </p>
                  <p className="dark:text-white text-black font-semibold border-b py-2 border-b-gray-500">
                    Degree: <span className="font-normal">CS</span>
                  </p>
                  <p className="dark:text-white text-black font-semibold border-b py-2 border-b-gray-500">
                    City: <span className="font-normal">Hanoi, VietNam</span>
                  </p>
                </div>
                <div className="basis-1/2 md:mt-0 mt-10">
                  <p className="dark:text-white text-black font-semibold border-b py-2 border-b-gray-500">
                    Age: <span className="font-normal">27</span>
                  </p>
                  <p className="dark:text-white text-black font-semibold border-b py-2 border-b-gray-500">
                    Email:
                    <a href="mailto:anhndh97@gmail.com" className="font-normal">
                      anhndh97@gmail.com
                    </a>
                  </p>
                  <p className="dark:text-white text-black font-semibold border-b py-2 border-b-gray-500">
                    Degree: <span className="font-normal">CS</span>
                  </p>
                  <p className="dark:text-white text-black font-semibold border-b py-2 border-b-gray-500">
                    Freelance: <span className="font-normal">Availabel</span>
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <button className="inline px-5 py-2  cursor-pointer bg-skin-indicator text-white rounded-3xl mr-10">
                  Download CV
                </button>
                <button className="inline px-5 py-2  cursor-pointer bg-skin-indicator text-white rounded-3xl">
                  Hire Me
                </button>
              </div>
            </div>
            <div className="basis-3/12 md:mt-0 mt-10">
              <div className="mb-5">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full dark:text-white text-black">
                      React Native
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block dark:text-white text-black">
                      90%
                    </span>
                  </div>
                </div>
                <div className="flex rounded-full h-2 bg-gray-200">
                  <div className="w-10/12 rounded-full bg-skin-base"></div>
                </div>
              </div>
              <div className="mb-5">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full dark:text-white text-black">
                      Reactjs
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block dark:text-white text-black">
                      88%
                    </span>
                  </div>
                </div>
                <div className="flex rounded-full h-2 bg-gray-200">
                  <div className="w-9/12 rounded-full bg-skin-base"></div>
                </div>
              </div>
              <div className="mb-5">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full dark:text-white text-black">
                      Nodejs
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block dark:text-white text-black">
                      75%
                    </span>
                  </div>
                </div>
                <div className="flex rounded-full h-2 bg-gray-200">
                  <div className="w-8/12 rounded-full bg-skin-base"></div>
                </div>
              </div>
              <div className="mb-5">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full dark:text-white text-black">
                      Tailwincss, Css
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block dark:text-white text-black">
                      95%
                    </span>
                  </div>
                </div>
                <div className="flex rounded-full h-2 bg-gray-200">
                  <div className="w-11/12 rounded-full bg-skin-base"></div>
                </div>
              </div>
              <div className="mb-5">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full dark:text-white text-black">
                      Css
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block dark:text-white text-black">
                      70%
                    </span>
                  </div>
                </div>
                <div className="flex rounded-full h-2 bg-gray-200">
                  <div className="w-2/3 rounded-full bg-skin-base"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 mt-10">
            <div className="w-full md:w-1/2">
              <h2 className="text-xl font-bold mb-7">Education</h2>
              <ul>
                <li className="relative flex items-baseline gap-6 pb-5">
                  <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      className="bi bi-circle-fill fill-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">09/2016</p>
                    <p className="mt-2  text-base font-bold dark:text-white text-black">
                      Master In Computer Science
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rem reiciendis voluptatem atque non adipisci enim veniam
                      architecto neque quasi, sit explicabo necessitatibus
                      repudiandae aut ea.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-xl font-bold mb-4">Experience</h2>
              <ul>
                <li className="relative flex items-baseline gap-6 pb-5">
                  <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      className="bi bi-circle-fill fill-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">09/2023 - To now</p>
                    <p className="mt-2 text-base font-bold dark:text-white text-black">
                      Master In Computer Science
                    </p>
                    <p className="text-sm text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rem reiciendis voluptatem atque non adipisci enim veniam
                      architecto neque quasi, sit explicabo necessitatibus
                      repudiandae aut ea.
                    </p>
                  </div>
                </li>
                <li className="relative flex items-baseline gap-6 pb-5">
                  <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      className="bi bi-circle-fill fill-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">05/2022 - 4/2023</p>
                    <p className="mt-2 text-base font-bold dark:text-white text-black">
                      Master In Computer Science
                    </p>
                    <p className="text-sm text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rem reiciendis voluptatem atque non adipisci enim veniam
                      architecto neque quasi, sit explicabo necessitatibus
                      repudiandae aut ea.
                    </p>
                  </div>
                </li>
                <li className="relative flex items-baseline gap-6 pb-5">
                  <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      className="bi bi-circle-fill fill-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">11/2019 - 04/2022</p>
                    <p className="mt-2 text-base font-bold dark:text-white text-black">
                      Master In Computer Science
                    </p>
                    <p className="text-sm text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rem reiciendis voluptatem atque non adipisci enim veniam
                      architecto neque quasi, sit explicabo necessitatibus
                      repudiandae aut ea.
                    </p>
                  </div>
                </li>
                <li className="relative flex items-baseline gap-6 pb-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      className="bi bi-circle-fill fill-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">7/2018 - 10/2018</p>
                    <p className="mt-2 text-base font-bold dark:text-white text-black">
                      Master In Computer Science
                    </p>
                    <p className="text-sm text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rem reiciendis voluptatem atque non adipisci enim veniam
                      architecto neque quasi, sit explicabo necessitatibus
                      repudiandae aut ea.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LayoutAnimation>
  );
};
