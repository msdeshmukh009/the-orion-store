import "./base.css";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { ScrollToTop } from "../scroll-to-top-button/ScrollToTopButton";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavAside } from "../navbar/NavAside";
import { useAuth } from "../../context";
import { Toaster } from "react-hot-toast";

const Base = ({ children }) => {
  const { pathname } = useLocation();
  const {
    state: { token },
  } = useAuth();

  const [navAside, setNavAside] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setNavAside(false);
  }, [pathname, token]);

  return (
    <>
      <Toaster />
      <Navbar navAside={navAside} setNavAside={setNavAside} />
      <NavAside navAside={navAside} setNavAside={setNavAside} />
      <div className="children-container">{children}</div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export { Base };
