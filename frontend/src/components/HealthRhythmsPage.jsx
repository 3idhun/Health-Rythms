import { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Eligibility from "./Eligibility";
import Faq from "./Faq";
import RegistrationForm from "./RegistrationForm";
import Footer from "./Footer";

const HealthRhythmsPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About scrollToSection={scrollToSection} />
      <Eligibility scrollToSection={scrollToSection} />
      <Faq />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default HealthRhythmsPage;
