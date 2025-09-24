import Healthy from "../assets/Healthy.png";

const Header = ({ isScrolled, scrollToSection }) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-white/70 shadow-lg py-2"
          : "backdrop-blur-sm bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div
            className={`flex items-center transition-all duration-300 ${
              isScrolled ? "scale-75" : "scale-100"
            }`}
          >
            <div
              className={`${
                isScrolled ? "w-40 h-10" : "w-50 h-15"
              } rounded-full flex items-center justify-center mt-5 ml-10 mb-3 transition-all duration-300`}
            >
              <div className="img">
                <img src={Healthy} alt="Logo" />
              </div>
            </div>
            <span
              className={`font-bold transition-all duration-300 ${
                isScrolled
                  ? "text-red-900 text-lg"
                  : "text-red-950 font-bold text-xl"
              }`}
            ></span>
          </div>
          <nav className="hidden md:flex space-x-8 mr-40">
            <button
              onClick={() => scrollToSection("home")}
              className={`font-medium hover:text-red-950 hover:font-semibold transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`font-medium hover:text-red-950 hover:font-semibold transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className={`font-medium hover:text-red-950 hover:font-semibold transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("eligibility")}
              className={`font-medium hover:text-red-950 hover:font-semibold transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Eligibility
            </button>
            <button
              onClick={() => scrollToSection("faqs")}
              className={`font-medium hover:text-red-950 hover:font-semibold transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              FAQs
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
