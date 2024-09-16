import { lazy } from "react";
import { RoutePath } from "./route-path";
import {
  faHouse,
  faUser,
  faList,
  faServer,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const HomePage = lazy(() => import("../pages/home"));
const AboutPage = lazy(() => import("../pages/about"));
const PortfolioPage = lazy(() => import("../pages/portfolio"));
const ServicesPage = lazy(() => import("../pages/service"));
const Contact = lazy(() => import("../pages/contact"));

export type MenuItem = {
  title: string;
  icon?: any;
  hidden?: boolean;
  exact?: boolean;
  path?: string;
  main?: any;
  type?: "primary" | "secondary" | "detail";
  subItem?: MenuItem[];
};
export type Menu = {
  title?: string;
  subMenu: MenuItem[];
};
export const menuHome: MenuItem[] = [
  {
    title: "Home",
    icon: faHouse,
    path: RoutePath.home,
    main: () => <HomePage />,
    exact: true,
  },
];
export const menuAbout: MenuItem[] = [
  {
    title: "About",
    icon: faUser,
    path: RoutePath.about,
    main: () => <AboutPage />,
    exact: true,
  },
];
export const menuPortfolio: MenuItem[] = [
  {
    title: "Portfolio",
    icon: faList,
    path: RoutePath.portfolio,
    main: () => <PortfolioPage />,
    exact: true,
  },
];
export const menuServices: MenuItem[] = [
  {
    title: "Services",
    icon: faHouse,
    path: RoutePath.service,
    main: () => <ServicesPage />,
    exact: true,
  },
];
export const menuContact: MenuItem[] = [
  {
    title: "Contact",
    icon: faHouse,
    path: RoutePath.contact,
    main: () => <Contact />,
    exact: true,
  },
];
export const getMenu = () => {
  return [
    {
      title: "Home",
      icon: faHouse,
      path: RoutePath.home,
      main: () => <HomePage />,
      exact: true,
    },
    {
      title: "About",
      icon: faUser,
      path: RoutePath.about,
      main: () => <AboutPage />,
      exact: true,
    },
    {
      title: "Portfolio",
      icon: faList,
      path: RoutePath.portfolio,
      main: () => <PortfolioPage />,
      exact: true,
    },
    {
      title: "Services",
      icon: faServer,
      path: RoutePath.service,
      main: () => <ServicesPage />,
      exact: true,
    },
    {
      title: "Contact",
      icon: faEnvelope,
      path: RoutePath.contact,
      main: () => <Contact />,
      exact: true,
    },
  ];
};
