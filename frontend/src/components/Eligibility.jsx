import CheckList from "../assets/CheckList.png";

const Eligibility = ({ scrollToSection }) => {
  return (
    <section id="eligibility" className="py-20 bg-red-950">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src={CheckList}
              alt="Person using mobile device"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-white">
            <h2 className="text-4xl text-red-500 font-semibold mb-8">
              Eligibility criteria
            </h2>
            <ul className="space-y-4 text-lg mb-8">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-4"></div>
                Participants are 18 years or older
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-4"></div>
                Are current residents of the United States
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-4"></div>
                Must speak English
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-4"></div>
                Self-diagnosed for depression
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-4"></div>
                Own a smartphone (iOS 15/Android 11 or higher)
              </li>
            </ul>
            <button
              onClick={() => scrollToSection("register")}
              className="bg-red-500 hover:bg-red-950 hover:text-white text-red-950 px-8 py-3 rounded-full font-bold transition-colors"
            >
              JOIN THE STUDY TODAY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
