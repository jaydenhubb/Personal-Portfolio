import Finaljo from "../assets/finaljo.jpg";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs"
import { useState } from "react";
import {Link} from 'react-scroll'
import Resume from "../assets/cv.pdf";

const Navbar = () => {
  const [ham, setHam] = useState(false);

  const handleHam = () => setHam(!ham);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Finaljo} alt="initials" style={{ width: "80px" }} />
      </div>
      <ul className="hidden md:flex ">
        <li className="hover:text-[#E25822] duration-200">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-[#E25822] duration-200">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-[#E25822] duration-200">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-[#E25822] duration-200">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="hover:text-[#E25822] duration-200">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Ham */}
      <div onClick={handleHam} className="md:hidden z-10">
        {!ham ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}

      <ul
        className={
          !ham
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleHam} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleHam} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleHam} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleHam} to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleHam} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-r-full">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/jeremiah-ojo-20a8a3213?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5Z1j1BfBRvWk82%2B5zcg8cw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-r-full">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/jaydenhubb"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded-r-full">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={Resume}
              download
            >
              Get Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
