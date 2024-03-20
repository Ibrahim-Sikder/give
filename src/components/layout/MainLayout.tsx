import { Outlet } from "react-router-dom";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import { useEffect } from "react";
import { HiChevronUp } from "react-icons/hi";


const MainLayout = () => {
  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById("button");
      if (window.scrollY > 50) {
        button!.classList.add("scrollToTopBtn");
      } else {
        button!.classList.remove("scrollToTopBtn");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window!.scrollTo(0, 0);
    
  }

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <button onClick={scrollToTop} id="button">
        <HiChevronUp size={25} />
      </button>
    </div>
  );
};

export default MainLayout;
