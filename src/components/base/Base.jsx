import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { ScrollToTop } from "../scroll-to-top-button/ScrollToTopButton";
import "./base.css";

const Base = ({ children }) => {
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
