import "react-bootstrap";
import LearnMore from "../pages/LearnMore";
import AboutUs from "./About-Us";
import LogoCard from "./LogoCard";
import TeamMembers2 from "./TeamMembers2";
import WhyTAPCard from "./WhyTAPCard";
import backgroundIMG from "./bagrand.jpg";

export default function WelcomePage() {
  const background={
    backgroundImage: `url(${backgroundIMG})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    overflowx:'hidden',
  }

  return (
    <div>
    <section className="text-white">
    <div className="text-white" style={{position: "absolute", top: "20px", left: "20px", padding: "0px" }}>
        <LogoCard />
      </div>
      <div className="mx-auto px-4 py-32 lg:flex lg:h-screen lg:items-center" style={background}>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Friendships Made Easy.
            <span className="sm:block text-2xl"> Lasting connections in the palm of your hand. </span>
          </h1>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="font-bold block w-full rounded border border-red-600 bg-red-600 px-12 py-3 text-sm text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto no-underline"
                href="login"
              >
                Login
              </a>

              <a
                className="font-bold block w-full rounded border border-red-600 px-12 py-3 text-sm text-white hover:bg-red-600 focus:outline-none focus:ring active:bg-red-500 sm:w-auto no-underline"
                href="#section2"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div
        style={{ padding: "150px" }}
        className="bg-gradient-to-t bg-gray-900 via-gray-850 from-gray-800"
      >
        <LearnMore />
      </div>
        <div className="bg-gradient-to-t bg-gray-800 via-gray-750 from-gray-700">
          <WhyTAPCard />
        </div>
      </section>
      <div
        style={{ padding: "150px" }}
        className="bg-gradient-to-t bg-gray-700 via-gray-600 from-gray-500"
      >
        <AboutUs />
      </div>
      <div
        className="bg-gradient-to-t bg-gray-500 via-gray-400 from-gray-300"
      >
        <TeamMembers2 />
      </div>
    </div>
  );
}
