import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  return (
    <>
      {!isHomePage && <Navbar />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
