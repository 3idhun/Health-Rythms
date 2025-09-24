import sitting from "../assets/sitting.jpg";

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500"></div>
      <div className="relative flex items-center min-h-screen">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-red-950">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 ml-15 leading-tight">
                A new avenue of mental health monitoring
              </h1>
              <p className="text-xl mb-8 ml-15 font-semibold opacity-90">
                Join the Health Rhythms Study
              </p>
              <button
                onClick={() => scrollToSection("register")}
                className="btn bg-red-900 hover:bg-amber-50 hover:text-red-950 text-white px-8 py-4 ml-15 rounded-full font-semibold text-lg transition-colors"
              >
                JOIN NOW
              </button>
            </div>
            <div className="relative z-10">
              <img
                src={sitting}
                className="w-300 h-125 rounded-lg shadow-2xl"
                alt="Person"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
