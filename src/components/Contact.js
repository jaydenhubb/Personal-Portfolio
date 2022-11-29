import { FaLinkedin, FaGithub } from "react-icons/fa";
import Resume from "../assets/cv.pdf"

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4 mt-32"
    >
      <form
        method="POST"
        action="https://getform.io/f/aee1609b-5de6-42bf-97f1-d2f6d45943e2"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#E25822] text-gray-300 sm:text-center">
            Contact
          </p>
          <p className="text-gray-300 pt-4">
            Kindly fill the form below if you would like to work with me.
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          placeholder="Message"
          rows="10"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#E25822] hover:border-[#E25822] px-4 py-3 my-8 mx-auto flex items-center rounded-md">
          Let's collaborate
        </button>
        <div className="flex justify-evenly items-center pb-8 lg:hidden">
          <a
            className="bg-gray-500 rounded-md hover:bg-slate-100"
            href="https://github.com/jaydenhubb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>

          <a
            className="bg-blue-600 rounded-md hover:bg-blue-300"
            href="https://www.linkedin.com/in/jeremiah-ojo-20a8a3213?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5Z1j1BfBRvWk82%2B5zcg8cw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a href={Resume} download className="text-gray-300" >download CV</a>
        </div>
        <p className="flex justify-evenly items-center text-gray-300">
          Email: ojoj665@gmail.com
        </p>
      </form>
    </div>
  );
};

export default Contact;
