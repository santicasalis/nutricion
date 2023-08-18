import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsApp";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default Layout;
