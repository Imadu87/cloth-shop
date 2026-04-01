import React from "react";
import { Outlet } from "react-router-dom";

import Topbar from "../components/common/Topbar";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import FloatingWhatsApp from "../components/common/FloatingWhatsapp";
import SupportSection from "../components/common/SupportSection";
import ScrollToTop from "../components/common/ScrollToTop";

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