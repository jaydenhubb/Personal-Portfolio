import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#E25822]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Jeremiah Ojo
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#b5b6b9]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#505154] py-4 max-w-[700px]">
          specialized in building exceptional digital experiences. I am
          currently focused on building responsive full-stack web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#E25822] duration-300 hover:border-[#E25822] rounded-md">
            <Link to="projects" smooth={true} duration={500}>
              See my work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
