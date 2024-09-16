import React, { Suspense, lazy } from "react";
import DefaultLayout from "../layout/default-layout";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import PortfolioPage from "../pages/portfolio";
import ServicesPage from "../pages/service";
import ContactPage from "../pages/contact";
import { AnimatePresence } from "framer-motion";
import { RoutePath } from "./route-path";
import ErrorPage404 from "../pages/404";

export function MainRouter() {
  const location = useLocation();

  return (
    <DefaultLayout>
      <Suspense fallback={<>Loading</>}>
        <AnimatePresence initial={true} mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path={RoutePath.home} element={<HomePage />} />
            <Route path={RoutePath.about} element={<AboutPage />} />
            <Route path={RoutePath.portfolio} element={<PortfolioPage />} />
            <Route path={RoutePath.service} element={<ServicesPage />} />
            <Route path={RoutePath.contact} element={<ContactPage />} />
            <Route path={RoutePath.notFound} element={<ErrorPage404 />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </DefaultLayout>
  );
}
