import Html from "../assets/html.png";
import Javascript from "../assets/javascript.png";
import Css from "../assets/css.png";
import Reacts from "../assets/reacts.png";
import Mongo from "../assets/mongo.png";
import Tailwind from "../assets/tailwind.png";
import Nodejs from "../assets/node.png";
import Typescript from "../assets/Typst.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f]  text-gray-300  w-full h-screen pt-24">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#E25822]">
            Skills
          </p>
          <p className="py-2">These are the technologies i have worked with.</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Html} alt="html icon" />
            <p className="my-4">HTML5</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Css} alt="html icon" />
            <p className="my-4">Css3</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="html icon" />
            <p className="my-4">Tailwindcss</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Javascript} alt="html icon" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Reacts} alt="html icon" />
            <p className="my-4">Reactjs</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Nodejs} alt="html icon" />
            <p className="my-4">Nodejs</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="html icon" />
            <p className="my-4">MongoDb</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Typescript} alt="html icon" />
            <p className="my-4">Typescript</p>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Skills;
