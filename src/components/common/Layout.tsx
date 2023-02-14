import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import ScrollTop from "./ScrollTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
const Layout = () => {
  const mainRef = React.useRef<HTMLElement>(null);

  return (
    <>
      <ScrollTop />
      <Navigation />
      <main ref={mainRef} className="bg-slate-900 min-h-[calc(100vh-3rem)]">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Layout;
