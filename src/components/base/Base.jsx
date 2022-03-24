import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { ScrollToTop } from "../scroll-to-top-button/ScrollToTopButton";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./base.css";

const Base = ({ children, history }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <div className="children-container">{children}</div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export { Base };
