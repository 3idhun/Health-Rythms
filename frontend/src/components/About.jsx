import Logo from "../assets/Logo.png";
import PhoneImg from "../assets/PhoneImg.png";
import Round_the_clock_monitoring_logo from "../assets/Round_the_clock_monitoring_logo.png";
import Regular_check_ins_via_the_app_logo from "../assets/Regular_check-ins_via_the_app_logo.png";
import Weekly_surveys_and_checks_logo from "../assets/Weekly_surveys_and_checks_logo.png";
import Available_on_all_platforms_logo from "../assets/Available_on_all_platforms_logo.png";
import Medical_grade_encryption_logo from "../assets/Medical_grade_encryption_logo.png";
import Personalized_results_logo from "../assets/Personalized_results_logo.png";

const About = ({ scrollToSection }) => {
  return (
    <section id="about" className="py-10 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-20 h-20 rounded-full flex items-center justify-center ml-10 mb-3">
              <div>
                <img src={Logo} alt="Logo" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 ml-15">
              What's the Health Rhythms study?
            </h2>
            <p className="text-gray-700 font-semibold text-lg leading-relaxed mb-8 ml-15">
              The Health Rhythms study is designed to monitor participants and
              establish a baseline for mental health. Therapy is not a complete
              answer, and its monitoring can be sporadic. Health Rhythms is a
              way to keep track of factors that impact mental health, and to
              create a new way to diagnose and aid people with depression, and
              other ailments.
            </p>

            <div id="benefits" className="mb-8 ml-10">
              <h3 className="text-2xl font-bold text-red-500 mb-8 ml-5">
                The Benefits of Participating
              </h3>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src={Round_the_clock_monitoring_logo}
                      alt="Round-the-clock monitoring icon"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Round-the-clock monitoring
                  </h4>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src={Regular_check_ins_via_the_app_logo}
                      alt="Regular check-ins icon"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Regular check-ins via the app
                  </h4>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src={Weekly_surveys_and_checks_logo}
                      alt="Weekly surveys and checks icon"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Weekly surveys and checks
                  </h4>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src={Available_on_all_platforms_logo}
                      alt="All platforms icon"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Available on all mobile platforms
                  </h4>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src={Medical_grade_encryption_logo}
                      alt="Medical-grade encryption icon"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Medical-grade encryption
                  </h4>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src={Personalized_results_logo}
                      alt="Personalized results icon"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Personalized results
                  </h4>
                </div>
              </div>
            </div>

            <button
              onClick={() => scrollToSection("register")}
              className="bg-red-500 hover:bg-red-600 text-white ml-12 px-8 py-3 rounded-full font-semibold transition-colors"
            >
              JOIN THE STUDY TODAY
            </button>
          </div>

          <div className="flex justify-center">
            <div className="img">
              <img
                src={PhoneImg}
                alt="Mobile Interface"
                className="w-85 h-140 ml-10 rounded-2xl"
              />
              <div className="absolute inset-0 bg-opacity-90 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
