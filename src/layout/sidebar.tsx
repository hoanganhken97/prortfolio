import { useEffect, useRef, useState } from "react";
import {
  HiHome,
  HiOutlineUserCircle,
  HiOutlineServer,
  HiBriefcase,
  HiChat,
} from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { getMenu } from "../routers/menu-state";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const menu = getMenu();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        onClick={handleMenuToggle}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform  ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-950 border-r border-r-gray-300 dark:border-gray-800">
          <div className="relative px-6 py-4 items-center justify-center">
            <div
              className={`absolute top-0 left-0 h-6 w-6 border-skin-base border-t-4 border-l-4`}
            />
            <div
              className={`absolute bottom-0 right-0 h-6 w-6 border-skin-base border-b-4 border-r-4`}
            />
            <p className="text-3xl text-center text-black dark:text-white font-bold font-dancing-script">
              Developer
            </p>
          </div>
          <div>
            <ul className="px-12 space-y-2 font-medium mt-28 flex-1 justify-center items-center ">
              {menu.map((item, index) => {
                return (
                  <NavLink to={item.path || "/404"} key={index}>
                    {({ isActive, isPending, isTransitioning }) => (
                      <div
                        className={`flex items-center p-2 hover:font-semibold hover:text-skin-base dark:hover:text-skin-base rounded-lg  hover:bg-gray-300 dark:hover:bg-gray-700 group ${
                          isActive
                            ? "text-skin-base font-semibold"
                            : "text-black dark:text-white"
                        }`}
                      >
                        <FontAwesomeIcon icon={item.icon} className="text-sm" />

                        <span className="ms-3"> {item.title}</span>
                      </div>
                    )}
                  </NavLink>
                );
              })}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
