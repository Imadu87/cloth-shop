import React from "react";
import { Outlet } from "react-router-dom";

import Topbar from "../components/layout/Topbar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FloatingWhatsApp from "../components/layout/FloatingWhatsapp";
import SupportSection from "../components/layout/SupportSection";
import ScrollToTop from "../components/layout/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Topbar />
      <Navbar />

      <div className="pt-[100px] lg:pt-[180px]">
        <SupportSection />
        <Outlet />
      </div>

      <FloatingWhatsApp />
      <Footer />
    </>
  );
};

export default MainLayout;